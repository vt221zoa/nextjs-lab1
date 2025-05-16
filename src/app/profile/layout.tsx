export default function DashboardLayout({ children, }: { children: React.ReactNode
}) {
    return (
        <div>
            <div>
                Profile layout
            </div>
            <main>
                {children}
            </main>
        </div>
    )
}