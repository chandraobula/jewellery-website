// Price formatting utility for Indian Rupees
export const formatPrice = (price) => {
  if (!price && price !== 0) return '₹0';
  return `₹${Number(price).toLocaleString('en-IN')}`;
};

export const formatPriceWithDecimals = (price) => {
  if (!price && price !== 0) return '₹0.00';
  return `₹${Number(price).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

// Convert USD to INR (approximate rate: 1 USD = 83 INR)
export const usdToInr = (usdPrice) => {
  return Math.round(usdPrice * 83);
};
