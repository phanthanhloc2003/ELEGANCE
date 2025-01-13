import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ShoppingBag,
  User,
  Search,
  LogOut,
  Settings,
  UserCircle,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reduxs/store";
import { logout } from "../../reduxs/features/auth/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout())
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsUserMenuOpen(false);
    navigate("/auth");
  };

  return (
    <nav className="bg-burgundy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-2xl">
            ELEGANCE
          </Link>

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
              <div className="relative">
                {user ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsUserMenuOpen(true)}
                    onMouseLeave={() => setIsUserMenuOpen(false)}
                  >
                    <button className="flex items-center space-x-2 hover:text-burgundy-200">
                      {user.avatar ? (
                        <img
                          src={user.avatar}
                          alt={user.fullName}
                          className="w-8 h-8 rounded-full object-cover border-2 border-burgundy-200"
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-burgundy-700 flex items-center justify-center border-2 border-burgundy-200">
                          <span className="text-sm font-semibold">
                            {user.fullName.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      )}
                    </button>

                    {/* Dropdown Menu */}
                    {isUserMenuOpen && (
                      <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 animate-fadeIn z-50">
                        <div className="px-4 py-2 text-sm text-gray-700 border-b">
                          <p className="font-semibold">{user.fullName}</p>
                          <p className="text-xs text-gray-500">
                            {user.fullName}
                          </p>
                        </div>
                        <Link
                          to="/profile"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-burgundy-50"
                        >
                          <UserCircle className="h-4 w-4 mr-2" />
                          Profile
                        </Link>
                        <Link
                          to="/settings"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-burgundy-50"
                        >
                          <Settings className="h-4 w-4 mr-2" />
                          Settings
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="flex items-center w-full px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                        >
                          <LogOut className="h-4 w-4 mr-2" />
                          Sign out
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link to="/auth" className="hover:text-burgundy-200">
                    <User className="h-6 w-6" />
                  </Link>
                )}
              </div>

              <Link to="/order" className="hover:text-burgundy-200 relative">
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
};

export default Navbar;
