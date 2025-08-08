"use client";

import { useState } from 'react';
import Image from 'next/image';

const products = [
  { 
    id: 1, 
    name: 'Blue Jay Greeting Card', 
    price: 5, 
    image: '/images/blue-jay-greeting-card.jpeg', 
    description: 'Description coming soon!',
    category: 'Greeting Cards',
    species: 'Birds',
    inStock: true,
    animalDescription: 'Description coming soon!',
    habitat: 'Deciduous and mixed forests, parks, and suburban areas',
    conservationStatus: 'Least Concern - Population stable'
  },
  { 
    id: 2, 
    name: 'Purple Marten Greeting Card', 
    price: 5, 
    image: '/images/martin-greeting-card.jpeg', 
    description: 'Description coming soon!',
    category: 'Greeting Cards',
    species: 'Mammals',
    inStock: true,
    animalDescription: 'Description coming soon!',
    habitat: 'Open areas near water, often using man-made nest boxes',
    conservationStatus: 'Least Concern - Population stable'
  },
  { 
    id: 3, 
    name: 'Painted Turtle Greeting Card', 
    price: 5, 
    image: '/images/painted-turtle-greeting-card.jpeg', 
    description: 'Description coming soon!',
    category: 'Greeting Cards',
    species: 'Reptiles',
    inStock: true,
    animalDescription: 'Description coming soon!',
    habitat: 'Ponds, lakes, marshes, and slow-moving streams',
    conservationStatus: 'Least Concern - Population stable'
  },
  { 
    id: 4, 
    name: 'Cardinal Print', 
    price: 15, 
    image: '/images/cardinal-PT.jpg', 
    description: 'Description coming soon!',
    category: 'Prints',
    species: 'Birds',
    inStock: true,
    animalDescription: 'Description coming soon!',
    habitat: 'Woodlands, gardens, parks, and shrubby areas',
    conservationStatus: 'Least Concern - Population stable'
  },
  { 
    id: 5, 
    name: 'Great Horned Owl Print', 
    price: 18, 
    image: '/images/great-horned-owl-PT.jpg', 
    description: 'Description coming soon!',
    category: 'Prints',
    species: 'Birds',
    inStock: true,
    animalDescription: 'Description coming soon!',
    habitat: 'Forests, woodlands, parks, and urban areas',
    conservationStatus: 'Least Concern - Population stable'
  },
  { 
    id: 6, 
    name: 'Red-Tailed Hawk Print', 
    price: 18, 
    image: '/images/red-tailed-hawk-PT.jpg', 
    description: 'Description coming soon!',
    category: 'Prints',
    species: 'Birds',
    inStock: true,
    animalDescription: 'Description coming soon!',
    habitat: 'Open areas, fields, forests, and urban areas',
    conservationStatus: 'Least Concern - Population stable'
  },
  { 
    id: 7, 
    name: 'Gold Finch Print', 
    price: 15, 
    image: '/images/gold-finch-PT.jpg', 
    description: 'Description coming soon!',
    category: 'Prints',
    species: 'Birds',
    inStock: true,
    animalDescription: 'The American Goldfinch can be found across the United States year round despite their migration for the breeding season. Male goldfinches are easily spotted from the breeding season of July to September, but during the off season, male Goldfinches molt their bright yellow plumage. This change results in male and female goldfinches appearing nearly identical during spring and winter. Additionally, goldfinches are very social birds, frequently travelling in flocks called “charms.” The groups are called this because of the sweet sounds the birds make..',
    habitat: 'Weedy fields, gardens, parks, and open woodlands',
    conservationStatus: 'Least Concern - Population stable'
  },
  { 
    id: 8, 
    name: 'Indigo Bunting Print', 
    price: 15, 
    image: '/images/indigo-bunting-PT.jpg', 
    description: 'Description coming soon!',
    category: 'Prints',
    species: 'Birds',
    inStock: true,
    animalDescription: 'Description coming soon!',
    habitat: 'Brushy areas, forest edges, and overgrown fields',
    conservationStatus: 'Least Concern - Population stable'
  },
  { 
    id: 9, 
    name: 'Robin Print', 
    price: 15, 
    image: '/images/robin-PT.jpg', 
    description: 'Description coming soon!',
    category: 'Prints',
    species: 'Birds',
    inStock: true,
    animalDescription: 'Description coming soon!',
    habitat: 'Lawns, gardens, parks, and open woodlands',
    conservationStatus: 'Least Concern - Population stable'
  },
  { 
    id: 10, 
    name: 'Black Bear Cub Print', 
    price: 20, 
    image: '/images/black-bear-cub-PT.jpg', 
    description: 'Description coming soon!',
    category: 'Prints',
    species: 'Mammals',
    inStock: true,
    animalDescription: 'Description coming soon!',
    habitat: 'Forests, swamps, and wooded areas',
    conservationStatus: 'Least Concern - Population stable'
  },
  { 
    id: 11, 
    name: 'Spring Peeper Print', 
    price: 12, 
    image: '/images/spring-peeper-PT.jpg', 
    description: 'Description coming soon!',
    category: 'Prints',
    species: 'Amphibians',
    inStock: true,
    animalDescription: 'Description coming soon!',
    habitat: 'Wetlands, ponds, and wooded areas',
    conservationStatus: 'Least Concern - Population stable'
  },
  { 
    id: 12, 
    name: 'Indiana Bat Print', 
    price: 12, 
    image: '/images/indiana-bat-PT.jpg', 
    description: 'Description coming soon!',
    category: 'Prints',
    species: 'Mammals',
    inStock: true,
    animalDescription: 'Description coming soon!',
    habitat: 'Caves, forests, and riparian areas',
    conservationStatus: 'Endangered - Population declining'
  }
];

