import React from 'react';
import { Icon } from './Icon'
import 'tailwindcss/tailwind.css';

interface ButtonProps {
  backgroundColor?: string,
  hoverColor?: string,
  size?: 'small' | 'medium' | 'large',
  activeColor?: string,
  icon?: boolean,
  outline?: boolean
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ backgroundColor = 'bg-blue-900', hoverColor = 'bg-blue-300', activeColor = 'bg-blue-600', size = 'small', icon = false, outline = false, ...props }: ButtonProps) => {
  return (
    <>
      <button type="button" className={`${(size === 'small' ? 'px-3 py-1' : size === 'medium' ? 'px-5 py-2' : 'px-7 py-3')} ${outline ? 'text-red-500 border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-medium px-8 py-2 rounded-lg focus:outline-none ease-linear' : `hover:${hoverColor} ${backgroundColor} focus:${activeColor} text-white`} ml-2 mt-2 inline-flex justify-center text-sm font-medium`} {...props}>
        {icon ? <Icon color="red" /> : null}
        Button
      </button>
    </>
  );
};
