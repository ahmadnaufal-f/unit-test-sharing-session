'use client'
import { useState, useEffect } from 'react'

const useTheme = () => {
    const defaultTheme = 'light'
    const [theme, setTheme] = useState<string>(defaultTheme)

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme')
        if (storedTheme) {
            setTheme(storedTheme)
            document.documentElement.setAttribute('data-theme', storedTheme)
        } else {
            const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches
            const systemTheme = prefersDarkScheme ? 'dark' : 'light'

            const initialTheme = systemTheme || defaultTheme
            setTheme(initialTheme)
            document.documentElement.setAttribute('data-theme', initialTheme)
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
        document.documentElement.setAttribute('data-theme', newTheme)
    }

    return { theme, toggleTheme }
}

export default useTheme
