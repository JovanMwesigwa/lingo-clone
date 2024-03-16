import { ReactNode } from "react";

const StickyWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="hidden lg:block w-[368px] self-end bottom-6 sticky">
      <div className="min-h-[calc(100vh-48px)] sticky top-6 flex flex-col gap-y-4">
        {children}
      </div>
    </div>
  );
};

export default StickyWrapper;
