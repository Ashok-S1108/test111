
import { Product } from '@/types/product';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299,
    originalPrice: 399,
    description: 'High-quality wireless headphones with active noise cancellation, premium sound quality, and 30-hour battery life.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
    category: 'Electronics',
    inStock: true,
    rating: 4.8,
    reviewCount: 124,
    features: ['Active Noise Cancellation', 'Wireless Bluetooth 5.0', '30-hour Battery Life', 'Premium Sound Quality', 'Comfortable Design']
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 199,
    description: 'Advanced fitness tracking with heart rate monitoring, GPS, and comprehensive health insights.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
    category: 'Electronics',
    inStock: true,
    rating: 4.6,
    reviewCount: 89,
    features: ['Heart Rate Monitor', 'Built-in GPS', 'Water Resistant', 'Sleep Tracking', 'Multiple Sports Modes']
  },
  {
    id: '3',
    name: 'Organic Cotton T-Shirt',
    price: 29,
    originalPrice: 39,
    description: 'Comfortable and sustainable organic cotton t-shirt with premium fit and eco-friendly materials.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop',
    category: 'Clothing',
    inStock: true,
    rating: 4.4,
    reviewCount: 56,
    features: ['100% Organic Cotton', 'Comfortable Fit', 'Sustainable Production', 'Machine Washable']
  },
  {
    id: '4',
    name: 'Professional Camera Lens',
    price: 899,
    originalPrice: 1099,
    description: 'Professional grade camera lens with multiple focal lengths and weather sealing for stunning photography.',
    image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop',
    category: 'Electronics',
    inStock: true,
    rating: 4.9,
    reviewCount: 203,
    features: ['Professional Grade', 'Multiple Focal Lengths', 'Weather Sealed', 'Image Stabilization', 'Premium Optics']
  },
  {
    id: '5',
    name: 'Minimalist Desk Lamp',
    price: 89,
    description: 'Modern LED desk lamp with adjustable brightness, color temperature control, and sleek design.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
    category: 'Home',
    inStock: true,
    rating: 4.5,
    reviewCount: 78,
    features: ['LED Technology', 'Adjustable Brightness', 'Color Temperature Control', 'Modern Design', 'Energy Efficient']
  },
  {
    id: '6',
    name: 'Leather Messenger Bag',
    price: 159,
    originalPrice: 199,
    description: 'Handcrafted genuine leather messenger bag perfect for work, travel, or everyday use.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
    category: 'Accessories',
    inStock: false,
    rating: 4.7,
    reviewCount: 92,
    features: ['Genuine Leather', 'Handcrafted', 'Multiple Compartments', 'Adjustable Strap', 'Professional Design']
  },
  {
    id: '7',
    name: 'Wireless Charging Pad',
    price: 45,
    originalPrice: 59,
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices with LED indicator.',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop',
    category: 'Electronics',
    inStock: true,
    rating: 4.3,
    reviewCount: 134,
    features: ['Fast Wireless Charging', 'Qi Compatible', 'LED Indicator', 'Non-slip Base', 'Compact Design']
  },
  {
    id: '8',
    name: 'Ergonomic Office Chair',
    price: 399,
    originalPrice: 499,
    description: 'Premium ergonomic office chair with lumbar support, adjustable height, and breathable mesh.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
    category: 'Home',
    inStock: true,
    rating: 4.6,
    reviewCount: 167,
    features: ['Ergonomic Design', 'Lumbar Support', 'Adjustable Height', 'Breathable Mesh', '360° Swivel']
  }
];
