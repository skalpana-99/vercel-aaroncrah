
export interface BookDetailsClientProps {
    book: BookDetails;
}


export interface BookPageParams {
    params: {
        slug: string;
    };
    searchParams?: {
        [key: string]: string | string[] | undefined;
    };
}

export interface BookDetails {
    id: string;
    title: string;
    series: string;
    bookNumber: number;
    totalBooks: number;
    formats: Format[];
    description: string;
    imageUrl: string;
}

export interface Format {
    type: string;
    price: number;
}

