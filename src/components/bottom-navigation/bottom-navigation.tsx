'use client'

import Link from 'next/link'
import styles from './bottom-navigation.module.css'
import { getChapterIndex, getNextChapter, getPreviousChapter } from '@/utils/chapter-list'
import { usePathname } from 'next/navigation'

function NavigationLink({ nav, text, href }: { href: string; text: string; nav: string }) {
    return (
        <Link className={`${styles.linkContainer} ${nav === 'next' ? styles.linkNext : ''}`} href={href}>
            <p className={styles.linkNav}>{nav === 'next' ? 'Next Page' : 'Previous Page'}</p>
            <p className={styles.linkText}>{text}</p>
        </Link>
    )
}

export default function BottomNavigation() {
    const currentLink = usePathname()
    const indexes = getChapterIndex(currentLink)
    let prevChapter, nextChapter
    if (indexes.chapter === null) {
        prevChapter = null
        nextChapter = getNextChapter(0, null)
    } else {
        prevChapter = getPreviousChapter(indexes.chapter, indexes.subChapter)
        nextChapter = getNextChapter(indexes.chapter, indexes.subChapter)
    }
    return (
        <div className={styles.navigationWrapper}>
            {prevChapter && <NavigationLink nav="prev" text={prevChapter.title} href={prevChapter.link} />}
            {!prevChapter && <div />}
            {nextChapter && <NavigationLink nav="next" text={nextChapter.title} href={nextChapter.link} />}
        </div>
    )
}
