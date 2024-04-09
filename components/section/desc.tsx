/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";

export default function Desc() {
  return (
    <div className="p-4 bg-blue-950 w-screen bg-contain" style={{backgroundImage:"url('./pattern/grid.svg')"}}>
      <motion.div 
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{duration:1, ease:'easeOut'}}
      className="w-full aspect-video  bg-blue-200 bg-cover" style={{backgroundImage:"url('./images/l2d.png')"}}></motion.div>
      <p className="text-purple-400 pb-1 border-blue-200 font-bold text-2xl mt-4 border-b w-fit">Hayase Yuuka</p>
      <div className="">
        <motion.div 
        initial={{ opacity: 0, y:100 }}
        whileInView={{ opacity: 1, y:0 }}
        transition={{duration:1, ease:'easeOut'}}
        className="py-4">
          <p className="bg-purple-200/60 p-1  font-bold uppercase tracking-wide text-center">
            Introduction
          </p>
          <p className="mt-4 text-blue-100 font-semibold text-justify h-40 overflow-scroll">
            The treasurer of the Millennium Academy Student Council, "Seminar".
            She is strict about money and often quarrels with other club
            activities from her standpoint. A prominent mathematical genius even
            amongst Millennium's STEM-rich student base, she supervises the
            budget management of the Millennium. She is good at the abacus and
            has a habit of counting it to compose herself when faced with
            complex and troubling matters.
          </p>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, x:-100 }}
        whileInView={{ opacity: 1, x:0 }}
        transition={{duration:1, ease:'easeOut'}}
         className="py-4 text-sm tracking-wide">
          <p className="bg-white/60 p-0.5 w-1/2  font-bold uppercase tracking-wide text-center">
            School
          </p>
          <p className="bg-purple-700/30 p-0.5 w-full mt-2 text-white/80  font-bold uppercase tracking-wide text-center">
            Millennium Science School
          </p>
          <div className="grid gap-2 grid-cols-6">
            <div className="col-span-2 aspect-square bg-cover" style={{backgroundImage:"url('./images/m.png')"}}></div>
            <p className="mt-4 col-span-4 text-blue-100 text-justify font-semibold h-20 overflow-scroll">
              The newest of the Three Great Academies of Kivotos, which values
              logic and technical skill over all else. Because of it, they stand
              at the forefront of scientific research and attract many students
              who desire to study math or science. Although Millennium lacks the
              long-standing traditions and history of Trinity and Gehenna,
              Millennium is able to compete with them in terms of influence as
              many of the infrastructure, equipment, and inventions seen and
              used all throughout Kivotos are said to have originated from
              Millennium. Every year, the school holds a large-scale contest
              known as the Millennium Prize, where clubs all throughout the
              school compete with the results of their club activities.
            </p>
            <div className="col-span-3 aspect-video bg-contain bg-center bg-no-repeat" style={{backgroundImage:"url('./images/map.png')"}}></div>
            <div className="col-span-3 aspect-video bg-cover bg-center bg-no-repeat" style={{backgroundImage:"url('./images/m1.png')"}}></div>
          </div>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, x:100 }}
        whileInView={{ opacity: 1, x:0 }}
        transition={{duration:1, ease:'easeOut'}}
        className="py-4 text-sm tracking-wide">
          <div className="grid grid-cols-2">
            <div></div>
            <p className="bg-white/60 p-0.5  font-bold uppercase tracking-wide text-center">
              Club
            </p>
          </div>
          <p className="bg-purple-700/30 p-0.5 w-full mt-2 text-white/80  font-bold uppercase tracking-wide text-center">
            seminar
          </p>
          <div className="grid gap-2 grid-cols-6">
            <p className="mt-4 col-span-4 text-justify pe-2 text-blue-100 font-semibold h-20 overflow-scroll">
              Historically, Seminar was the predecessor and origin of
              Millennium. The original Seminar was a group of researchers who
              attempted to tackle the Millennium Problems (千年難題), which are
              described as several difficult problems unsolvable by current
              technology. In an effort to solve the problem, numerous
              experiments and verifications were carried out, leading to the
              number of research organizations affiliated with Seminar
              increasing. Eventually, these collective organizations formed
              Millennium Science School, with Seminar standing as its student
              council. Even to this day, Seminar continues to tackle the
              Millennium Problems.
            </p>
            <div className="col-span-2 aspect-square bg-cover" style={{backgroundImage:"url('./images/s.png')"}}></div>
            <div className="col-span-3 bg-blue-200/50  aspect-video bg-cover bg-center" style={{backgroundImage:"url('./images/s2.png')"}}></div>
            <div className="col-span-3 bg-blue-200  aspect-video bg-contain" style={{backgroundImage:"url('./images/wp.png')"}}></div>
          </div>
        </motion.div>
      </div>
      <p className="text-blue-200 text-sm mt-20">section</p>
      <p className="text-blue-200">02 | <span className="text-white">Introduction</span></p>
    </div>
  );
}
