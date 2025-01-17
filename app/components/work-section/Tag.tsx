import React from "react";

export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <p className="uppercase whitespace-nowrap bg-gradient-to-r from-light-gray to-light-gray px-2 py-[6px] md:py-[6px] md:px-3 rounded-[4px] font-medium md:font-bold text-navy-blue lg:text-lg">
      {children}
    </p>
  );
}
