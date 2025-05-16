"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    activeClassName?: string;
}

export default function NavLink({
                                    href,
                                    children,
                                    className = "",
                                    activeClassName = "active",
                                }: NavLinkProps) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`${className} ${isActive ? activeClassName : ""}`.trim()}
        >
            {children}
        </Link>
    );
}
