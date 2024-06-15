import BottomNavigation from '@/components/bottom-navigation/bottom-navigation'
import styles from './page.module.css'
import { LottiePlayer } from '@/components/lottie-player/lottie-player'
import { Plus_Jakarta_Sans } from 'next/font/google'

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export default function Home() {
    return (
        <div className={styles.homeContainer}>
            <LottiePlayer animationPath="/lottie/program.json" />
            <h1 className={`${styles.title} ${plusJakartaSans.className}`}>Unit Testing with Air Care Team</h1>
            <h2 className={styles.description}>A Sharing Session</h2>
        </div>
    )
}
