import React from "react";
import NavMenu from "../UI/NavMenu";
import LogoMenu from "../UI/LogoMenu";
import "../../Assets/CSS/Header.css";

function Header() {
  window.addEventListener("scroll", () => {
    const headerId = document.getElementById("header");
    headerId.classList.toggle("scrollDown", window.scrollY > 7);
  });

  return (
    <div className="flex justify-between items-center  pr-[180px] w-full h-[80px] bg-transparent fixed z-30 ">
      <LogoMenu padding="pl-7"/>
      <NavMenu />
      <div
        id="header"
        className="w-full h-0 absolute -z-10 transition-all duration-300 ease-in bg-black top-0"
      />
    </div>
  );
}

export default Header;
