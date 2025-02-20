import type { MetadataRoute } from 'next'
import booksData from '@/data/books.json'

export default function sitemap(): MetadataRoute.Sitemap {


    const bookIds = booksData.map((book) => book.bookId)
    //generate static paths for each book
    const paths = bookIds.map((bookId) => { // Corrected map function
        return { // Directly return the sitemap entry object
            url: `https://aaroncrash.com/books/${bookId}`,
            lastModified: '2025-02-20T05:18:03.073Z',
            changeFrequency: 'yearly',
        };
    })



    return [
        {
            url: 'https://aaroncrash.com/',
            lastModified: '2025-02-20T05:18:03.073Z',
            changeFrequency: 'yearly',
        },
        {
            url: 'https://aaroncrash.com/books',
            lastModified: '2025-02-20T05:18:03.073Z',
            changeFrequency: 'yearly',
        },
        {
            url: 'https://aaroncrash.com/visual-novel',
            lastModified: '2025-02-20T05:18:03.073Z',
            changeFrequency: 'yearly',
        },
        {
            url: 'https://aaroncrash.com/about',
            lastModified: '2025-02-20T05:18:03.073Z',
            changeFrequency: 'yearly',
        },
        ...paths
    ]
}