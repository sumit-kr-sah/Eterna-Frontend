import React from "react";
import { Icon } from "./ui/Icon";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#06070B] border-t border-gray-800/50">
      <div className="w-full px-4">
        <div className="flex items-center justify-between h-7">
          {/* Left Section */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-blue-900/40 rounded px-2 py-0.5 cursor-pointer hover:bg-blue-900/50 transition-colors">
              <span className="text-[#526FFF] text-xs font-medium">
                PRESET 1
              </span>
              <Icon name="chevronDown" className="text-[#526FFF]" size={12} />
            </div>

            {/* Icons */}
            <div className="flex items-center gap-1.5">
              <button className="text-gray-400 hover:text-white transition-colors">
                <Icon name="wallet" size={14} />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Icon name="twitter" size={14} />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Icon name="discover" size={14} />
              </button>
              <button className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors">
                <Icon name="chart" size={14} />
                <span className="text-xs">Pulse</span>
              </button>
              <button className="flex items-center text-gray-400 hover:text-white transition-colors">
                <span className="text-xs">PnL</span>
              </button>
            </div>
          </div>

          {/* Center Section - Financial Metrics */}
          <div className="hidden lg:flex items-center gap-3 text-xs">
            <div className="flex items-center">
              <Icon name="wallet" size={12} className="text-yellow-500 mr-1" />
              <span className="text-yellow-500 font-semibold">$87.4K</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
              <span className="text-blue-400 font-semibold">$2865</span>
            </div>
            <div className="flex items-center">
              <span className="text-white font-semibold">= $133.74</span>
            </div>
            <div className="flex items-center">
              <Icon name="wallet" size={12} className="text-gray-400 mr-1" />
              <span className="text-white font-semibold">$54.9K</span>
            </div>
            <div className="flex items-center">
              <Icon name="document" size={12} className="text-gray-400 mr-1" />
              <span className="text-gray-400 font-medium">0.0L4</span>
            </div>
            <div className="flex items-center">
              <Icon name="search" size={12} className="text-gray-400 mr-1" />
              <span className="text-gray-400 font-medium">0.0368</span>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            {/* Connection Status */}
            <div className="hidden md:flex items-center gap-1">
              <div className="w-1.5 h-1.5  bg-green-500 rounded-full"></div>
              <span className="text-xs text-green-400">
                Connection is stable
              </span>
            </div>

            {/* Global Selector */}
            <div className="flex items-center gap-1 bg-gray-800 rounded px-2 py-0.5 cursor-pointer hover:bg-gray-700 transition-colors">
              <span className="text-white text-xs font-medium">GLOBAL</span>
              <Icon name="chevronDown" className="text-gray-400" size={12} />
            </div>

            {/* Additional Icons */}
            <div className="hidden xl:flex items-center gap-1.5">
              <button className="text-gray-400 hover:text-white transition-colors">
                <Icon name="calendar" size={14} />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Icon name="bell" size={14} />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Icon name="settings" size={14} />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Icon name="twitter" size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
