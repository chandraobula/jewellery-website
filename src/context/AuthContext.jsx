import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored user on mount
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Mock authentication - in production, this would call an API
    // For demo: admin@admin.com / admin123, user@user.com / user123
    let authenticatedUser = null;

    if (email === 'admin@admin.com' && password === 'admin123') {
      authenticatedUser = {
        id: '1',
        email: 'admin@admin.com',
        name: 'Admin User',
        role: 'admin',
        avatar: null
      };
    } else if (email === 'user@user.com' && password === 'user123') {
      authenticatedUser = {
        id: '2',
        email: 'user@user.com',
        name: 'John Doe',
        role: 'user',
        avatar: null,
        phone: '+91 9876543210',
        addresses: []
      };
    } else {
      // Check if user exists in localStorage (for signup)
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const foundUser = users.find(u => u.email === email && u.password === password);
      if (foundUser) {
        authenticatedUser = {
          id: foundUser.id,
          email: foundUser.email,
          name: foundUser.name,
          role: 'user',
          avatar: foundUser.avatar,
          phone: foundUser.phone,
          addresses: foundUser.addresses || []
        };
      }
    }

    if (authenticatedUser) {
      setUser(authenticatedUser);
      localStorage.setItem('user', JSON.stringify(authenticatedUser));
      return { success: true, user: authenticatedUser };
    }

    return { success: false, error: 'Invalid email or password' };
  };

  const signup = (name, email, password, phone) => {
    // Check if user already exists
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find(u => u.email === email)) {
      return { success: false, error: 'Email already registered' };
    }

    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password, // In production, this should be hashed
      phone,
      role: 'user',
      avatar: null,
      addresses: [],
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Auto login after signup
    const authenticatedUser = {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
      role: 'user',
      avatar: null,
      phone: newUser.phone,
      addresses: []
    };

    setUser(authenticatedUser);
    localStorage.setItem('user', JSON.stringify(authenticatedUser));

    return { success: true, user: authenticatedUser };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const updateUser = (updates) => {
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const value = {
    user,
    login,
    signup,
    logout,
    updateUser,
    loading,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin'
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
