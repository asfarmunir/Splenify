import React from "react";

const FeatureCard = ({ featureStep }) => {
  const { step, title, description } = featureStep;
  return (
    <div className="w-full flex max-w-[370px]  gap-5 ">
      <p className=" bg-[#F6F6F6] font-mulish font-extrabold text-3xl md:text-5xl text-[#5956E9] flex items-center p-4 rounded-2xl">
        {step}
      </p>

      <div className="flex flex-col space-y-2 ">
        <h2 className="text-[#2F2F2F] font-mulish font-bold text-xl md:text-2xl">
          {/* {title} */}
          Customizable Reminders
        </h2>
        <p className="font-mulish text-[#808080] text-lg font-normal">
          {/* {description} */}
          Users can create reminders for any type of event or task.
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
