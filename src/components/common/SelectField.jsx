import React from 'react';
import { useState } from 'react';
import naNext from '../../images/navigate_next.svg';

const options = [
  {
    name: 'Grapes',
    value: 'Grapes',
  },
  {
    name: 'Avocado',
    value: 'Avocado',
  },
  {
    name: 'Pepper',
    value: 'Pepper',
  },
];

function SelectField() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((v) => !v);
  const [value, setValue] = useState(0);
  const changeValue = (index) => setValue(index);

  return (
    <div className="relative max-w-max">
      <div
        className="border-neutral-400 items-center border rounded flex p-2 bg-white max-w-max cursor-pointer"
        onClick={toggleOpen}
      >
        <span className="flex-grow min-w-[160px] text-md text-neutral-900 px-1 block">
          {options[value].name}
        </span>
        <img
          className={`duration-150 w-6 h-6 ${open ? 'rotate-180' : ''}`}
          src={naNext}
          alt=""
        />
      </div>
      {open && (
        <ul className="absolute min-w-full top-[50px] left-0 bg-white shadow-200 border-neutral-450 option-popup z-40">
          {options.map(({ name, value }, i) => (
            <li
              key={i}
              onClick={() => {
                toggleOpen();
                changeValue(value);
              }}
              className="px-3 py-2.5 text-h4 cursor-pointer hover:bg-neutral-300 duration-100 border-b border-neutral-350 last:border-b-0 relative z-10"
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SelectField;
