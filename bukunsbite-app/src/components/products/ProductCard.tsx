import React from 'react';
import Button from '@/components/common/Button';

interface ProductCardProps {
  name: string;
  price: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, description }) => {
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{description}</p>
      <Button>Add to Cart</Button>
    </div>
  );
};

export default ProductCard;