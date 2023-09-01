import Cards from "../Cards";

const Products = () => {
  return (
    <div className="w-full h-[581px] p-[64px] gap-[48px] flex flex-col border border-[#222831]">
      <div className=" w-[500px] h-[67px] gap-[12px] ">
        <h1 className="font-bold text-3xl text-white uppercase ">
          {" "}
          Favorite products{" "}
        </h1>
        <p className="text-white text-md ">
          {" "}
          Try any of our amazing products today and get $50 promo code!{" "}
        </p>
      </div>
      <div className=" w-[1312px] flex items-start justify-between">
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
      </div>
    </div>
  );
};

export default Products;
