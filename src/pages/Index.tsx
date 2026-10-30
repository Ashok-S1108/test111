
import React, { useState, useMemo } from 'react';
import { CartProvider } from '@/contexts/CartContext';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';
import CartSidebar from '@/components/CartSidebar';
import CategoryFilter from '@/components/CategoryFilter';
import CheckoutForm from '@/components/CheckoutForm';
import { mockProducts } from '@/data/products';
import { Product } from '@/types/product';

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [...new Set(mockProducts.map(product => product.category))];
  
  const filteredProducts = useMemo(() => {
    let filtered = mockProducts;
    
    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        (product.features && product.features.some(feature => 
          feature.toLowerCase().includes(query)
        ))
      );
    }
    
    return filtered;
  }, [selectedCategory, searchQuery]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header onCartClick={handleCartClick} onSearch={handleSearch} />
        
        <main className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 hover:text-primary transition-colors duration-300">
              Welcome to ShopHub
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover amazing products at unbeatable prices. Your one-stop shop for everything you need.
            </p>
          </div>

          {/* Search Results Info */}
          {searchQuery && (
            <div className="mb-6 animate-fade-in">
              <p className="text-gray-600">
                {filteredProducts.length > 0 
                  ? `Found ${filteredProducts.length} product${filteredProducts.length !== 1 ? 's' : ''} for "${searchQuery}"`
                  : `No products found for "${searchQuery}"`
                }
              </p>
            </div>
          )}

          {/* Category Filter */}
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  className="animate-fade-in"
                >
                  <ProductCard
                    product={product}
                    onProductClick={handleProductClick}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 animate-fade-in">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">No products found</h3>
              <p className="text-gray-500 mb-6">
                {searchQuery 
                  ? `Try adjusting your search terms or browse our categories.`
                  : `No products available in this category.`
                }
              </p>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-primary hover:underline"
                >
                  Clear search
                </button>
              )}
            </div>
          )}
        </main>

        <ProductModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />

        <CartSidebar
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          onCheckout={handleCheckout}
        />

        {isCheckoutOpen && (
          <CheckoutForm onClose={() => setIsCheckoutOpen(false)} />
        )}

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 mt-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="animate-fade-in">
                <h3 className="text-xl font-bold mb-4">ShopHub</h3>
                <p className="text-gray-400">Your trusted online shopping destination.</p>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <h4 className="font-semibold mb-4">Customer Service</h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="hover:text-white transition-colors cursor-pointer">Contact Us</li>
                  <li className="hover:text-white transition-colors cursor-pointer">FAQ</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Returns</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Shipping Info</li>
                </ul>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Press</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Investors</li>
                </ul>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <h4 className="font-semibold mb-4">Connect</h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="hover:text-white transition-colors cursor-pointer">Newsletter</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Social Media</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Blog</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Reviews</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <p>&copy; 2024 ShopHub. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
};

export default Index;
