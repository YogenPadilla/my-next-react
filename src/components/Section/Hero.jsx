import Button from "../Button";

const Hero = () => {
  return (
    <div className="h-[682.5px] w-full grid grid-cols-2 border border-[#222831]">
    <div>
    <div className="w-[552px] h-[352px] mt-[80px] ml-[80px] flex flex-col items-center justify-center text-center gap-[32px]">
        <h1 className="text-white font-semibold text-6xl uppercase">
          Loren ipsum dolor sit amet
        </h1>
        <p className="text-white text-md">
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="flex items-center justify-center gap-[32px]">
          <Button variant="primary"> Shop </Button>
          <Button variant="secondary"> Explore </Button>
        </div>
      </div>
    </div>
      <div className="flex ">
        <img className="absolute w-[471px] h-[324px] mt-[220px] ml-[216px] " src="./assets/gradient.png" alt="" />
        <img className="absolute w-[521px] h-[426px] mt-[188px]  " src="./assets/mouse.png" alt="" />
        <img className="absolute w-[160px] h-[211px] mt-[83px] ml-[510px] " src="./assets/card.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
