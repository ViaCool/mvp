import React from 'react';

function Button({ className, size, text, color, icon, ...rest }) {
  let sizeStyle = 'py-3.5 rounded-lg';
  if (size === 'small') {
    sizeStyle = 'py-2.5 rounded';
  }

  let colorStyle =
    'bg-primary-blue hover:bg-primary-blue-hover active:bg-primary-blue-active disabled:bg-primary-blue-disabled';
  if (color === 'accent-red') {
    colorStyle = 'bg-accent-red';
  }

  return (
    <button
      type="button"
      {...rest}
      className={`flex justify-center ${colorStyle} items-center  duration-200 rounded-lg ${sizeStyle} px-5 text-white text-md font-semibold ${className}`}
    >
      <span>{text}</span>
      {icon && <img className="w-6 h-6" src={icon} alt="" />}
    </button>
  );
}

export default Button;
