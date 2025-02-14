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
    title: string;
    description: string;
    createDate: string;
    lastModDate: string;
    tags: string[];
    cover_image: string;
    genres: Genre[];
    formats: Format[];
}

// API Response for books type
export interface BooksApiResponse {
    results: Book[];
    page: number;
    limit: number;
    totalPages: number;
    totalResults: number;
}