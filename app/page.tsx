"use client"
import Desc from "@/components/section/desc";
import Game from "@/components/section/game";
import Gun from "@/components/section/gun";
import Hero from "@/components/section/hero";
import { inView, motion, useInView } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const heroSection = useRef(null)
  const descSection = useRef(null)
  const GunSection = useRef(null)
  const GameSection = useRef(null)
  const isInView = useInView(heroSection)
  
  const scrollToTop = () => {
    scrollTo({top:0, behavior:'smooth'})
  };
  return(
    <main className="bg-blue-100 overflow-x-hidden relative">
      <div className="md:hidden">
      <div  ref={heroSection}><Hero gs={GunSection} ms={GameSection} ds={descSection}/></div>
      <motion.div 
      animate={{opacity:(isInView?0:1)}}
      onClick={scrollToTop}
      className="bg-blue-200/50 fixed right-0 bottom-0 m-4 p-2 z-30 text-blue-200/50 border border-blue-200"><ArrowUp/></motion.div>
      <div ref={descSection}><Desc/></div>
      <div ref={GunSection}><Gun/></div>
      <div ref={GameSection}><Game/></div>
      </div>
      <div className="hidden md:grid content-center text-center h-screen w-screen">
        <p className="text-3xl font-bold text-blue-800">Halaman ini belum responsive</p>
        <p className="text-lg font-bold text-blue-500">Silahkan buka di hp atau inspect element dan buka tampilan mobile :v</p>
      </div>
    </main>
  );
}
