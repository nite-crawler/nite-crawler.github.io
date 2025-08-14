<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Event Calendar</title>
<style>
body { font-family: Arial, sans-serif; background:#f5f5f5; display:flex; justify-content:center; padding:20px; }
.calendar { width: 100%; max-width: 700px; background:#fff; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,0.15); padding:20px; }
.cal-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; }
.cal-header button { padding:6px 12px; border:none; background:#007bff; color:#fff; border-radius:6px; cursor:pointer; }
.cal-grid { display:grid; grid-template-columns:repeat(7,1fr); gap:5px; }
.day { background:#e9ecef; padding:10px; border-radius:6px; position:relative; cursor:pointer; }
.day.today { border:2px solid #007bff; }
.dot { width:6px; height:6px; border-radius:50%; background:red; position:absolute; bottom:5px; right:5px; }
.popover { position:absolute; background:#fff; border:1px solid #ccc; border-radius:8px; padding:10px; z-index:100; box-shadow:0 4px 12px rgba(0,0,0,0.2); max-width:250px; }
.popover h4 { margin:0 0 6px; font-size:16px; }
.popover small { display:block; color:#555; margin-top:2px; }
</style>
</head>
<body>

<div class="calendar">
  <div class="cal-header">
    <button id="prev">◀</button>
    <span id="monthYear"></span>
    <button id="next">▶</button>
  </div>
  <div class="cal-grid" id="calendarGrid"></div>
</div>

<script>
const EVENTS = {
  "2025-08-16": [{ title: "Haymarket Farmers Market", time: "8:00-12:30", location: "Haymarket Square", description: "Henna booth available." }],
  "2025-08-23": [{ title: "Harvest Moon Festival Preview", time: "10:00-13:00", location: "Community Plaza", description: "Mini mehndi specials." }]
};

const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const calendarGrid = document.getElementById('calendarGrid');
const monthYear = document.getElementById('monthYear');
let current = new Date();

function renderCalendar(date){
  calendarGrid.innerHTML = '';
  const y = date.getFullYear(), m = date.getMonth();
  monthYear.textContent = `${monthNames[m]} ${y}`;
  const firstDay = new Date(y,m,1).getDay();
  const lastDate = new Date(y,m+1,0).getDate();

  // Previous month's trailing days
  const prevLastDate = new Date(y,m,0).getDate();
  for(let i=firstDay-1;i>=0;i--){
    const dayEl = document.createElement('div');
    dayEl.className='day'; dayEl.style.opacity='0.4';
    dayEl.textContent=prevLastDate-i;
    calendarGrid.appendChild(dayEl);
  }

  // Current month days
  for(let d=1;d<=lastDate;d++){
    const dayEl = document.createElement('div');
    dayEl.className='day';
    dayEl.textContent=d;
    const key = `${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    if(EVENTS[key]) {
      const dot = document.createElement('span'); dot.className='dot'; dayEl.appendChild(dot);
      dayEl.addEventListener('click', (e)=>showPopover(e,EVENTS[key]));
    }
    if(new Date().toDateString() === new Date(y,m,d).toDateString()) dayEl.classList.add('today');
    calendarGrid.appendChild(dayEl);
  }

  // Trailing next month days
  const totalCells = firstDay + lastDate;
  const nextDays = (7 - totalCells%7)%7;
  for(let i=1;i<=nextDays;i++){
    const dayEl = document.createElement('div');
    dayEl.className='day'; dayEl.style.opacity='0.4';
    dayEl.textContent=i;
    calendarGrid.appendChild(dayEl);
  }
}

function showPopover(e, events){
  removePopover();
  const pop = document.createElement('div'); pop.className='popover';
  events.forEach(ev=>{
    pop.innerHTML+=`<h4>${ev.title}</h4>${ev.time?'<small>Time: '+ev.time+'</small>':''}${ev.location?'<small>Location: '+ev.location+'</small>':''}${ev.description?'<small>'+ev.description+'</small>':''}`;
  });
  document.body.appendChild(pop);
  const rect = e.target.getBoundingClientRect();
  pop.style.top = rect.bottom + window.scrollY + 'px';
  pop.style.left = rect.left + window.scrollX + 'px';
  document.addEventListener('click', clickOutside);
}

function removePopover(){ 
  document.querySelectorAll('.popover').forEach(p=>p.remove());
  document.removeEventListener('click', clickOutside);
}

function clickOutside(e){ if(!e.target.classList.contains('day')) removePopover(); }

document.getElementById('prev').addEventListener('click', ()=>{ current.setMonth(current.getMonth()-1); renderCalendar(current); });
document.getElementById('next').addEventListener('click', ()=>{ current.setMonth(current.getMonth()+1); renderCalendar(current); });

renderCalendar(current);
</script>
</body>
</html>
