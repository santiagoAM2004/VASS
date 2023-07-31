import React from "react";
import "../../Assets/CSS/LiOptions.css";

const LiOptions = (props) => {
  return (
    <div id="box" className="cerrado">
      <div className="h-[90%] w-full flex justify-center items-center divide-x-[1px] divide-white">
        <a href="#" className="w-[20%] h-full flex justify-start items-center pl-5 hover:bg-white hover:pl-10 transition-all duration-300 ease-out group">
          <p className="text-white font-semibold group-hover:text-black">Chile</p>
        </a>
        <a href="#" className="w-[20%] h-full flex justify-start items-center pl-5 hover:bg-white hover:pl-10 transition-all duration-300 ease-out group">
          <p className="text-white font-semibold group-hover:text-black">Colombia</p>
        </a>
        <a href="#" className="w-[20%] h-full flex justify-start items-center pl-5 hover:bg-white hover:pl-10 transition-all duration-300 ease-out group">
          <p className="text-white font-semibold group-hover:text-black">México</p>
        </a>
        <a href="#" className="w-[20%] h-full flex justify-start items-center pl-5 hover:bg-white hover:pl-10 transition-all duration-300 ease-out group">
          <p className="text-white font-semibold group-hover:text-black">Perú</p>
        </a>
        <a href="#" className="w-[20%] h-full flex justify-start items-center pl-5 hover:bg-white hover:pl-10 transition-all duration-300 ease-out group">
          <p className="text-white font-semibold group-hover:text-black">Reino Unido</p>
        </a>
        <a href="#" className="w-[20%] h-full flex justify-start items-center pl-5 hover:bg-white hover:pl-10 transition-all duration-300 ease-out group">
          <p className="text-white font-semibold group-hover:text-black">Benelux</p>
        </a>
      </div>
    </div>
  );
};

export default LiOptions;
