import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageLightboxProps {
  images: { src: string; alt: string }[];
  isOpen: boolean;
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const ImageLightbox = ({ images, isOpen, currentIndex, onClose, onNavigate }: ImageLightboxProps) => {
  const [isHovering, setIsHovering] = useState(false);

  if (!isOpen) return null;

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    onNavigate(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    onNavigate(newIndex);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      {/* Close Button */}
      <Button
        onClick={onClose}
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 z-50 text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
      >
        <X className="h-8 w-8" />
      </Button>

      {/* Image Counter */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Main Image Container */}
      <div 
        className="flex items-center justify-center h-full w-full px-4 md:px-20"
        onClick={(e) => e.stopPropagation()}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Previous Button */}
        <Button
          onClick={goToPrevious}
          variant="ghost"
          size="icon"
          className={`absolute left-4 md:left-8 h-16 w-16 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 ${
            isHovering ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`}
        >
          <ChevronLeft className="h-12 w-12" />
        </Button>

        {/* Image */}
        <div className="relative max-w-6xl max-h-[90vh] animate-scale-in">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
        </div>

        {/* Next Button */}
        <Button
          onClick={goToNext}
          variant="ghost"
          size="icon"
          className={`absolute right-4 md:right-8 h-16 w-16 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 ${
            isHovering ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          }`}
        >
          <ChevronRight className="h-12 w-12" />
        </Button>
      </div>

      {/* Thumbnail Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 max-w-screen-lg overflow-x-auto px-4 scrollbar-hide">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => onNavigate(index)}
            className={`flex-shrink-0 transition-all duration-300 ${
              index === currentIndex 
                ? 'ring-4 ring-white scale-110 opacity-100' 
                : 'opacity-50 hover:opacity-100 hover:scale-105'
            }`}
          >
            <img
              src={image.src}
              alt={`Thumbnail ${index + 1}`}
              className="h-16 w-16 md:h-20 md:w-20 object-cover rounded-lg"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageLightbox;
