import FAQ from "../Components/FAQ"; // Assuming you have a FAQ component
import Left from "./Left";

function FAQ_BOX() {
  return (
    <div className=" flex flex-col justify-between md:flex-row p-20 inline rounded-[27px] bg-green-50 mx-auto ml-2 mr-2 mt-[300px]">
      <Left />
      <FAQ />
    </div>
  );
}

export default FAQ_BOX;
