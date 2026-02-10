"use client"

import Link from "next/link";
import { SidebarLink } from "@/src/shared/types/SidebarLink";
import { usePathname } from "next/navigation";

interface ILayoutSidebarProps {
    links: SidebarLink[];
}

function LayoutSidebar({ links }: ILayoutSidebarProps) {

    const pathname = usePathname()

    return (
        <aside className="w-65 h-full px-2 py-3">
            <div>
                <h1 className="font-bold text-2xl">EFESSE</h1>
            </div>
            <nav>
                <ul className="flex flex-col space-y-1 mt-12">
                    {links && links.map((link, _item) => (
                        <li  key={link.href} >
                            <Link href={link.href} className={`w-full h-13.75 rounded-xl flex items-center justify-start gap-x-3 px-4 hover:pl-5 transition-normal duration-200 ${pathname == link.href ? 'bg-[#ffffff09]' : ''}`}> 
                                {link.icon && link.icon}
                                <p>
                                    {link.label}
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}

export { LayoutSidebar };