"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

export const TrashBox = () => {

    const router = useRouter();
    const params = useParams();
    const documents = useQuery(api.documents.getTrash);
    const restore = useMutation(api.documents.restore);
    const remove = useMutation(api.documents.remove);

    const [Search, setSearch] = useState("");

    const filteredDocuments = documents?.filter((document) => {
        return document.title.toLowerCase().includes(Search.toLowerCase());
    });

    const onClick = (documentId: string) => {
        router.push(`/documents/${documentId}`);
    };

    const onRestore = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        documentId: Id<"documents">,
    ) => {
        event.stopPropagation();
        const promise = restore({ id: documentId});

        toast.promise(promise, {
            loading: "Restoring...",
            success: "Restored!",
            error: "Failed to restore doc.", 
        }
        )
    }

    const onRemove = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        documentId: Id<"documents">,
    ) => {
        
        const promise = remove ({ id: documentId});

        toast.promise(promise, {
            loading: "Removing...",
            success: "Removed!",
            error: "Failed to remove doc.",
        });
    }


    return (
        <div>
            <h1>Trash Box</h1>
        </div>
    );
};