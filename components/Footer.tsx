import React from "react";
import { Icon } from "./ui/Icon";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#06070B] border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-gray-800 rounded px-3 py-1.5 cursor-pointer hover:bg-gray-700 transition-colors">
              <span className="text-white text-sm font-medium">PRESET 1</span>
              <Icon name="chevronDown" className="text-gray-400" size={14} />
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-3">
              <button className="text-gray-400 hover:text-white transition-colors">
                <Icon name="wallet" size={18} />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Icon name="twitter" size={18} />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Icon name="search" size={18} />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <span className="text-sm text-gray-400">Pulse</span>
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <span className="text-sm text-gray-400">PnL</span>
              </button>
            </div>
          </div>

          {/* Center Section - Financial Metrics */}
          <div className="hidden lg:flex items-center space-x-6 text-sm">
            <div className="text-white">
              <span className="text-gray-400">$</span>86.8K
            </div>
            <div className="text-white">
              <span className="text-gray-400">$</span>2825
            </div>
            <div className="text-white">
              =<span className="text-gray-400">$</span>130.45
            </div>
            <div className="text-white">
              <span className="text-gray-400">$</span>53.6K
            </div>
            <div className="text-gray-400">0.022</div>
            <div className="text-gray-400">0.004</div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Connection Status */}
            <div className="hidden md:flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-green-400">
                Connection is stable
              </span>
            </div>

            {/* Global Selector */}
            <div className="flex items-center space-x-2 bg-gray-800 rounded px-3 py-1.5 cursor-pointer hover:bg-gray-700 transition-colors">
              <span className="text-white text-sm font-medium">GLOBAL</span>
              <Icon name="chevronDown" className="text-gray-400" size={14} />
            </div>

            {/* Additional Icons */}
            <div className="hidden xl:flex items-center space-x-3">
              <button className="text-gray-400 hover:text-white transition-colors">
                <Icon name="calendar" size={18} />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Icon name="document" size={18} />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Icon name="user" size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
