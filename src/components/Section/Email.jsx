import { Icon } from "@iconify/react";

const Email = () => {
  return (
    <div className="w-full h-[310px] py-[80px] flex flex-col items-center justify-center gap-[32px] border border-[#222831]">
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
      <div className="w-full flex items-center justify-center">
        <div className="w-[387px] h-[44px] flex items-center justify-center px[8px] py[16px] gap-[16px] bg-[#243c60] ">
          <input
            className="w-[323px] h-[28px] px-[16px] border-[2px] hover:bg-white border-white bg-white rounded-[4px] "
            type="email"
            placeholder="your@email.com"
          />
          <Icon
            className="text-white hover:scale-125 active:scale-100 cursor-pointer"
            icon="lucide:download"
          />
        </div>
      </div>
    </div>
  );
};

export default Email;
