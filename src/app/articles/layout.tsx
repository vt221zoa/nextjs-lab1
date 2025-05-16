export default function DashboardLayout({ children, }: { children: React.ReactNode
}) {
    return (
        <div>
            <div>
                Layout article
            </div>
            <section>
                {children}
            </section>
        </div>
    )
}