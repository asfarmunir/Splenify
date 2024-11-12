import * as React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

import Image from "next/image";
import { getFlagByCountryCode } from "@/lib/countries";
import { renderStars } from "@/lib/render-stars";

export function ReveiwCard({ projectReveiw }) {
  return (
    <Card className=" w-full  max-w-md flex flex-col justify-center    hover:bg-white border    ">
      <CardHeader className="flex  flex-row gap-4 pt-3 pb-2">
        <Image src={projectReveiw.image} alt="icon" width={70} height={70} />
        <div className="flex-col">
          <h2 className="text-xl font-mulish font-bold leading-6">
            {projectReveiw.title} -
            <span className="ml-1 font-bold  italic text-base">
              {projectReveiw.designation}
            </span>
          </h2>
          <p className="text-[#808080] text-[xs] flex  gap-2 font-normal font-mulish">
            <span className=" block">
              {getFlagByCountryCode(projectReveiw.country.id)}
            </span>
            {projectReveiw.country.title}
            {" . "} {projectReveiw.date}
          </p>
          <div className="flex w-full  items-center">
            {renderStars(projectReveiw.ratings)}
          </div>
        </div>
      </CardHeader>
      <CardContent className=" ">
        <p className="text-sm  font-normal font-mulish text-[#133240] p-0 m-0 ">
          {projectReveiw.description} <br /> {projectReveiw.lastLine}
        </p>
      </CardContent>
    </Card>
  );
}
