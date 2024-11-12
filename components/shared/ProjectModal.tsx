import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ProblemImage from "@/public/images/problem-image.svg";
import ProcessImage from "@/public/images/process-image.svg";
import FeatureCard from "@/components/shared/FeatureCard";
import ProcessWithImage from "@/components/shared/ProcessWithImage";
// import SolutionImage from "@/assets/projects/solution-image.svg";
import ModalFooterBg from "@/public/projects/modal-footer.svg";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";

const ProjectModal = ({
  title,
  description,
  projectData,
}: {
  title: string;
  description: string;
  projectData: any;
}) => {
  const {
    heroGradient,
    loomLink,
    projectHeroImage,
    projectReveiw,
    problemData,
    description: projectDescription,
    processData,
    solutionData,
    features,
    technologies,
  } = projectData;

  return (
    <Dialog>
      <DialogTrigger
        className="bg-[#7165FF]
        px-8 py-4 rounded-2xl text-white font-thin text-base"
      >
        View Project
      </DialogTrigger>

      <DialogContent
        style={{
          zIndex: 999,
        }}
        className=" sm:w-[100vw] md:w-[90vw] z-50 rounded-3xl   lg:w-[95vw]  max-w-[85vw]   3xl:max-w-[80vw]  modalOpen   border-none overflow-hidden  bg-none h-auto  p-0  "
      >
        <div className="w-full h-[90vh] overflow-y-auto     p-0">
          <div
            style={{
              background: "linear-gradient(45deg, #8B01F7 0%, #D678FE 100%)",
              height: "full",
            }}
            className="w-full px-4 py-10 md:p-14  "
          >
            <DialogClose className="flex p-0 m-0 items-center  gap-4 text-white font-bold font-mulish text-2xl">
              <span className="bg-white rounded-full  p-2 text-black hover:bg-white/80 inline-block">
                <ArrowLeft className="h-4 w-4 " />
              </span>
              Back
            </DialogClose>
            {/* <div className="flex flex-col gap-4 xl:flex-row space-y-4 lg:space-y-0  items-center overflow-hidden"> */}
            <div className="grid grid-cols-1 gap-4 space-y-4 xl:grid-cols-2 lg:space-y-0  items-center overflow-hidden">
              <DialogHeader className=" text-start    space-y-4">
                <DialogTitle className="mt-4 font-flex font-bold text-4xl md:text-6xl text-white leading-tight">
                  {title}
                </DialogTitle>

                <DialogDescription className="font-mulish font-normal text-lg text-white/80  ">
                  {description}
                  {description}
                  {description}
                  {description}
                </DialogDescription>

                <div className="hidden lg:block">
                  {/* <ReveiwCard projectReveiw={projectReveiw} /> */}
                </div>
              </DialogHeader>

              <div className="w-full">
                <Image
                  src={"/images/p1.svg"}
                  alt="Project Hero"
                  width={700}
                  height={500}
                  priority
                  quality={100}
                  className="rounded-3xl  max-h-96    w-full h-full  "
                />
              </div>

              <div className="block lg:hidden ">
                {/* <ReveiwCard projectReveiw={projectReveiw} /> */}
              </div>
            </div>
          </div>

          {/* <div className=" px-4 md:px-16 mb-20  ">
            <div
              style={{
                position: "relative",
                paddingBottom: "54.90384615384616%",
                height: 0,
                marginTop: "50px",
              }}
              className="rounded-xl  overflow-hidden w-[70%] h-[70%]  mx-auto"
            >
              <iframe
                src={loomLink}
                frameborder="0"
                webkitallowfullscreen
                mozallowfullscreen
                allowfullscreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              ></iframe>
            </div>
          </div> */}

          {/* Project Details steps with features and techs */}

          <section className="px-4 md:px-16 mt-10 space-y-20 ">
            <div className=" pt-12 space-y-5">
              <Card className="border-none  shadow-none">
                <CardContent
                  className={`flex w-full  gap-8 md:gap-28 flex-col lg:flex-row lg:items-center`}
                >
                  <Image
                    src={"/images/problem-image.svg"}
                    alt={title}
                    width={350}
                    height={360}
                    className="w-[250px] lg:w-[400px] 2xl:w-[550px]"
                  />

                  <div>
                    <CardHeader className="font-flex text-3xl font-extrabold text-custom-text-secondary px-0 py-4">
                      Safe secure
                    </CardHeader>
                    <CardDescription className="font-mulish font-normal  2xl:text-xl text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Cumque, minus praesentium enim labore, odio, facilis
                      temporibus eos aut maiores ipsam veritatis. Ab commodi sed
                      incidunt! Iure ex nesciunt quisquam. Vitae.
                    </CardDescription>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none  shadow-none">
                <CardContent
                  className={`flex w-full gap-8 md:gap-28 flex-col lg:flex-row-reverse lg:items-center`}
                >
                  <Image
                    src={"/images/process-image.svg"}
                    alt={title}
                    width={350}
                    height={360}
                    className="w-[250px] lg:w-[400px] 2xl:w-[550px]"
                  />

                  <div>
                    <CardHeader className="font-flex text-3xl font-extrabold text-custom-text-secondary px-0 py-4">
                      Safe secure
                    </CardHeader>
                    <CardDescription className="font-mulish font-normal  2xl:text-xl text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Cumque, minus praesentium enim labore, odio, facilis
                      temporibus eos aut maiores ipsam veritatis. Ab commodi sed
                      incidunt! Iure ex nesciunt quisquam. Vitae.
                    </CardDescription>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Features */}
            <div className=" px-4 md:px-6 space-y-6 mt-16 ">
              <h2 className="text-custom-text-secondary font-flex font-bold text-3xl">
                Features
              </h2>
              <p className="font-mulish font-normal text-xl max-w-[700px]">
                Eventia includes the following features:
              </p>

              <div className="flex flex-wrap justify-between pt-8 gap-x-4 gap-y-10">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="w-full flex max-w-[400px]  gap-6 "
                  >
                    <p className=" bg-[#F6F6F6] font-mulish font-semibold text-3xl md:text-5xl text-[#5956E9] flex items-center px-6 rounded-2xl">
                      0{index + 1}
                    </p>

                    <div className="flex flex-col space-y-2 ">
                      <h2 className="text-[#2F2F2F] font-mulish font-bold text-xl md:text-2xl">
                        {/* {title} */}
                        Customizable Reminders
                      </h2>
                      <p className="font-mulish text-[#808080] text-lg font-normal">
                        {/* {description} */}
                        Users can create reminders for any type of event or
                        task.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}

            <div className="px-4 py-12 space-y-6">
              <h2 className="text-custom-text-secondary font-flex font-bold text-3xl">
                Technologies
              </h2>
              <p className="font-mulish font-normal text-xl max-w-[750px]">
                Here is the list of technologies used in this project.
              </p>

              <div className="flex flex-wrap justify-center gap-y-4 gap-x-6 pt-6   md:gap-y-10">
                <Image
                  src="/projects/flutter-icon.svg"
                  alt="Tech"
                  width={250}
                  className=" border border-slate-300 py-3 px-6 rounded-xl"
                  height={150}
                />
                <Image
                  src="/projects/angular-icon.svg"
                  alt="Tech"
                  width={250}
                  className=" border border-slate-300 py-3 px-6 rounded-xl"
                  height={150}
                />
                <Image
                  src="/projects/react-icon.svg"
                  alt="Tech"
                  width={250}
                  className=" border border-slate-300 py-3 px-6 rounded-xl"
                  height={150}
                />
              </div>
            </div>
          </section>
          {/* Modal Footer */}
          <div
            style={{
              backgroundImage: `url(${ModalFooterBg.src})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "90%",
              overflow: "hidden",
              borderRadius: "24px",

              height: "auto",
              minHeight: "calc(100vh - 400px)",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              position: "relative",
            }}
            className="container my-16"
          >
            <div className=" flex flex-col items-center  space-y-6">
              <h2 className="font-semibold font-mulish text-4xl text-primary">
                Have A Project In Mind? Let's Get Start.
              </h2>
              <p className="text-center font-mulish text-[#525665] dark:text-slate-300 text-xl font-medium md:max-w-[80%] ">
                You're looking for a solid partner for the project having in
                your mind. Connect with us to make your work easier.
              </p>

              <DialogClose className="w-full max-w-[260px]" asChild>
                <Link href="#contact" className="w-full max-w-[260px]">
                  <Button className="bg-[#8C00F7] rounded-xl hover:bg-[#8C00F7]/80 font-mulish text-lg font-bold px-6 py-4  h-[60px] w-full ">
                    Get Started
                    <ArrowUpRight className="w-5 h-5 ml-2  text-white " />
                  </Button>
                </Link>
              </DialogClose>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
