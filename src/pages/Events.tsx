import Navigation from "@/components/Navigation";
import Events from "@/components/Events";
import EventCalendar from "@/components/EventCalendar";
import Contact from "@/components/Contact";

const EventsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Events />
        
        {/* Additional Calendar Section */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Event Calendar</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Browse our interactive calendar to see all upcoming henna events and special occasions.
              </p>
            </div>
            <EventCalendar />
          </div>
        </section>
        
        <Contact />
      </main>
    </div>
  );
};

export default EventsPage;