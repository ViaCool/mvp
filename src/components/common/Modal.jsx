import React from 'react';
import clBlack from '../../images/close_black_24dp (1) 1.svg';

function Modal({ close, open, children, title }) {
  return (
    <div>
      {open && (
        <div className="fixed z-50 top-0 right-0 left-0 bottom-0 bg-dark bg-opacity-30 flex items-center justify-center">
          <div className="w-max min-w-[660px] bg-white rounded shadow-300">
            <div className="flex justify-between py-[18px] px-6 shadow-400">
              <h6 className="text-h2 text-neutral-950 ml-3.5">{title}</h6>
              <button type="button" onClick={close}>
                <img src={clBlack} className="w-6 h-6" alt="" />
              </button>
            </div>
            <div className="m-10 text-md text-neutral-650 min-h-[150px]">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
