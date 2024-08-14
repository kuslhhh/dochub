"use client";

import { Button } from "@/components/ui/button";
import { ArrowBigRight, ArrowRight } from "lucide-react";

export const Heading = () =>{
    return(
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Your Ideas, Documents, & Plans. Unified. Welcome to <span
                className="underline">DocHub</span>   
            </h1>            
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                DocHub is the connected workspace here <br />
                for all your ideas, documents, and plans.
            </h3>
            <Button>
                Enter DocHub
                <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
        </div>
    )
}