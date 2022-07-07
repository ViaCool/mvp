import React from "react";
import ve from "../../images/Vector.svg";
import { UserContext } from "../../context/UserContext";

function Appbar({ title }) {
  const { user } = React.useContext(UserContext);
  return (
    <div className="flex justify-between mb-10">
      <h4 className="font-semibold text-h1 text-dark">{title}</h4>
      <button type="button" className="flex gap-6 items-center">
        <span className="text-h3 tracking-normal">
          {Object?.keys(user).length > 0 &&
            user?.firstname + " " + user?.lastname}
        </span>
        <img className="w-10 h-10" src={ve} alt="" />
      </button>
    </div>
  );
}

export default Appbar;
