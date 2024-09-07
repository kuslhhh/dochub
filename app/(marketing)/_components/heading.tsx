"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowBigRight, ArrowRight } from "lucide-react";
import Link from "next/link";

export const Heading = () => {
    const { isAuthenticated, isLoading } = useConvexAuth();
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold italic underline leading-tight text-black dark:text-white mb-4">
                Introducing <span className=" italic decoration-4 decoration-grey-500">docHub</span>
            </h1>
            <h3 className="text-lg sm:text-2xl md:text-3xl font-medium text-black dark:text-white leading-relaxed">
                let your documents be <span className="italic">accessible</span> and <span className="italic">discoverable</span>
            </h3>

            {isLoading && (
                <div className="w-full flex items-center justify-center">
                    <Spinner size="lg" />
                </div>
            )}
            {isAuthenticated && !isLoading && (
                <Button asChild>
                    <Link href="/documents">
                        Enter DocHub
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            )}
            {!isAuthenticated && !isLoading && (
                <SignInButton mode="modal">
                    <Button>
                        Get docHub free
                        <ArrowRight className="ml-2 h-4 w-4 ml-2" />
                    </Button>
                </SignInButton>
            )}
        </div>
    );
};