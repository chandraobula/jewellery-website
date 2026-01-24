import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CategoryCard = ({ category }) => {
  const { name, image, link } = category;

  return (
    <Link to={link} className="group relative block overflow-hidden aspect-[3/4]">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
      
      <div className="absolute bottom-0 left-0 w-full p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="text-3xl font-primary italic mb-2">{name}</h3>
        <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          Explore <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
