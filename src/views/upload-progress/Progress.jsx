import React from "react";
import doBlack from "../../images/done_black_24dp (1) 1.svg";
import hiOff1 from "../../images/highlight_off_black_24dp 1.svg";
import hiOff2 from "../../images/highlight_off_black_24dp 2.svg";

function Progress({ filename, status, error }) {
  return (
    <li className="flex gap-6 items-center">
      <div className="flex-grow ">
        <div className="flex justify-between mb-2">
          <p className="text-md text-neutral-900 flex-grow flex gap-6">
            <span>{filename}</span>
            {status >= 400 && (
              <span className="text-accent-redtext">{error}</span>
            )}
          </p>
          <span className="text-md text-neutral-900">100%</span>
        </div>
        <div className="bg-neutral-450 h-1 w-full rounded-full overflow-hidden">
          <hr
            style={{ width: `${100}%` }}
            className={`${
              status >= 400 ? "bg-accent-darkred" : "bg-primary-green"
            } h-1 w-full border-0`}
          />
        </div>
      </div>
      {status === 200 && <img className="w-6 h-6" src={doBlack} alt="" />}
      {status >= 400 && <img className="w-6 h-6" src={hiOff2} alt="" />}
    </li>
  );
}

export default Progress;
