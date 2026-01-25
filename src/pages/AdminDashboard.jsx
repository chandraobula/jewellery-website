import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  Package, Users, DollarSign, TrendingUp, ShoppingBag, 
  Eye, Edit, Trash2, Plus, BarChart3, Settings, LogOut,
  CheckCircle, XCircle, Clock, AlertCircle
} from 'lucide-react';
import { formatPrice } from '../utils/price';

const AdminDashboard = () => {
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data
  const stats = [
    { label: 'Total Revenue', value: '₹2,45,890', icon: DollarSign, color: 'text-green-600', change: '+12.5%' },
    { label: 'Total Orders', value: '1,234', icon: ShoppingBag, color: 'text-blue-600', change: '+8.2%' },
    { label: 'Total Products', value: '456', icon: Package, color: 'text-purple-600', change: '+5.1%' },
    { label: 'Total Customers', value: '8,901', icon: Users, color: 'text-orange-600', change: '+15.3%' },
  ];

  const recentOrders = [
    { id: 'ORD001', customer: 'John Doe', product: 'Classic White T-Shirt', amount: 599, status: 'Delivered', date: '2024-01-15' },
    { id: 'ORD002', customer: 'Jane Smith', product: 'Slim Fit Jeans', amount: 1999, status: 'Shipped', date: '2024-01-14' },
    { id: 'ORD003', customer: 'Bob Johnson', product: 'Floral Summer Dress', amount: 2499, status: 'Processing', date: '2024-01-13' },
    { id: 'ORD004', customer: 'Alice Brown', product: 'Denim Jacket', amount: 2499, status: 'Pending', date: '2024-01-12' },
  ];

  const products = [
    { id: 1, name: 'Classic White T-Shirt', category: 'T-Shirts', price: 599, stock: 45, status: 'Active', sales: 234 },
    { id: 2, name: 'Slim Fit Jeans', category: 'Jeans', price: 1999, stock: 32, status: 'Active', sales: 189 },
    { id: 3, name: 'Floral Summer Dress', category: 'Dresses', price: 2499, stock: 0, status: 'Out of Stock', sales: 156 },
    { id: 4, name: 'Denim Jacket', category: 'Jackets', price: 2499, stock: 18, status: 'Active', sales: 98 },
  ];

  const customers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', orders: 12, totalSpent: 15499, status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', orders: 8, totalSpent: 8999, status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', orders: 5, totalSpent: 4999, status: 'Active' },
  ];

  if (!user || !isAdmin) {
    navigate('/login');
    return null;
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
      case 'Active':
        return 'bg-green-100 text-green-700';
      case 'Shipped':
        return 'bg-blue-100 text-blue-700';
      case 'Processing':
        return 'bg-yellow-100 text-yellow-700';
      case 'Pending':
        return 'bg-orange-100 text-orange-700';
      case 'Out of Stock':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-neutral-100 text-neutral-700';
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 pt-24 pb-16">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center">
                  <Settings size={32} className="text-brand-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-dark">{user.name}</h3>
                  <p className="text-sm text-brand-dark/60">Administrator</p>
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
                <BarChart3 size={20} />
                <span>Overview</span>
              </button>
              <button
                onClick={() => setActiveTab('orders')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                  activeTab === 'orders' ? 'bg-brand-primary text-white' : 'text-brand-dark hover:bg-brand-light'
                }`}
              >
                <ShoppingBag size={20} />
                <span>Orders</span>
              </button>
              <button
                onClick={() => setActiveTab('products')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                  activeTab === 'products' ? 'bg-brand-primary text-white' : 'text-brand-dark hover:bg-brand-light'
                }`}
              >
                <Package size={20} />
                <span>Products</span>
              </button>
              <button
                onClick={() => setActiveTab('customers')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                  activeTab === 'customers' ? 'bg-brand-primary text-white' : 'text-brand-dark hover:bg-brand-light'
                }`}
              >
                <Users size={20} />
                <span>Customers</span>
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
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                      <div className="flex items-center justify-between mb-4">
                        <stat.icon size={32} className={stat.color} />
                        <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded">
                          {stat.change}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-brand-dark mb-1">{stat.value}</h3>
                      <p className="text-sm text-brand-dark/60">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-xl font-semibold text-brand-dark mb-4">Recent Orders</h2>
                    <div className="space-y-3">
                      {recentOrders.slice(0, 5).map((order) => (
                        <div key={order.id} className="flex items-center justify-between p-3 border border-neutral-200 rounded-lg">
                          <div>
                            <p className="font-semibold text-brand-dark text-sm">#{order.id}</p>
                            <p className="text-xs text-brand-dark/60">{order.customer}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-brand-dark text-sm">{formatPrice(order.amount)}</p>
                            <span className={`text-xs px-2 py-1 rounded ${getStatusColor(order.status)}`}>
                              {order.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-xl font-semibold text-brand-dark mb-4">Low Stock Products</h2>
                    <div className="space-y-3">
                      {products.filter(p => p.stock < 20).map((product) => (
                        <div key={product.id} className="flex items-center justify-between p-3 border border-red-200 rounded-lg bg-red-50">
                          <div>
                            <p className="font-semibold text-brand-dark text-sm">{product.name}</p>
                            <p className="text-xs text-red-600">Only {product.stock} left</p>
                          </div>
                          <button className="text-sm text-brand-primary hover:underline">Restock</button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h1 className="text-3xl font-bold text-brand-dark">All Orders</h1>
                  <button className="btn-primary text-sm py-2 px-4 flex items-center gap-2">
                    <Plus size={16} />
                    Export
                  </button>
                </div>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-neutral-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-brand-dark uppercase tracking-wider">Order ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-brand-dark uppercase tracking-wider">Customer</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-brand-dark uppercase tracking-wider">Product</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-brand-dark uppercase tracking-wider">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-brand-dark uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-brand-dark uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-brand-dark uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200">
                      {recentOrders.map((order) => (
                        <tr key={order.id} className="hover:bg-neutral-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-brand-dark">#{order.id}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-brand-dark/70">{order.customer}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-brand-dark/70">{order.product}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-brand-dark">{formatPrice(order.amount)}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`text-xs px-2 py-1 rounded ${getStatusColor(order.status)}`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-brand-dark/60">{order.date}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <button className="text-brand-primary hover:underline mr-3">View</button>
                            <button className="text-brand-primary hover:underline">Edit</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'products' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h1 className="text-3xl font-bold text-brand-dark">Products Management</h1>
                  <button className="btn-primary text-sm py-2 px-4 flex items-center gap-2">
                    <Plus size={16} />
                    Add Product
                  </button>
                </div>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-neutral-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-brand-dark uppercase tracking-wider">Product</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-brand-dark uppercase tracking-wider">Category</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-brand-dark uppercase tracking-wider">Price</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-brand-dark uppercase tracking-wider">Stock</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-brand-dark uppercase tracking-wider">Sales</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-brand-dark uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-brand-dark uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200">
                      {products.map((product) => (
                        <tr key={product.id} className="hover:bg-neutral-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-brand-dark">{product.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-brand-dark/70">{product.category}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-brand-dark">{formatPrice(product.price)}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-brand-dark/70">{product.stock}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-brand-dark/70">{product.sales}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`text-xs px-2 py-1 rounded ${getStatusColor(product.status)}`}>
                              {product.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <button className="text-brand-primary hover:underline mr-3">
                              <Edit size={16} className="inline" />
                            </button>
                            <button className="text-red-600 hover:underline">
                              <Trash2 size={16} className="inline" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'customers' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h1 className="text-3xl font-bold text-brand-dark">Customers</h1>
                  <button className="btn-primary text-sm py-2 px-4 flex items-center gap-2">
                    <Plus size={16} />
                    Export
                  </button>
                </div>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-neutral-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-brand-dark uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-brand-dark uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-brand-dark uppercase tracking-wider">Orders</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-brand-dark uppercase tracking-wider">Total Spent</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-brand-dark uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-brand-dark uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200">
                      {customers.map((customer) => (
                        <tr key={customer.id} className="hover:bg-neutral-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-brand-dark">{customer.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-brand-dark/70">{customer.email}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-brand-dark/70">{customer.orders}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-brand-dark">{formatPrice(customer.totalSpent)}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`text-xs px-2 py-1 rounded ${getStatusColor(customer.status)}`}>
                              {customer.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <button className="text-brand-primary hover:underline mr-3">View</button>
                            <button className="text-brand-primary hover:underline">Edit</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
