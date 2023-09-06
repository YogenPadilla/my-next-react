import Button from "../../components/Button";
import Container from "@/components/Container";

const CTA = () => {
  return (
    <div
      style={{
        backgroundImage: "url(../assets/gradient.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="w-full h-[480px] p-[64px] gap-[48px] border border-[#222831] "
    >
      <Container variant="flexColsCenter" className="w-[1312px] h-[352px] gap-[48px]">
        <div className="w-full py-[16px] ">
          <h1 className="uppercase text-[#222831] text-6xl text-center font-bold ">
            {" "}
            Tempor incididunt ut labore et dolore magna aliqua.{" "}
          </h1>
        </div>
        <div className="w-full">
          <p className="text-[#222831] text-lg text-center ">
            Try any of our amazing products today!
          </p>
        </div>
        <Container variant="flexCenter" className="w-full">
          <Button variant="primary-dark"> Shop </Button>
        </Container>
      </Container>
    </div>
  );
};

export default CTA;
