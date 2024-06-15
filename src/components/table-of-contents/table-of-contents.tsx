'use client'

import { chapterList } from '@/utils/chapter-list'
import Link from 'next/link'
import { IoList, IoClose } from 'react-icons/io5'
import { useState } from 'react'
import commonStyles from '@/styles/common.module.css'
import styles from './table-of-contents.module.css'
import { motion, AnimatePresence } from 'framer-motion'

export const TableOfContents = () => {
    const headings = chapterList.map((chapter) => ({
        link: chapter.link,
        text: chapter.title,
        subchapters: chapter.subchapters
    }))

    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)} className={`${commonStyles.iconButton} ${isOpen ? styles.openedButton : ''}`}>
                {isOpen ? <IoClose /> : <IoList />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={styles.contentsContainer}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                    >
                        <ul>
                            {headings.map((heading, index) => (
                                <li key={index}>
                                    <Link href={heading.link}>{heading.text}</Link>
                                    {heading.subchapters.length > 0 && (
                                        <ul>
                                            {heading.subchapters.map((subchapter, subIndex) => (
                                                <li key={subIndex}>
                                                    <Link href={subchapter.link}>{subchapter.title}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
