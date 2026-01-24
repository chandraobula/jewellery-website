import { useState } from 'react';
import { Mail, Check } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail('');
    
    // Reset success message after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };

  return (
    <section className="section-padding bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-elegant text-4xl font-semibold text-white mb-6">
            Stay in the Loop
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to discover new collections, 
            exclusive offers, and jewelry styling tips.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-gold-500 text-gray-900"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isLoading || isSubscribed}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isSubscribed
                    ? 'bg-green-500 text-white'
                    : 'bg-gold-500 text-white hover:bg-gold-600 active:scale-95'
                } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Subscribing...
                  </div>
                ) : isSubscribed ? (
                  <div className="flex items-center">
                    <Check className="w-4 h-4 mr-2" />
                    Subscribed!
                  </div>
                ) : (
                  'Subscribe'
                )}
              </button>
            </div>
          </form>

          {isSubscribed && (
            <div className="mt-4 text-green-400 text-sm">
              Thank you for subscribing! Check your email for confirmation.
            </div>
          )}

          <p className="text-gray-400 text-sm mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>

          {/* Benefits */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">✨</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Exclusive Access</h3>
              <p className="text-gray-400 text-sm">
                Be the first to see new collections and limited editions
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">🎁</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Special Offers</h3>
              <p className="text-gray-400 text-sm">
                Receive exclusive discounts and early access to sales
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">💎</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Style Tips</h3>
              <p className="text-gray-400 text-sm">
                Get expert advice on jewelry care and styling
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

