// utils/fullscreen.ts

type FullScreenDocument = Document & {
    webkitExitFullscreen?: () => Promise<void>
    msExitFullscreen?: () => Promise<void>
}

type FullScreenElement = HTMLElement & {
    webkitRequestFullscreen?: () => Promise<void>
    msRequestFullscreen?: () => Promise<void>
}

export const toggleFullScreen = (): void => {
    const documentElement = document.documentElement as FullScreenElement
    const doc = document as FullScreenDocument

    if (!doc.fullscreenElement && !(doc as any).webkitFullscreenElement && !(doc as any).msFullscreenElement) {
        documentElement.setAttribute('data-fullscreen', 'true')
        if (documentElement.requestFullscreen) {
            documentElement.requestFullscreen()
        } else if (documentElement.webkitRequestFullscreen) {
            // Safari
            documentElement.webkitRequestFullscreen()
        } else if (documentElement.msRequestFullscreen) {
            // IE11
            documentElement.msRequestFullscreen()
        }
    } else {
        documentElement.setAttribute('data-fullscreen', 'false')
        if (doc.exitFullscreen) {
            doc.exitFullscreen()
        } else if (doc.webkitExitFullscreen) {
            // Safari
            doc.webkitExitFullscreen()
        } else if (doc.msExitFullscreen) {
            // IE11
            doc.msExitFullscreen()
        }
    }
}

export const onFullScreenChange = (callback: () => void): void => {
    const fullscreenChangeHandler = () => {
        if (!document.fullscreenElement && !(document as any).webkitFullscreenElement && !(document as any).msFullscreenElement) {
            callback()
        }
    }

    document.addEventListener('fullscreenchange', fullscreenChangeHandler)
    document.addEventListener('webkitfullscreenchange', fullscreenChangeHandler) // Safari
    document.addEventListener('msfullscreenchange', fullscreenChangeHandler) // IE11
}
