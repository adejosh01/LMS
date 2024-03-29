"use client"

import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export const NavbarRoutes = () => {
    const pathname = usePathname();
    const router = useRouter();

    const isTeacherPage = pathname?.startsWith("/teacher");
    const isPlayerPage = pathname?.includes("/chapter")

    return ( 
        <div className="flex gap-x-2 ml-auto">
            {isTeacherPage || isPlayerPage ? (
                <Link href="/">
                    <Button >
                        <LogOut className="h-4 w-4 mr-4" />
                        Exit
                    </Button>
                </Link>
              
            ): (
               <Link href="/teacher/courses">
                    <Button size="sm" variant="ghost">
                       Teacher mode 
                    </Button>
               </Link> 
            )}
            <UserButton 
                afterSignOutUrl="/"
            />
        </div>
     );
}
