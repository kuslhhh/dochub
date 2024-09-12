import { Button } from "@/components/ui/button";

export const Footer2 = () => {
    return (
        <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]">
            <div className="md:ml-auto w-full justify-center md:justify-center flex items-center gap-x-2 text-muted-foreground">
                <Button variant="ghost" size="sm">
                    developed by
                    <a
                        href="https://github.com/kuslhhh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold ml-1"
                    >
                        Kushal
                    </a>
                </Button>
            </div>
        </div>
    );
};
