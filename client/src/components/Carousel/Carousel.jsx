import { useState } from 'react';
import { images } from '../../utils/data';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const getIndexes = () => {
    const prevIndex = (currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    const nextIndex = (currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    return { prevIndex, nextIndex };
  };

  const { prevIndex, nextIndex } = getIndexes();

  const handlePrev = () => {
    setCurrentIndex(prevIndex);
  };

  const handleNext = () => {
    setCurrentIndex(nextIndex);
  };

  return (
    <div className='flex items-center'>
      <div className='relative overflow-hidden items-center max-w-4xl lg:h-[500px] rounded-3xl'>
        <div>
          <div className='flex transition-transform ease-out duration-400' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((image, index) => (
              <img key={index} src={image} alt={`image ${index + 1}`} />
            ))}
          </div>

          <div className='absolute inset-0 flex items-center justify-between p-4'>
            <button onClick={handlePrev} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'><FaChevronLeft size={16} /></button>
            <button onClick={handleNext} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'><FaChevronRight size={16} /></button>
          </div>

          <div className='absolute bottom-4 right-0 left-0'>
            <div className='flex items-center justify-center gap-2'>
              {images.map((_, index) => (
                <div key={index} className={`transition-all w-3 h-3 bg-white rounded-full ${currentIndex === index ? 'p2' : 'bg-opacity-50'}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;