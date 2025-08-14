import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Users } from "lucide-react";

const Events = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const events = [
    {
      id: 1,
      title: "Henna Kala @Haymarket",
      date: new Date(2025, 7, 16), // August 15, 2025
      time: "10:00 AM - 12:30 PM",
      location: "Ten Thousand Villages,
        140 N 8th St #125, Lincoln, NE 68508, United States. ",
      description: "Fresh and beautiful henna designs while you shop at Haymarket Farmer's Market!
      price: "Varies",
      category: "Pop-up Henna Session"
    },
    {
      id: 2,
      title: "Mandala Art Session",
      date: new Date(2025, 7, 22), // August 22, 2025
      time: "10:00 AM - 1:00 PM",
      location: "Community Center",
      capacity: "12 participants",
      description: "Create beautiful mandala designs inspired by traditional henna patterns.",
      price: "$65",
      category: "Art Class"
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

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-subtle">
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

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Calendar Section with Mandala Background */}
          <div className="relative h-full">
            {/* Mandala Background Decoration */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="w-full h-full bg-gradient-primary rounded-full transform rotate-12 scale-75 blur-3xl"></div>
            </div>
            
            <Card className="relative z-10 bg-card/90 backdrop-blur-sm border-border/50 shadow-float h-full flex flex-col">
              <CardHeader className="flex-shrink-0">
                <CardTitle className="text-3xl font-seasons text-center text-gallery-title">
                  AUGUST 2025
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 flex-1 flex flex-col justify-center">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="w-full justify-center [&_table]:w-full [&_table]:max-w-full [&_td]:h-12 [&_td]:w-12 [&_th]:h-12 [&_th]:w-12"
                  modifiers={{
                    event: eventDates
                  }}
                  modifiersStyles={{
                    event: {
                      backgroundColor: 'hsl(var(--primary))',
                      color: 'white',
                      borderRadius: '50%'
                    }
                  }}
                />
                <div className="mt-3 text-sm text-muted-foreground text-center">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span>Event dates</span>
                  </div>
                </div>
              </CardContent>
            </Card>
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
                          <Clock className="w-4 h-4 text-primary" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 text-primary" />
                          {event.location}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Users className="w-4 h-4 text-primary" />
                          {event.capacity}
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-primary">{event.price}</span>
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
                            <Clock className="w-4 h-4 text-primary" />
                            {event.time}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-primary" />
                            {event.location}
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-primary" />
                            {event.capacity}
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-primary">{event.price}</span>
                          <Button variant="warm" size="lg">
                            Book Event
                          </Button>
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
          <Card className="bg-gradient-primary p-8 text-white border-0">
            <h3 className="text-3xl font-seasons mb-4">Want to Host a Private Event?</h3>
            <p className="text-lg mb-6 opacity-90">
              Create unforgettable memories with custom henna experiences for your special occasions
            </p>
            <Button variant="outline" size="lg" className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-primary">
              Contact Us for Private Events
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Events;
