import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Event {
  title: string;
  time: string;
  location: string;
  description: string;
}

interface EventCalendarProps {
  events?: Record<string, Event[]>;
}

const EventCalendar: React.FC<EventCalendarProps> = ({ events = {} }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [popoverEvents, setPopoverEvents] = useState<Event[]>([]);
  const [popoverPosition, setPopoverPosition] = useState({ top: 0, left: 0 });
  const calendarRef = useRef<HTMLDivElement>(null);

  const defaultEvents = {
    "2025-08-16": [{ 
      title: "Haymarket Farmers Market", 
      time: "8:00-12:30", 
      location: "Haymarket Square", 
      description: "Henna booth available." 
    }],
    "2025-08-23": [{ 
      title: "Harvest Moon Festival Preview", 
      time: "10:00-13:00", 
      location: "Community Plaza", 
      description: "Mini mehndi specials." 
    }]
  };

  const calendarEvents = Object.keys(events).length > 0 ? events : defaultEvents;

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    const prevLastDate = new Date(year, month, 0).getDate();

    const days = [];

    // Previous month's trailing days
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        day: prevLastDate - i,
        isCurrentMonth: false,
        date: new Date(year, month - 1, prevLastDate - i)
      });
    }

    // Current month days
    for (let d = 1; d <= lastDate; d++) {
      days.push({
        day: d,
        isCurrentMonth: true,
        date: new Date(year, month, d)
      });
    }

    // Next month's leading days
    const totalCells = firstDay + lastDate;
    const nextDays = (7 - totalCells % 7) % 7;
    for (let i = 1; i <= nextDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        date: new Date(year, month + 1, i)
      });
    }

    return days;
  };

  const formatDateKey = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const handleDayClick = (date: Date, e: React.MouseEvent) => {
    const dateKey = formatDateKey(date);
    const dayEvents = calendarEvents[dateKey];
    
    if (dayEvents) {
      const rect = (e.target as HTMLElement).getBoundingClientRect();
      setPopoverPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX
      });
      setPopoverEvents(dayEvents);
      setPopoverVisible(true);
    }
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(e.target as Node)) {
        setPopoverVisible(false);
      }
    };

    if (popoverVisible) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [popoverVisible]);

  const days = getDaysInMonth(currentDate);

  return (
    <div ref={calendarRef} className="w-full max-w-2xl mx-auto bg-card rounded-xl shadow-lg p-6 relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <Button variant="outline" size="sm" onClick={handlePrevMonth}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <h3 className="text-xl font-semibold text-foreground">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h3>
        <Button variant="outline" size="sm" onClick={handleNextMonth}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {/* Day headers */}
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="p-2 text-center text-sm font-medium text-muted-foreground">
            {day}
          </div>
        ))}

        {/* Calendar days */}
        {days.map((dayInfo, index) => {
          const dateKey = formatDateKey(dayInfo.date);
          const hasEvents = calendarEvents[dateKey];
          const isCurrentDay = isToday(dayInfo.date);

          return (
            <div
              key={index}
              className={`
                p-2 h-12 relative cursor-pointer rounded-md transition-colors
                ${dayInfo.isCurrentMonth 
                  ? 'bg-muted hover:bg-muted/80' 
                  : 'bg-muted/40 opacity-40'
                }
                ${isCurrentDay ? 'border-2 border-primary' : ''}
              `}
              onClick={(e) => handleDayClick(dayInfo.date, e)}
            >
              <span className="text-sm">{dayInfo.day}</span>
              {hasEvents && (
                <div className="absolute bottom-1 right-1 w-2 h-2 bg-destructive rounded-full"></div>
              )}
            </div>
          );
        })}
      </div>

      {/* Popover */}
      {popoverVisible && (
        <div
          className="absolute z-50 bg-card border border-border rounded-lg p-3 shadow-lg max-w-xs"
          style={{
            top: popoverPosition.top,
            left: popoverPosition.left
          }}
        >
          {popoverEvents.map((event, index) => (
            <div key={index} className="mb-2 last:mb-0">
              <h4 className="font-semibold text-sm text-foreground mb-1">{event.title}</h4>
              {event.time && (
                <p className="text-xs text-muted-foreground">Time: {event.time}</p>
              )}
              {event.location && (
                <p className="text-xs text-muted-foreground">Location: {event.location}</p>
              )}
              {event.description && (
                <p className="text-xs text-muted-foreground mt-1">{event.description}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventCalendar;