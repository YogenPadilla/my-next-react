import Container from "@/components/Container";
import { Icon } from "@iconify/react";

const Email = () => {
  return (
    <Container variant="flexColsCenter" className="w-full py-[80px] gap-[32px]">
      <div className="w-full p-[16px] gap-[24px] text-center ">
        <h1 className="text-white text-[32px] font-bold ">
          {" "}
          Want to know more?{" "}
        </h1>
        <p className="text-white text-[16px] ">
          {" "}
          Enter your email here to download our informational package{" "}
        </p>
      </div>
      <Container variant="flexCenter" className="w-full">
        <Container variant="flexCenter" className="w-[387px] h-[44px] px[8px] py[16px] gap-[16px] bg-[#243c60] ">
          <input
            className="w-[323px] h-[28px] px-[16px] border-[2px] hover:bg-white border-white bg-white rounded-[4px] "
            type="email"
            placeholder="your@email.com"
          />
          <Icon
            className="text-white hover:scale-125 active:scale-100 cursor-pointer"
            icon="lucide:download"
          />
        </Container>
      </Container>
    </Container>
  );
};

export default Email;
