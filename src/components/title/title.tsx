import { usePathname } from 'next/navigation'
import { getChapter, getChapterIndex } from '@/utils/chapter-list'
import styles from './title.module.css'

export const Title = () => {
    const pathname = usePathname()
    const indexes = getChapterIndex(pathname)
    const chapter = getChapter(indexes.chapter ?? 0, indexes.subChapter)
    if (!chapter) {
        return null
    }
    if (chapter.subChapter === null) {
        return (
            <div className={styles.titleContainer}>
                <h1>{chapter.title}</h1>
            </div>
        )
    } else {
        return (
            <div className={styles.titleContainer}>
                <h2>{chapter.chapterTitle}</h2>
                <h1>{chapter.title}</h1>
            </div>
        )
    }
}
