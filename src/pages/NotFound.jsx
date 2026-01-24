import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-brand-light/30">
      <h1 className="text-9xl font-primary font-bold text-brand-secondary/50 mb-4">404</h1>
      <h2 className="text-3xl font-primary font-bold text-brand-dark mb-6">Page Not Found</h2>
      <p className="text-brand-dark/70 max-w-md mb-10 leading-relaxed">
        We couldn't find the page you're looking for. It might have been moved or doesn't exist.
      </p>
      <Link to="/">
        <Button variant="primary">Return to Homepage</Button>
      </Link>
    </div>
  );
};

export default NotFound;
