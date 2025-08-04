// components/ImageModal.js

import { useRef, useState } from "react";
import CarouselButton from "./CarouselButton";

const ImageModal = ({ images, onClose }) => {

  const sliderPositionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0); // image index translate-x-[ref%]

  const handleLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  }

  const handleRight = () => {
    if (currentIndex != images.src.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white border-white border-[1rem] rounded-xl relative max-w-3xl w-full overflow-hidden">
        
        <div
          className="flex w-full transition-transform duration-300 duration-700"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }} 
        >
          {
            images.src.map((img, i) => 
              <img
                key={i}
                src={img}
                alt={images.alt}
                className="w-full h-auto rounded"
              />
            )
          }
        </div>
        <div className="bg text-xl text-gray-600">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 hover:text-red-600 text-xl"
          >
            ✕
          </button>
          { images.src.length > 1 &&
            <>
              <CarouselButton handleButton={handleLeft} direction={'<'} className="text-white text-5xl absolute top-1/2 translate-y-[-50%] left-5 hover:scale-[200%] transition-all duration-500 active:scale-150" />
              <CarouselButton handleButton={handleRight} direction={'>'} className="text-white text-5xl absolute top-1/2 translate-y-[-50%] right-5 hover:scale-[200%] transition-all duration-500 active:scale-150" />
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
