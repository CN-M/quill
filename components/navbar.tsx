import Link from "next/link";
import { buttonVariants, Button } from "./ui/button";
import { MaxWidthWrapper } from "./max-width-wrapper";
import { SignInButton, SignOutButton } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/api";

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

              {user ? (
                <UserButton afterSignOutUrl="/" />
              ) : (
                <SignInButton afterSignInUrl="/dashboard">
                  <Button variant="ghost" size="sm">
                    Sign in
                  </Button>
                </SignInButton>
              )}
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