export default function Shop() {
  const [cart, setCart] = useState<{ id: number; name: string; price: number; qty: number; image: string }[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedSpecies, setSelectedSpecies] = useState<string>('All');
  const [showCart, setShowCart] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];
  const species = ['All', ...Array.from(new Set(products.map(p => p.species)))];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
    const speciesMatch = selectedSpecies === 'All' || product.species === selectedSpecies;
    return categoryMatch && speciesMatch;
  });

  function addToCart(product: typeof products[0], quantity: number = 1) {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + quantity } : item
        );
      }
      return [...prev, { ...product, qty: quantity }];
    });
    setShowCart(true);
    setSelectedProduct(null);
    setSelectedQuantity(1);
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
  const cartItemCount = cart.reduce((sum, item) => sum + item.qty, 0);

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
            Every piece is hand-painted with watercolors, inspired by the natural beauty of Northern Michigan
          </p>
          
          {/* Cart Button */}
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setShowCart(!showCart)}
              className="btn-primary flex items-center space-x-2 px-6 py-3"
            >
              <span>🛒</span>
              <span>Cart ({cartItemCount})</span>
            </button>
          </div>

          {/* Coming Soon Notice */}
          <div className="bg-gradient-to-br from-white/90 to-sky/20 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/30">
            <p className="text-lg text-turtle font-semibold mb-2">
              🚧 Shop Coming Soon! 🚧
            </p>
            <p className="text-olive/70">
              We're working hard to bring you secure checkout and shipping. 
              The demo below shows what's coming!
            </p>
          </div>
        </div>
      </section>

      {/* Cart Section */}
      {showCart && (
        <section className="px-6 py-8 bg-gradient-to-br from-sand via-white to-sand">
          <div className="max-w-4xl mx-auto">
            <div className="card p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="font-heading text-3xl text-olive">
                  Shopping Cart
                </h2>
                <button
                  onClick={() => setShowCart(false)}
                  className="text-olive/60 hover:text-olive transition-colors"
                >
                  ✕
                </button>
              </div>
              
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
                        <div className="w-16 h-16 bg-white rounded-lg shadow-sm overflow-hidden">
                          <Image 
                            src={item.image} 
                            alt={item.name}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </div>
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
      )}

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-cream rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="font-heading text-3xl text-olive">{selectedProduct.name}</h2>
                <button
                  onClick={() => {
                    setSelectedProduct(null);
                    setSelectedQuantity(1);
                  }}
                  className="text-olive/60 hover:text-olive transition-colors text-2xl"
                >
                  ✕
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Product Image */}
                <div className="space-y-4">
                  <div className="aspect-square bg-white rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-2xl text-turtle">${selectedProduct.price}.00</span>
                    <div className="flex space-x-2">
                      <span className="bg-turtle text-white text-sm px-3 py-1 rounded-full">
                        {selectedProduct.category}
                      </span>
                      <span className="bg-forest text-white text-sm px-3 py-1 rounded-full">
                        {selectedProduct.species}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Product Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading text-xl text-olive mb-3">About the Animal</h3>
                    <p className="text-olive/80 leading-relaxed">{selectedProduct.animalDescription}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-olive mb-2">Habitat</h4>
                      <p className="text-olive/70 text-sm">{selectedProduct.habitat}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-olive mb-2">Conservation Status</h4>
                      <p className="text-olive/70 text-sm">{selectedProduct.conservationStatus}</p>
                    </div>
                  </div>
                  
                  {/* Quantity Selection */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-olive">Quantity</h4>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => setSelectedQuantity(Math.max(1, selectedQuantity - 1))}
                          className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center hover:bg-sky/20 transition-colors"
                        >
                          -
                        </button>
                        <span className="w-12 text-center font-semibold text-lg">{selectedQuantity}</span>
                        <button
                          onClick={() => setSelectedQuantity(selectedQuantity + 1)}
                          className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center hover:bg-sky/20 transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-olive/60">
                        Total: ${(selectedProduct.price * selectedQuantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  
                  {/* Add to Cart Button */}
                  <button
                    onClick={() => addToCart(selectedProduct, selectedQuantity)}
                    className="w-full btn-primary py-4 text-lg"
                    disabled={!selectedProduct.inStock}
                  >
                    {selectedProduct.inStock ? `Add ${selectedQuantity} to Cart` : 'Out of Stock'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Product Catalog */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Filter Section */}
          <div className="mb-12">
            <div className="flex justify-center mb-6">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="btn-primary flex items-center space-x-2 px-6 py-3"
              >
                <span>🔍</span>
                <span>Filters</span>
                {showFilters && <span>▼</span>}
                {!showFilters && <span>▶</span>}
              </button>
            </div>

            {/* Filter Dropdown */}
            {showFilters && (
              <div className="card p-6 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Category Filter */}
                  <div>
                    <h3 className="font-semibold text-olive mb-3">Product Type</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`w-full text-left px-3 py-2 rounded-lg transition-all ${
                            selectedCategory === category
                              ? 'bg-turtle text-white'
                              : 'bg-white text-olive hover:bg-sky/20 border border-olive/20'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Species Filter */}
                  <div>
                    <h3 className="font-semibold text-olive mb-3">Species</h3>
                    <div className="space-y-2">
                      {species.map((specie) => (
                        <button
                          key={specie}
                          onClick={() => setSelectedSpecies(specie)}
                          className={`w-full text-left px-3 py-2 rounded-lg transition-all ${
                            selectedSpecies === specie
                              ? 'bg-forest text-white'
                              : 'bg-white text-olive hover:bg-sky/20 border border-olive/20'
                          }`}
                        >
                          {specie}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Results Count */}
                <div className="text-center mt-6 pt-4 border-t border-olive/20">
                  <p className="text-olive/60">
                    Showing {filteredProducts.length} of {products.length} products
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="card p-6 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative mb-4">
                  <div className="aspect-square bg-white rounded-xl overflow-hidden shadow-md">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute top-2 right-2 flex flex-col space-y-1">
                    <span className="bg-turtle text-white text-xs px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                    <span className="bg-forest text-white text-xs px-2 py-1 rounded-full">
                      {product.species}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-heading text-lg font-semibold text-olive group-hover:text-turtle transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-olive/70 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-xl text-turtle">
                      ${product.price}.00
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                      }}
                      className="btn-primary px-4 py-2 text-sm"
                      disabled={!product.inStock}
                    >
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-sky/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <p className="text-olive/60 text-lg">No products found with these filters</p>
              <p className="text-olive/40 text-sm mt-2">Try adjusting your category or species selection</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
} 