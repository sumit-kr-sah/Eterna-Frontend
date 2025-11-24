import React from "react";
import { Button } from "./ui/Button";
import { Icon } from "./ui/Icon";

interface NavigationItem {
  label: string;
  href: string;
  isActive?: boolean;
}

const navigationItems: NavigationItem[] = [
  { label: "Discover", href: "#", isActive: true },
  { label: "Pulse", href: "#" },
  { label: "Trackers", href: "#" },
  { label: "Perpetuals", href: "#" },
  { label: "Yield", href: "#" },
  { label: "Vision", href: "#" },
  { label: "Portfolio", href: "#" },
];

export const Header: React.FC = () => {
  return (
    <header className="bg-[#06070B] border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center mr-12">
            <div className="flex flex-row items-center gap-2">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[36px] h-[36px] sm:w-[36px] sm:h-[36px] text-textPrimary"
              >
                <g clip-path="url(#clip0_88_28967)">
                  <path
                    d="M24.1384 17.3876H11.8623L18.0001 7.00012L24.1384 17.3876Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M31 29.0003L5 29.0003L9.96764 20.5933L26.0324 20.5933L31 29.0003Z"
                    fill="currentColor"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_88_28967">
                    <rect
                      width="26"
                      height="22"
                      fill="white"
                      transform="translate(5 7)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="102"
                height="21"
                viewBox="0 0 103 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="max-w-[102px] hidden 2xl:block text-textPrimary"
              >
                <path
                  d="M56.1914 18.3745V1.33447H59.7434L64.8074 15.3265L69.8714 1.33447H73.4234V18.3745H70.8314V5.89447L66.2474 18.3505H63.3674L58.7834 5.89447V18.3745H56.1914Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M45.9362 18.7584C40.9922 18.7584 37.9922 15.3984 37.9922 9.87844C37.9922 4.35844 40.9922 0.950439 45.9362 0.950439C50.9282 0.950439 53.9042 4.35844 53.9042 9.87844C53.9042 15.3984 50.9282 18.7584 45.9362 18.7584ZM45.9362 16.3824C49.2482 16.3824 51.2162 13.9824 51.2162 9.87844C51.2162 5.77444 49.2482 3.32644 45.9362 3.32644C42.6482 3.32644 40.6802 5.77444 40.6802 9.87844C40.6802 13.9824 42.6482 16.3824 45.9362 16.3824Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M33.1055 18.3745V1.33447H35.6975V18.3745H33.1055Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M16.9023 18.3745L22.5663 9.83047L16.9503 1.33447H19.9983L24.1983 7.81447L28.3263 1.33447H31.3503L25.7343 9.78247L31.4223 18.3745H28.3743L24.1503 11.7985L19.9263 18.3745H16.9023Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M0.980469 18.3745L7.12447 1.33447H10.4125L16.5565 18.3745H13.7965L12.2365 13.9345H5.27647L3.74047 18.3745H0.980469ZM6.09247 11.5825H11.4445L8.75647 3.80647L6.09247 11.5825Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M99.2929 18.6624C97.0311 18.6624 95.5703 16.9661 95.5703 14.3116C95.5703 11.6571 97.0311 9.96069 99.2929 9.96069C101.539 9.96069 103 11.6571 103 14.3116C103 16.9661 101.539 18.6624 99.2929 18.6624ZM99.2929 17.6729C100.926 17.6729 101.916 16.4006 101.916 14.3116C101.916 12.2225 100.926 10.9502 99.2929 10.9502C97.6437 10.9502 96.6541 12.2225 96.6541 14.3116C96.6541 16.4006 97.6437 17.6729 99.2929 17.6729Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M90.9961 18.4742V10.1494H91.8914L91.9385 11.7987C92.2684 10.6835 92.9438 10.1494 94.0276 10.1494H94.7501V11.1547H93.9962C92.7396 11.1547 92.0328 12.0186 92.0328 13.4008V18.4742H90.9961Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M81.2461 18.4741V7.32202H85.1572C87.6075 7.32202 89.0525 8.57859 89.0525 10.6519C89.0525 12.7253 87.6075 13.9818 85.1572 13.9818H82.3142V18.4741H81.2461ZM82.3142 12.9452H85.1572C86.9792 12.9452 87.9216 12.1441 87.9216 10.6519C87.9216 9.14405 86.9792 8.35869 85.1572 8.35869H82.3142V12.9452Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-4">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium px-3 py-2 rounded transition-all hover:bg-blue-900/40 hover:text-[#2775CA] ${
                  item.isActive ? "text-[#2775CA]" : "text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden xl:flex items-center flex-1 max-w-md mx-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Icon name="search" className="text-gray-400" size={18} />
              </div>
              <input
                type="text"
                placeholder="Search by token or CA..."
                className="w-full bg-[#06070B] border border-gray-700 rounded-full pl-10 pr-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Currency Selector */}
            <div className="hidden lg:flex items-center space-x-1 bg-gray-800 rounded-full px-3 py-2 cursor-pointer hover:bg-gray-700 transition-colors">
              <span className="text-white text-sm font-medium">SOL</span>
              <Icon name="chevronDown" className="text-gray-400" size={16} />
            </div>

            {/* Deposit Button */}
            <Button
              variant="primary"
              size="sm"
              className="hidden md:block rounded-full"
            >
              Deposit
            </Button>

            {/* Icons */}
            <button className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors shrink-0">
              <Icon
                name="star"
                size={20}
                className="text-gray-400 hover:text-white"
              />
            </button>
            <button className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors shrink-0">
              <Icon
                name="bell"
                size={20}
                className="text-gray-400 hover:text-white"
              />
            </button>

            {/* Numerical Indicators */}
            <button className="hidden xl:flex w-fit min-w-max bg-gray-800 flex-row h-8 px-3 py-2 gap-2 items-center rounded-full hover:bg-gray-700 transition-colors shrink-0">
              <Icon name="wallet" size={18} className="text-white" />
              <div className="flex shrink-0 whitespace-nowrap flex-row gap-1 justify-start items-center">
                <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                <span className="text-sm font-semibold text-white">0</span>
              </div>
              <div className="shrink-0 w-px h-full bg-gray-600"></div>
              <div className="flex shrink-0 whitespace-nowrap flex-row gap-1 justify-start items-center">
                <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                <span className="text-sm font-semibold text-white">0</span>
              </div>
              <Icon name="chevronDown" size={18} className="text-white" />
            </button>

            {/* User Profile */}
            <button className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors shrink-0">
              <Icon
                name="user"
                size={20}
                className="text-gray-400 hover:text-white"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
