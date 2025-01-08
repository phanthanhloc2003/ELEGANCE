
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-burgundy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">ELEGANCE</h3>
            <p className="text-burgundy-200">Discover the latest fashion trends in women's clothing.</p>
            <div className="flex space-x-4 mt-4">
              <Facebook className="h-5 w-5 hover:text-burgundy-300 cursor-pointer" />
              <Instagram className="h-5 w-5 hover:text-burgundy-300 cursor-pointer" />
              <Twitter className="h-5 w-5 hover:text-burgundy-300 cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-burgundy-200">
              <li className="hover:text-white cursor-pointer">New Arrivals</li>
              <li className="hover:text-white cursor-pointer">Best Sellers</li>
              <li className="hover:text-white cursor-pointer">Sale</li>
              <li className="hover:text-white cursor-pointer">Collections</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-burgundy-200">
              <li className="hover:text-white cursor-pointer">Contact Us</li>
              <li className="hover:text-white cursor-pointer">Shipping Policy</li>
              <li className="hover:text-white cursor-pointer">Returns & Exchanges</li>
              <li className="hover:text-white cursor-pointer">Size Guide</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-burgundy-200">
              <p className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +1 234 567 890
              </p>
              <p className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                contact@elegance.com
              </p>
              <p className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                123 Fashion Street, NY
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-burgundy-800 mt-8 pt-8 text-center text-burgundy-300">
          <p>&copy; 2024 Elegance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;