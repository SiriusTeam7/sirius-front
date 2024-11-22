import React, { useRef } from "react";
import { arrowRigth } from '@/assets/images';

interface CarouselProps {
    children: React.ReactNode;
    cardWidth: number;
}

const Carousel: React.FC<CarouselProps> = ({ children, cardWidth }) => {
    const carouselRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
          const visibleWidth = carouselRef.current.offsetWidth; 
          const scrollAmount = Math.min(visibleWidth, cardWidth); 
          carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
      };
    
      const scrollRight = () => {
        if (carouselRef.current) {
          const visibleWidth = carouselRef.current.offsetWidth;
          const scrollAmount = Math.min(visibleWidth, cardWidth);
          carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      };
    

    return (
        <div className="relative w-full flex items-center">
            <button
                onClick={scrollLeft}
                className=" text-white hidden rounded-full p-2  z-10"
            >
                ←
            </button>

            <div
                ref={carouselRef}
                className="flex overflow-x-hidden no-scrollbar space-x-4 "
                style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
            >
                {children}
            </div>

            <button
                onClick={scrollRight}
                className="text-white rounded-full p-2  z-10"
            >
                <img src={arrowRigth} alt="Scroll Right" className="h-6 w-6" />
            </button>
        </div>
    );
};

export default Carousel;