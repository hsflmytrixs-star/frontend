import React from "react";
import LocalGroundTeam from "./LocalGroundTeam";
import ManagementTeam from "./ManagementTeam";

const Teams = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">
          Meet the Team
        </h1>
        <ManagementTeam/>
        <LocalGroundTeam />
      </div>
    </>
  );
};

export default Teams;
