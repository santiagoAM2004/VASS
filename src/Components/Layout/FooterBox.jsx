import React from "react";
import LiFooter from "../UI/LiFooter";
import {
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import LogoMenu from "../UI/LogoMenu";

function FooterBox() {
  return (
    <footer className="bg-[#151515] w-full flex flex-col pt-[55px] border-t-[1px] border-white divide-y-[1px]">
      <div className="flex w-[90%] justify-between gap-[50px] pl-[180px] mb-14">
        <div className="w-[15%]  text-left  flex flex-col gap-5">
          <h2 className="text-white font-bold text-[13px]">SOMOS VASS</h2>
          <ul className="h-full flex flex-col justify-between pb-14">
            <div>
                <LiFooter name="Nosotros" />
                <LiFooter name="Contacto" />
                <LiFooter name="Canal ético" />
            </div>
            <div className="w-full flex justify-start">
              <LogoMenu />
            </div>
          </ul>
        </div>
        <div className="w-[15%]  text-left flex flex-col gap-5">
          <h2 className="text-white font-bold text-[13px]">INDUSTRIAS</h2>
          <ul>
            <LiFooter name="Administración Pública" />
            <LiFooter name="Banking & Capital Markets" />
            <LiFooter name="Energy & Utilities" />
            <LiFooter name="Industria" />
            <LiFooter name="Retail & CPG" />
            <LiFooter name="Seguros" />
            <LiFooter name="Telecom & Media" />
          </ul>
        </div>
        <div className="w-[15%]  text-left flex flex-col gap-5">
          <h2 className="text-white font-bold text-[13px]">NOTICIAS</h2>
          <ul>
            <LiFooter name="Insights" />
            <LiFooter name="Noticias VASS" />
          </ul>
        </div>
        <div className="w-[15%]  text-left flex flex-col gap-5">
          <h2 className="text-white font-bold text-[13px]">SOCIAL</h2>
          <ul>
            <div className="flex">
              <LiFooter name={<AiOutlineTwitter />} />
              <LiFooter name={<AiFillLinkedin />} />
              <LiFooter name={<AiOutlineInstagram />} />
              <LiFooter name={<AiFillYoutube />} />
            </div>
          </ul>
        </div>
        <div className="w-[15%]  text-left flex flex-col gap-5">
          <h2 className="text-white font-bold text-[13px]">VASS</h2>
          <ul>
            <LiFooter name="VASS" />
            <LiFooter name="Serbatic" />
            <LiFooter name="NATEEVO" />
            <LiFooter name="vdSHOP" />
            <LiFooter name="T4S" />
            <LiFooter name="Hexagon Data" />
            <LiFooter name="One Inside" />
            <LiFooter name="Zington Group" />
            <LiFooter name="Intelygenz" />
            <LiFooter name="Copilot" />
          </ul>
        </div>
        <div className="w-[15%]  text-left flex flex-col gap-5">
          <h2 className="text-white font-bold text-[13px]">TALENTO</h2>
          <ul>
            <LiFooter name="Spain" />
            <LiFooter name="Perú" />
            <LiFooter name="Chile" />
            <LiFooter name="UK" />
            <LiFooter name="Mexico" />
            <LiFooter name="Colombia" />
            <LiFooter name="Benelux" />
            <LiFooter name="DACH" />
            <div>
              <img
                className="w-[220px] mt-3"
                src="https://vasscompany.com/wp-content/themes/vass/images/CERTIFICADOS-2022_NEGATIVO.png"
                alt=""
              />
            </div>
          </ul>
        </div>
      </div>
      <div className="w-full h-[150px] flex justify-start items-center pl-[180px] gap-56 border-white border-b-[10px]">
        <div>
          <p className="text-white text-[12px]">Copyright © 2023 Todos los derechos reservados</p>
        </div>
        <ul className="flex gap-3">
          <LiFooter name="Política de cookies" />
          <p className="text-white">|</p>
          <LiFooter name="Politica de privacidad" />
          <p className="text-white">|</p>
          <LiFooter name="Política de calidad y medio ambiente" />
          <p className="text-white">|</p>
          <LiFooter name="Política de la seguridad de la información" />
        </ul>
      </div>
    </footer>
  );
}

export default FooterBox;
