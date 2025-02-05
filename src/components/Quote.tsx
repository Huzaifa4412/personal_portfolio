import React from "react";
import Image from "next/image";

const Quote = () => {
  return (
    <div className="hidden sm:block w-screen relative">
      <div className="container !mt-20">
        <div className="flex flex-col items-center  mx-auto w-max h-max">
          <div className="text-[16px] lg:text-[24px] font-medium  mx-auto border p-3 sm:p-8 relative w-max">
            <Image
              src={"/images/quotation.svg"}
              width={42}
              height={29}
              className="absolute top-0 sm:w-[42px] sm:h-[29px] w-[32px] h-[19px] left-10 -translate-y-1/2 
            "
              alt="Quote"
            ></Image>
            <p className="whitespace-break-spaces">
              With great power comes great electricity bill
            </p>
          </div>
          <div className="text-[16px] lg:text-[24px] font-medium w-max relative left-1/2 -translate-x-1/2 border p-3 sm:p-8">
            <Image
              src={"/images/quotation.svg"}
              width={42}
              height={29}
              className="sm:w-[42px] sm:h-[29px] w-[32px] h-[19px] absolute top-0 left-10 -translate-y-1/2 "
              alt="Quote"
            ></Image>
            - Dr. Who
          </div>
        </div>
      </div>
      <div className="border absolute top-1/2 right-0 translate-x-[30%] w-[91px] h-[91px] overflow-x-hidden hidden sm:block"></div>
    </div>
  );
};

export default Quote;
