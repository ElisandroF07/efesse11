"use client"

import Link from "next/link";
import { SidebarLink } from "@/src/shared/types/SidebarLink";
import { usePathname } from "next/navigation";

interface ILayoutNavbar {
    links: SidebarLink[];
}

function LayoutNavbar({ links }: ILayoutNavbar) {

    const pathname = usePathname()

    return (
        <aside className="w-full h-[80px]">
            <ul className="flex w-full h-full px-2 py-2">
                    {links && links.map((link, _item) => (
                        <Link key={link.href} href={link.href} className={`w-full h-full rounded-xl flex items-center justify-center ${pathname == link.href ? 'bg-[#ffffff09]' : ''}`}> 
                                {link.icon && link.icon}
                        </Link>
                    ))}
                </ul>
        </aside>
    )
}

export { LayoutNavbar };