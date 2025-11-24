import React from "react";
import { Icon } from "./ui/Icon";

export const SecondaryNav: React.FC = () => {
  return (
    <div className="grayscale-[30%] hover:grayscale-0 transition-[filter] relative flex flex-row w-full h-[28px] gap-2 px-4 pb-px overflow-hidden border-b border-gray-800 sm:border-gray-800/50">
      <div className="flex flex-row h-full items-center z-20 gap-2">
        <span className="contents">
          <button
            type="button"
            className="min-w-[24px] min-h-[24px] flex items-center justify-center text-gray-400 hover:text-gray-300 hover:bg-gray-800/60 transition-colors duration-125 ease-in-out rounded"
          >
            <Icon name="settings" size={14} className="text-gray-400" />
          </button>
        </span>
      </div>
      <div className="flex flex-row h-full items-center z-20 gap-2">
        <div className="w-px h-4 bg-gray-800"></div>
      </div>
      <div className="flex flex-row h-full items-center z-20 gap-2">
        <span className="contents">
          <button
            type="button"
            className="min-w-[24px] min-h-[24px] flex items-center justify-center text-gray-300 hover:text-gray-300 hover:bg-gray-800/60 transition-colors duration-125 ease-in-out rounded"
          >
            <Icon name="star" size={14} className="text-gray-300" />
          </button>
        </span>
        <span className="contents">
          <button
            type="button"
            className="min-w-[24px] min-h-[24px] flex items-center justify-center text-gray-400 hover:text-gray-300 hover:bg-gray-800/60 transition-colors duration-125 ease-in-out rounded"
          >
            <Icon name="chart" size={14} className="text-gray-400" />
          </button>
        </span>
      </div>
      <div className="flex flex-row h-full items-center z-20 gap-2">
        <div className="w-px h-4 bg-gray-800"></div>
      </div>
      <div className="flex flex-row justify-start items-center flex-1 overflow-hidden duration-150 ease-in-out">
        <div className="h-full flex flex-row gap-px pt-px items-center overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div
            style={{
              width: "0px",
              height: "100%",
              position: "relative",
              display: "flex",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
