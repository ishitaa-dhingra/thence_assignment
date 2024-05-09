import logo from "../images/Vector.png";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LinkButton from "../Components/LinkButton";
import backbutton from "../images/Frame 1261155540.png";
import tick from "../images/Tick + round.png";

function Success() {
  const navigate = useNavigate();
  const [remainingTime, setRemainingTime] = useState(5);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/");
    }, remainingTime * 1000);

    return () => clearTimeout(timeoutId);
  }, [navigate, remainingTime]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="bg-white rounded-[65.28px] flex justify-between items-center p-4 w-1392 h-111.17 m-4 ">
        <img
          src={logo}
          alt="Brunel_Logo"
          className="h-6 w-121px  top-[31.86px] left-[52.78px]"
        />
        <div className="mr-4">
          <LinkButton to="/" className="text-blue-500">
            <img className="w-9 h-9" src={backbutton} alt="cross" />
          </LinkButton>
        </div>
      </div>
      <div>
        <img className="w-12 mx-auto mt-20" src={tick} />
        <h1 className="text-center text-green-600 font-DM text-3xl font-normal leading-[39.6px]  tracking-tighter pt-8">
          Success Submitted
        </h1>
        <p className="font-Manrope text-5xl font-semibold leading-[67.2px] tracking-tighter text-center">
          Congratulations
        </p>
        <p className="font-Manrope text-xl  text-center text-stone-600 mt-3">
          Your request has been successfully submitted to us.
          <br />
          We will validate your information and reach out to your
          <br /> shortly with updates
        </p>
      </div>
      <p className="font-Manrope text-m text-align-end mt-[400px] text-center text-stone-600 ">
        Redirecting you to homepage in {remainingTime}{" "}
        {remainingTime === 1 ? "second" : "seconds"}...
      </p>
    </>
  );
}

export default Success;
