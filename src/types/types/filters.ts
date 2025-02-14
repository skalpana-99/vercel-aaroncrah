
import type { SingleValue } from "react-select";
export interface Option {
    value: string;
    label: string;
}

export interface FilterItemProps {
    label: string;
    options: Option[];
    defaultValue: Option;
    onChange?: (newValue: SingleValue<Option>) => void;
}

export interface SelectStyles {
    control: (state: any) => string;
    indicatorSeparator: (state: any) => string;
    menu: (state: any) => string;
}