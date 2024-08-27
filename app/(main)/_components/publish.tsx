"use client";

import { Doc } from "@/convex/_generated/dataModel";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from "@/components/ui/popover";

interface PublishProps {
    initialData: Doc<"documents">;
};

export const Publish = ({
    initialData,
}: PublishProps) => {
    return (
        <div>
            Publish
        </div>
    )
}