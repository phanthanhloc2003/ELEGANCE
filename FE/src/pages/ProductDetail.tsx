import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { ProductImages } from "../components/product/ProductImages";
import { ProductInfo } from "../components/product/ProductInfo";
import { ProductReviews } from "../components/product/ProductReviews";
import { RelatedProducts } from "../components/product/RelatedProducts";

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data
  const product = {
    id,
    name: "Elegant Evening Dress",
    price: 129.99,
    description:
      "A stunning evening dress perfect for special occasions. Made with premium silk fabric that drapes beautifully and ensures both comfort and elegance.",
    images: [
      "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=800",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Burgundy", "Black", "Navy"],
    reviews: [
      {
        id: 1,
        user: "Sarah M.",
        rating: 5,
        date: "2024-03-15",
        comment:
          "Absolutely love this dress! The quality is amazing and it fits perfectly.",
        image:
          "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200",
      },
      {
        id: 2,
        user: "Emily R.",
        rating: 4,
        date: "2024-03-10",
        comment:
          "Beautiful dress, great material. Slightly longer than expected but still gorgeous.",
      },
    ],
  };

  const relatedProducts = [
    {
      id: 1,
      name: "Evening Dress 1",
      price: 129.99,
      image:
        "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=400",
    },
    {
      id: 2,
      name: "Evening Dress 2",
      price: 139.99,
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
    },
    {
      id: 3,
      name: "Evening Dress 3",
      price: 149.99,
      image:
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400",
    },
    {
      id: 4,
      name: "Evening Dress 4",
      price: 159.99,
      image:
        "https://images.unsplash.com/photo-1566174053879-31528523f 8ae?w=400",
    },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <span>Home</span>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span>Dresses</span>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-burgundy-700">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ProductImages
            images={product.images}
            selectedImage={selectedImage}
            onImageSelect={setSelectedImage}
          />

          <ProductInfo
            name={product.name}
            price={product.price}
            description={product.description}
            colors={product.colors}
            sizes={product.sizes}
            selectedSize={selectedSize}
            onSizeSelect={setSelectedSize}
          />
        </div>

        <ProductReviews reviews={product.reviews} />
        <RelatedProducts products={relatedProducts} />
      </div>
    </>
  );
};

export default ProductDetail;
