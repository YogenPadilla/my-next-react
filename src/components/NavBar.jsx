import Link from "next/link";
import Button from "./Button";
import { Icon } from "@iconify/react";
import Container from "./Container";

const NavBar = () => {
  return (
    <Container variant="flexBetween" className="w-full top-0 left-0 px-[32px] py-[16px]">
      <Container variant="flexCenter">
        <Icon className="hover:scale-125 active:scale-100 w-[48px] h-[52px] cursor-pointer" href="" icon="logos:react" />
      </Container>
      <Container variant="flexBetween" className="text-white text-sm gap-[32px] p-[16px]">
        <Link className="px-[12px] py-[8px] hover:scale-125 active:scale-100" href="" > {" "} Home {" "} </Link>
        <Link className="px-[12px] py-[8px] hover:scale-125 active:scale-100" href="" > {" "} Products {" "} </Link>
        <Link className="px-[12px] py-[8px] hover:scale-125 active:scale-100" href="" > {" "} About {" "} </Link>
        <Link className="px-[12px] py-[8px] hover:scale-125 active:scale-100" href="" > {" "} Contact{" "} </Link>
      </Container>
      <Container variant="flexCenter" className="p-[6px] gap-[24px]">
        <Button variant="secondary"> Login </Button>
        <Button variant="primary"> Sing up </Button>
      </Container>
    </Container>
  );
};

export default NavBar;



