import React from "react";
import MobileSidebar from "./mobile-sidebar";

const MobileHeader = () => {
  return (
    <nav className="h-[50px] fixed flex items-center bg-yellow-500 lg:hidden border-b w-full top-0 z-50">
      <MobileSidebar />
    </nav>
  );
};

export default MobileHeader;
