import React from "react";

function TopBox() {
  return (
    <div className="w-full h-[75vh] relative">
      <img
        className="w-full h-full"
        src="https://vasscompany.com/wp-content/uploads/2020/09/contacto.jpg"
        alt=""
      />
      <div className="absolute right-32 bottom-10">
        <h3 className="text-[100px] text-white opacity-70 font-black">
          CONTACTO
        </h3>
      </div>
    </div>
  );
}

export default TopBox;
