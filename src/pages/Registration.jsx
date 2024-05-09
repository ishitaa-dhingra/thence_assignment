import React, { useState } from "react";
import logo from "../images/Vector.png";
import LinkButton from "../Components/LinkButton";
import backbutton from "../images/Frame 1261155540.png";
import Button from "../Components/Button";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(enteredEmail)) {
      setEmailError(" ❗Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const isSubmitDisabled = !name || !email || emailError;

  return (
    <>
      <div class="bg-white rounded-[65.28px]  flex justify-between items-center p-4 w-1392 h-111.17  m-4 ">
        <img
          src={logo}
          alt="Brunel_Logo"
          className="h-[30.5px] w-[121px]  top-[31.86px] left-[52.78px]"
        />
        <div className="mr-4">
          <LinkButton to="/" className="text-blue-500">
            <img className="w-9 h-9" src={backbutton} alt="cross" />
          </LinkButton>
        </div>
      </div>
      <div className="max-w-md mx-auto p-6 bg-white ">
        <h2 className="text-center text-[#2DA950]  font-DM text-[36px] font-normal leading-[39.6px] tracking-tighter pt-8">
          Registration Form
        </h2>
        <p className="font-Manrope text-5xl font-semibold leading-[67.2px] tracking-tighter text-center mb-12">
          Start your success
          <br /> Journey here!
        </p>

        <div className="mb-4">
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className=" h-[75px] w-[417px] bg-gray-100 rounded-[65.28px]  px-4 py-2 border  focus:outline-none focus:border-green-700"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="h-[75px] w-[417px]  bg-gray-100 rounded-[65.28px]  px-4 py-2 border  mb-8 focus:outline-none m focus:border-green-700"
            placeholder="Enter your email"
            required
          />
          {emailError && <p className="text-red-500">{emailError}</p>}
        </div>
        <center>
          <Button
            type="submitbutton"
            to={isSubmitDisabled ? "" : "/success"}
            disabled={isSubmitDisabled}
          >
            Submit
          </Button>
        </center>
      </div>
    </>
  );
}

export default Registration;
