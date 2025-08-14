import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Users } from "lucide-react";

interface Event {
  title: string;
  time: string;
  location: string;
  description: string;
}

const Events = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [viewDate, setViewDate] = useState(new Date());
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [popoverEvents, setPopoverEvents] = useState<Event[]>([]);
  const [popoverPosition, setPopoverPosition] = useState({ top: 0, left: 0 });
  const [popoverDate, setPopoverDate] = useState('');
  const calendarRef = useRef<HTMLDivElement>(null);

  const events = [
    {
      id: 1,
      title: "Henna Kala @Haymarket",
      date: new Date(2025, 7, 16), // August 16, 2025
      time: "10:00 AM - 12:30 PM",
      location: "Ten Thousand Villages, 140 N 8th St #125, Lincoln, NE 68508, United States.",
      capacity: "Walk-in",
      description: "Fresh and beautiful henna designs while you shop at Haymarket Farmer's Market!",
      category: "Pop-up Henna Booth"
    },
    {
      id: 2,
      title: "2025 Harvest Moon Festival",
      date: new Date(2025, 9, 5), // October 5, 2025
      time: "4:00 PM - 7:00 PM",
      location: "Antelope Park Bandshell, 1630 Memorial Dr, Lincoln, NE 68502",
      capacity: "Walk-in",
      description: "Create beautiful mandala designs inspired by traditional henna patterns.",
      category: "Public Event "
    },
  /*  {
     id: 3,
     title: "Kids Henna Fun Day",
     date: new Date(2025, 7, 29), // August 29, 2025
     time: "11:00 AM - 3:00 PM",
     location: "Garden Pavilion",
     capacity: "15 children",
     description: "Child-friendly henna designs and cultural storytelling.",
     price: "$35",
     category: "Kids Event"
    } */
  ];

  const selectedDateEvents = events.filter(event => 
    selectedDate && event.date.toDateString() === selectedDate.toDateString()
  );

  const eventDates = events.map(event => event.date);

  // Calendar functionality
  const CALENDAR_EVENTS: Record<string, Event[]> = {
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
    const events = CALENDAR_EVENTS[eventKey] || [];
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
      const hasEvents = CALENDAR_EVENTS[eventKey];
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
    <section className="min-h-screen py-20 px-6 bg-gradient-subtle">
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
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-seasons text-gallery-title mb-6 uppercase tracking-wide">
            Events & Workshops
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join us for immersive henna experiences, traditional art workshops, and cultural celebrations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Event Calendar Section */}
          <div className="relative">
            <h3 className="text-2xl font-seasons text-gallery-title mb-6">Event Calendar</h3>
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

          {/* Events List */}
          <div className="space-y-6">
            {selectedDate && selectedDateEvents.length > 0 ? (
              <>
                <h3 className="text-2xl font-seasons text-gallery-title mb-6">
                  Events on {selectedDate.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </h3>
                {selectedDateEvents.map((event) => (
                  <Card key={event.id} className="bg-card/90 backdrop-blur-sm border-border/50 shadow-float hover:shadow-float-hover transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-seasons text-gallery-title">{event.title}</h4>
                        <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                          {event.category}
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {event.description}
                      </p>
                      
                        <div className="space-y-2 mb-6">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                            {event.time}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                            {event.location}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Users className="w-4 h-4 text-primary flex-shrink-0" />
                            {event.capacity}
                          </div>
                        </div>
                      
                      <div className="flex justify-end items-center">
                        <Button variant="warm" size="lg">
                          Book Event
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </>
            ) : (
              <div>
                <h3 className="text-2xl font-seasons text-gallery-title mb-6">All Upcoming Events</h3>
                <div className="space-y-6">
                  {events.map((event) => (
                    <Card key={event.id} className="bg-card/90 backdrop-blur-sm border-border/50 shadow-float hover:shadow-float-hover transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="text-xl font-seasons text-gallery-title mb-2">{event.title}</h4>
                            <p className="text-primary font-medium">
                              {event.date.toLocaleDateString('en-US', { 
                                weekday: 'long', 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                              })}
                            </p>
                          </div>
                          <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                            {event.category}
                          </Badge>
                        </div>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {event.description}
                        </p>
                        
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                              {event.time}
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                              {event.location}
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-primary flex-shrink-0" />
                              {event.capacity}
                            </div>
                          </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="bg-event-cta p-8 text-white border-0">
            <h3 className="text-3xl font-seasons mb-4">Want to Host a Private Event?</h3>
            <p className="text-lg mb-6 opacity-90">
              Create unforgettable memories with custom henna experiences for your special occasions
            </p>
            <Button variant="outline" size="lg" className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-event-cta">
              Contact Us for Private Events
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Events;
