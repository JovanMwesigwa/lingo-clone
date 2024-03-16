import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex h-full items-center justify-center">
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="hr.svg"
            alt="hr"
            width={40}
            height={32}
            className="mr-4 rounded-md"
          />
          Croatian
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="es.svg"
            alt="hr"
            width={40}
            height={32}
            className="mr-4 rounded-md"
          />
          Spanish
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="it.svg"
            alt="hr"
            width={40}
            height={32}
            className="mr-4 rounded-md"
          />
          Italian
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="fr.svg"
            alt="hr"
            width={40}
            height={32}
            className="mr-4 rounded-md"
          />
          French
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="jp.svg"
            alt="hr"
            width={40}
            height={32}
            className="mr-4 rounded-md"
          />
          Japanese
        </Button>
      </div>
    </footer>
  );
};
