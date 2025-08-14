<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Event Calendar</title>
  <style>
    body { font-family: system-ui, sans-serif; background:#0b1020; color:#e7ecff; display:grid; place-content:center; min-height:100svh; padding:24px; }
    .calendar { width:min(100%,920px); background:#121935; border-radius:18px; padding:18px; position:relative; }
    .cal-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; }
    .cal-header .cal-title { font-size:clamp(20px,2.4vw,28px); font-weight:700; }
    .cal-controls button { padding:8px 12px; border-radius:12px; border:none; cursor:pointer; background:rgba(255,255,255,0.06); color:#e7ecff; font-weight:600; transition:0.2s; }
    .cal-controls button:hover { background:rgba(255,255,255,0.1); }
    .grid { display:grid; grid-template-columns:repeat(7,1fr); gap:10px; }
    .dow { color:#96a0c3; font-size:12px; text-transform:uppercase; letter-spacing:0.12em; }
    .cell { aspect-ratio:1/1; border-radius:16px; padding:10px; position:relative; background:rgba(255,255,255,0.02); cursor:pointer; transition:0.2s; }
    .cell:hover { background:rgba(255,255,255,0.04); transform:translateY(-1px); }
    .cell.out-month { opacity:0.35; }
    .day-num { font-weight:700; font-size:14px; }
    .dot { position:absolute; right:10px; bottom:10px; width:8px; height:8px; border-radius:999px; background:linear-gradient(120deg,#7aa2ff,#9ef0f0); box-shadow:0 0 0 3px rgba(122,162,255,0.35); }
    .today { outline:2px solid #7aa2ff; outline-offset:2px; box-shadow:0 0 0 5px rgba(122,162,255,0.35); }
    .popover { position:absolute; min-width:260px; max-width:min(360px,90vw); background:#0f1633; border-radius:16px; padding:12px 12px 8px; box-shadow:0 20px 40px rgba(0,0,0,0.45); display:none; pointer-events:none; z-index:50; font-size:14px; }
    .popover h3 { margin:0 0 6px; font-size:16px; }
    .event-item { padding:8px; border-radius:10px; border:1px solid rgba(255,255,255,0.08); margin-bottom:8px; }
    .event-item small { color:#96a0c3; display:block; margin-top:4px; }
  </style>
</head>
<body>
  <div class="calendar" id="calendar" aria-label="Event Calendar">
    <div class="cal-header">
      <div class="cal-title" id="calTitle"></div>
      <div class="cal-controls">
        <button id="prevBtn" aria-label="Previous Month">◀</button>
        <button id="todayBtn" aria-label="Jump to Today">Today</button>
        <button id="nextBtn" aria-label="Next Month">▶</button>
      </div>
    </div>
    <div class="grid" id="dow"></div>
    <div class="grid" id="grid"></div>
    <div class="popover" id="popover"></div>
  </div>

  <script>
    const EVENTS = {
      "2025-08-16": [{ title: "Haymarket Farmers Market – Henna Booth", time: "8:00 AM – 12:30 PM", location: "Haymarket Square", description: "Walk-up designs, quick cones, festival florals." }],
      "2025-08-23": [{ title: "Harvest Moon Festival Preview", time: "10:00 AM – 1:00 PM", location: "Community Center Plaza", description: "Mini mehndi specials + booking info." },
                      { title: "Private Bridal Trial", time: "2:30 PM", location: "Studio", description: "By appointment only." }],
      "2025-09-07": [{ title: "Haymarket Pop‑Up", time: "9:00 AM – 1:00 PM", location: "Haymarket", description: "Floral + mandala sets." }]
    };

    const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const DOW = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

    const $title = document.getElementById('calTitle');
    const $grid = document.getElementById('grid');
    const $dow = document.getElementById('dow');
    const $popover = document.getElementById('popover');
    const $cal = document.getElementById('calendar');
    let viewDate = new Date();

    function buildDOW() {
      $dow.innerHTML='';
      for(const name of DOW){ const el=document.createElement('div'); el.className='dow'; el.textContent=name; $dow.appendChild(el); }
    }

    function pad(n){ return String(n).padStart(2,'0'); }
    function keyFor(y,m,d){ return `${y}-${pad(m+1)}-${pad(d)}`; }

    function clearPopover(){ $popover.style.display='none'; $popover.innerHTML=''; }

    function showPopover(cell, y, m, d){
      const list = EVENTS[keyFor(y,m,d)] || [];
      if(!list.length) return;
      let html = list.map(ev=>`<div class="event-item"><strong>${ev.title}</strong>${ev.time?'<small>🕒 '+ev.time+'</small>':''}${ev.location?'<small>📍 '+ev.location+'</small>':''}${ev.description?'<small>📝 '+ev.description+'</small>':''}</div>`).join('');
      html = `<h3>${MONTHS[m]} ${d}, ${y}</h3>` + html;
      $popover.innerHTML = html;
      const rect = cell.getBoundingClientRect();
      const calRect = $cal.getBoundingClientRect();
      $popover.style.top = rect.bottom - calRect.top + 8 + 'px';
      $popover.style.left = rect.left - calRect.left + 'px';
      $popover.style.display='block';
    }

    function renderCalendar(date){
      $grid.innerHTML='';
      const y=date.getFullYear(), m=date.getMonth();
      $title.textContent=`${MONTHS[m]} ${y}`;
      let firstDay = new Date(y,m,1).getDay(); // 0=Sun
      firstDay = firstDay === 0 ? 6 : firstDay-1; // shift Sunday to end for Monday-first
      const daysInMonth = new Date(y,m+1,0).getDate();
      const daysInPrev = new Date(y,m,0).getDate();

      for(let i=0;i<firstDay;i++){ const cell=document.createElement('div'); cell.className='cell out-month'; cell.innerHTML=`<div class="day-num">${daysInPrev-firstDay+i+1}</div>`; $grid.appendChild(cell); }

      const today = new Date();
      const isToday = (dd)=> dd===today.getDate() && m===today.getMonth() && y===today.getFullYear();

      for(let d=1;d<=daysInMonth;d++){
        const cell=document.createElement('div'); cell.className='cell'; cell.innerHTML=`<div class="day-num">${d}</div>`;
        if(isToday(d)) cell.classList.add('today');
        const key = keyFor(y,m,d);
        if(EVENTS[key]){
          const dot=document.createElement('span'); dot.className='dot'; cell.appendChild(dot);
          cell.addEventListener('mouseenter', ()=>showPopover(cell,y,m,d));
          cell.addEventListener('mouseleave', clearPopover);
        }
        $grid.appendChild(cell);
      }

      const totalCells = firstDay + daysInMonth;
      const trailing = (7 - (totalCells % 7)) % 7;
      for(let i=1;i<=trailing;i++){ const cell=document.createElement('div'); cell.className='cell out-month'; cell.innerHTML=`<div class="day-num">${i}</div>`; $grid.appendChild(cell); }
      clearPopover();
    }

    document.getElementById('prevBtn').addEventListener('click',()=>{ viewDate.setMonth(viewDate.getMonth()-1); renderCalendar(viewDate); });
    document.getElementById('nextBtn').addEventListener('click',()=>{ viewDate.setMonth(viewDate.getMonth()+1); renderCalendar(viewDate); });
    document.getElementById('todayBtn').addEventListener('click',()=>{ viewDate=new Date(); renderCalendar(viewDate); });

    buildDOW(); renderCalendar(viewDate);
  </script>
</body>
</html>
