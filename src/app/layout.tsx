import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header/header'
import { SlideTitle } from '@/components/slide-title/slide-title'
import styles from '@/styles/common.module.css'
import BottomNavigation from '@/components/bottom-navigation/bottom-navigation'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Unit Testing with Air Care Team',
    description: 'A Sharing Session'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={openSans.className}>
                <Header />
                <main className={styles.main}>
                    <div className={styles.slide}>
                        <SlideTitle />
                        {children}
                        <BottomNavigation />
                    </div>
                </main>
            </body>
        </html>
    )
}
