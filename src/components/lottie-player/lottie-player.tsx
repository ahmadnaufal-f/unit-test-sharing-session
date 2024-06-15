'use client'

import { useEffect, RefObject } from 'react'

export const LottiePlayer = ({ animationPath, ref }: { animationPath: string; ref?: RefObject<HTMLDivElement> }) => {
    useEffect(() => {
        import('@lottiefiles/lottie-player')
    })
    return (
        <div ref={ref ?? null}>
            <lottie-player id={animationPath} autoplay loop mode="normal" src={animationPath} style={{ width: '300px', height: '300px' }}></lottie-player>
        </div>
    )
}
