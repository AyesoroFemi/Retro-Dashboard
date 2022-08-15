import React from "react";
import SideBar from "../components/SideBar";

function Product() {
  return (
    <div className="flex flex-col lg:flex-row border-2 border-gray-100">
      <div className="">
        <SideBar />
      </div>
      <div className="flex-1 bg-blue-50 px-6 pt-4 pb-8 rounded-tl-3xl">
        <h1 className="text-4xl">Products</h1>
      </div>
    </div>
  );
}

export default Product;
