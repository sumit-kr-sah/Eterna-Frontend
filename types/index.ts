export interface TokenPair {
  id: string;
  name: string;
  description: string;
  icon: string;
  timeAgo: string;
  marketCap: {
    value: string;
    change: string;
    isPositive: boolean;
  };
  liquidity: string;
  volume: string;
  transactions: {
    total: number;
    buys: number;
    sells: number;
  };
  tokenInfo: {
    holderPercentage: string;
    taxPercentage: string;
    unpaidPercentage: string;
    paidPercentage: string;
    holderCount?: number;
    otherValue?: number;
  };
}

export interface NavigationItem {
  label: string;
  href: string;
  isActive?: boolean;
  hasDropdown?: boolean;
}



