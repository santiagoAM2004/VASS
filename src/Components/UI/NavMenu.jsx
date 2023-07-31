import React, { useState } from "react";
import "../../Assets/CSS/Nav.css";
import { BsSearch } from "react-icons/bs";
import { BiSolidDownArrow } from "react-icons/bi";
import LiOptions from "./LiOptions";

function NavMenu() {
  const abrir = () => {
    document.getElementById("box").classList.toggle("abierto");
    document.getElementById("barra").classList.toggle("barra");
  };

  return (
    <>
      <LiOptions/>
      <div id='barra' className="h-[1px] w-0 absolute bottom-0 left-0 bg-white transition-all duration-300 ease-out"></div>
      <nav className="w-[65%] h-[80%] xl:w-[85%]">
        <ul className="w-full h-full flex justify-between items-center">
          <li>
            <a className="navElement" href="">
              Casos de éxito
            </a>
          </li>
          <li>
            <a className="navElement" href="#" onClick={abrir}>
              Mercados <BiSolidDownArrow className="text-[8px]" />
            </a>
          </li>
          <li>
            <a className="navElement" href="#" onClick={abrir}>
              Países <BiSolidDownArrow className="text-[8px]" />
            </a>
          </li>
          <li>
            <a className="navElement" href="#" onClick={abrir}>
              Somos VASS <BiSolidDownArrow className="text-[8px]" />
            </a>
          </li>
          <li>
            <a className="navElement" href="#" onClick={abrir}>
              Cómo lo hacemos <BiSolidDownArrow className="text-[8px]" />{" "}
            </a>
          </li>
          <li>
            <a className="navElement" href="#" onClick={abrir}>
              Insights <BiSolidDownArrow className="text-[8px]" />
            </a>
          </li>
          <li>
            <a className="navElement" href="">
              Noticias
            </a>
          </li>
          <li>
            <a className="navElement" href="">
              VASS Research
            </a>
          </li>
          <li>
            <a className="navElement" href="">
              Contacto
            </a>
          </li>
          <li>
            <a className="navElement" href="">
              EN
            </a>
          </li>
          <li>
            <BsSearch className="text-2xl text-white" />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavMenu;
