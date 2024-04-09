import {
  ChevronDown,
  Computer,
  FileText,
  Home,
  HomeIcon,
  Smartphone,
  Sword,
} from "lucide-react";
import React from "react";

export default function Hero(props: { ds: any; gs: any; ms: any }) {
  const { ds, gs, ms } = props;
  const scrollToDesc = () => {
    if (ds) {
      ds.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToGun = () => {
    if (gs) {
      gs.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToGame = () => {
    if (ms) {
      ms.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="p-4 h-screen flex flex-col w-screen">
      <div className="bg-blue-950 grow mb-4 ">
        <div className="w-full h-full bg-gradient-to-t from-slate-900/50 grid place-items-center bg-contain"style={{ backgroundImage: "url('./pattern/grid3.svg')" }}>
          <div className="grid capitalize justify-items-center">
            <p className="text-blue-200/60 text-lg">webpage about</p>
            <p className="text-blue-200 font-bold text-4xl">Hayase Yuuka</p>
            <p className="text-blue-200/60 text-lg lowercase">( istri gweh )</p>
            <button
              onClick={scrollToDesc}
              className="mt-8 w-full bg-blue-200/10 text-lg text-blue-200/50 border active:text-blue-200 active:border-blue-200 border-blue-200/50  p-2"
            >
              Scroll Down
            </button>
          </div>
        </div>
      </div>
      <div className="border text-blue-200/50 grid grid-cols-4 place-items-center  p-4 bg-blue-950">
        <Home className="active:text-blue-200" onClick={()=>scrollTo({top:0, behavior:'smooth'})}/>
        <FileText className="active:text-blue-200" onClick={scrollToDesc} />
        <Sword className="active:text-blue-200" onClick={scrollToGun} />
        <Computer className="active:text-blue-200" onClick={scrollToGame}/>
      </div>
    </div>
  );
}
