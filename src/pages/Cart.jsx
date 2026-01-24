import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Ethereal Diamond Ring',
      price: 1299.00,
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=2080&auto=format&fit=crop',
      size: '6',
      quantity: 1
    },
    {
      id: 2,
      name: 'Pearl Drop Earrings',
      price: 450.00,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1974&auto=format&fit=crop',
      size: null,
      quantity: 1
    }
  ]);

  const updateQuantity = (id, change) => {
    setCartItems(items => items.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-primary font-bold mb-4">Your Cart is Empty</h2>
        <p className="text-brand-dark/60 mb-8">Looks like you haven't added any treasures yet.</p>
        <Link to="/new-arrivals">
          <Button variant="primary">Start Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="container-custom">
        <h1 className="text-h2 mb-12 text-center">Shopping Cart</h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-neutral-200 text-sm font-bold uppercase tracking-wider text-brand-dark/60">
              <div className="col-span-6">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-right">Total</div>
            </div>

            <div className="space-y-8 mt-8">
              {cartItems.map(item => (
                <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center border-b border-neutral-100 pb-8 last:border-0">
                  <div className="col-span-6 flex gap-6">
                    <div className="w-24 h-24 bg-neutral-100 shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-primary font-bold text-lg mb-1">
                        <Link to={`/products/${item.id}`} className="hover:text-brand-primary transition-colors">
                          {item.name}
                        </Link>
                      </h3>
                      {item.size && <p className="text-sm text-brand-dark/60 mb-2">Size: {item.size}</p>}
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-sm text-brand-error hover:text-red-700 flex items-center gap-1"
                      >
                        <Trash2 size={14} /> Remove
                      </button>
                    </div>
                  </div>

                  <div className="col-span-2 text-center font-medium md:text-base">
                    <span className="md:hidden text-sm text-brand-dark/60 mr-2">Price:</span>
                    ${item.price.toFixed(2)}
                  </div>

                  <div className="col-span-2 flex justify-center">
                    <div className="flex items-center border border-neutral-200">
                      <button 
                        className="w-8 h-8 flex items-center justify-center hover:bg-neutral-100"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                      <button 
                        className="w-8 h-8 flex items-center justify-center hover:bg-neutral-100"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  <div className="col-span-2 text-right font-bold text-lg">
                    <span className="md:hidden text-sm text-brand-dark/60 font-normal mr-2">Total:</span>
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-neutral-50 p-8 sticky top-24">
              <h3 className="text-xl font-primary font-bold mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6 border-b border-neutral-200 pb-6">
                <div className="flex justify-between">
                  <span className="text-brand-dark/70">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-dark/70">Shipping</span>
                  <span className="font-medium text-brand-success">Free</span>
                </div>
              </div>

              <div className="flex justify-between text-lg font-bold mb-8">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <Button variant="primary" className="w-full mb-4 group">
                Proceed to Checkout <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="text-center">
                <Link to="/new-arrivals" className="text-sm text-brand-dark/60 hover:text-brand-primary underline">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
