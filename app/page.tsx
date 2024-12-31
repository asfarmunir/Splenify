import Testimonials from "@/components/shared/Testimonials";
import Hero from "@/components/shared/Hero";
// import AppsOnDemand from "@/components/shared/AppsOnDemand";
// import Specialization from "@/components/shared/Specialization";
// import Services from "@/components/shared/Services";
// import Projects from "@/components/shared/Projects";
// import ContactUs from "@/components/shared/ContactUs";
// import Footer from "@/components/shared/Footer";
// import ServicesMobile from "@/components/shared/ServicesMobile";
import dynamic from "next/dynamic";
import { Timeline } from "@/components/shared/Timeline";

const AppsOnDemand = dynamic(
  () => import("../components/shared/AppsOnDemand"),
  { ssr: false }
);

// const Hero = dynamic(() => import("../components/shared/Hero"), { ssr: false });

const Specialization = dynamic(
  () => import("../components/shared/Specialization"),
  { ssr: false }
);

const Services = dynamic(() => import("../components/shared/Services"), {
  ssr: false,
});

const Projects = dynamic(() => import("../components/shared/Projects"), {
  ssr: false,
});

const ContactUs = dynamic(() => import("../components/shared/ContactUs"), {
  ssr: false,
});

const Footer = dynamic(() => import("../components/shared/Footer"), {
  ssr: false,
});

const ServicesMobile = dynamic(
  () => import("../components/shared/ServicesMobile"),
  { ssr: false }
);

export default function Home() {
  return (
    // <main className="flex min-h-screen  flex-col items-center pt-36  overflow-x-hidden 2xl:pt-40">
    <main className="  pt-16 space-y-[80px] 2xl:space-y-[100px]">
      {/* Hero Section */}
      <Hero />
      {/* <AppsOnDemand /> */}
      <Timeline />
      {/* services for mobile view  */}
      {/* <ServicesMobile /> */}
      {/* Specialization */}
      <section className=" overflow-x-hidden space-y-[80px] 2xl:space-y-[100px]">
        <Specialization />
        {/* Services */}
        {/* <Services /> */}
        {/* Projects */}
        <Projects />
        {/* Testimonials */}
        <Testimonials />
        {/* Contact Us */}
        <div className=" px-4 md:px-0 pb-[80px]">
          <ContactUs />
        </div>
      </section>

      {/* footer  */}
    </main>
  );
}
