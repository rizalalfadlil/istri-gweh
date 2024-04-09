/* eslint-disable react/jsx-key */
"use client ";
import { motion } from "framer-motion";
import { RefreshCw, Star } from "lucide-react";
import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"



export default function Game() {
  const [alter, setAlter] = useState(false);
  return (
    <div className="h-max w-screen bg-blue-900 p-4">
      <motion.div
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 0.5, ease: "easeOut" }}

        className={`${
          alter ? "bg-blue-200/50" : "bg-red-500/50"
        } w-full aspect-square relative ${!alter && "bg-cover"} bg-top`}
        style={{
          backgroundImage: `url('./images/${alter ? "ys" : "yn"}.png')`,
        }}
      >
        <p className="absolute bottom-0 left-0 m-4 px-1 text-blue-800 bg-blue-200/60 font-extrabold">Hayase Yuuka {alter && '(Track)'}</p>
        <button
          className="absolute bottom-0 right-0 p-1 px-2 m-4 bg-blue-400/30 active:bg-blue-200/30 border-blue-400 active:border-blue-200 border text-blue-400 active:text-blue-200"
          onClick={() => setAlter(!alter)}
        >
          <RefreshCw />
        </button>
      </motion.div>
      <div className="grid gap-4 uppercase mt-4">
        <Stats alter={alter} />
        <Type alter={alter} />
        <Skills alter={alter} />
      </div>

      <p className="text-blue-200 text-sm mt-20">section</p>
      <p className="text-blue-200">
        04 | <span className="text-white">Gameplay</span>
      </p>
    </div>
  );
}

function Stats(props: { alter: boolean }) {
  const normal = {
    hp: 3147,
    atk: 119,
    def: 29,
    heal: 1505,
  };
  const skin = {
    hp: 3087,
    atk: 174,
    def: 27,
    heal: 1778,
  };
  const values = props.alter ? skin : normal;
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-blue-200/20 p-4"
    >
      <p className="px-1 bg-blue-200/80 text-blue-800 font-bold text-center text-lg">
        stats
      </p>
      <div className="grid grid-cols-2 gap-2 py-2">
        <div className="text-white p-2">
          <p className="text-blue-300 w-fit font-extrabold">hp</p>
          <p className="text-3xl font-extrabold">{values.hp}</p>
        </div>
        <div className="text-white p-2">
          <p className="text-blue-300 w-fit font-extrabold">atk</p>
          <p className="text-3xl font-extrabold">{values.atk}</p>
        </div>
        <div className="text-white p-2">
          <p className="text-blue-300 w-fit font-extrabold">def</p>
          <p className="text-3xl font-extrabold">{values.def}</p>
        </div>
        <div className="text-white p-2">
          <p className="text-blue-300 w-fit font-extrabold">heal</p>
          <p className="text-3xl font-extrabold">{values.heal}</p>
        </div>
      </div>
    </motion.div>
  );
}

function Type(props: { alter: boolean }) {
  const { alter } = props;

  const atktype = {
    explosive: (
      <p className="text-2xl w-fit font-extrabold bg-red-500/40 border border-red-400 p-1 mt-1 px-2">
        Explosive
      </p>
    ),
    piercing: (
      <p className="text-2xl w-fit font-extrabold bg-yellow-500/40 border border-yellow-400 p-1 mt-1 px-2">
        Piercing
      </p>
    ),
    mystic: (
      <p className="text-2xl w-fit font-extrabold bg-blue-500/40 border border-blue-400 p-1 mt-1 px-2">
        Mystic
      </p>
    ),
    sonic: (
      <p className="text-2xl w-fit font-extrabold bg-purple-500/40 border border-purple-400 p-1 mt-1 px-2">
        Sonic
      </p>
    ),
  };
  const deftype = {
    light: (
      <p className="text-2xl w-fit font-extrabold bg-red-500/40 border border-red-400 p-1 mt-1 px-2">
        Light
      </p>
    ),
    heavy: (
      <p className="text-2xl w-fit font-extrabold bg-yellow-500/40 border border-yellow-400 p-1 mt-1 px-2">
        Heavy
      </p>
    ),
    special: (
      <p className="text-2xl w-fit font-extrabold bg-blue-500/40 border border-blue-400 p-1 mt-1 px-2">
        Special
      </p>
    ),
    elastic: (
      <p className="text-2xl w-fit font-extrabold bg-purple-500/40 border border-purple-400 p-1 mt-1 px-2">
        Elastic
      </p>
    ),
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-blue-200/20 p-4"
    >
      <p className="px-1 bg-blue-200/80 text-blue-800 font-bold text-center text-lg">
        type
      </p>
      <div className="grid grid-cols-2 gap-2 py-2">
        <div className="text-white p-2">
          <p className="text-blue-300 w-fit font-extrabold">attack type</p>
          {alter ? atktype.mystic : atktype.explosive}
        </div>
        <div className="text-white p-2">
          <p className="text-blue-300 w-fit font-extrabold">defense type</p>
          {alter ? deftype.special : deftype.heavy}
        </div>
        <div className="text-white p-2">
          <p className="text-blue-300 w-fit font-extrabold">rarity</p>
          <p className="text-3xl font-extrabold text-nowrap">
            {alter ? "⭐⭐⭐" : "⭐⭐"}
          </p>
        </div>
        <div className="text-white p-2">
          <p className="text-blue-300 w-fit font-extrabold">role</p>
          <p className="text-3xl font-extrabold">Tank</p>
          <p className="text-sm text-blue-200">Striker | Front</p>
        </div>
      </div>
    </motion.div>
  );
}

function Skills(props: { alter: boolean }) {
  const { alter } = props;
  const normal = [
    <Skill image="./images/skills/1.png" name="Q.E.D" />,
    <Skill image="./images/skills/4.png" name="Calculative Mind" />,
    <Skill image="./images/skills/2.png" name="I.F.F" />,
    <Skill image="./images/skills/3.png" name="Optimal Solutions" />,
  ];
  const sport = [
    <Skill image="./images/skills/5.png" name="R.S.G" />,
    <Skill image="./images/skills/1.png" name="Rehydration" />,
    <Skill
      image="./images/skills/6.png"
      name="Mathematical Competition Strategies"
    />,
    <Skill image="./images/skills/7.png" name="Optimal Pathing Calculation" />,
  ];
  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      >
      <p className="px-1 bg-blue-200/80 text-blue-800 font-bold mb-4 text-center text-lg">
        skills
      </p>
      <div className="grid grid-cols-4 gap-2">{alter ? sport : normal}</div>
    </motion.div>
  );
}

function Skill(props: { image: string; name: string }) {
  const { image, name } = props;
  return (
    <div className="bg-blue-200/20 p-2">
      <div
        className="aspect-square bg-contain"
        style={{ backgroundImage: `url('${image}')` }}
      ></div>
      <Popover>
        <PopoverTrigger className='w-full'>
        <div className="bg-blue-200/20 mt-2 px-2 text-white text-xs overflow-x-hidden text-nowrap font-medium text-center">
        {name}
      </div>
        </PopoverTrigger>
        <PopoverContent>
          {name}
        </PopoverContent>
      </Popover>
    </div>
  );
}
