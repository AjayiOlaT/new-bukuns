import { Link } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';

const Navbar = () => {
  const { cartItemsCount } = useCart();

  return (
    <header className="bg-background-light shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary-color">
            Bukun's Bite
          </Link>

          {/* Navigation Links */}
          <ul className="flex items-center space-x-8">
            <li>
              <Link 
                to="/" 
                className="text-text-primary hover:text-primary-color transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/products" 
                className="text-text-primary hover:text-primary-color transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link 
                to="/cart" 
                className="relative text-text-primary hover:text-primary-color transition-colors"
              >
                Cart
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-4 bg-primary-color text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartItemsCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;