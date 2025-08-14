import React, { useState, useEffect, useRef } from 'react';

interface Event {
  title: string;
  time: string;
  location: string;
  description: string;
}

const EventCalendar: React.FC = () => {
  const [viewDate, setViewDate] = useState(new Date());
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [popoverEvents, setPopoverEvents] = useState<Event[]>([]);
  const [popoverPosition, setPopoverPosition] = useState({ top: 0, left: 0 });
  const [popoverDate, setPopoverDate] = useState('');
  const calendarRef = useRef<HTMLDivElement>(null);

  const EVENTS: Record<string, Event[]> = {
    "2025-08-16": [{ title: "Haymarket Farmers Market – Henna Booth", time: "8:00 AM – 12:30 PM", location: "Haymarket Square", description: "Walk-up designs, quick cones, festival florals." }],
    "2025-08-23": [
      { title: "Harvest Moon Festival Preview", time: "10:00 AM – 1:00 PM", location: "Community Center Plaza", description: "Mini mehndi specials + booking info." },
      { title: "Private Bridal Trial", time: "2:30 PM", location: "Studio", description: "By appointment only." }
    ],
    "2025-09-07": [{ title: "Haymarket Pop‑Up", time: "9:00 AM – 1:00 PM", location: "Haymarket", description: "Floral + mandala sets." }]
  };

  const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const DOW = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

  const pad = (n: number): string => String(n).padStart(2, '0');
  const keyFor = (y: number, m: number, d: number): string => `${y}-${pad(m + 1)}-${pad(d)}`;

  const showPopover = (cell: HTMLElement, y: number, m: number, d: number) => {
    const eventKey = keyFor(y, m, d);
    const events = EVENTS[eventKey] || [];
    if (!events.length) return;

    setPopoverEvents(events);
    setPopoverDate(`${MONTHS[m]} ${d}, ${y}`);

    const rect = cell.getBoundingClientRect();
    const calRect = calendarRef.current?.getBoundingClientRect();
    if (calRect) {
      setPopoverPosition({
        top: rect.bottom - calRect.top + 8,
        left: rect.left - calRect.left
      });
    }
    setPopoverVisible(true);
  };

  const clearPopover = () => {
    setPopoverVisible(false);
    setPopoverEvents([]);
  };

  const renderCalendar = () => {
    const y = viewDate.getFullYear();
    const m = viewDate.getMonth();
    let firstDay = new Date(y, m, 1).getDay();
    firstDay = firstDay === 0 ? 6 : firstDay - 1; // shift Sunday to end for Monday-first
    const daysInMonth = new Date(y, m + 1, 0).getDate();
    const daysInPrev = new Date(y, m, 0).getDate();

    const cells = [];
    
    // Previous month days
    for (let i = 0; i < firstDay; i++) {
      cells.push(
        <div key={`prev-${i}`} className="cell out-month">
          <div className="day-num">{daysInPrev - firstDay + i + 1}</div>
        </div>
      );
    }

    const today = new Date();
    const isToday = (day: number) => 
      day === today.getDate() && m === today.getMonth() && y === today.getFullYear();

    // Current month days
    for (let d = 1; d <= daysInMonth; d++) {
      const eventKey = keyFor(y, m, d);
      const hasEvents = EVENTS[eventKey];
      const todayClass = isToday(d) ? 'today' : '';
      
      cells.push(
        <div 
          key={d} 
          className={`cell ${todayClass}`}
          onMouseEnter={(e) => hasEvents && showPopover(e.currentTarget, y, m, d)}
          onMouseLeave={clearPopover}
        >
          <div className="day-num">{d}</div>
          {hasEvents && <span className="dot"></span>}
        </div>
      );
    }

    // Next month days
    const totalCells = firstDay + daysInMonth;
    const trailing = (7 - (totalCells % 7)) % 7;
    for (let i = 1; i <= trailing; i++) {
      cells.push(
        <div key={`next-${i}`} className="cell out-month">
          <div className="day-num">{i}</div>
        </div>
      );
    }

    return cells;
  };

  const prevMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
    clearPopover();
  };

  const nextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
    clearPopover();
  };

  const goToToday = () => {
    setViewDate(new Date());
    clearPopover();
  };

  return (
    <div>
      <style>{`
        .calendar { 
          width: min(100%, 920px); 
          background: hsl(var(--card)); 
          border-radius: 18px; 
          padding: 18px; 
          position: relative; 
          margin: 0 auto;
        }
        .cal-header { 
          display: flex; 
          justify-content: space-between; 
          align-items: center; 
          margin-bottom: 10px; 
        }
        .cal-header .cal-title { 
          font-size: clamp(20px, 2.4vw, 28px); 
          font-weight: 700; 
          color: hsl(var(--foreground));
        }
        .cal-controls button { 
          padding: 8px 12px; 
          border-radius: 12px; 
          border: none; 
          cursor: pointer; 
          background: hsl(var(--secondary)); 
          color: hsl(var(--secondary-foreground)); 
          font-weight: 600; 
          transition: 0.2s; 
          margin: 0 2px;
        }
        .cal-controls button:hover { 
          background: hsl(var(--secondary) / 0.8); 
        }
        .grid { 
          display: grid; 
          grid-template-columns: repeat(7, 1fr); 
          gap: 10px; 
        }
        .dow { 
          color: hsl(var(--muted-foreground)); 
          font-size: 12px; 
          text-transform: uppercase; 
          letter-spacing: 0.12em; 
          text-align: center;
          padding: 10px;
        }
        .cell { 
          aspect-ratio: 1/1; 
          border-radius: 16px; 
          padding: 10px; 
          position: relative; 
          background: hsl(var(--muted) / 0.3); 
          cursor: pointer; 
          transition: 0.2s; 
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
        }
        .cell:hover { 
          background: hsl(var(--muted) / 0.5); 
          transform: translateY(-1px); 
        }
        .cell.out-month { 
          opacity: 0.35; 
        }
        .day-num { 
          font-weight: 700; 
          font-size: 14px; 
          color: hsl(var(--foreground));
        }
        .dot { 
          position: absolute; 
          right: 10px; 
          bottom: 10px; 
          width: 8px; 
          height: 8px; 
          border-radius: 999px; 
          background: hsl(var(--primary)); 
          box-shadow: 0 0 0 3px hsl(var(--primary) / 0.35); 
        }
        .today { 
          outline: 2px solid hsl(var(--primary)); 
          outline-offset: 2px; 
          box-shadow: 0 0 0 5px hsl(var(--primary) / 0.35); 
        }
        .popover { 
          position: absolute; 
          min-width: 260px; 
          max-width: min(360px, 90vw); 
          background: hsl(var(--popover)); 
          border: 1px solid hsl(var(--border));
          border-radius: 16px; 
          padding: 12px 12px 8px; 
          box-shadow: 0 20px 40px hsl(var(--foreground) / 0.15); 
          z-index: 50; 
          font-size: 14px; 
          color: hsl(var(--popover-foreground));
        }
        .popover h3 { 
          margin: 0 0 6px; 
          font-size: 16px; 
          color: hsl(var(--foreground));
        }
        .event-item { 
          padding: 8px; 
          border-radius: 10px; 
          border: 1px solid hsl(var(--border)); 
          margin-bottom: 8px; 
          background: hsl(var(--card));
        }
        .event-item small { 
          color: hsl(var(--muted-foreground)); 
          display: block; 
          margin-top: 4px; 
        }
        .event-item strong {
          color: hsl(var(--foreground));
        }
      `}</style>
      
      <div className="calendar" ref={calendarRef} aria-label="Event Calendar">
        <div className="cal-header">
          <div className="cal-title">
            {MONTHS[viewDate.getMonth()]} {viewDate.getFullYear()}
          </div>
          <div className="cal-controls">
            <button onClick={prevMonth} aria-label="Previous Month">◀</button>
            <button onClick={goToToday} aria-label="Jump to Today">Today</button>
            <button onClick={nextMonth} aria-label="Next Month">▶</button>
          </div>
        </div>
        
        <div className="grid">
          {DOW.map(day => (
            <div key={day} className="dow">{day}</div>
          ))}
        </div>
        
        <div className="grid">
          {renderCalendar()}
        </div>
        
        {popoverVisible && (
          <div 
            className="popover" 
            style={{ 
              top: popoverPosition.top + 'px', 
              left: popoverPosition.left + 'px',
              display: 'block'
            }}
          >
            <h3>{popoverDate}</h3>
            {popoverEvents.map((event, index) => (
              <div key={index} className="event-item">
                <strong>{event.title}</strong>
                {event.time && <small>🕒 {event.time}</small>}
                {event.location && <small>📍 {event.location}</small>}
                {event.description && <small>📝 {event.description}</small>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCalendar;