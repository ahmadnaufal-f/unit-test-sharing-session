import BottomNavigation from '@/components/bottom-navigation/bottom-navigation'
import styles from './page.module.css'

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.slide}>
                <h1 className={styles.title}>Unit Testing with Air Care Team</h1>
                <h2 className={styles.description}>A Sharing Session</h2>
                <div className={styles.navigationContainer}>
                    <BottomNavigation currentLink="/" />
                </div>
            </div>
        </main>
    )
}
