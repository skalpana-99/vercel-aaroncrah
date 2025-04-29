import Image from "next/image";
import Header from "@/components/ui/Header";

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
              {/* <Image src={"/assets/images/header-text.png"} alt="blur-bg" width={1200} height={140} /> */}

              <div className="flex justify-between">
                <div>
                  <span className="xl:text-[100px] text-primary md:text-[60px] text-[32px] exsm:text-[28px]">
                    CRASH <span className="font-light text-white">IT.</span>
                  </span>
                </div>
                <div>
                  <span className="xl:text-[100px] text-primary md:text-[60px] text-[32px] exsm:text-[28px]">
                    CRUSH <span className="font-light text-white">IT.</span>
                  </span>
                </div>
                <div>
                  <span className="xl:text-[100px] text-primary md:text-[60px] text-[32px] exsm:text-[28px]">
                    LOVE <span className="font-light text-white">IT.</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
