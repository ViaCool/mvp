import React from "react";
import { useState } from "react";
import viBlack from "../../images/visibility_black_24dp1.svg";
import gr from "../../images/Group1.svg";

const id = Math.random();

function TextField({ label, jsxLabel, type, variant, ...rest }) {
  const [focus, setFocus] = useState(false);
  const focusIn = () => setFocus(true);
  const focusOut = () => setFocus(false);

  const [pwd, setPwd] = useState(false);
  const togglePwd = () => setPwd((v) => !v);

  return (
    <div>
      <div className="justify-between flex mb-1.5 items-center">
        <label
          htmlFor={id}
          className="text-neutral-750 block uppercase font-bold"
        >
          {label}
        </label>
        {jsxLabel}
      </div>

      <div
        className={`${
          focus ? "border-primary-blue" : "border-neutral-300"
        } border rounded-lg bg-neutral-100 relative`}
      >
        <input
          {...rest}
          id={id}
          type={pwd ? "text" : type}
          className="focus:outline-none font-light rounded-lg py-3 px-4 text-black-700"
          onFocus={focusIn}
          onBlur={focusOut}
        />
        {variant === "password" && (
          <button
            type="button"
            className="absolute top-3 right-4 z-10"
            onClick={togglePwd}
          >
            <img className="w-6 h-6" src={pwd ?  viBlack  :  gr } alt="" />
          </button>
        )}
      </div>
    </div>
  );
}

export default TextField;
