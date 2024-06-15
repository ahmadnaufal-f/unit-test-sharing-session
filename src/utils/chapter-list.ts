type SubChapter = {
    title: string
    link: string
}

type Chapter = {
    title: string
    link: string
    subchapters: SubChapter[]
}

export const chapterList: Chapter[] = [
    {
        title: 'Cover Page',
        link: '/',
        subchapters: []
    },
    {
        title: 'Team Introduction',
        link: '/team-introduction',
        subchapters: []
    },
    {
        title: 'Getting to Know Unit Test',
        link: '/unit-test-overview',
        subchapters: [
            {
                title: 'What is Unit Test?',
                link: '/unit-test-overview/what-is-unit-test'
            },
            {
                title: 'Why Jest?',
                link: '/unit-test-overview/why-jest'
            }
        ]
    },
    {
        title: 'Jest Overview',
        link: '/jest-overview',
        subchapters: [
            {
                title: 'Basic Concepts and Key Features',
                link: '/jest-overview/basic-concepts-and-key-features'
            },
            {
                title: 'Jest Installation',
                link: '/jest-overview/jest-installation'
            }
        ]
    },
    {
        title: 'Setting Up Jest',
        link: '/setting-up-jest',
        subchapters: [
            {
                title: 'Configuring Jest',
                link: '/setting-up-jest/configuring-jest'
            },
            {
                title: 'Directory Structure',
                link: '/setting-up-jest/directory-structure'
            }
        ]
    },
    {
        title: 'Writing Your First Test',
        link: '/writing-your-first-test',
        subchapters: [
            {
                title: 'Simple Test Example',
                link: '/writing-your-first-test/simple-test-example'
            },
            {
                title: 'Common Matchers',
                link: '/writing-your-first-test/common-matchers'
            },
            {
                title: 'Running Tests',
                link: '/writing-your-first-test/running-tests'
            }
        ]
    },
    {
        title: 'Advanced Jest Features',
        link: '/advanced-jest-features',
        subchapters: [
            {
                title: 'Mock Functions',
                link: '/advanced-jest-features/mock-functions'
            },
            {
                title: 'Asynchronous Testing',
                link: '/advanced-jest-features/asynchronous-testing'
            },
            {
                title: 'Coverage Reporting',
                link: '/advanced-jest-features/coverage-reporting'
            }
        ]
    },
    {
        title: 'Common Mistakes and Tips',
        link: '/common-mistakes-and-tips',
        subchapters: [
            {
                title: 'Common Mistakes',
                link: '/common-mistakes-and-tips/common-mistakes'
            },
            {
                title: 'Some Tips',
                link: '/common-mistakes-and-tips/some-tips'
            }
        ]
    },
    {
        title: 'Resources and Further Reading',
        link: '/resources-and-further-reading',
        subchapters: []
    },
    {
        title: 'Q&A and Interactive Session',
        link: '/q-and-a-and-interactive-session',
        subchapters: []
    },
    {
        title: 'Closing',
        link: '/closing',
        subchapters: []
    }
]

type ChapterInfo = {
    title: string
    link: string
    chapter: number
    subChapter: number | null
    chapterTitle?: string
}

/**
 * Retrieves the chapter and subchapter information based on the provided chapter and subchapter indices.
 * @param chapter - The index of the chapter.
 * @param subChapter - The index of the subchapter.
 * @returns An object containing the title, link, chapter index, and subchapter index.
 *          Returns null if the chapter or subchapter indices are out of range.
 */
export const getChapter = (chapter: number = 0, subChapter: number | null): ChapterInfo | null => {
    if (chapter < 0 || chapter >= chapterList.length) {
        return null
    }
    if (!subChapter || chapterList[chapter].subchapters.length === 0) {
        return {
            title: chapterList[chapter].title,
            link: chapterList[chapter].link,
            chapter: chapter,
            subChapter: null
        }
    } else if (subChapter < 0 || subChapter >= chapterList[chapter].subchapters.length) {
        return null
    } else {
        return {
            title: chapterList[chapter].subchapters[subChapter].title,
            link: chapterList[chapter].subchapters[subChapter].link,
            chapter: chapter,
            subChapter: subChapter,
            chapterTitle: chapterList[chapter].title
        }
    }
}

