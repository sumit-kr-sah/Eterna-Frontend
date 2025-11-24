"use client";

import React, { useEffect, useRef } from "react";
import { Icon } from "./ui/Icon";

interface SearchPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchPopup: React.FC<SearchPopupProps> = ({ isOpen, onClose }) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("mousedown", handleClickOutside);
      // Focus the search input when popup opens
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-start justify-center pt-20">
      <div
        ref={popupRef}
        className="bg-[#1a1b1f] border border-gray-800 rounded-xl w-full max-w-3xl mx-4 overflow-hidden shadow-2xl"
      >
        {/* Filter Tabs */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
          <div className="flex items-center gap-2 overflow-x-auto">
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-800 rounded-lg text-sm text-white hover:bg-gray-700 transition-colors whitespace-nowrap">
              <span className="text-green-400">💎</span>
              <span>Pump</span>
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-transparent rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors whitespace-nowrap">
              <span className="text-orange-400">🔥</span>
              <span>Bonk</span>
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-transparent rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors whitespace-nowrap">
              <span className="text-green-400">💰</span>
              <span>Bags</span>
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-transparent rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors whitespace-nowrap">
              <span className="text-yellow-400">💵</span>
              <span>USD1</span>
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-transparent rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors whitespace-nowrap">
              <span className="text-blue-400">🔥</span>
              <span>OG Mode</span>
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-transparent rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors whitespace-nowrap">
              <span className="text-purple-400">🎓</span>
              <span>Graduated</span>
            </button>
          </div>

          {/* Sort By Icons */}
          <div className="flex items-center gap-1 ml-4">
            <span className="text-gray-500 text-sm mr-2 whitespace-nowrap">
              Sort by
            </span>
            <button className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
              <Icon name="clock" size={18} />
            </button>
            <button className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
              <Icon name="chart" size={18} />
            </button>
            <button className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                className="text-gray-400"
              >
                <rect
                  x="2"
                  y="4"
                  width="4"
                  height="12"
                  fill="currentColor"
                  rx="1"
                />
                <rect
                  x="8"
                  y="2"
                  width="4"
                  height="14"
                  fill="currentColor"
                  rx="1"
                />
                <rect
                  x="14"
                  y="6"
                  width="4"
                  height="10"
                  fill="currentColor"
                  rx="1"
                />
              </svg>
            </button>
            <button className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                className="text-gray-400"
              >
                <path
                  d="M5 5L10 2L15 5V9C15 13 10 16 10 16C10 16 5 13 5 9V5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Search Input */}
        <div className="p-4 border-b border-gray-800">
          <div className="relative">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search by name, ticker, or CA..."
              className="w-full bg-[#0d0e11] border-none rounded-lg pl-4 pr-20 py-3 text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={onClose}
              className="absolute right-3 top-1/2 -translate-y-1/2 px-3 py-1 bg-gray-800 rounded text-xs text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
            >
              Esc
            </button>
          </div>
        </div>

        {/* History Section */}
        <div className="p-6 max-h-[400px] overflow-y-auto">
          <h3 className="text-gray-400 text-sm font-medium mb-4">History</h3>
          <div className="text-gray-500 text-sm text-center py-8">
            No search history yet
          </div>
        </div>
      </div>
    </div>
  );
};

