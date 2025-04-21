"use client";

import Image from "next/image";
import Heading from "./Heading";
import { Button } from "./Button";
import { createSubscriber } from "@/actions/createSubscriber";
import { useFormState, useFormStatus } from "react-dom";
import { getCountry } from "@/utils/helpers";
import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

// Define interfaces for props and form state
interface NewsletterProps {
  secondaryTitle?: string;
  primaryTitle?: string;
  highlightTitle?: string;
  highlightStyle?: string;
  background?: string;
  coverImage: string;
  coverStyle?: string;
  mobileBg?: string;
}

interface FormState {
  message: string;
  error: string;
}

const initialState: FormState = {
  message: "",
  error: "",
};

export function Newsletter({ secondaryTitle, primaryTitle, highlightTitle, highlightStyle, coverImage, coverStyle, background, mobileBg }: NewsletterProps) {
  const [state, subscribe] = useFormState(createSubscriber, initialState);
  const [country, setCountry] = useState("");
  const { pending } = useFormStatus();
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const [captchaSiteKey, setCaptchaSiteKey] = useState<string>(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "");

  console.log("NEXT_PUBLIC_RECAPTCHA_SITE_KEY:", process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY);
  console.log("captchaSiteKey on render:", captchaSiteKey);

  function handleChange(value: string | null) {
    setCaptchaValue(value);
  }

  useEffect(() => {
    async function fetchCountry() {
      const clientCountry = await getCountry();
      setCountry(clientCountry);
    }
    fetchCountry();
  }, []);

  return (
    <div
      className={`
        relative grid grid-cols-1 sm:grid-cols-[1fr_2fr] max-xl:gap-[50px] max-sm:gap-0 items-center
        rounded-md ${background} from-[#aa9fb4] from-20% to-[#512e30]
        max-sm:flex max-sm:flex-col-reverse max-sm:pt-[40px]
      `}
    >
      <div className={`absolute inset-0 rounded-md backdrop-blur-lg ${mobileBg ?? ""}`}></div>

      <div className="max-lg:relative max-lg:h-full flex justify-center max-sm:w-full">
        <Image
          className={`
            z-50
            max-sm:relative max-sm:top-[100px] sm:absolute sm:top-[30px] sm:left-[40px] lg:left-[70px]
            max-lg:w-full max-sm:w-[70%] ${coverStyle ?? ""}
          `}
          src={coverImage}
          width={337}
          height={718}
          alt="Newsletter cover"
          priority
        />
      </div>

      <div className="relative z-50 p-[50px] lg:p-[100px] max-sm:px-[40px] max-sm:pb-[0px] sm:pb-[50px] max-sm:pt-0 lg:pt-[100px] lg:pb-[100px] max-lg:pb-[100px]">
        <Heading level={2} size="lg" variant="primaryLight" className="md:leading-[80px] max-sm:text-center max-lg:!text-[40px] max-lg:!leading-[56px]">
          {secondaryTitle && <Heading.Text variant="secondaryLight">{secondaryTitle}</Heading.Text>}
          {primaryTitle && <Heading.Text variant="primaryLight">{primaryTitle}</Heading.Text>}
          {highlightTitle && <Heading.Text className={`text-primary ${highlightStyle ?? ""}`}>{highlightTitle}</Heading.Text>}
          here
        </Heading>

        <div className="mt-10">
          <Button target="_blank" link={"https://dl.bookfunnel.com/kqleo5199q"} variant="primaryLight" size="full" className="mt-2 md:mt-[115px] hover:shadow-[5px_5px_20px_#00000080] transition duration-200">
            <span>Download Now</span>
          </Button>
          <p className="text-white font-light pt-[21px] leading-[28px]">
            When you download Time Jacker, you are signing up for Aaron Crash's email newsletter.
            <br /> Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
