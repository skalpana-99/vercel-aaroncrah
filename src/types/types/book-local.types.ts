// Stock type
interface Stock {
    id: string;
    qty: number;
    createDate: string;
    lastModDate: string;
}

// Book type
export interface BookLocal {
    id: number;
    order: number;
    format: string;
    name: string;
    isbn_number: string;
    sku: string;
    status: string;
    price: number;
    platform: string;
    bookTitle: string;
    cover_image: string;
    createDate: string;
    lastModDate: string;
    availableFormats: string[];
    stock: Stock;
}