/**
 * Retrieves the next chapter or subchapter based on the current chapter and subchapter.
 * @param currentChapter - The current chapter index.
 * @param currentSubChapter - The current subchapter index.
 * @returns The next chapter or subchapter or null if there is no next chapter or subchapter.
 */
export const getNextChapter = (currentChapter: number, currentSubChapter: number | null): ChapterInfo | null => {
    if (currentChapter < 0 || currentChapter >= chapterList.length) {
        return null
    }
    if (!currentSubChapter) {
        if (chapterList[currentChapter].subchapters.length === 0) {
            return getChapter(currentChapter + 1, null)
        } else {
            return getChapter(currentChapter, 0)
        }
    }
    if (currentSubChapter < 0 || currentSubChapter >= chapterList[currentChapter].subchapters.length) {
        return null
    }
    if (currentSubChapter === chapterList[currentChapter].subchapters.length - 1) {
        return getChapter(currentChapter + 1, null)
    } else {
        return getChapter(currentChapter, currentSubChapter + 1)
    }
}

/**
 * Retrieves the previous chapter or subchapter based on the current chapter and subchapter.
 * @param currentChapter - The current chapter index.
 * @param currentSubChapter - The current subchapter index.
 * @returns The previous chapter or subchapter or null if there is no previous chapter or subchapter.
 */
export const getPreviousChapter = (currentChapter: number, currentSubChapter: number | null): ChapterInfo | null => {
    if (currentChapter <= 0 || currentChapter >= chapterList.length) {
        return null
    }
    if (!currentSubChapter) {
        if (chapterList[currentChapter - 1].subchapters.length !== 0) {
            return getChapter(currentChapter - 1, chapterList[currentChapter - 1].subchapters.length - 1)
        } else {
            return getChapter(currentChapter - 1, null)
        }
    }
    if (currentSubChapter < 0 || currentSubChapter >= chapterList[currentChapter].subchapters.length) {
        return null
    }
    if (currentSubChapter === 0) {
        return getChapter(currentChapter, null)
    } else {
        return getChapter(currentChapter, currentSubChapter - 1)
    }
}

type ChapterIndex = {
    chapter: number | null
    subChapter: number | null
}

/**
 * Retrieves the index of a chapter or subchapter based on the provided link.
 * @param link - The link of the chapter or subchapter.
 * @returns An object containing the chapter index and subchapter index (if applicable).
 */
export const getChapterIndex = (link: string): ChapterIndex => {
    const splittedLink = link.split('/')
    const chapterIndex = chapterList.findIndex((chapter) => chapter.link === `/${splittedLink[1]}`)
    if (chapterIndex === -1) {
        return { chapter: null, subChapter: null }
    }
    if (splittedLink.length === 2) {
        return { chapter: chapterIndex, subChapter: null }
    }
    const subChapterIndex = chapterList[chapterIndex].subchapters.findIndex((subChapter) => subChapter.link === link)
    return { chapter: chapterIndex, subChapter: subChapterIndex }
}

type ChapterTitle = {
    title: string
    parentTitle?: string
    parentLink?: string
}

export const linkToTitle = (link: string): ChapterTitle => {
    const chapterIndex = getChapterIndex(link)
    const chapter = getChapter(chapterIndex.chapter ?? 0, chapterIndex.subChapter)
    if (!chapter) {
        return { title: '404 Not Found' }
    }
    if (chapter.subChapter === null) {
        return { title: chapter.title }
    } else {
        return { title: chapter.title, parentTitle: chapter.chapterTitle ?? '', parentLink: getChapter(chapter.chapter ?? 0, null)?.link }
    }
}
