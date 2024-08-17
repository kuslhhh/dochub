"use client";
import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { toast } from "sonner";

import { api } from "@/convex/_generated/api";


const Documentspage = () => {

    const { user } = useUser();
    const create = useMutation(api.documents.create);

    const onCreate = () => {
        const promise = create({ title: "Untitled" });

        toast.promise(promise, {
            loading: "Creating your doc...",
            success: "Your doc has been created!",
            error: "Failed to create your doc.",
        });
    }

    return ( 
        <div className="h-screen flex flex-col items-center justify-center space-y-4">
            <Image 
                src = "/empty.png"
                height = "300"
                width = "300"
                alt = "empty"
                className = "dark:hidden"
            />
            <Image 
                src = "/empty-dark.png"
                height = "300"
                width = "300"
                alt = "empty"
                className = "hidden dark:block"
            />
            <h2 className="text-lg font-medium">
                Welcome to { user?.firstName }&apos;s docHub 
            </h2>
            <Button onClick={onCreate}> 
                <PlusCircle className="h-4 w-4 mr-2"/>
                    Create a doc
            </Button>

        </div>
     );
}
 
export default Documentspage;