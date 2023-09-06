import Cards from "@/components/Cards";
import Container from "@/components/Container";

const Products = () => {
  return (
    <Container variant="flexCols" className="w-full h-[581px] p-[64px] gap-[48px]">
      <Container variant="flexCols" className="w-[500px] h-[67px] gap-[12px] ">
        <h1 className="font-bold text-3xl text-white uppercase ">
          {" "}
          Favorite products{" "}
        </h1>
        <p className="text-white text-md ">
          {" "}
          Try any of our amazing products today and get $50 promo code!{" "}
        </p>
      </Container>
      <Container variant="flexBetween" className=" w-[1312px]">
        <Cards
          title="Product #001"
          description="This Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed."
          image="/assets/cards/Image-1.png"
        />
        <Cards
          title="Product #002"
          description="This Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed."
          image="/assets/cards/Image-2.png"
        />
        <Cards
          title="Product #003"
          description="This Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed."
          image="/assets/cards/Image-3.png"
        />
        <Cards
          title="Product #004"
          description="This Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed."
          image="/assets/cards/Image-4.png"
        />
      </Container>
    </Container>
  );
};

export default Products;
