import React from "react";
import "../../Assets/CSS/Nav.css";
import { BsSearch } from "react-icons/bs";
import { BiSolidDownArrow } from "react-icons/bi";

function NavMenu() {
  return (
    <nav className="w-[65%] h-[80%] ">
      <ul className="w-full h-full flex justify-between items-center">
        <li>
          <a className="navElement" href="">
            Industrias <BiSolidDownArrow className="text-[8px]" />{" "}
          </a>
        </li>
        <li>
          <a className="navElement" href="">
            Regiones <BiSolidDownArrow className="text-[8px]" />
          </a>
        </li>
        <li>
          <a className="navElement" href="">
            Somos VASS <BiSolidDownArrow className="text-[8px]" />
          </a>
        </li>
        <li>
          <a className="navElement" href="">
            Cómo lo hacemos <BiSolidDownArrow className="text-[8px]" />
          </a>
        </li>
        <li>
          <a className="navElement" href="">
            Partners
          </a>
        </li>
        <li>
          <a className="navElement" href="">
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
            Join us! <BiSolidDownArrow className="text-[8px]" />
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
  );
}

export default NavMenu;
