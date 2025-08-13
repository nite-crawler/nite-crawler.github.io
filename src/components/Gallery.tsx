import { useState } from "react";
import henna1 from "/lovable-uploads/e56afc26-5077-489b-9e98-de43402abd87.png";
import henna2 from "/lovable-uploads/52ce71f8-db12-4dc9-a6ff-6322023656a6.png";
import henna3 from "/lovable-uploads/816b54df-6f43-41b7-b4d3-fc47d0d96dfb.png";
import henna4 from "/lovable-uploads/956c8ed0-9bc5-4785-990b-6e9911cd7772.png";
import henna5 from "/lovable-uploads/b5b3c836-8c5d-4b91-9847-433f214b1991.png";
import henna6 from "/lovable-uploads/644343fa-123c-4a85-92a7-8cf27ea5a2ab.png";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const hennaImages = [
    { src: henna1, alt: "Intricate white henna design with mandala patterns", category: "Traditional" },
    { src: henna2, alt: "Detailed palm henna with central mandala motif", category: "Bridal" },
    { src: henna3, alt: "Elegant hand and arm henna with flowing patterns", category: "Traditional" },
    { src: henna4, alt: "Beautiful foot henna with mandala and geometric designs", category: "Festival" },
    { src: henna5, alt: "Contemporary hand henna with paisley and mandala elements", category: "Modern" },
    { src: henna6, alt: "Delicate floral hand henna design", category: "Arabic" },
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Our Henna Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the beauty of our henna artistry. Each design tells a story of tradition, 
            creativity, and personal expression.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hennaImages.map((image, index) => (
            <div 
              key={index}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-float hover:shadow-float-hover transition-all duration-500 hover:-translate-y-4 cursor-pointer animate-scale-in"
              style={{animationDelay: `${index * 0.1}s`}}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] animate-scale-in">
              <img 
                src={selectedImage} 
                alt="Selected henna design"
                className="w-full h-full object-contain rounded-xl shadow-2xl"
              />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm text-foreground w-10 h-10 rounded-full flex items-center justify-center hover:bg-card transition-colors shadow-float"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;