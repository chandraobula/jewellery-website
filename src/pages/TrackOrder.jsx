import { useState } from 'react';
import { Search } from 'lucide-react';
import Button from '../components/ui/Button';

const TrackOrder = () => {
  const [orderId, setOrderId] = useState('');
  const [email, setEmail] = useState('');
  const [orderStatus, setOrderStatus] = useState(null);

  const handleTrack = (e) => {
    e.preventDefault();
    // Mock order tracking
    if (orderId && email) {
      setOrderStatus({
        orderId,
        status: 'Shipped',
        estimatedDelivery: '2024-12-25',
        trackingNumber: 'TRK123456789',
        items: [
          { name: 'Classic White T-Shirt', quantity: 1, price: 449 },
          { name: 'Slim Fit Jeans', quantity: 1, price: 1499 }
        ],
        shippingAddress: '123 Fashion Street, Mumbai, Maharashtra 400001',
        carrier: 'BlueDart'
      });
    }
  };

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="container-custom max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-primary font-bold mb-4 text-center">Track Your Order</h1>
        <p className="text-brand-dark/70 text-center mb-12">
          Enter your order ID and email to track your shipment
        </p>

        <form onSubmit={handleTrack} className="bg-neutral-50 p-8 rounded-lg mb-12">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold uppercase tracking-wider mb-2">
                Order ID
              </label>
              <input
                type="text"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="Enter your order ID"
                className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold uppercase tracking-wider mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
                required
              />
            </div>
            <Button type="submit" variant="primary" className="w-full flex items-center justify-center gap-2">
              <Search size={18} /> Track Order
            </Button>
          </div>
        </form>

        {orderStatus && (
          <div className="bg-white border border-neutral-200 rounded-lg p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-primary font-bold mb-2">Order #{orderStatus.orderId}</h2>
              <p className="text-brand-dark/60">Tracking Number: {orderStatus.trackingNumber}</p>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  orderStatus.status === 'Delivered' ? 'bg-green-500' : 
                  orderStatus.status === 'Shipped' ? 'bg-blue-500' : 
                  'bg-yellow-500'
                } text-white font-bold`}>
                  {orderStatus.status === 'Delivered' ? '✓' : 
                   orderStatus.status === 'Shipped' ? '→' : '○'}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{orderStatus.status}</h3>
                  <p className="text-sm text-brand-dark/60">
                    Estimated Delivery: {orderStatus.estimatedDelivery}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold mb-3">Order Items</h3>
                <div className="space-y-2">
                  {orderStatus.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between py-2 border-b border-neutral-100">
                      <span>{item.name} x {item.quantity}</span>
                      <span className="font-medium">₹{item.price.toLocaleString('en-IN')}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-3">Shipping Address</h3>
                <p className="text-brand-dark/70">{orderStatus.shippingAddress}</p>
              </div>

              <div>
                <h3 className="font-bold mb-3">Carrier</h3>
                <p className="text-brand-dark/70">{orderStatus.carrier}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackOrder;
