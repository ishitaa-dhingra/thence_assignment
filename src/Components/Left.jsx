import arrow from "../images/Arrow.svg";
function Left() {
  return (
    <div>
      <h1 className="text-left text-slate-500 font-DM text-3xl font-normal leading-[39.6px] tracking-tighter pt-1">
        What's on your mind
      </h1>
      <p className="font-Manrope text-5xl font-semibold leading-[67.2px] tracking-tighter mb-8 text-left">
        Ask Questions
      </p>
      <img src={arrow} alt="arrow" />
    </div>
  );
}

export default Left;
