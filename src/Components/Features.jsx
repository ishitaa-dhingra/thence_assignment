import React from "react";
import sample from "../images/image 32618.png";
import { AchievedReduction } from "./achievedReduction";
import { ExpensesReduction } from "./expensesReduction";
import StaffDeploymentBadge from "./StaffDeploymentBadge";

function Features() {
  return (
    <div className="relative">
      <img
        src={sample}
        alt="Sample"
        className="absolute w-[519.65px] h-[493.29px] top-[79px] left-[197.81px] rounded-[27.11px] "
      />
      <div className="absolute w-[267.82px] h-[239px] top-[210px] left-[62px]  gap-4 rounded-tl-[27.11px] ">
        <AchievedReduction />
      </div>
      <div className="absolute w-[250.82px] h-[239px] top-[450px] left-[120px]  gap-4 rounded-tl-[27.11px] ">
        <StaffDeploymentBadge />
      </div>
      <div className="absolute w-[267.82px] h-[239px] top-[430px] left-[600px]  gap-4 rounded-[47.11px] ">
        <ExpensesReduction />
      </div>
    </div>
  );
}

export default Features;
