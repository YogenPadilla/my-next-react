import Link from "next/link";
import Button from "./Button";
import { Icon } from "@iconify/react";

const NavBar = () => {
  return (
    <div className="w-full flex justify-between items-center h-[82.5px] py-[16px] px-[32px] border border-[#222831]">
      <div className="">
        <Icon className="hover:scale-125 active:scale-100 w-[48px] h-[52px] cursor-pointer" href="/" icon="logos:react" />
      </div>
      <div className="flex items-center justify-between text-white text-sm gap-[64px] p-[16px]">
        <Link className="hover:scale-125 active:scale-100" href="" > {" "} Home {" "} </Link>
        <Link className="hover:scale-125 active:scale-100" href="" > {" "} Products {" "} </Link>
        <Link className="hover:scale-125 active:scale-100" href="" > {" "} About {" "} </Link>
        <Link className="hover:scale-125 active:scale-100" href="" > {" "} Contact{" "} </Link>
      </div>
      <div className="flex p-[6px] gap-[24px]">
        <Button variant="secondary"> Login </Button>
        <Button variant="primary"> Sing up </Button>
      </div>
    </div>
  );
};

export default NavBar;



