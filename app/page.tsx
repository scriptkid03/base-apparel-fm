import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex h-full w-full">
        <div className="flex flex-col items-center justify-center w-[60%] h-screen bg-desktop-pattern bg-no-repeat bg-center bg-cover gap-32">
          <div className="w-[60%] h-[80%] flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="flex justify-center items-center h-9 w-9 bg-gradient-135 from-lightRed to-roseRed rounded-full">
                <div className="h-7 w-7 bg-white rounded-full"></div>
              </div>
              <span className="text-grayishRed tracking-[5px] text-xl text-wrap w-32 bold">
                BASE APPAREL
              </span>
            </div>
            <div className="mt-10">
              <span className="flex flex-col text-[80px] light text-desaturatedRed tracking-[15px] leading-none">
                WE'RE
                <span className="text-wrap text-grayishRed">COMING SOON</span>
              </span>
            </div>
            <div className="pr-28">
              <span className="text-desaturatedRed">
                Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.
              </span>
            </div>
            <div>
              <div className="flex items-center w-[450px] h-[50px] border-2 border-hoverLightRed rounded-full">
                <input type="email" placeholder="Email Address" className="w-[400px] h-[47px] text-desaturatedRed bg-white rounded-full pl-5 focus:outline-none placeholder:text-desaturatedRed" />
                <div className="w-[70px] h-[47px] bg-gradient-135 from-lightRed to-roseRed hover:cursor-pointer rounded-full shadow-2xl hover:bg-gradient-135 hover:from-hoverLightRed hover:to-hoverRoseRed">
                  <div className="flex justify-center items-center h-full w-full">
                    <Image src="/svgs/icon-arrow.svg" width={10} height={10} alt="Arrow Icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[40%] h-screen md:bg-hero-desktop bg-no-repeat bg-center bg-cover">
        </div>
      </div>
    </main>
  );
}
