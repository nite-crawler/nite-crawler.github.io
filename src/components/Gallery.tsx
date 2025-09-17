import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import henna1 from "/uploads/e56afc26-5077-489b-9e98-de43402abd87.png";
import henna2 from "/uploads/52ce71f8-db12-4dc9-a6ff-6322023656a6.png";
import henna3 from "/uploads/816b54df-6f43-41b7-b4d3-fc47d0d96dfb.png";
import henna4 from "/uploads/956c8ed0-9bc5-4785-990b-6e9911cd7772.png";
import henna5 from "/uploads/b5b3c836-8c5d-4b91-9847-433f214b1991.png";
import henna6 from "/uploads/644343fa-123c-4a85-92a7-8cf27ea5a2ab.png";
import henna7 from "/uploads/d86ddfbd-cf52-4452-8af0-9ac45d76bedf.png";
import henna8 from "/uploads/d0da27d1-5f43-4d63-8d8c-4886f9044ca0.png";
import henna9 from "/uploads/c499dc2f-2552-40cc-8e61-6f8700cc6b3c.png";
import henna10 from "/uploads/269e0f22-a5aa-4a7d-a9e1-7acc6455b4df.png";
import henna11 from "/uploads/d6a45b87-b8a4-4901-9f87-6e681873635b.png";
import henna12 from "/uploads/df6fe019-5512-4ee3-bbee-30e9568cb134.png";
import henna13 from "/uploads/811478a3-ad51-441a-8523-1749cf3d6859.png";
import henna14 from "/uploads/f475df6f-7166-4e30-bafd-80d581844b25.png";
import henna15 from "/uploads/24f6fe45-8713-40d3-82bf-75a067a9b78c.png";
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(6); // Start with henna7 as main image
  const [modalIndex, setModalIndex] = useState(0);
  
  const hennaImages = [{
    src: henna1,
    alt: "Intricate white henna design with mandala patterns",
    category: "Traditional"
  }, {
    src: henna2,
    alt: "Detailed palm henna with central mandala motif",
    category: "Bridal"
  }, {
    src: henna3,
    alt: "Elegant hand and arm henna with flowing patterns",
    category: "Traditional"
  }, {
    src: henna4,
    alt: "Beautiful foot henna with mandala and geometric designs",
    category: "Festival"
  }, {
    src: henna5,
    alt: "Contemporary hand henna with paisley and mandala elements",
    category: "Modern"
  }, {
    src: henna6,
    alt: "Delicate floral hand henna design",
    category: "Arabic"
  }, {
    src: henna7,
    alt: "Elaborate bridal henna with intricate mandala and paisley patterns on palm",
    category: "Bridal"
  }, {
    src: henna8,
    alt: "Detailed finger henna with geometric and floral motifs",
    category: "Traditional"
  }, {
    src: henna9,
    alt: "Beautiful full hand henna with mandala centerpiece and finger details",
    category: "Bridal"
  }, {
    src: henna10,
    alt: "Stunning arm henna with mesh patterns and intricate detailing",
    category: "Traditional"
  }, {
    src: henna11,
    alt: "Fresh henna paste application showing intricate finger patterns",
    category: "Modern"
  }, {
    src: henna12,
    alt: "Close-up of detailed finger henna with floral and geometric designs",
    category: "Traditional"
  }, {
    src: henna13,
    alt: "Delicate hand henna with leaf patterns and mandala elements",
    category: "Arabic"
  }, {
    src: henna14,
    alt: "Dark henna stain showing beautiful arm patterns with floral motifs",
    category: "Festival"
  }, {
    src: henna15,
    alt: "Complete hand henna design with dark stain and intricate patterns",
    category: "Bridal"
  }];

  const openModal = (index: number) => {
    setModalIndex(index);
    setSelectedImage(hennaImages[index].src);
  };

  const navigateModal = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' 
      ? (modalIndex - 1 + hennaImages.length) % hennaImages.length
      : (modalIndex + 1) % hennaImages.length;
    setModalIndex(newIndex);
    setSelectedImage(hennaImages[newIndex].src);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      if (e.key === 'ArrowLeft') {
        navigateModal('prev');
      } else if (e.key === 'ArrowRight') {
        navigateModal('next');
      } else if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, modalIndex]);
  return <section id="gallery" className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl mb-6 text-gallery-title font-seasons uppercase font-thin md:text-5xl">
            My KALĀ
          </h2>
          <p className="text-xl max-w-2xl mx-auto font-extralight text-[#272725]">
            Discover the beauty and artistry of my henna creations.
            Browse through the gallery and find inspiration for your own special look.
          </p>
        </div>

        {/* Main Featured Image */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="overflow-hidden shadow-float hover:shadow-float-hover transition-all duration-500 animate-scale-in">
            <CardContent className="p-0">
              <div 
                className="relative cursor-zoom-in group"
                onClick={() => openModal(currentIndex)}
              >
                <img 
                  src={hennaImages[currentIndex].src} 
                  alt={hennaImages[currentIndex].alt}
                  className="w-full h-[500px] md:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Card Stack Carousel */}
        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {hennaImages.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <Card 
                    className={`overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-float-hover ${
                      index === currentIndex 
                        ? 'ring-2 ring-primary shadow-float scale-105' 
                        : 'hover:scale-105'
                    }`}
                    onClick={() => setCurrentIndex(index)}
                    onDoubleClick={() => openModal(index)}
                  >
                    <CardContent className="p-0">
                      <div className="aspect-square overflow-hidden">
                        <img 
                          src={image.src} 
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        {/* Enhanced Image Modal with Navigation */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center animate-fade-in" 
            onClick={() => setSelectedImage(null)}
          >
            {/* Modal Container */}
            <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8">
              
              {/* Previous Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateModal('prev');
                }}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200 shadow-lg z-10 group"
              >
                <svg className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Main Image */}
              <div className="relative animate-scale-in">
                <img 
                  src={selectedImage} 
                  alt={hennaImages[modalIndex].alt}
                  className="max-w-[90vw] max-h-[90vh] object-contain rounded-xl shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />
                
                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                  {modalIndex + 1} / {hennaImages.length}
                </div>
              </div>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateModal('next');
                }}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200 shadow-lg z-10 group"
              >
                <svg className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Close Button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }} 
                className="absolute top-4 right-4 md:top-8 md:right-8 bg-white/20 backdrop-blur-sm text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200 shadow-lg text-lg font-bold z-10"
              >
                ✕
              </button>

              {/* Keyboard Instructions */}
              <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-black/60 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-xs opacity-70">
                Use ← → keys or click arrows
              </div>
            </div>
          </div>
        )}
      </div>
    </section>;
};
export default Gallery;