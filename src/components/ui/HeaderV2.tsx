import Image from "next/image";
import Header from "@/components/ui/Header";
// import HeaderImage from "@/images/header-text.png";

export default function HeaderV2() {
  return (
    <div>
      <div className="bg-headerV3-bg bg-contain">
        <div className="">
          <div className="bg-headerV2-bg bg-cover bg-no-repeat">
            <div className="">
              <Header isHome={false} />
            </div>
            <div className="py-[32px] max-w-[1200px] mx-auto w-[92%]">
              {/* <Image src={HeaderImage} alt="heading text" className="mx-auto py-[32px]" /> */}
              <Image src={"/assets/images/header-text.png"} alt="blur-bg" width={1200} height={140} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
