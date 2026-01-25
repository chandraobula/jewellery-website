import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Package, ShoppingBag, Heart, MapPin, CreditCard, User, Settings, LogOut, Truck, Star } from 'lucide-react';
import { formatPrice } from '../utils/price';

const UserDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data
  const orders = [
    { id: 'ORD001', date: '2024-01-15', status: 'Delivered', total: 2499, items: 2 },
    { id: 'ORD002', date: '2024-01-10', status: 'Shipped', total: 1799, items: 1 },
    { id: 'ORD003', date: '2024-01-05', status: 'Processing', total: 3499, items: 3 },
  ];

  const wishlistItems = [
    { id: 1, name: 'Classic White T-Shirt', price: 599, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop' },
    { id: 2, name: 'Slim Fit Jeans', price: 1999, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1000&auto=format&fit=crop' },
  ];

  const addresses = [
    { id: 1, type: 'Home', name: 'John Doe', phone: '+91 9876543210', address: '123 Main Street, City, State 12345', isDefault: true },
    { id: 2, type: 'Work', name: 'John Doe', phone: '+91 9876543210', address: '456 Office Building, City, State 12345', isDefault: false },
  ];

  const stats = [
    { label: 'Total Orders', value: orders.length, icon: Package, color: 'text-blue-600' },
    { label: 'Wishlist Items', value: wishlistItems.length, icon: Heart, color: 'text-red-600' },
    { label: 'Saved Addresses', value: addresses.length, icon: MapPin, color: 'text-green-600' },
  ];

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-neutral-50 pt-24 pb-16">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center">
                  <User size={32} className="text-brand-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-dark">{user.name}</h3>
                  <p className="text-sm text-brand-dark/60">{user.email}</p>
                </div>
              </div>
            </div>

            <nav className="bg-white rounded-lg shadow-sm p-4">
              <button
                onClick={() => setActiveTab('overview')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                  activeTab === 'overview' ? 'bg-brand-primary text-white' : 'text-brand-dark hover:bg-brand-light'
                }`}
              >
                <Package size={20} />
                <span>Overview</span>
              </button>
              <button
                onClick={() => setActiveTab('orders')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                  activeTab === 'orders' ? 'bg-brand-primary text-white' : 'text-brand-dark hover:bg-brand-light'
                }`}
              >
                <ShoppingBag size={20} />
                <span>My Orders</span>
              </button>
              <button
                onClick={() => setActiveTab('wishlist')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                  activeTab === 'wishlist' ? 'bg-brand-primary text-white' : 'text-brand-dark hover:bg-brand-light'
                }`}
              >
                <Heart size={20} />
                <span>Wishlist</span>
              </button>
              <button
                onClick={() => setActiveTab('addresses')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                  activeTab === 'addresses' ? 'bg-brand-primary text-white' : 'text-brand-dark hover:bg-brand-light'
                }`}
              >
                <MapPin size={20} />
                <span>Addresses</span>
              </button>
              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                  activeTab === 'profile' ? 'bg-brand-primary text-white' : 'text-brand-dark hover:bg-brand-light'
                }`}
              >
                <Settings size={20} />
                <span>Profile Settings</span>
              </button>
              <button
                onClick={() => {
                  logout();
                  navigate('/');
                }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
              >
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <h1 className="text-3xl font-bold text-brand-dark">Dashboard Overview</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                      <div className="flex items-center justify-between mb-4">
                        <stat.icon size={32} className={stat.color} />
                      </div>
                      <h3 className="text-2xl font-bold text-brand-dark mb-1">{stat.value}</h3>
                      <p className="text-sm text-brand-dark/60">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-brand-dark mb-4">Recent Orders</h2>
                  <div className="space-y-4">
                    {orders.slice(0, 3).map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 border border-neutral-200 rounded-lg">
                        <div>
                          <p className="font-semibold text-brand-dark">Order #{order.id}</p>
                          <p className="text-sm text-brand-dark/60">{order.date} • {order.items} items</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-brand-dark">{formatPrice(order.total)}</p>
                          <span className={`text-xs px-2 py-1 rounded ${
                            order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                            order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link to="/user/dashboard?tab=orders" className="block text-center mt-4 text-brand-primary hover:underline">
                    View All Orders
                  </Link>
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="space-y-6">
                <h1 className="text-3xl font-bold text-brand-dark">My Orders</h1>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div key={order.id} className="border border-neutral-200 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <p className="font-semibold text-brand-dark">Order #{order.id}</p>
                            <p className="text-sm text-brand-dark/60">Placed on {order.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-brand-dark">{formatPrice(order.total)}</p>
                            <span className={`text-xs px-2 py-1 rounded ${
                              order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                              order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' :
                              'bg-yellow-100 text-yellow-700'
                            }`}>
                              {order.status}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-4 pt-4 border-t border-neutral-200">
                          <button className="text-sm text-brand-primary hover:underline">View Details</button>
                          <button className="text-sm text-brand-primary hover:underline">Track Order</button>
                          {order.status === 'Delivered' && (
                            <button className="text-sm text-brand-primary hover:underline">Rate & Review</button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div className="space-y-6">
                <h1 className="text-3xl font-bold text-brand-dark">My Wishlist</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {wishlistItems.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
                      <div className="p-4">
                        <h3 className="font-semibold text-brand-dark mb-2">{item.name}</h3>
                        <p className="text-lg font-bold text-brand-primary mb-4">{formatPrice(item.price)}</p>
                        <div className="flex gap-2">
                          <button className="flex-1 bg-brand-primary text-white py-2 rounded hover:bg-brand-dark transition-colors">
                            Add to Cart
                          </button>
                          <button className="px-4 py-2 border border-neutral-300 rounded hover:bg-neutral-50 transition-colors">
                            <Heart size={20} className="text-red-500 fill-red-500" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'addresses' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h1 className="text-3xl font-bold text-brand-dark">Saved Addresses</h1>
                  <button className="btn-primary text-sm py-2 px-4">Add New Address</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {addresses.map((address) => (
                    <div key={address.id} className="bg-white rounded-lg shadow-sm p-6 border-2 border-neutral-200">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <span className="text-xs font-semibold text-brand-primary bg-brand-primary/10 px-2 py-1 rounded">
                            {address.type}
                          </span>
                          {address.isDefault && (
                            <span className="ml-2 text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded">
                              Default
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="font-semibold text-brand-dark mb-1">{address.name}</p>
                      <p className="text-sm text-brand-dark/60 mb-1">{address.phone}</p>
                      <p className="text-sm text-brand-dark/70 mb-4">{address.address}</p>
                      <div className="flex gap-2">
                        <button className="text-sm text-brand-primary hover:underline">Edit</button>
                        <button className="text-sm text-red-600 hover:underline">Delete</button>
                        {!address.isDefault && (
                          <button className="text-sm text-brand-primary hover:underline ml-auto">Set as Default</button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="space-y-6">
                <h1 className="text-3xl font-bold text-brand-dark">Profile Settings</h1>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-2">Full Name</label>
                      <input
                        type="text"
                        defaultValue={user.name}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-brand-primary focus:border-brand-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-2">Email</label>
                      <input
                        type="email"
                        defaultValue={user.email}
                        disabled
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg bg-neutral-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-2">Phone Number</label>
                      <input
                        type="tel"
                        defaultValue={user.phone || ''}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-brand-primary focus:border-brand-primary"
                      />
                    </div>
                    <button type="submit" className="btn-primary">Save Changes</button>
                  </form>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
