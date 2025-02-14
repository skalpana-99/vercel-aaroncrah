export type BookFormats = {
    [key: string]: FormatDetails;
} | object;


export interface FormatDetails {
    url: string;
    createDate: string;
}

interface BookSeries {
    name: string;
    slug: string;
    order: number;
}

export interface BookData {
    bookId: number;
    title: string;
    description: string;
    image: string;
    series: BookSeries;
    format: BookFormats;
}

export interface Series {
    slug: string;
    name: string;
    description: string;
}