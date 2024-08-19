"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setError("Email address is required");
    } else if (!emailRegex.test(email)) {
      setError("Please provide a valid email address");
    } else {
      // Handle successful submission here
      console.log("Email submitted:", email);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex h-screen max-sm:h-full w-screen flex-col max-sm:flex-col-reverse md:flex-row">
        <div className="flex flex-col items-center justify-center w-full md:w-[60%] h-screen bg-desktop-pattern bg-no-repeat bg-center bg-cover gap-10 md:gap-32">
          <div className="w-5/6 md:w-[60%] h-[80%] flex flex-col gap-5">
            <div className="flex items-center gap-3 order-first">
              <div className="flex justify-center items-center h-9 w-9 bg-gradient-135 from-lightRed to-roseRed rounded-full">
                <div className="h-7 w-7 bg-white rounded-full"></div>
              </div>
              <span className="text-grayishRed tracking-[5px] flex-wrap w-32 text-xl bold">
                BASE APPAREL
              </span>
            </div>

            <div className="mt-10 max-sm:text-center">
              <h1 className="flex flex-col text-[40px] md:text-[80px] light text-desaturatedRed max-md:tracking-[5px] lg:tracking-[15px] leading-none">
                WE&apos;RE
                <span className="text-grayishRed">COMING SOON</span>
              </h1>
            </div>

            <div className="lg:pr-28">
              <p className="text-desaturatedRed max-sm:text-center">
                Hello fellow shoppers! We&apos;re currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="relative">
              <div className={`flex items-center max-md:w-full lg:w-[470px] h-[50px] rounded-full border-2 ${error ? "border-softRed" : "border-hoverLightRed"}`}>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-[47px] text-desaturatedRed bg-white rounded-full pl-5 focus:outline-none placeholder:text-desaturatedRed"
                />
                <Image
                  src={"/svgs/icon-error.svg"}
                  height={20}
                  width={20}
                  alt="Error Icon" 
                  className={`${error ? "block mx-3" : "hidden"}`} 
                />
                <button
                  type="submit"
                  className="w-[70px] h-[47px] bg-gradient-135 from-lightRed to-roseRed hover:bg-roseRed rounded-full hover:shadow-2xl"
                >
                  <div className="flex justify-center items-center h-full w-full">
                    <Image
                      src="/svgs/icon-arrow.svg"
                      width={10}
                      height={10}
                      alt="Arrow Icon"
                    />
                  </div>
                </button>
              </div>
              {error && (
                <p className="absolute text-xs italic text-softRed mt-2">
                  {error}
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="block max-md:w-[30%] w-[40%] md:h-screen max-sm:bg-hero-mobile md:bg-hero-desktop bg-no-repeat bg-center bg-cover"></div>
      </div>
    </main>
  );
}
