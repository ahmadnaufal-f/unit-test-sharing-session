'use client'

import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Title } from '../title/title'
import { BreadCrumb } from '../breadcrumb/breadcrumb'

export const SlideTitle = () => {
    const pathname = usePathname()
    const [isHomePage, setIsHomePage] = useState(false)

    useEffect(() => {
        setIsHomePage(pathname === '/')
    }, [pathname])

    return !isHomePage ? (
        <>
            <Title />
            <BreadCrumb />
        </>
    ) : null
}
