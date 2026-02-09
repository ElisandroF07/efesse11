import { SidebarLink } from "@/src/shared/types/SidebarLink";
export const SidebarLinks: SidebarLink[] = [
    {
        label: "Dashboard",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g clipPath="url(#clip0_4418_9816)">
                <path d="M9.02 2.84016L3.63 7.04016C2.73 7.74016 2 9.23016 2 10.3602V17.7702C2 20.0902 3.89 21.9902 6.21 21.9902H17.79C20.11 21.9902 22 20.0902 22 17.7802V10.5002C22 9.29016 21.19 7.74016 20.2 7.05016L14.02 2.72016C12.62 1.74016 10.37 1.79016 9.02 2.84016Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 17.9902V14.9902" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_4418_9816">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>,
        href: "/"
    },
    {
        label: "Entrada",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g clipPath="url(#clip0_4418_9827)">
                <path d="M8 12H16" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 16V8" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_4418_9827">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>,
        href: "/check-in"
    },
    {
        label: "Saída",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g clipPath="url(#clip0_4418_9828)">
                <path d="M8 12H16" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_4418_9828">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>,
        href: "/check-out"
    },
    {
        label: "Vagas",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g clipPath="url(#clip0_4418_9177)">
                <path d="M22 11V17C22 21 21 22 17 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11Z" stroke="#ffffff" strokeWidth="1.5" strokeMiterlimit="10" />
            </g>
            <defs>
                <clipPath id="clip0_4418_9177">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>,
        href: "/spots"
    },
    {
        label: "Histórico",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g clipPath="url(#clip0_4418_9980)">
                <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.71 15.1798L12.61 13.3298C12.07 13.0098 11.63 12.2398 11.63 11.6098V7.50977" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_4418_9980">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>,
        href: "/history"
    },
]