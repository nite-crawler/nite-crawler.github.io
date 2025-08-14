import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Users } from "lucide-react";
import EventCalendar from "@/components/EventCalendar";

const Events = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

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

  return (
    <section className="min-h-screen py-0 bg-gradient-warm">
      {/* Hero Section */}
      <div className="relative py-20 px-6 bg-gradient-sunset overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-glow rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-accent rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-seasons text-white mb-6 uppercase tracking-wide drop-shadow-2xl">
              Events & Workshops
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Join us for immersive henna experiences, traditional art workshops, and cultural celebrations
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Event Calendar Section */}
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-primary opacity-20 rounded-3xl blur-xl"></div>
              <div className="relative z-10 bg-card/95 backdrop-blur-sm rounded-3xl p-8 shadow-float border border-border/50">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-seasons text-gallery-title mb-4">Interactive Calendar</h2>
                  <p className="text-muted-foreground">Hover over highlighted dates to see event details</p>
                </div>
                <EventCalendar />
              </div>
            </div>

            {/* Events List */}
            <div className="space-y-8">
              {selectedDate && selectedDateEvents.length > 0 ? (
                <>
                  <div className="text-center lg:text-left">
                    <h3 className="text-3xl md:text-4xl font-seasons text-foreground mb-4">
                      Events on {selectedDate.toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </h3>
                  </div>
                  {selectedDateEvents.map((event, index) => (
                    <Card 
                      key={event.id} 
                      className="bg-card/95 backdrop-blur-sm border-border/50 shadow-float hover:shadow-float-hover transition-all duration-300 animate-scale-in rounded-2xl overflow-hidden"
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      <CardContent className="p-8">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                          <h4 className="text-2xl font-seasons text-foreground mb-2 md:mb-0">{event.title}</h4>
                          <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 self-start">
                            {event.category}
                          </Badge>
                        </div>
                        
                        <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                          {event.description}
                        </p>
                        
                        <div className="space-y-3 mb-8">
                          <div className="flex items-center gap-3 text-muted-foreground">
                            <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-lg">{event.time}</span>
                          </div>
                          <div className="flex items-center gap-3 text-muted-foreground">
                            <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-lg">{event.location}</span>
                          </div>
                          <div className="flex items-center gap-3 text-muted-foreground">
                            <Users className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-lg">{event.capacity}</span>
                          </div>
                        </div>
                        
                        <div className="flex justify-center md:justify-end">
                          <Button size="lg" className="bg-gradient-primary hover:bg-gradient-sunset text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                            Book Event
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </>
              ) : (
                <div>
                  <div className="text-center lg:text-left mb-8">
                    <h3 className="text-3xl md:text-4xl font-seasons text-foreground mb-4">All Upcoming Events</h3>
                    <p className="text-muted-foreground text-lg">Discover our exciting lineup of henna experiences</p>
                  </div>
                  <div className="space-y-8">
                    {events.map((event, index) => (
                      <Card 
                        key={event.id} 
                        className="bg-card/95 backdrop-blur-sm border-border/50 shadow-float hover:shadow-float-hover transition-all duration-300 animate-scale-in rounded-2xl overflow-hidden group"
                        style={{animationDelay: `${index * 0.1}s`}}
                      >
                        <CardContent className="p-8">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                            <div>
                              <h4 className="text-2xl font-seasons text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{event.title}</h4>
                              <p className="text-primary font-semibold text-lg">
                                {event.date.toLocaleDateString('en-US', { 
                                  weekday: 'long', 
                                  year: 'numeric', 
                                  month: 'long', 
                                  day: 'numeric' 
                                })}
                              </p>
                            </div>
                            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 self-start mt-2 md:mt-0">
                              {event.category}
                            </Badge>
                          </div>
                          
                          <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                            {event.description}
                          </p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            <div className="flex items-center gap-3 text-muted-foreground">
                              <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-3 text-muted-foreground">
                              <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center gap-3 text-muted-foreground">
                              <Users className="w-5 h-5 text-primary flex-shrink-0" />
                              <span>{event.capacity}</span>
                            </div>
                          </div>
                          
                          <div className="flex justify-center md:justify-end">
                            <Button size="lg" className="bg-gradient-primary hover:bg-gradient-sunset text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
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
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-20 px-6 bg-gradient-sunset">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center animate-fade-in">
            <Card className="bg-card/10 backdrop-blur-md p-12 text-white border-white/20 rounded-3xl shadow-2xl">
              <h3 className="text-4xl md:text-5xl font-seasons mb-6">Want to Host a Private Event?</h3>
              <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                Create unforgettable memories with custom henna experiences for your special occasions
              </p>
              <Button 
                size="lg" 
                className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-event-cta backdrop-blur-sm px-12 py-4 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contact Us for Private Events
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
