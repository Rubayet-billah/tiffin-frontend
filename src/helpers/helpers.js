// helpers.js

// Function to set data to local storage
export const setToLocalStorage = (key, value) => {
  value = JSON.stringify(value);
  localStorage.setItem(key, value);
};

// Function to get data from local storage
export const getFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// Function to remove data from local storage
export const removeFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

// Function to format currency (e.g., $12.99)
export const formatCurrency = (amount) => {
  return `$${parseFloat(amount).toFixed(2)}`;
};

// Function to calculate the total price of items in a cart
export const calculateTotalPrice = (cart) => {
  return cart.reduce((total, item) => total + item.price, 0);
};

// Function to capitalize the first letter of a string
export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Function to format a date (e.g., "2023-10-11" to "October 11, 2023")
export const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
