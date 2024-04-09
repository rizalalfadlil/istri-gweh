import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";

export default function Gun() {
  return (
    <div className="h-max w-screen p-4 tracking-wide bg-contain">
      <div>
        <p className="font-semibold">
          SIG Sauer MPX{" "}
          <span className="bg-blue-800/50 text-white  px-1 p-0.5">smg</span>
        </p>
        <p className="text-3xl text-purple-700 font-bold">Logic & Reason</p>
      </div>
      <div className="bg-cover"  style={{backgroundImage:"url('./pattern/grid2.svg')"}}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="my-4  w-full aspect-video bg-contain"
        style={{ backgroundImage: "url('./images/gun/gun2.png')" }}
      ></motion.div>
      </div>
      {Attachment()}
      {Description()}
      {Images()}
      <p className="text-blue-700/50 text-sm mt-20">section</p>
      <p className="text-blue-700/50">
        03 | <span className="text-blue-950">Firearm</span>
      </p>
    </div>
  );
  function Images() {
    return (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p className="text-lg font-bold bg-blue-600/50  p-1 px-2 text-white">
          images
        </p>
        <Carousel
         plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]} className="mt-4 overflow-x-hidden">
          <CarouselContent>
            <CarouselItem>
              <div className="bg-blue-300  w-full aspect-video bg-cover"
              style={{ backgroundImage: "url('./images/gun/gun4.png')" }}></div>
            </CarouselItem>
            <CarouselItem>
              <div
                className="bg-blue-300  w-full aspect-video bg-cover"
                style={{ backgroundImage: "url('./images/gun/gun.png')" }}
              ></div>
            </CarouselItem>
            <CarouselItem>
              <div className="bg-blue-300  w-full aspect-video bg-cover bg-center"
              style={{ backgroundImage: "url('./images/gun/gun3.png')" }}></div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </motion.div>
    );
  }
  function Attachment() {
    return (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p className="text-lg font-bold bg-blue-600/50  p-1 px-2 text-white">
          attachment
        </p>
        <ul className="list-inside list-disc p-2 px-4">
          <li>iron sight</li>
          <li>akimbo</li>
        </ul>
      </motion.div>
    );
  }
  function Description() {
    return (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p className="text-lg font-bold bg-blue-600/50  p-1 px-2 text-white">
          description
        </p>
        <div className="grid grid-cols-2 gap-4 p-4">
          <div>
            <p className="text-sm font-semibold border-b border-purple-500/50">
              cardtridge
            </p>
            <p className="text-lg font-bold">9 x 19 mm</p>
          </div>
          <div>
            <p className="text-sm font-semibold border-b border-purple-500/50">
              rounds
            </p>
            <p className="text-lg font-bold">30 (x 2)</p>
          </div>
          <div>
            <p className="text-sm font-semibold border-b border-purple-500/50">
              rate of fire
            </p>
            <p className="text-lg font-bold">850 rpm</p>
          </div>
          <div className="col-span-2">
            <p className="text-sm font-semibold border-b border-purple-500/50">
              about
            </p>
            <p className="text-sm font-semibold h-40 overflow-y-scroll">
              a gas-operated submachine gun designed and manufactured by SIG
              Sauer, and is primarily chambered in 9×19mm Parabellum. It is a
              gas-operated firearm featuring a closed, rotating bolt. These
              design features, rare in submachine guns, were chosen to enhance
              the safety of the user and to have a more reliable firearm. It was
              designed in 2013 and was released to the general public in 2015.
              It features the SIG Sauer short stroke push-rod gas system to
              reduce the recoil and improve the reliability of the weapon.
            </p>
          </div>
        </div>
      </motion.div>
    );
  }
}
