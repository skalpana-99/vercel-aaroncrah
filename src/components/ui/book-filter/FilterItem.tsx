"use client";

import { FilterItemProps, SelectStyles } from "@/types/filters";
import Select from "react-select";
import Image from "next/image";

const selectStyles: SelectStyles = {
  control: () => "!border-0 !shadow-none !text-black cursor-pointer font-light !cursor-pointer uppercase",
  indicatorSeparator: () => "hidden",
  menu: () => "!w-[200px] text-black font-light",
  singleValue: () => "!text-black font-light",
};

export function FilterItem({ label, options, defaultValue, onChange }: FilterItemProps) {
  return (
    <div className="flex items-center">
      <label className="text-[#999999] whitespace-nowrap mr-1 font-light text-md leading-[18px] uppercase" htmlFor={`rs-${label.toLowerCase()}`}>
        {label}:
      </label>
      <Select
        id={`rs-${label.toLowerCase()}`}
        isSearchable={false}
        defaultValue={defaultValue}
        onChange={onChange}
        components={{
          DropdownIndicator: () => <Image className="mt-1" src="/assets/images/drop-black.png" alt="dropdown" width={15} height={9} />,
        }}
        classNames={selectStyles}
        options={options}
      />
    </div>
  );
}
