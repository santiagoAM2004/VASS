import React from "react";
import InputForm from "../UI/InputForm";

function EndBox() {
  return (
    <div className="w-full bg-black pl-[180px] pt-[180px] pb-[90px]">
      <form className="w-[70%] flex justify-start gap-28">
        <div className="w-[45%] p-[15px] flex flex-col gap-24">
          <InputForm name="Nombre*" type="text" />
          <InputForm name="Apellidos*" type="text" />
          <InputForm name="Email*" type="text" />
          <InputForm name="País*" type="text" />
          <InputForm name="Empresa / Organismo" type="text" />
          <InputForm name="Cargo" type="text" />
        </div>
        <div className="w-[40%] p-[10px] flex flex-col gap-[80px] items-center">
          <InputForm name="Teléfono" type="Number" />
          <div className="flex flex-col justify-start gap-7 w-full">
            <label
              className="text-white text-start font-bold"
              htmlFor="textArea"
            >
              Cuéntanos cómo podemos ayudarte:
            </label>
            <textarea
              className="bg-black w-full h-[150px] border-[1px] border-[#495057] outline-none rounded-xl"
              name="textArea"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <InputForm type="checkbox" text="si" />
          <InputForm
            type="checkbox"
            text="Acepto el envío a mi dirección de correo electrónico de comunicaciones relacionadas con eventos, productos e informaciones de interés de VASS."
          />
          <div className="w-full flex justify-end mt-[70px]">
            <button className="w-[130px] h-[130px] rounded-[50%] border-[1px] border-white text-white cursor-not-allowed" disabled>Enviar</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EndBox;
