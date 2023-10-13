import { useState } from "react";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send the order to the backend)
    console.log("Order submitted:", formData);
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-4 w-full max-w-md mx-auto">
      <h2 className="text-3xl font-semibold">Place Your Order</h2>

      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-600">
            Delivery Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="notes" className="block text-gray-600">
            Additional Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows="4"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
