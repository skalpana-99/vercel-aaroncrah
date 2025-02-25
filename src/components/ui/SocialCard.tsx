import Image from "next/image";
import Heading from "./Heading";
import { Button } from "./Button";

interface ScoialCardProps {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  featuredImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
    position?: number;
  };
  title: {
    small: string;
    large: string;
  };
  btnProperties: {
    text: string;
    link: string;
  };
}

export function SocialCard({ image, featuredImage, title, btnProperties }: ScoialCardProps) {
  return (
    <div className="relative py-[32px] px-[32px] md:py-[52px] md:pl-[52px] bg-gradient-to-r from-[rgba(247,247,247,1)] to-[rgba(233,233,233,1)] border rounded-md border-[#F0F0F0]">
      <Image src={image.src} alt={image.src} width={image.width} height={image.height} />
      <Heading level={3} className="text-[32px] leading-[40px] mt-8 relative z-[999]">
        <Heading.Text variant="secondaryLight" className="text-[#AAAAAA] ">
          {title.small}{" "}
        </Heading.Text>
        <br />
        <Heading.Text variant="primaryDark">{title.large}</Heading.Text>
      </Heading>
      <Button variant="primaryLight" className="mt-[32px] z-[999] relative w-fit" link={btnProperties.link} target="_blank">
        {btnProperties.text}
      </Button>
      <Image style={{ right: `${featuredImage.position}px` }} className={`absolute bottom-[-1px] z-[10] max-sm:w-[25%]`} src={featuredImage.src} alt={featuredImage.alt} width={featuredImage.width} height={featuredImage.height} />
    </div>
  );
}
