import Container from "@/components/Container";
import { Icon } from "@iconify/react";

const Logos = () => {
  return (
    <Container variant="flexCenter" className="w-full px-[163px] py-[56px]">
      <Container variant="flexBetween" className="w-[1116px] gap-[80px]">
        <Icon className="hover:scale-125 active:scale-100 w-[64px] h-[64px] cursor-pointer" icon="devicon:html5" />
        <Icon className="hover:scale-125 active:scale-100 w-[64px] h-[64px] cursor-pointer" icon="devicon:css3" />
        <Icon className="hover:scale-125 active:scale-100 w-[64px] h-[64px] cursor-pointer" icon="devicon:tailwindcss" />
        <Icon className="hover:scale-125 active:scale-100 w-[64px] h-[64px] cursor-pointer" icon="devicon:nextjs" />
        <Icon className="hover:scale-125 active:scale-100 w-[64px] h-[64px] cursor-pointer" icon="devicon:vercel-wordmark" />
        <Icon className="hover:scale-125 active:scale-100 w-[64px] h-[64px] cursor-pointer" icon="devicon:eslint" />
      </Container>
    </Container>
  );
};

export default Logos;
