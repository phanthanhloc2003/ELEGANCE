import React from 'react';

interface ProductImagesProps {
  images: string[];
  selectedImage: number;
  onImageSelect: (index: number) => void;
}

export const ProductImages: React.FC<ProductImagesProps> = ({
  images,
  selectedImage,
  onImageSelect
}) => {
  return (
    <div className="space-y-4">
      <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden bg-gray-100">
        <img
          src={images[selectedImage]}
          alt="Product"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => onImageSelect(index)}
            className={`aspect-w-1 aspect-h-1 rounded-md overflow-hidden ${
              selectedImage === index ? 'ring-2 ring-burgundy-500' : ''
            }`}
          >
            <img src={image} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};