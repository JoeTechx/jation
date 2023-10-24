"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useConvexAuth } from "convex/react";
import { Spinner } from "@/components/spinner";
import { SignInButton } from "@clerk/clerk-react";
import Link from "next/link";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className=" max-w-3xl space-y-4">
      <h1 className=" text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Document, & Plans. Unified. Welcome to{" "}
        <span className="underline">Jation</span>
      </h1>
      <h3 className=" text-base sm:text-xl md:text-2xl font-medium">
        Jation is the connected workspace where <br />
        better, faster work happens.
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {!isAuthenticated && !isLoading && (
        <>
          <SignInButton mode="modal">
            <Button size="sm">
              Get Jation free
              <ArrowRight className=" h-4 w-4 ml-2" />
            </Button>
          </SignInButton>
        </>
      )}

      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter Jation
            <ArrowRight className=" h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
    </div>
  );
};