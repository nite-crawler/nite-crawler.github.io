#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function fetchCalendarEvents() {
  const API_KEY = process.env.GOOGLE_CALENDAR_API_KEY;
  const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID;
  
  if (!API_KEY || !CALENDAR_ID) {
    console.error('Missing required environment variables: GOOGLE_CALENDAR_API_KEY and/or GOOGLE_CALENDAR_ID');
    process.exit(1);
  }

  try {
    // Get events for the next 6 months
    const timeMin = new Date().toISOString();
    const timeMax = new Date(Date.now() + 6 * 30 * 24 * 60 * 60 * 1000).toISOString();
    
    const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events?key=${API_KEY}&timeMin=${timeMin}&timeMax=${timeMax}&singleEvents=true&orderBy=startTime`;
    
    console.log('Fetching calendar events...');
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Google Calendar API error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    const events = data.items || [];
    
    // Debug logging to see what we're getting from Google Calendar
    console.log('API Response sample:', JSON.stringify(events.slice(0, 2), null, 2));
    
    // Transform events to our format
    const calendarEvents = {};
    
    events.forEach(event => {
      // Debug each event to see what fields are available
      console.log('Processing event:', {
        summary: event.summary,
        description: event.description,
        location: event.location,
        allFields: Object.keys(event)
      });
      if (event.start && event.start.date) {
        // All-day event
        const date = new Date(event.start.date);
        const key = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
        
        if (!calendarEvents[key]) {
          calendarEvents[key] = [];
        }
        
        calendarEvents[key].push({
          title: event.summary || 'No Title',
          description: event.description || '',
          location: event.location || '',
          isAllDay: true
        });
      } else if (event.start && event.start.dateTime) {
        // Timed event
        const date = new Date(event.start.dateTime);
        const key = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
        
        if (!calendarEvents[key]) {
          calendarEvents[key] = [];
        }
        
        calendarEvents[key].push({
          title: event.summary || 'No Title',
          description: event.description || '',
          location: event.location || '',
          startTime: event.start.dateTime,
          endTime: event.end.dateTime,
          isAllDay: false
        });
      }
    });
    
    // Write to src/data/calendar-events.json
    const dataDir = path.join(__dirname, '..', 'src', 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    const outputPath = path.join(dataDir, 'calendar-events.json');
    fs.writeFileSync(outputPath, JSON.stringify(calendarEvents, null, 2));
    
    console.log(`Successfully fetched ${events.length} events and saved to ${outputPath}`);
    console.log(`Events saved for ${Object.keys(calendarEvents).length} days`);
    
  } catch (error) {
    console.error('Error fetching calendar events:', error);
    process.exit(1);
  }
}

fetchCalendarEvents();