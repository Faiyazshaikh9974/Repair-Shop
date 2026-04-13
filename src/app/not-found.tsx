import Link from "next/link"

export const metadata = {
    title: "Page Not Found | Computer Repair Shop",
}

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100dvh-3rem)] px-4">
            <div className="text-center space-y-6 max-w-md">
                <h1 className="text-7xl font-bold text-foreground/20">404</h1>
                <h2 className="text-2xl font-semibold text-foreground">
                    Page Not Found
                </h2>
                <p className="text-muted-foreground">
                    Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
                <div className="flex gap-4 justify-center pt-4">
                    <Link
                        href="/home"
                        className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
                    >
                        Go Home
                    </Link>
                    <Link
                        href="/tickets"
                        className="inline-flex items-center justify-center rounded-md border border-border px-6 py-2.5 text-sm font-medium text-foreground hover:bg-accent transition-colors"
                    >
                        View Tickets
                    </Link>
                </div>
            </div>
        </div>
    )
}
