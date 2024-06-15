'use client'

import Link from 'next/link'
import { TiHome } from 'react-icons/ti'
import styles from './breadcrumb.module.css'
import { usePathname } from 'next/navigation'
import { linkToTitle } from '@/utils/chapter-list'

export const BreadCrumb = () => {
    const pathName = usePathname()
    const { title, parentTitle, parentLink } = linkToTitle(pathName)

    return (
        <div className={styles.breadcrumb}>
            <Link href="/" className={styles.breadcrumbLink}>
                <TiHome />
            </Link>
            <span className={styles.breadcrumbSeparator}>/</span>
            {parentTitle && (
                <>
                    <Link href={parentLink ?? '/'} className={styles.breadcrumbLink}>
                        {parentTitle}
                    </Link>
                    <span className={styles.breadcrumbSeparator}>/</span>
                </>
            )}
            <span className={styles.breadcrumbCurrent}>{title}</span>
        </div>
    )
}
