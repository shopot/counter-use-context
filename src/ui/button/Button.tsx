import { ReactElement, ReactNode } from 'react';

type Props = {
  onCLick: () => void;
  children: ReactNode;
};

export const Button = ({ children, onCLick }: Props): ReactElement => {
  return (
    <button
      className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-12"
      onClick={onCLick}
    >
      {children}
    </button>
  );
};
