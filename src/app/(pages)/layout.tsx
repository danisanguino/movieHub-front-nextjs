import Header from "@/components/header/header";
import Sidebar from "@/components/sidebar/sidebar";

export default function PagesLayout({children}: Readonly<{children: React.ReactNode}>) {
        return (
            <main>
                {/* <Sidebar/> */}
                <Header/>
                {children}
            </main>
        )
}