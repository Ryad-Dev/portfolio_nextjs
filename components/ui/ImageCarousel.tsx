import React from 'react';

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  return (
    <div className="overflow-x-auto whitespace-nowrap rounded-xl ">
      <div className="flex">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`image-${index}`} className="rounded-xl w-64 min-w-[200px] h-120 object-cover mx-2" />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
