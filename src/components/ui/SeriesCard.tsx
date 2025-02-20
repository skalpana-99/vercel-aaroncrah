import Image from "next/image";
import Heading from "./Heading";
import { Button } from "./Button";

interface cardProps {
  title: string;
  description: string;
  image?: any;
  link: string;
  buttonText?: string;
  background?: string;
}

export function SeriesCard({ title, description, image, link, buttonText, background }: cardProps) {
  return (
    <div className="max-w-[792px] relative rounded-md bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(/${background})` }}>
      <div className="w-full md:max-w-[630px] md:w-[630px] mx-auto  flex flex-col items-center px-[40px] md:px-[0px] mt-sm lg:mt-[56px]">
        <Heading level={3} className="text-center pb-4" variant="primaryLight" size="md">
          {title}
        </Heading>
        <p className="text-white text-center font-light leading-[28px] text-[18px]">{description}</p>
        <Button size="small" link={`${link}`} variant="primary" className="mt-8 md:mt-[44px]">
          {buttonText || "Read More"}
        </Button>
      </div>
      <Image className="mt-sm lg:mt-[26px] mx-auto" src={image} alt="series-image" />
    </div>
  );
}
