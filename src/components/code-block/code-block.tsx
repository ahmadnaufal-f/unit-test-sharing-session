'use client'

import { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-javascript'
import 'prismjs/themes/prism-tomorrow.css'
import { Fira_Code } from 'next/font/google'
import styles from './code-block.module.css'

const firaCode = Fira_Code({ subsets: ['latin'] })

const CodeBlock = ({ code, language }: { code: string; language: string }) => {
    useEffect(() => {
        Prism.highlightAll()
    }, [])

    return (
        <div className={styles.codeBlockContainer}>
            <div className={styles.codeBlockHeader}>
                <span className={styles.codeBlockLanguage}>{language}</span>
                <p onClick={() => navigator.clipboard.writeText(code)} className={styles.copyButton}>
                    Copy Code
                </p>
            </div>
            <pre className={firaCode.className + ' ' + styles.codeBlockContent}>
                <code className={language === 'javascript' ? 'language-javascript' : 'language-typescript'} style={{ fontFamily: 'inherit' }}>
                    {code}
                </code>
            </pre>
        </div>
    )
}

export default CodeBlock
