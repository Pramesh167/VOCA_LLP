import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  auth,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { links } from "@/config";

export const Header = () => {
  const { userId } = auth();

  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="mx-auto flex h-full items-center justify-between lg:max-w-screen-lg">
        <Link href="/" className="flex items-center gap-x-3 pl-4 pt-6">
          <div className="-mt-2 flex h-16 w-16 items-center justify-center">
            <Image src="/mascot.svg" alt="Mascot" height={60} width={60} />
          </div>

          <h1
            className="mt-4 text-xl font-black text-black"
            style={{ letterSpacing: "-0.05em" }}
          >
            VOCA
          </h1>
        </Link>

        <div className="flex gap-x-3">
          <ClerkLoading>
            <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
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

            <Link
              href={links}
              target="_blank"
              rel="noreferrer noopener"
              className={userId ? "pt-1.5" : "pt-3"}
            >
            </Link>
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
};
