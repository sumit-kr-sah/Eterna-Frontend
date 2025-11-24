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
    <div className="bg-[#101114] h-full overflow-hidden flex flex-col mx-7 my-7">
      {/* Trending Navigation */}
      <div className="flex items-center justify-between bg-[#06070B] h-12 px-4 shrink-0">
        {/* Left - Tabs */}
        <div className="flex items-center gap-4">
          <button className="text-white font-semibold text-lg hover:text-gray-300 transition-colors">
            Trending
          </button>
          <button className="text-gray-500 font-semibold text-lg hover:text-white transition-colors">
            Surge
          </button>
          <button className="text-gray-500 font-semibold text-lg hover:text-white transition-colors">
            DEX Screener
          </button>
          <button className="text-gray-500 font-semibold text-lg hover:text-white transition-colors flex items-center gap-1">
            Pump Live
            <Icon name="chevronDown" size={14} className="text-gray-500" />
          </button>
        </div>

        {/* Right - Filters and Actions */}
        <div className="flex items-center gap-3">
          {/* Time filters */}
          <div className="flex items-center gap-1">
            <button className="text-gray-400 text-sm font-medium px-2.5 py-1 hover:text-white transition-colors">
              1m
            </button>
            <button className="text-blue-500 text-sm font-medium px-2.5 py-1 bg-blue-500/10 rounded transition-colors">
              5m
            </button>
            <button className="text-gray-400 text-sm font-medium px-2.5 py-1 hover:text-white transition-colors">
              30m
            </button>
            <button className="text-gray-400 text-sm font-medium px-2.5 py-1 hover:text-white transition-colors">
              1h
            </button>
          </div>

          {/* Filter button */}
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-800 rounded text-sm text-white hover:bg-gray-700 transition-colors">
            <Icon name="filter" size={14} />
            <span>Filter</span>
            <Icon name="chevronDown" size={14} className="text-gray-400" />
          </button>

          {/* Action icons */}
          <button className="text-gray-400 hover:text-white transition-colors">
            <Icon name="star" size={18} />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <Icon name="eye" size={18} />
          </button>

          {/* Counter */}
          <div className="flex items-center gap-2 bg-gray-800 rounded px-2.5 py-1.5">
            <Icon name="document" size={14} className="text-white" />
            <span className="text-white text-sm font-medium">1</span>
            <span className="text-blue-500 text-sm font-medium">0</span>
            <Icon name="chevronDown" size={14} className="text-gray-400" />
          </div>

          {/* Quick Buy */}
          <div className="flex items-center gap-2">
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
      <div className="flex-1 overflow-y-auto">
        <div className="w-full">
          {/* Header */}
          <div className="sticky top-0 z-20 bg-[#101114] flex flex-row w-full min-w-[1164px] h-12 px-4 items-center border-b border-gray-800/50">
            <div className="flex-none w-[320px]">
              <span className="text-gray-500 text-xs font-medium">
                Pair Info
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-gray-500 text-xs font-medium">
                Market Cap
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-gray-500 text-xs font-medium">
                Liquidity
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-gray-500 text-xs font-medium">Volume</span>
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-gray-500 text-xs font-medium">TXNS</span>
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-gray-500 text-xs font-medium">
                Token Info
              </span>
            </div>
            <div className="flex-none w-32 text-right">
              <span className="text-gray-500 text-xs font-medium">Action</span>
            </div>
          </div>

          {/* Rows */}
          <div className="flex flex-col">
            {tokens.map((token) => (
              <div
                key={token.id}
                className="flex flex-row w-full min-w-[1164px] px-4 py-3 items-center border-b border-gray-800/30 hover:bg-gray-900/30 transition-colors"
              >
                {/* Pair Info */}
                <div className="flex-none w-[320px] flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center overflow-hidden shrink-0">
                    <span className="text-sm text-white font-medium">
                      {token.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-white font-medium text-sm">
                        {token.name}
                      </h3>
                      <span className="text-gray-500 text-xs">
                        {token.description}
                      </span>
                      <Icon
                        name="document"
                        className="text-gray-600"
                        size={12}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 text-xs">
                        {token.timeAgo}
                      </span>
                      <Icon name="user" className="text-gray-600" size={12} />
                      <Icon name="camera" className="text-gray-600" size={12} />
                      <Icon name="link" className="text-gray-600" size={12} />
                      <Icon name="search" className="text-gray-600" size={12} />
                    </div>
                  </div>
                </div>

                {/* Market Cap */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="text-white text-sm font-medium">
                        {token.marketCap.value}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
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
                <div className="flex-1 min-w-0">
                  <span className="text-white text-sm">{token.liquidity}</span>
                </div>

                {/* Volume */}
                <div className="flex-1 min-w-0">
                  <span className="text-white text-sm">{token.volume}</span>
                </div>

                {/* TXNS */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-white text-sm font-medium">
                      {token.transactions.total}
                    </span>
                    <div className="flex items-center gap-1 text-xs">
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
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col gap-0.5 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-red-400">
                        {token.tokenInfo.holderPercentage}
                      </span>
                      <span className="text-green-400">
                        {token.tokenInfo.taxPercentage}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">
                        {token.tokenInfo.unpaidPercentage}
                      </span>
                      <span className="text-green-400">
                        {token.tokenInfo.paidPercentage}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">
                        {token.tokenInfo.unpaidPercentage}
                      </span>
                      <span className="text-red-400">
                        {token.tokenInfo.paidPercentage}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">
                        {token.tokenInfo.unpaidPercentage}
                      </span>
                      <span className="text-green-400">Paid</span>
                    </div>
                  </div>
                </div>

                {/* Action */}
                <div className="flex-none w-32 flex justify-end">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-2 rounded-lg transition-colors">
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
