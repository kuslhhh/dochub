import { Button } from "@/components/ui/button";

export const Footer2 = () => {
    return (
        <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]">
            <div className="md:ml-auto w-full justify-center md:justify-center flex items-center gap-x-2 text-muted-foreground">
                <Button variant="ghost" size="sm">
                    
                    <a
                        href="https://dochub-livid.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold ml-1"
                    >
                       developed by Kushal
                    </a>
                </Button>
            </div>
        </div>
    );
};
