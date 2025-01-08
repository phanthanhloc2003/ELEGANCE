import { Link } from 'react-router-dom';
import { ShoppingBag, User, Search } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-burgundy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-2xl">ELEGANCE</Link>
          
          <div className="flex items-center space-x-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-burgundy-800 text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-burgundy-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            
            <div className="flex items-center space-x-6">
              <Link to="/auth" className="hover:text-burgundy-200">
                <User className="h-6 w-6" />
              </Link>
              <Link to="/cart" className="hover:text-burgundy-200 relative">
                <ShoppingBag className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-burgundy-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;