import Header from "@/components/header/header";

export default function PagesLayout({children}: Readonly<{children: React.ReactNode}>) {
        return (
            <main>
                <Header/>
                {children}
            </main>
        )
}