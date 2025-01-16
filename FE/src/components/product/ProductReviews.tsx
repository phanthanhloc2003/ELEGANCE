import React from 'react';
import { Star } from 'lucide-react';

interface Review {
  id: number;
  user: string;
  rating: number;
  date: string;
  comment: string;
  image?: string;
}

interface ProductReviewsProps {
  reviews: Review[];
}

export const ProductReviews: React.FC<ProductReviewsProps> = ({ reviews }) => {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Customer Reviews</h2>
      <div className="space-y-8">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-200 pb-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">{review.user}</p>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <span className="text-sm text-gray-500">{review.date}</span>
            </div>
            <p className="mt-4 text-gray-600">{review.comment}</p>
            {review.image && (
              <div className="mt-4">
                <img
                  src={review.image}
                  alt="Review"
                  className="h-24 w-24 object-cover rounded-lg"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};