"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

const serviceOptions = [
  { label: "Website Design", basePrice: 500 },
  { label: "Logo Design", basePrice: 300 },
  { label: "Print Material", basePrice: 200 },
  { label: "SEO (Search Engine Optimization)", basePrice: 400 },
  { label: "Photography", basePrice: 350 },
  { label: "Videography", basePrice: 600 },
  { label: "ClientFlow CRM Integration", basePrice: 750 },
];

export default function PricingPage() {
  const { id } = useParams(); // Lead ID from URL
  const router = useRouter();

  const [cart, setCart] = useState([]);
  const [customItem, setCustomItem] = useState({
    label: "",
    price: "",
    quantity: 1,
  });
  const [discount, setDiscount] = useState(0);
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);

  const addService = (service) => {
    const exists = cart.find((item) => item.label === service.label);
    if (exists) {
      // Increase quantity if already added
      setCart(
        cart.map((item) =>
          item.label === service.label
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...service, quantity: 1 }]);
    }
  };

  const addCustomItem = () => {
    if (!customItem.label || !customItem.price) return;
    setCart([
      ...cart,
      {
        label: customItem.label,
        basePrice: parseFloat(customItem.price),
        quantity: parseInt(customItem.quantity) || 1,
      },
    ]);
    setCustomItem({ label: "", price: "", quantity: 1 });
  };

  const removeItem = (index) => {
    setCart(cart.filter((_, idx) => idx !== index));
  };

  const updateQuantity = (index, quantity) => {
    setCart(
      cart.map((item, idx) =>
        idx === index ? { ...item, quantity: parseInt(quantity) || 1 } : item
      )
    );
  };

  const calculateSubtotal = () => {
    return cart.reduce((sum, item) => sum + item.basePrice * item.quantity, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    return subtotal - (parseFloat(discount) || 0);
  };

  const finalizeEstimate = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/leads/${id}/update`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          estimate: {
            cart,
            discount: parseFloat(discount) || 0,
            notes,
            subtotal: calculateSubtotal(),
            total: calculateTotal(),
            createdAt: new Date(),
          },
        }),
      });

      if (res.ok) {
        alert("✅ Estimate saved successfully!");
        router.push("/admin");
      } else {
        alert("❌ Failed to save estimate.");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Unexpected error occurred.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="flex flex-col tablet:flex-row flex-1">
        {/* Left: Services and Custom Items */}
        <div className="w-full tablet:w-3/4 p-6 space-y-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">Select Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {serviceOptions.map((service) => (
                <button
                  key={service.label}
                  onClick={() => addService(service)}
                  className="w-full p-4 bg-white rounded border hover:bg-primary hover:text-primary-foreground transition"
                >
                  {service.label} — ${service.basePrice}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Add Custom Line Item</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Service Name"
                value={customItem.label}
                onChange={(e) =>
                  setCustomItem({ ...customItem, label: e.target.value })
                }
                className="p-2 border rounded"
              />
              <input
                type="number"
                placeholder="Price"
                value={customItem.price}
                onChange={(e) =>
                  setCustomItem({ ...customItem, price: e.target.value })
                }
                className="p-2 border rounded"
              />
              <input
                type="number"
                placeholder="Quantity"
                value={customItem.quantity}
                onChange={(e) =>
                  setCustomItem({ ...customItem, quantity: e.target.value })
                }
                className="p-2 border rounded"
              />
            </div>
            <button
              onClick={addCustomItem}
              className="mt-4 px-6 py-2 bg-primary text-primary-foreground rounded hover:bg-primary-dark"
            >
              Add Custom Item
            </button>
          </div>
        </div>

        {/* Right: Cart */}
        <div className="w-full tablet:w-1/4 bg-white p-6 border-l tablet:sticky tablet:top-6 h-fit">
          <h2 className="text-2xl font-bold mb-6">Estimate Cart</h2>

          {/* Cart Items */}
          <div className="space-y-4 mb-6">
            {cart.length === 0 ? (
              <p className="text-gray-400">No services added yet.</p>
            ) : (
              cart.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <div>
                    <div className="font-medium">{item.label}</div>
                    <div className="text-xs text-gray-500">
                      ${item.basePrice.toFixed(2)} ×{" "}
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(index, e.target.value)}
                        className="w-12 p-1 border rounded text-xs ml-2"
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(index)}
                    className="text-red-500 hover:text-red-700 text-lg"
                  >
                    &times;
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Discount */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Discount ($)
            </label>
            <input
              type="number"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Notes */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Notes</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full p-2 border rounded"
              rows="4"
            />
          </div>

          {/* Total */}
          <div className="text-xl font-bold mb-6">
            Total: ${calculateTotal().toFixed(2)}
          </div>

          {/* Finalize */}
          <button
            onClick={finalizeEstimate}
            disabled={loading}
            className={`w-full px-6 py-3 rounded text-white ${
              loading ? "bg-gray-400" : "bg-primary hover:bg-primary-dark"
            } transition`}
          >
            {loading ? "Saving..." : "Finalize Estimate"}
          </button>
        </div>
      </div>
    </div>
  );
}
