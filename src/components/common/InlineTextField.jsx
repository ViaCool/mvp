import React from 'react';

function InlineTextField({ label, ...rest }) {
  return (
    <div>
      <div className="flex gap-5 py-6">
        <label htmlFor="email" className="text-neutral-900 font-semibold text-md tracking-[0.3px]">
          {label}
        </label>
        <input
          type="text"
          {...rest}
          className="placeholder:text-neutral-900 text-neutral-900 font-normal text-md tracking-[0.3px] focus:outline-none bg-[transparent]"
        />
      </div>
    </div>
  );
}

export default InlineTextField;
