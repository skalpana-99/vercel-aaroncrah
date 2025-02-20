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
    <div className={``}>
      <div className="relative h-[384px] bg-book-card">
        <Image fill objectFit="contain" src="/assets/images/books/book3.png" alt={title} className="p-4" />
        {isSelected && <div className="text-[#EE93F7] font-normal text-base leading-6 py-[10px] px-4 bg-[#FFFFFF] w-fit absolute top-6 left-6 uppercase">currently viewing</div>}
      </div>
      <div className="mt-[20px] text-center">
        {series_slug ? (
          <Link href={`/series/${series_slug}`}>
            <p className="uppercase text-primary text-8 leading-xsm">{series_name}</p>
          </Link>
        ) : (
          <p className="uppercase text-primary text-8 leading-xsm">{series_name}</p>
        )}

        <Heading title={attribTitle} level={3} size="sm" className="mt-2 overflow-hidden whitespace-nowrap text-ellipsis">
          {title}
        </Heading>
      </div>
      <Button link={`/books/${bookId}`} variant="primary" size="full" className="mt-[20px]">
        explore more
      </Button>
    </div>
  );
}
