const PrimaryButton = ({ type, text }) => {
  return (
    <button className="btn btn--primary" type={type}>
      {text}
    </button>
  );
};

<style jsx>
  {`
    .btn {
      width: 100% !important;
    }
  `}
</style>;

export default PrimaryButton;
