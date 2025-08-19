import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const calendarUrl = 'https://calendar.google.com/calendar/ical/swathi%40hennakala.com/public/basic.ics'
    
    const response = await fetch(calendarUrl)
    
    if (!response.ok) {
      throw new Error(`Failed to fetch calendar: ${response.status}`)
    }
    
    const icalData = await response.text()
    
    return new Response(
      JSON.stringify({ success: true, data: icalData }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})