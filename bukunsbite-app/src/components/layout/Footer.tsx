import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-background-dark text-text-primary py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Bukun's Bite</h3>
            <p className="text-text-secondary mb-4">
              Delicious snacks and treats made with love and care. Bringing joy to your taste buds since 2023.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-text-secondary hover:text-primary-color transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-text-secondary hover:text-primary-color transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-text-secondary hover:text-primary-color transition-colors">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-text-secondary">
              <li>Email: info@bukunsbite.com</li>
              <li>Phone: +234 123 456 7890</li>
              <li>Address: Lagos, Nigeria</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-text-secondary">
          <p>&copy; {new Date().getFullYear()} Bukun's Bite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;