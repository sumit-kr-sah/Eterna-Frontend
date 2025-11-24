"use client";

import React from "react";
import { TokenPair } from "@/types";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import { MiniChart } from "./ui/MiniChart";
import { Icon } from "./ui/Icon";

interface TokenTableProps {
  tokens: TokenPair[];
}

export const TokenTable: React.FC<TokenTableProps> = ({ tokens }) => {
  return (
    <div className="bg-[#101114] max-h-[calc(100vh-200px)] md:max-h-[calc(100vh-200px)] overflow-hidden flex flex-col mx-2 sm:mx-4 md:mx-7 mt-2 sm:mt-4 md:mt-7 mb-2 sm:mb-4 md:mb-7 rounded-lg">
      {/* Trending Navigation */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-[#06070B] min-h-12 px-2 sm:px-4 py-2 sm:py-0 shrink-0 gap-2 sm:gap-0">
        {/* Left - Tabs */}
        <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto w-full sm:w-auto">
          <button className="text-white font-semibold text-sm sm:text-base md:text-lg hover:text-gray-300 transition-colors whitespace-nowrap">
            Trending
          </button>
          <button className="text-gray-500 font-semibold text-sm sm:text-base md:text-lg hover:text-white transition-colors whitespace-nowrap">
            Surge
          </button>
          <button className="hidden sm:block text-gray-500 font-semibold text-sm sm:text-base md:text-lg hover:text-white transition-colors whitespace-nowrap">
            DEX Screener
          </button>
          <button className="hidden md:flex text-gray-500 font-semibold text-sm sm:text-base md:text-lg hover:text-white transition-colors items-center gap-1 whitespace-nowrap">
            Pump Live
            <Icon name="chevronDown" size={14} className="text-gray-500" />
          </button>
        </div>

        {/* Right - Filters and Actions */}
        <div className="flex items-center gap-1 sm:gap-2 md:gap-3 overflow-x-auto">
          {/* Time filters */}
          <div className="flex items-center gap-0.5 sm:gap-1">
            <button className="text-white text-xs sm:text-sm font-medium px-1.5 sm:px-2.5 py-1 hover:text-white transition-colors">
              1m
            </button>
            <button className="text-blue-500 text-xs sm:text-sm font-medium px-1.5 sm:px-2.5 py-1 bg-blue-500/10 rounded transition-colors">
              5m
            </button>
            <button className="hidden sm:block text-white text-xs sm:text-sm font-medium px-1.5 sm:px-2.5 py-1 hover:text-white transition-colors">
              30m
            </button>
            <button className="hidden md:block text-white text-sm font-medium px-2.5 py-1 hover:text-white transition-colors">
              1h
            </button>
          </div>

          {/* Filter button */}
          <button className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-800 rounded-full text-xs sm:text-sm text-white hover:bg-gray-700 transition-colors">
            <Icon name="filter" size={12} className="sm:w-3.5 sm:h-3.5" />
            <span className="hidden sm:inline">Filter</span>
            <Icon
              name="chevronDown"
              size={12}
              className="text-gray-400 sm:w-3.5 sm:h-3.5"
            />
          </button>

          {/* Action icons */}
          <button className="hidden sm:block text-gray-400 hover:text-white transition-colors">
            <Icon name="star" size={16} className="md:w-[18px] md:h-[18px]" />
          </button>
          <button className="hidden sm:block text-gray-400 hover:text-white transition-colors">
            <Icon name="eye" size={16} className="md:w-[18px] md:h-[18px]" />
          </button>

          {/* Counter */}
          <div className="hidden md:flex items-center gap-2 border border-gray-800 rounded-full px-2.5 py-1.5">
            <Icon name="document" size={14} className="text-white" />
            <span className="text-white text-sm font-medium">1</span>
            <span className="text-blue-500 text-sm font-medium">0</span>
            <Icon name="chevronDown" size={14} className="text-gray-400" />
          </div>

          {/* Quick Buy */}
          <div className="hidden lg:flex items-center gap-2 border border-gray-800 rounded-full px-2.5 py-1.5">
            <span className="text-gray-500 text-sm">Quick Buy 0.0</span>
            <div className="flex items-center gap-1">
              <button className="px-2 py-0.5 bg-gray-800 text-white text-xs rounded hover:bg-gray-700">
                P1
              </button>
              <button className="px-2 py-0.5 bg-gray-800 text-white text-xs rounded hover:bg-gray-700">
                P2
              </button>
              <button className="px-2 py-0.5 bg-gray-800 text-white text-xs rounded hover:bg-gray-700">
                P3
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="flex-1 overflow-y-auto overflow-x-auto pb-4 sm:pb-7">
        <div className="w-full min-w-[768px]">
          {/* Header */}
          <div className="sticky top-0 z-20 bg-[#101114] flex flex-row w-full min-w-[768px] lg:min-w-[1164px] h-10 sm:h-12 px-2 sm:px-4 items-center border-b border-gray-800/50">
            <div className="flex-none w-[200px] sm:w-[250px] lg:w-[320px]">
              <span className="text-gray-500 text-xs font-medium">
                Pair Info
              </span>
            </div>
            <div className="flex-1 min-w-[80px] sm:min-w-0">
              <span className="text-gray-500 text-xs font-medium">
                Market Cap
              </span>
            </div>
            <div className="hidden sm:block flex-1 min-w-0">
              <span className="text-gray-500 text-xs font-medium">
                Liquidity
              </span>
            </div>
            <div className="hidden md:block flex-1 min-w-0">
              <span className="text-gray-500 text-xs font-medium">Volume</span>
            </div>
            <div className="flex-1 min-w-[60px] sm:min-w-0">
              <span className="text-gray-500 text-xs font-medium">TXNS</span>
            </div>
            <div className="hidden lg:block flex-1 min-w-0">
              <span className="text-gray-500 text-xs font-medium">
                Token Info
              </span>
            </div>
            <div className="flex-none w-16 sm:w-24 lg:w-32 text-right">
              <span className="text-gray-500 text-xs font-medium">Action</span>
            </div>
          </div>

          {/* Rows */}
          <div className="flex flex-col">
            {tokens.map((token) => (
              <div
                key={token.id}
                className="flex flex-row w-full min-w-[768px] lg:min-w-[1164px] px-2 sm:px-4 py-2 sm:py-3 items-center border-b border-gray-800/30 hover:bg-gray-900/30 transition-colors"
              >
                {/* Pair Info */}
                <div className="flex-none w-[200px] sm:w-[250px] lg:w-[320px] flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gray-800 flex items-center justify-center overflow-hidden shrink-0">
                    <img
                      src={`/${token.icon || "default-token.png"}`}
                      alt={token.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.parentElement!.innerHTML = `<span class="text-xs sm:text-sm text-white font-medium">${token.name.charAt(
                          0
                        )}</span>`;
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1 sm:gap-2 mb-0.5 sm:mb-1">
                      <h3 className="text-white font-medium text-xs sm:text-sm truncate">
                        {token.name}
                      </h3>
                      <span className="hidden sm:inline text-gray-500 text-xs truncate">
                        {token.description}
                      </span>
                      <Icon
                        name="document"
                        className="hidden sm:inline text-gray-600"
                        size={12}
                      />
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <span className="text-green-400 text-xs">
                        {token.timeAgo}
                      </span>
                      <Icon name="user" className="text-gray-600" size={10} />
                      <Icon
                        name="camera"
                        className="hidden sm:inline text-gray-600"
                        size={10}
                      />
                      <Icon
                        name="link"
                        className="hidden sm:inline text-gray-600"
                        size={10}
                      />
                      <Icon
                        name="search"
                        className="hidden md:inline text-gray-600"
                        size={10}
                      />
                    </div>
                  </div>
                </div>

                {/* Market Cap */}
                <div className="flex-1 min-w-[80px] sm:min-w-0">
                  <div className="flex items-center gap-1 sm:gap-2 lg:gap-3">
                    <div className="shrink-0 hidden sm:block">
                      <MiniChart isPositive={token.marketCap.isPositive} />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-white text-xs sm:text-sm font-medium">
                        {token.marketCap.value}
                      </span>
                      <span
                        className={`text-xs font-medium ${
                          token.marketCap.isPositive
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {token.marketCap.change}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Liquidity */}
                <div className="hidden sm:block flex-1 min-w-0">
                  <span className="text-white text-xs sm:text-sm">
                    {token.liquidity}
                  </span>
                </div>

                {/* Volume */}
                <div className="hidden md:block flex-1 min-w-0">
                  <span className="text-white text-xs sm:text-sm">
                    {token.volume}
                  </span>
                </div>

                {/* TXNS */}
                <div className="flex-1 min-w-[60px] sm:min-w-0">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-white text-xs sm:text-sm font-medium">
                      {token.transactions.total}
                    </span>
                    <div className="flex items-center gap-0.5 sm:gap-1 text-xs">
                      <span className="text-green-400 font-medium">
                        {token.transactions.buys}
                      </span>
                      <span className="text-gray-500">/</span>
                      <span className="text-red-400 font-medium">
                        {token.transactions.sells}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Token Info */}
                <div className="hidden lg:block flex-1 min-w-0">
                  <div className="grid grid-cols-2 gap-x-3 gap-y-0.5 text-xs">
                    {/* Row 1 */}
                    <div className="flex items-center gap-1">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        className="text-red-400"
                      >
                        <path d="M5 7L2 3h6L5 7z" fill="currentColor" />
                      </svg>
                      <span className="text-red-400 font-medium">
                        {token.tokenInfo.holderPercentage}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        className="text-green-400"
                      >
                        <path d="M5 3L8 7H2L5 3z" fill="currentColor" />
                      </svg>
                      <span className="text-green-400 font-medium">
                        {token.tokenInfo.taxPercentage}
                      </span>
                    </div>

                    {/* Row 2 */}
                    <div className="flex items-center gap-1">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        className="text-green-400"
                      >
                        <path d="M5 3L8 7H2L5 3z" fill="currentColor" />
                      </svg>
                      <span className="text-green-400 font-medium">
                        {token.tokenInfo.unpaidPercentage}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        className="text-green-400"
                      >
                        <path d="M5 3L8 7H2L5 3z" fill="currentColor" />
                      </svg>
                      <span className="text-green-400 font-medium">
                        {token.tokenInfo.paidPercentage}
                      </span>
                    </div>

                    {/* Row 3 */}
                    <div className="flex items-center gap-1">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        className="text-green-400"
                      >
                        <circle cx="5" cy="5" r="4" fill="currentColor" />
                        <path
                          d="M3 5l1.5 1.5L7 3.5"
                          stroke="#101114"
                          strokeWidth="1.5"
                          fill="none"
                        />
                      </svg>
                      <span className="text-green-400 font-medium">
                        {token.tokenInfo.unpaidPercentage}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        className="text-red-400"
                      >
                        <circle
                          cx="5"
                          cy="5"
                          r="4"
                          stroke="currentColor"
                          strokeWidth="1"
                          fill="none"
                        />
                        <path
                          d="M3.5 3.5l3 3M6.5 3.5l-3 3"
                          stroke="currentColor"
                          strokeWidth="1"
                        />
                      </svg>
                      <span className="text-red-400 font-medium">Unpaid</span>
                    </div>

                    {/* Row 4 */}
                    <div className="flex items-center gap-1">
                      <Icon name="user" size={10} className="text-gray-400" />
                      <span className="text-white font-medium">
                        {token.tokenInfo.holderCount}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon
                        name="document"
                        size={10}
                        className="text-gray-400"
                      />
                      <span className="text-white font-medium">
                        {token.tokenInfo.otherValue}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action */}
                <div className="flex-none w-16 sm:w-24 lg:w-32 flex justify-end">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-medium px-2 sm:px-3 lg:px-4 py-1 rounded-full transition-colors whitespace-nowrap">
                    Buy
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
