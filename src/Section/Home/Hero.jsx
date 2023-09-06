import Button from "@/components/Button";
import Container from "@/components/Container";

const Hero = () => {
  return (
    <Container variant="gridCols2" className="w-full">
       <div 
          style={{
            backgroundImage: "url(/assets/ground.png)",
            backgroundSize: "content",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            width: "1440px",
            height: "478px",
            left: 0,
            zIndex: -1,
            top: "520px",
          }}
        />
    <div>
    <Container variant="flexColsCenter" className="w-[552px] h-[352px] mt-[80px] ml-[80px] mb-[248px] text-center gap-[32px]">
        <h1 className="text-white font-semibold text-6xl uppercase">
          Loren ipsum dolor sit amet
        </h1>
        <p className="text-white text-md">
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <Container variant="flexCenter" className=" gap-[32px]">
          <Button variant="primary"> Shop </Button>
          <Button variant="secondary"> Explore </Button>
        </Container>
      </Container>
    </div>
      <div>
        <img className="absolute mt-[220px] ml-[230px] " src="./assets/gradient.png" alt="" />
        <img className="absolute  mt-[188px]" src="./assets/mouse.png" alt="" />
        <img className="absolute mt-[83px] ml-[510px] " src="./assets/card.png" alt="" />
      </div>
    </Container>
  );
};

export default Hero;
