import React from "react";
import { FaEnvelope, FaTimes } from "react-icons/fa";
import { IconBaseProps } from "react-icons";

interface ToastProps {
  message: string;
  onClose: () => void;
}

interface CustomIconProps extends IconBaseProps {
  className?: string;
}

const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  return (
    <div className="fixed gap-2 bottom-4 right-4 bg-gray-800 text-white p-4 rounded-md shadow-lg flex items-center transition-opacity duration-300">
      <FaEnvelope {...({ className: "mr-2", size: 25 } as CustomIconProps)} />
      <span className="flex-1">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 flex items-center text-sm rounded bg-gray-300 p-1 underline hover:text-gray-300"
      >
        <FaTimes
          {...({ className: "text-black", size: 22 } as CustomIconProps)}
        />
      </button>
    </div>
  );
};

export default Toast;
