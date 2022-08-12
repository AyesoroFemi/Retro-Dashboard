import React from "react";
import SideBar from "../components/SideBar";

function Settings() {
  return (
    <div className="flex mx-8 my-10 border-2 border-gray-100">
      <div className="">
        <SideBar />
      </div>
      <div className="flex-1 bg-blue-50 px-6 py-4 rounded-tl-3xl">
        <h1 className="text-4xl">Settings</h1>
      </div>
    </div>
  );
}

export default Settings;
