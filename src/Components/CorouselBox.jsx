import Features from "./Features";

import MyCarousel from "./MyCorousel";

function CorouselBox() {
  return (
    <div className=" flex flex-col justify-between md:flex-row p-20  rounded-[27px] bg-green-50 mx-auto ml-2 mr-2 mt-[700px]">
      <Features />
      <MyCarousel />
    </div>
  );
}

export default CorouselBox;
