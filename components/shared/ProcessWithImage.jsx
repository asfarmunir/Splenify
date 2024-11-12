import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

const ProcessWithImage = ({ data, ProcessImage }) => {
  const { title, description, imageDirection } = data;
  return (
    <Card className="border-none shadow-none">
      <CardContent
        className={`flex w-full gap-8 flex-col md:flex-row lg:items-center ${
          imageDirection !== "end" && " flex-row-reverse"
        }`}
      >
        <Image
          src={ProcessImage}
          alt={title}
          width={550}
          height={460}
          className="lg:w-[400px] xl:w-[550px]"
        />

        <div>
          <CardHeader className="font-flex text-3xl font-extrabold text-custom-text-secondary px-0 py-4">
            {title}
          </CardHeader>
          <CardDescription className="font-mulish font-normal text-xl text-justify">
            {description}
          </CardDescription>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProcessWithImage;
