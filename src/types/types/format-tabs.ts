export interface FormatOption {
    id: string;
    label: string;
    count: number;
}

export interface BookCategory {
    id: string;
    label: string;
    count: number;
    active?: boolean;
}