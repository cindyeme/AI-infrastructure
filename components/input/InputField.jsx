const Input = ({
  label,
  type = "text",
  name,
  placeholder,
  children,
  error,
  // onChange
}) => (
  <label className="form--label">
    <span>{label}</span>
    <input
      type={type}
      name={name}
      id={name}
      className={`form--input ${error && "form--input_error"}`}
      placeholder={placeholder}
      // onChange={onChange}
    />
    {children}
  </label>
);

export default Input;
