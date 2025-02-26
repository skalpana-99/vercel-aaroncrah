
import booksData from "@/data/books.json"
import seriesData from "@/data/series.json"

export default function sitemap() {


    const bookIds = booksData.map((book) => book.bookId)
    //generate static paths for each book
    const paths = bookIds.map((bookId) => {
        return {
            url: `https://aaroncrash.com/books/${bookId}`,
            lastModified: "2025-02-20T05:18:03.073Z",
            changeFrequency: "monthly",
        };
    })

    const seriesSlugs = seriesData.map((series) => series.slug)
    //generate static paths for each book
    const series = seriesSlugs.map((slug) => {
        return {
            url: `https://aaroncrash.com/series/${slug}`,
            lastModified: "2025-02-20T05:18:03.073Z",
            changeFrequency: "monthly",
        };
    })

    return [
        {
            url: "https://aaroncrash.com/",
            lastModified: "2025-02-20T05:18:03.073Z",
            changeFrequency: "monthly",
        },
        {
            url: "https://aaroncrash.com/books",
            lastModified: "2025-02-20T05:18:03.073Z",
            changeFrequency: "monthly",
        },
        {
            url: "https://aaroncrash.com/visual-novel",
            lastModified: "2025-02-20T05:18:03.073Z",
            changeFrequency: "monthly",
        },
        {
            url: "https://aaroncrash.com/about",
            lastModified: "2025-02-20T05:18:03.073Z",
            changeFrequency: "monthly",
        },
        {
            url: "https://aaroncrash.com/links",
            lastModified: "2025-02-20T05:18:03.073Z",
            changeFrequency: "monthly",
        },
        ...paths,
        ...series
    ]
}