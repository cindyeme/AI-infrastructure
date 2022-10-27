import { useState } from 'react';
import { FiEye, FiEyeOff } from "react-icons/fi";

const PasswordInput = ({
  name,
  label,
  placeholder,
  error
}) => {
  const [show, setShow] = useState(true);
  const togglePasswordVisibility = () => {
    setShow(!show);
  };
  return (
    <label className="form--label">
      <span>{label}</span>
      <div className="relative w-full">
        <input
          id={name}
          name={name}
          placeholder={placeholder}
          className={`form--input relative ${error && "form--input_error"}`}
          type={show ? "password" : "text"}
        />
        <div className="absolute inset-y-0 right-0 pr-3 grid items-center text-sm leading-5">
          <button
            type="button"
            onClick={togglePasswordVisibility}
          >
            {show ? <FiEye />: <FiEyeOff />}
          </button>
        </div>
      </div>
    </label>
  );
};

export default PasswordInput;