"use client";
import Image from "next/image";
import localFont from "next/font/local";
import Testimonials from "@/components/shared/Testimonials";
const recoleta = localFont({ src: "./recoleta.ttf" });
import HeroBentoGrid from "@/components/shared/HeroBentoGrid";
import { motion } from "framer-motion";
import { containerVariants, fadeInVariants } from "@/lib/animations";
import Hero from "@/components/shared/Hero";
import AppsOnDemand from "@/components/shared/AppsOnDemand";
import Specialization from "@/components/shared/Specialization";
import Services from "@/components/shared/Services";
import Projects from "@/components/shared/Projects";
import ContactUs from "@/components/shared/ContactUs";
import Footer from "@/components/shared/Footer";
import ServicesMobile from "@/components/shared/ServicesMobile";

export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col items-center pt-36  overflow-x-hidden 2xl:pt-40">
      {/* Hero Section */}
      <Hero />
      {/* Apps on demand */}
      <AppsOnDemand />
      {/* services for mobile view  */}
      <ServicesMobile />
      {/* Specialization */}
      <Specialization />
      {/* Services */}
      <Services />
      {/* Projects */}
      <Projects />
      {/* Testimonials */}
      <Testimonials />
      {/* Contact Us */}
      <ContactUs />
      {/* footer  */}
      <Footer />
    </main>
  );
}
