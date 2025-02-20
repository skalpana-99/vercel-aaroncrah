interface Stock {
    id: string;
    qty: number;
    createDate: string;
    lastModDate: string;
}

// API data type for format
interface ApiData {
    page_count: number;
    pod_package_id: string;
    print_cover_source_url: string;
    print_interior_source_url: string;
}

// Format type
export interface Format {
    stock: Stock | null;
    id: number;
    format: string;
    name: string;
    isbn_number: string;
    sku: string;
    status: string;
    price: number;
    api_data: ApiData;
    cost: number;
    platform: string;
}


interface Genre {
    id: number;
    value: string;
    slug: string;
    createDate: string;
    lastModDate: string;
}


export interface Book {
    id: number;
    name: string;
    format: string;
    bookTitle: string;
    description: string;
    createDate: string;
    lastModDate: string;
    tags: string[];
    cover_image: string;
    genres: Genre[];
    availableFormats: Format[];
}

// API Response for books type
export interface BooksApiResponse {
    results: Book[];
    page: number;
    limit: number;
    totalPages: number;
    totalResults: number;
}

export interface MergedBook {
    id: number;
    name?: string;
    book_id: number;
    isbn_number?: string;
    price?: number;
    platform?: string;
    createDate: string;
    lastModDate?: string;
    status?: string;
    sku?: string;
    bookTitle: string;
    format: string;
    cover_image: string;
    availableFormats?: string[];
    order: number | null;
    stock?: Stock | null;
    series_name: string | null;
    series_slug: string | null;
}