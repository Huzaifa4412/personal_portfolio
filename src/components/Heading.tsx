import Link from "next/link";
import React from "react";

interface Props {
  text: string;
  link?: string;
}
const Heading = ({ props }: { props: Props }) => {
  return (
    <div className="flex md:items-center items-start gap-5 justify-between md:flex-row flex-col">
      <h2 className={`flex text-white text-[32px] h_line`}>
        <span className="text-primary">#</span>
        {props.text}
      </h2>
      <div className="w-max whitespace-nowrap text-white text-[16px] font-medium cursor-pointer hover:text-gray duration-200">
        <Link href={props.link || "/"}>View all {"~~>"}</Link>
      </div>
    </div>
  );
};

export default Heading;
