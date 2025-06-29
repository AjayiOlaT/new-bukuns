import React from 'react';
import Button from '@/components/common/Button';
import ProductCard from '@/components/products/ProductCard';

const products = [
  {
    name: "Bukun's Firecracker Pouch",
    price: "₦700",
    description: "Your perfect on-the-go companion! A fiery kick of spice balanced with a hint of sweetness, packed into a convenient pouch."
  },
  {
    name: "Bukun's Classic Crunch Jar",
    price: "₦1,300",
    description: "The original Bukun's Bite experience. Our signature sweet and spicy Kuli-Kuli, perfectly portioned in our classic jar for daily snacking."
  },
  {
    name: "The Sharer's Bucket",
    price: "₦4,500",
    description: "Why keep the goodness to yourself? The Sharer's Bucket is perfect for movie nights, family gatherings, or treating your colleagues."
  }
];

const HomePage: React.FC = () => {
  return (
    <div>
      <div className="hero-section">
        <h1>Unleash the Sweet Heat. The Kuli-Kuli You Crave Is Here.</h1>
        <Button>Order Now</Button>
      </div>
      <div className="product-highlights">
        <h2>Our Sizes</h2>
        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
      <div className="about-us">
        <h2>About Us</h2>
        <p>At Bukun's Bite, we believe Kuli-Kuli is more than just a snack—it's a feeling. It started in a home kitchen with a simple mission: to perfect the balance between the comforting sweetness and the bold, fiery spice that makes Kuli-Kuli so special. Each batch is crafted with love and the finest local ingredients, ensuring that every bite delivers that signature crunch and an unforgettable taste. This is our passion, made for you to enjoy. Welcome to the Bukun's Bite family.</p>
      </div>
    </div>
  );
};

export default HomePage;