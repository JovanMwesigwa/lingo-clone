import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import React from "react";

export const Header = () => {
  return (
    <header className="h-20 border-b-2 w-full border-slate-200 px-4">
      <div className="lg:max-w-screen-lg lg mx-auto flex items-center justify-between h-full ">
        <div className=" pl-4 flex items-center gap-x-3">
          <Image src="/mascot.svg" height={40} width={40} alt="Mascot" />
          <h1 className="text-2xl font-extrabold text-green-500 tracking-wide">
            Lingo
          </h1>
        </div>

        <ClerkLoading>
          <Loader className="w-5 h-5 text-muted-foreground animate-spin" />
        </ClerkLoading>

        <ClerkLoaded>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

          <SignedOut>
            <SignInButton
              mode="modal"
              afterSignInUrl="/learn"
              afterSignUpUrl="/learn"
            >
              <Button size="lg" variant="ghost">
                Login
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  );
};
