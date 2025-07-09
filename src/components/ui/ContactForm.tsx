"use client";

import { useFormState } from "react-dom";
import { createContact } from "@/actions/createContact";
import { Button } from "./Button";
import { useState } from "react";

const initialState = {
  message: "",
};

export function ContactForm() {
  const [state, formAction] = useFormState(createContact, initialState);


  return (
    <form action={formAction}>
      <div className="flex flex-col gap-xsm">
        <div>
          <input required className="w-full h-[52px] bg-mute-3 uppercase focus:outline-none focus:ring-0 focus:border-mute-2 border-mute-2 text-mute placeholder:text-mute" type="text" name="name" placeholder="Name" />
        </div>
        <div>
          <input required className="w-full h-[52px] bg-mute-3 uppercase focus:outline-none focus:ring-0 focus:border-mute-2 border-mute-2 text-mute placeholder:text-mute" name="email" type="email" placeholder="Email" />
        </div>
        <div>
          <textarea required className="w-full bg-mute-3 focus:outline-none uppercase resize-none focus:ring-0 focus:border-mute-2 border-mute-2 text-mute placeholder:text-mute" name="message" placeholder="Your message here" rows={8}></textarea>
        </div>
      </div>
      <div>
        <Button type="submit" variant="primary" size="full" className="mt-8">
          Submit
        </Button>
        {state?.message && <p className="mt-4 text-center text-base font-light text-[#3ede75] uppercase">{state.message}</p>}
      </div>
    </form>
  );
}
