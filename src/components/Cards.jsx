import Button from "./Button";
import Container from "./Container";

const Cards = ({ title, description, image }) => {
  return (
    <Container variant="flexColsCenter" className="gap-[24px] w-[240px] hover:scale-105 rounded-lg bg-[#243c60]">
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          width: "240px",
          height: "144px",
          backgroundSize: "cover",
        }}
      />
      <Container variant="flexColsCenter" className=" w-[208px] h-[84px] gap-[16px] ">
        <h2 className=" text-base font-md text-gray-200 uppercase "> {title} </h2>
        <p className=" text-xs text-gray-400 "> {description} </p>
      </Container>
      <Container variant="flexCenter" className="pb-[16px]">
        <Button variant="secondary"> More information </Button>
      </Container>
    </Container>
  );
};

export default Cards;
