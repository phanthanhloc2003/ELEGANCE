
import { Bell, Search, User } from 'lucide-react';

export const Header = () => {
  return (
    <header className="h-16 bg-white border-b fixed top-0 right-0 left-64 z-10">
      <div className="h-full px-4 flex items-center justify-between">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-96 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-burgundy-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full">
            <Bell className="h-6 w-6" />
            <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
              3
            </span>
          </button>
          
          <div className="flex items-center space-x-3 border-l pl-4">
            <div className="w-8 h-8 bg-burgundy-100 rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-burgundy-700" />
            </div>
            <div className="text-sm">
              <p className="font-medium text-gray-700">Admin User</p>
              <p className="text-gray-500">admin@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};