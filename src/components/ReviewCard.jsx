import { Star } from 'lucide-react';

const ReviewCard = ({ review }) => {
  const { name, image, rating, comment, date, product } = review;

  return (
    <div className="bg-white p-8 shadow-soft hover:shadow-medium transition-shadow duration-300 border border-neutral-100">
      <div className="flex items-center gap-4 mb-6">
        <img 
          src={image} 
          alt={name} 
          className="w-14 h-14 rounded-full object-cover border-2 border-brand-secondary/30"
        />
        <div>
          <h4 className="font-primary font-bold text-lg text-brand-dark">{name}</h4>
          <div className="flex text-brand-primary">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={14} 
                fill={i < rating ? "currentColor" : "none"} 
                className={i < rating ? "text-brand-primary" : "text-neutral-300"}
              />
            ))}
          </div>
        </div>
      </div>
      
      <p className="text-brand-dark/80 italic mb-6 leading-relaxed">"{comment}"</p>
      
      <div className="flex justify-between items-center text-xs text-brand-dark/50 uppercase tracking-wider border-t border-neutral-100 pt-4">
        <span>{date}</span>
        {product && <span className="font-medium text-brand-accent">Verified Purchase</span>}
      </div>
    </div>
  );
};

export default ReviewCard;
