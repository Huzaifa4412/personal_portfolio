import React from "react";

interface PageProps {
  text: string;
  img?: boolean;
}
const PrimaryBtn = (props: PageProps) => {
  return (
    <div className="border-primary border text-white hover:bg-[#C778DD]/20 cursor-pointer duration-300 ease-in px-4 text-[16px] font-medium justify-between w-max flex gap-2 items-center py-2">
      <p>{props.text}</p>
      <p>{props.img && "<~>"}</p>
    </div>
  );
};

export default PrimaryBtn;
