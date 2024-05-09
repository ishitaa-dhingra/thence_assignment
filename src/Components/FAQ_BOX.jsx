import FAQ from "../Components/FAQ"; // Assuming you have a FAQ component
import Left from "./Left";

function FAQ_BOX() {
  return (
    <div className=" flex flex-col justify-between md:flex-row pb-15 pt-20 pl-20 pr-20 inline rounded-[27px] bg-[#E8EEE7] mx-auto ml-3 mr-3 mt-[300px]">
      <Left />
      <FAQ />
    </div>
  );
}

export default FAQ_BOX;
