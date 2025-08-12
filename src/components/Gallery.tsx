import { useState } from "react";
import henna1 from "@/assets/henna-1.jpg";
import henna2 from "@/assets/henna-2.jpg";
import henna3 from "@/assets/henna-3.jpg";
import henna4 from "@/assets/henna-4.jpg";
import henna5 from "@/assets/henna-5.jpg";
import henna6 from "@/assets/henna-6.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const hennaImages = [
    { src: henna1, alt: "Intricate traditional henna design", category: "Traditional" },
    { src: henna2, alt: "Elegant bridal henna with mandala patterns", category: "Bridal" },
    { src: henna3, alt: "Modern minimalist henna design", category: "Modern" },
    { src: henna4, alt: "Arabic henna with bold patterns", category: "Arabic" },
    { src: henna5, alt: "Contemporary fusion henna design", category: "Fusion" },
    { src: henna6, alt: "Delicate festival henna design", category: "Festival" },
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
                
                {/* Category badge */}
                <div className="absolute top-4 left-4 bg-gradient-warm text-primary px-3 py-1 rounded-full text-sm font-medium shadow-float">
                  {image.category}
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-lg font-semibold mb-2">View Full Size</p>
                    <p className="text-sm opacity-90">{image.category} Design</p>
                  </div>
                </div>
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