import Navigation from "@/components/Navigation";
import Events from "@/components/Events";
import Contact from "@/components/Contact";

const EventsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Events />
        <Contact />
      </main>
    </div>
  );
};

export default EventsPage;