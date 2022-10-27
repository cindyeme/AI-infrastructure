const PrimaryButton = ({ type, text }) => {
  return (
    <>
      <button className="btn btn--primary" type={type}>
        {text}
      </button>
      <style jsx>
        {`
          .btn {
            width: 100% !important;
            height: 43px;
            font-size: 1.2rem;
          }
          .btn:hover {
            background: white;
            border: 1px solid #ff7130;
            color: #ff7130 !important;
          }
        `}
      </style>
    </>
  );
};

export default PrimaryButton;
