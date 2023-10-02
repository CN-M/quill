import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants, Button } from "./ui/button";
import { MaxWidthWrapper } from "./max-width-wrapper";
import { ArrowRight } from "lucide-react";
import {
  SignInButton,
  SignOutButton,
  UserButton,
  currentUser,
  ClerkLoading,
  ClerkLoaded,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/api";
import { Skeleton } from "./ui/skeleton";

export const Navbar = async () => {
  const user: User | null = await currentUser();

  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <span>quill.</span>
          </Link>

          {/* Todo: add Mobile navbar */}

          <div className="hidden items-center space-x-4 sm:flex">
            <>
              <Link
                href="/pricing"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                Pricing
              </Link>

              <SignedIn>
                <ClerkLoading>
                  <Skeleton className="h-8 w-8 rounded-full" />
                </ClerkLoading>
                <ClerkLoaded>
                  <div className="h-8 w-8 rounded-full">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                </ClerkLoaded>
              </SignedIn>
              <SignedOut>
                <ClerkLoading>
                  <Skeleton
                    className={
                      (cn(
                        buttonVariants({
                          size: "sm",
                          variant: "ghost",
                        })
                      ),
                      "h-9 w-20 rounded-md")
                    }
                  />
                </ClerkLoading>
                <ClerkLoaded>
                  <SignInButton afterSignInUrl="/dashboard">
                    <Button variant="ghost" size="sm">
                      Sign in
                    </Button>
                  </SignInButton>
                </ClerkLoaded>
              </SignedOut>
              <Link
                className={buttonVariants({
                  size: "sm",
                })}
                href={"/"}
              >
                Get started <ArrowRight className="ml-1.5 h-5 w-5" />
              </Link>
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};
