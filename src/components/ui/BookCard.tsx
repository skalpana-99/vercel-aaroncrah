import Image from "next/image";
import Heading from "./Heading";
import { Button } from "./Button";
import Link from "next/link";

interface BookParams {
  cover_image: string;
  title: string;
  bookOrder?: number | null;
  series_name: string | null;
  series_slug: string | null;
  bookId: number;
  isSelected?: boolean;
  attribTitle?: string;
}

export default function BookCard({ cover_image, title, series_name, series_slug, bookId, isSelected, attribTitle }: BookParams) {
  return (
    <div className={`${cover_image}`}>
      <div className="relative flex w-full lg:max-w-[384px] aspect-[1] lg:max-h-[384px] border border-solid border-[#d3d3d3]">
        <Image src={`/assets/images/books/${cover_image.trim() !== "" ? cover_image : 'no-book.png'}`} alt={title} width={468} height={468} className="w-full lg:w-full lg:max-w-[384px] lg:max-h-[384px] my-auto aspect-[1]" />
        {isSelected && <div className="text-[#EE93F7] font-normal text-base leading-6 py-[10px] px-4 bg-[#FFFFFF] w-fit absolute top-6 left-6 uppercase border border-solid border-[#d3d3d3]">currently viewing</div>}
      </div>
      <div className="mt-[20px] text-center">
        {series_slug ? (
          <Link href={`/series/${series_slug}`}>
            <p className="uppercase text-primary text-8 leading-xsm">{series_name}</p>
          </Link>
        ) : (
          <p className="uppercase text-primary text-8 leading-xsm">{series_name ? series_name : (<>&nbsp;</>)}</p>
        )}

        <Heading title={attribTitle ? attribTitle : title} level={3} size="sm" className="mt-2 overflow-hidden whitespace-nowrap text-ellipsis">
          {title}
        </Heading>
      </div>
      <Button link={`/books/${bookId}`} variant="primary" size="full" className="mt-[20px]">
        explore more
      </Button>
    </div>
  );
}
