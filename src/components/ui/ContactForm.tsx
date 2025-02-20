"use client";

import { Button } from "./Button";
import { createContact } from "@/actions/createContact";
import { useFormState } from "react-dom";
import { getCountry } from "@/utils/helpers";
import { useEffect, useState } from "react";

const initialState = {
  message: "",
  error: "",
};

export function ContactForm() {
  const [state, createEntry] = useFormState(createContact, initialState);

  console.log(state);

  const [country, setCountry] = useState("");

  useEffect(() => {
    async function getCountryClientSide() {
      const clientCountry = await getCountry();
      setCountry(clientCountry);
    }
    getCountryClientSide();
  }, []);
  return (
    <form action={createEntry}>
      <div className="flex flex-col gap-xsm">
        <div>
          <input type="hidden" name="country" value={country} />
          <input required className="w-full h-[52px] bg-mute-3 uppercase focus:outline-none focus:ring-0 focus:border-mute-2 border-mute-2 text-mute placeholder:text-mute" type="text" name="name" placeholder="Name" />
        </div>
        <div>
          <input required className="w-full h-[52px] bg-mute-3 uppercase focus:outline-none focus:ring-0 focus:border-mute-2 border-mute-2 text-mute placeholder:text-mute" name="email" type="text" placeholder="Email" />
        </div>
        <div>
          <input required className="w-full h-[52px] bg-mute-3 uppercase focus:outline-none focus:ring-0 focus:border-mute-2 border-mute-2 text-mute placeholder:text-mute" name="favorite-book" type="text" placeholder="What's your favorite Aaron Crash book?" />
        </div>
        <div>
          <textarea required className="w-full  bg-mute-3 focus:outline-none uppercase resize-none focus:ring-0 focus:border-mute-2 border-mute-2 text-mute placeholder:text-mute" name="message" placeholder="your message here" rows={8}></textarea>
        </div>
      </div>
      <div>
        <Button type="submit" variant="primary" size="full" className="mt-8">
          Submit
        </Button>
        {/* Success/Error Message */}
        <p className="mt-4 text-center text-base font-light text-[#3ede75] uppercase">{state?.message}</p>
      </div>
    </form>
  );
}
