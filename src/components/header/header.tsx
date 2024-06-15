'use client'

import useTheme from '@/hooks/useTheme'
import { toggleFullScreen, onFullScreenChange } from '@/utils/fullscreen'
import { TableOfContents } from '../table-of-contents/table-of-contents'
import { IoMoon } from 'react-icons/io5'
import { IoMdSunny } from 'react-icons/io'
import { LuMonitorOff, LuMonitor } from 'react-icons/lu'
import styles from './header.module.css'
import commonStyles from '@/styles/common.module.css'
import { useState, useEffect } from 'react'

export const Header = () => {
    const { theme, toggleTheme } = useTheme()
    const [isFullScreen, setIsFullScreen] = useState<boolean>(false)

    useEffect(() => {
        onFullScreenChange(() => {
            setIsFullScreen(false)
        })
    }, [])

    const handleToggleFullScreen = () => {
        toggleFullScreen()
        setIsFullScreen((prev) => !prev)
    }

    return (
        <header className={styles.header}>
            <TableOfContents />
            <div className={styles.toggleButtons}>
                <button onClick={toggleTheme} className={commonStyles.iconButton}>
                    {theme === 'light' ? <IoMoon /> : <IoMdSunny />}
                </button>
                <button onClick={handleToggleFullScreen} className={commonStyles.iconButton}>
                    {!isFullScreen ? <LuMonitor /> : <LuMonitorOff />}
                </button>
            </div>
        </header>
    )
}
