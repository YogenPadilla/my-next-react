import Button from "./Button";

const Cards = ({ title, description, image }) => {
  return (
    <div className=" flex flex-col gap-[24px] w-[240px] h-[328px] items-center justify-start hover:scale-105 rounded-lg bg-[#243c60]">
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          width: "240px",
          height: "144px",
          backgroundSize: "cover",
        }}
      />
      <div className=" w-[208px] h-[84px] flex flex-col items-start justify-center gap-[16px] ">
        <h2 className=" text-base font-md text-gray-200 uppercase "> {title} </h2>
        <p className=" text-xs text-gray-400 "> {description} </p>
      </div>
      <div className="pb-[16px]">
        <Button variant="secondary"> More information </Button>
      </div>
    </div>
  );
};

export default Cards;
