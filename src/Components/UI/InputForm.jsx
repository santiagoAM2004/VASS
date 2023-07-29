import React from "react";
import "../../Assets/CSS/InputForm.css";

function InputForm(props) {
  return (
    <div className="w-full flex justify-center">
      {props.text === undefined ? (
        <div className="firstInput">
          <input
            className="inputBase"
            type={props.type}
            name={props.name}
            required
          />
          <label className="labelBase" htmlFor={props.name}>
            {props.name}
          </label>
        </div>
      ) : (
        props.text !== "si" && (
        <div className="w-[80%]">
          <p className="text-white text-left"> <input className= "mr-2" type={props.type} /> {props.text}</p>
        </div>
        )
      )}
      {props.text === "si" && (
        <div className="w-[80%] text-center">
          <p className="text-white text-left"> <input className="mr-2" type={props.type} />
            He leído y acepto la política de <a href="" className="text-blue-500">privacidad</a> y datos
            personales. *
          </p>
        </div>
      )}
    </div>
  );
}

export default InputForm;
