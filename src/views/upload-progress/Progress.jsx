import React from 'react';
import doBlack from '../../images/done_black_24dp (1) 1.svg';
import hiOff1 from '../../images/highlight_off_black_24dp 1.svg';
import hiOff2 from '../../images/highlight_off_black_24dp 2.svg';

function Progress({ parcent, error }) {
  return (
    <li className="flex gap-6 items-center">
      <div className="flex-grow ">
        <div className="flex justify-between mb-2">
          <p className="text-md text-neutral-900 flex-grow flex gap-6">
            <span>File name 01.pdf</span>
            <span className="text-accent-redtext">{error}</span>
          </p>
          <span className="text-md text-neutral-900">{parcent}%</span>
        </div>
        <div className="bg-neutral-450 h-1 w-full rounded-full overflow-hidden">
          <hr
            style={{ width: `${parcent}%` }}
            className={`${error ? 'bg-accent-darkred' : 'bg-primary-green'} h-1 w-full border-0`}
          />
        </div>
      </div>
      {parcent === 100 && !error && (
        <img className="w-6 h-6" src={doBlack} alt="" />
      )}
      {error && <img className="w-6 h-6" src={hiOff2} alt="" />}
      {parcent < 100 && !error && (
        <img className="w-6 h-6" src={hiOff1} alt="" />
      )}
    </li>
  );
}

export default Progress;
