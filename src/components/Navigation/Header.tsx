"use client";

import NavLink from "./NavLink";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-gray-300 shadow">
            <nav className="flex items-center justify-between px-4 py-2">
                <NavLink href="/">Home</NavLink>
                <div className="flex gap-4">
                    <NavLink href="/articles">Articles</NavLink>
                    <NavLink href="/articles/favorite">Favorites</NavLink>
                    <NavLink href="/articles/create">Create</NavLink>
                    <NavLink href="/profile/setting">Setting</NavLink>
                    <NavLink href="/profile/security">Security</NavLink>
                </div>
            </nav>
        </header>
    );
}
