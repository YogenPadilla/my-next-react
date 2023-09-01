import { Icon } from "@iconify/react";

const Logos = () => {
  return (
    <div className="w-full h-[162.5px] flex items-center justify-center border border-[#222831]">
      <div className="flex items-center justify-between w-[1116px] top-[56px] left-[160px] gap-[80px] px-[48px]">
        <Icon className="hover:scale-125 active:scale-100 w-[64px] h-[64px] cursor-pointer" icon="devicon:html5" />
        <Icon className="hover:scale-125 active:scale-100 w-[64px] h-[64px] cursor-pointer" icon="devicon:css3" />
        <Icon className="hover:scale-125 active:scale-100 w-[64px] h-[64px] cursor-pointer" icon="devicon:tailwindcss" />
        <Icon className="hover:scale-125 active:scale-100 w-[64px] h-[64px] cursor-pointer" icon="devicon:nextjs" />
        <Icon className="hover:scale-125 active:scale-100 w-[64px] h-[64px] cursor-pointer" icon="devicon:vercel-wordmark" />
        <Icon className="hover:scale-125 active:scale-100 w-[64px] h-[64px] cursor-pointer" icon="devicon:eslint" />
      </div>
    </div>
  );
};

export default Logos;
