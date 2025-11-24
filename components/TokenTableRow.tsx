import React from "react";
import { TokenPair } from "@/types";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import { MiniChart } from "./ui/MiniChart";
import { Icon } from "./ui/Icon";

interface TokenTableRowProps {
  token: TokenPair;
}

export const TokenTableRow: React.FC<TokenTableRowProps> = ({ token }) => {
  return (
    <tr
      key={token.id}
      className="border-b bg-amber-700 border-gray-800 hover:bg-gray-800/50 transition-colors"
    >
      {/* Pair Info */}
      <td className="py-4 px-4">
        <div className="flex items-center space-x-3 bg-pink-700">
          <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center overflow-hidden">
            <span className="text-xs text-white">{token.name.charAt(0)}</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2">
              <h3 className="text-white font-medium text-sm truncate">
                {token.name}
              </h3>
              <span className="text-xs text-gray-400">{token.timeAgo}</span>
            </div>
            <p className="text-xs text-gray-500 truncate">
              {token.description}
            </p>
            <div className="flex items-center space-x-1 mt-1">
              <Icon name="edit" className="text-gray-500" size={12} />
              <Icon name="camera" className="text-gray-500" size={12} />
              <Icon name="lock" className="text-gray-500" size={12} />
              <Icon name="search" className="text-gray-500" size={12} />
              <Icon name="link" className="text-gray-500" size={12} />
              <Icon name="users" className="text-gray-500" size={12} />
            </div>
          </div>
        </div>
      </td>

      {/* Market Cap */}
      <td className="py-4 px-4">
        <div className="flex flex-col space-y-1">
          <span className="text-white text-sm font-medium">
            {token.marketCap.value}
          </span>
          <div className="flex items-center space-x-2">
            <Badge variant={token.marketCap.isPositive ? "success" : "danger"}>
              {token.marketCap.change}
            </Badge>
            <MiniChart isPositive={token.marketCap.isPositive} />
          </div>
        </div>
      </td>

      {/* Liquidity */}
      <td className="py-4 px-4">
        <span className="text-white text-sm">{token.liquidity}</span>
      </td>

      {/* Volume */}
      <td className="py-4 px-4">
        <span className="text-white text-sm">{token.volume}</span>
      </td>

      {/* TXNS */}
      <td className="py-4 px-4">
        <div className="flex flex-col">
          <span className="text-white text-sm">{token.transactions.total}</span>
          <div className="flex items-center space-x-1 text-xs">
            <span className="text-green-400">{token.transactions.buys}</span>
            <span className="text-gray-500">/</span>
            <span className="text-red-400">{token.transactions.sells}</span>
          </div>
        </div>
      </td>

      {/* Token Info */}
      <td className="py-4 px-4">
        <div className="flex flex-col space-y-0.5 text-xs">
          <div className="flex items-center space-x-2">
            <Icon name="user" className="text-gray-500" size={12} />
            <span className="text-white">
              {token.tokenInfo.holderPercentage}
            </span>
            <span className="text-gray-500">
              {token.tokenInfo.taxPercentage}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-white">
              {token.tokenInfo.unpaidPercentage}
            </span>
            <span className="text-gray-500">
              {token.tokenInfo.paidPercentage}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-500">0%</span>
            <span className="text-gray-500">Unpaid</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-500">
              {token.tokenInfo.paidPercentage}
            </span>
            <span className="text-gray-500">Paid</span>
          </div>
          {token.tokenInfo.holderCount && (
            <div className="text-gray-400 mt-1">
              {token.tokenInfo.holderCount}
            </div>
          )}
          {token.tokenInfo.otherValue && (
            <div className="text-gray-400">{token.tokenInfo.otherValue}</div>
          )}
        </div>
      </td>

      {/* Action */}
      <td className="py-4 px-4">
        <Button variant="primary" size="sm">
          Buy
        </Button>
      </td>
    </tr>
  );
};
