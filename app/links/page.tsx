import HeaderV2 from "@/components/ui/HeaderV2";
import Heading from "@/components/ui/Heading";
import { Newsletter } from "@/components/ui/Newsletter";
import { SocialCard } from "@/components/ui/SocialCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect with Aaron Crash",
  description: "Aaron Crash is active on Patreon, Facebook, Amazon, and Royal Road—connect with him on your favorite platform",
  openGraph: {
    title: "Connect with Aaron Crash",
    description: "Aaron Crash is active on Patreon, Facebook, Amazon, and Royal Road—connect with him on your favorite platform",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/assets/images/featured-img.webp`,
        width: 1200,
        height: 630,
        alt: "Featured Image for Aaron Crash",
        type: "image/webp",
      },
    ],
    type: "website",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: "Aaron Crash",
  },

  // Twitter Card Meta Tags
  twitter: {
    card: "summary_large_image",
    title: "Connect with Aaron Crash",
    description: "Aaron Crash is active on Patreon, Facebook, Amazon, and Royal Road—connect with him on your favorite platform",
    images: [`${process.env.NEXT_PUBLIC_BASE_URL}/assets/images/featured-img.webp`],
  },

  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/links`,
  },
};

export default function Page() {
  return (
    <>
      <HeaderV2 />
      <section className="mt-[56px] lg:mt-lg">
        <div className="container xl:px-0 px-[24px] ">
          <Heading level={1} size="lg" className="text-center mb-sm lg:mb-md">
            <Heading.Text variant="secondaryDark">Connect with </Heading.Text>
            <Heading.Text variant="primaryDark">aaron crash</Heading.Text>
          </Heading>

          <div className="mt-[56]">
            <div className="grid lg:grid-cols-2 gap-xsm">
              <SocialCard image={{ src: "/assets/images/patreon-black.png", alt: "patreon", width: 97, height: 24 }} title={{ small: "support me on", large: "patreon" }} btnProperties={{ text: "Join now", link: "https://www.patreon.com/aaroncrashbooks" }} featuredImage={{ src: "/assets/images/patreon-symbol-white.png", alt: "patreon-large", width: 137, height: 129, position: 4 }} />

              <SocialCard image={{ src: "/assets/images/facebook-blue.png", alt: "facebook", width: 76, height: 24 }} title={{ small: "follow me on", large: "facebook" }} btnProperties={{ text: "Visit Page", link: "https://facebook.com/AaronCrashBooks/" }} featuredImage={{ src: "/assets/images/facebook-letter.png", alt: "facebook-letter", width: 70, height: 141, position: 50 }} />

              <SocialCard image={{ src: "/assets/images/amazon.png", alt: "amazon", width: 76, height: 24 }} title={{ small: "visit my ", large: "amazon author page" }} btnProperties={{ text: "View profile", link: "https://www.amazon.com/stores/Aaron-Crash/author/B078R5NXMS?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true" }} featuredImage={{ src: "/assets/images/amazon-white.png", alt: "amazon-large", width: 168, height: 180, position: 0 }} />

              <SocialCard image={{ src: "/assets/images/royal-road.png", alt: "royal-road", width: 164, height: 24 }} title={{ small: "read my stories on ", large: "royal road" }} btnProperties={{ text: "read now", link: "https://www.royalroad.com/profile/604342/fictions" }} featuredImage={{ src: "/assets/images/royal-road-white.png", alt: "royal-road-large", width: 165, height: 152, position: 11 }} />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-inner max-sm:mb-[100px] lg:mb-[90px] lg:mt-lg">
        <div className="container xl:px-0 px-[24px]">
          <Newsletter background="bg-gradient-to-r" secondaryTitle="Want a Free Book? " primaryTitle="Download " highlightTitle="Time Jacker " coverImage="/assets/images/newsletter_cover.webp" />
        </div>
      </section>
    </>
  );
}
