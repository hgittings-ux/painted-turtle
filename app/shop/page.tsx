"use client";

import { useState } from 'react';
import Image from 'next/image';

const products = [
  { id: 1, name: 'Lake Reflections Card', price: 5, image: '/window.svg', description: 'A serene lake scene in watercolor' },
  { id: 2, name: 'Forest Path Card', price: 5, image: '/globe.svg', description: 'Ancient trails through the woods' },
  { id: 3, name: 'Sunset Pines Print', price: 15, image: '/vercel.svg', description: 'Golden hour in the forest' },
  { id: 4, name: 'Blue Jay Greeting Card', price: 5, image: '/images/blue-jay-greeting-card.jpeg', description: 'A cheerful blue jay in watercolor' },
  { id: 5, name: 'Northern Lights Card', price: 6, image: '/next.svg', description: 'Aurora borealis over the lake' },
  { id: 6, name: 'Wildflower Meadow Print', price: 18, image: '/file.svg', description: 'Colorful wildflowers in bloom' },
];

export default function Shop() {
  const [cart, setCart] = useState<{ id: number; name: string; price: number; qty: number }[]>([]);

  function addToCart(product: typeof products[0]) {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  }

  function removeFromCart(id: number) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  function updateQuantity(id: number, newQty: number) {
    if (newQty <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prev) => prev.map((item) =>
      item.id === id ? { ...item, qty: newQty } : item
    ));
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="min-h-screen bg-cream text-olive font-body">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-lake/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-sunset/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="font-heading text-5xl md:text-6xl text-olive mb-8">
            Shop
          </h1>
          <p className="text-xl text-olive/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Every card is hand-painted by the artist with watercolors, inspired by Northern Michigan
          </p>
          <div className="bg-gradient-to-br from-white/90 to-sky/20 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/30">
            <p className="text-lg text-turtle font-semibold mb-2">
              🚧 Shop Coming Soon! 🚧
            </p>
                          <p className="text-olive/70">
                We're working hard to bring you beautiful, hand-painted cards and prints. 
                The demo cart below shows what's coming!
              </p>
          </div>
        </div>
      </section>

      {/* Cart Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="card p-8">
            <h2 className="font-heading text-3xl text-olive mb-8 text-center">
              Shopping Cart
            </h2>
            
            {cart.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-sky/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛒</span>
                </div>
                <p className="text-olive/60 text-lg">Your cart is empty</p>
                <p className="text-olive/40 text-sm mt-2">Add some beautiful artwork to get started!</p>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 bg-sky/10 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white rounded-lg shadow-sm"></div>
                      <div>
                        <h3 className="font-semibold text-olive">{item.name}</h3>
                        <p className="text-olive/60 text-sm">${item.price}.00 each</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.qty - 1)}
                          className="w-8 h-8 bg-white rounded-full shadow-sm flex items-center justify-center hover:bg-sky/20 transition-colors"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-semibold">{item.qty}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.qty + 1)}
                          className="w-8 h-8 bg-white rounded-full shadow-sm flex items-center justify-center hover:bg-sky/20 transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-olive">${item.price * item.qty}.00</div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-xs text-sunset underline hover:text-olive transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="border-t border-olive/20 pt-6">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xl font-semibold text-olive">Total:</span>
                    <span className="text-2xl font-bold text-turtle">${total}.00</span>
                  </div>
                  <button
                    className="w-full btn-primary text-lg py-4 disabled:opacity-50"
                    disabled
                  >
                    Checkout (Coming Soon)
                  </button>
                  <p className="text-center text-olive/50 text-sm mt-4">
                    Secure checkout and shipping will be available soon!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
} 