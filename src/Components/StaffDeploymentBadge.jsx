import React from "react";
import icon from "../images/Vector (1).png"; // Replace with the path to your icon image

const StaffDeploymentBadge = () => {
  return (
    <div className="badge-container bg-white rounded-full shadow p-4 flex items-center">
      <div className=" bg-green-100 rounded-full shadow p-2 flex items-center opacity-2">
        <img src={icon} alt="plane Icon" className="icon w-8 h-8 " />
      </div>

      <div className="text-content ml-8">
        <p className="text-lg font-bold">10 DAYS</p>
        <p className="text-sm text-gray-500">Staff Deployment</p>
      </div>
    </div>
  );
};

export default StaffDeploymentBadge;
