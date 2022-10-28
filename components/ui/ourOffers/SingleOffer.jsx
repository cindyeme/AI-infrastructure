import Image from "next/image";


const SingleOffer = ({
  title,
  desc,
  icon,
  active,
  handleToggle,
  id,
}) => {
  return (
    <div className=" benefits__text--wrapper">
      <div
        className={`benefits__single ${
          active === id
            ? "benefits__single--active"
            : "benefits__single--inactive"
        } `}
        onClick={() => handleToggle(id)}
      >
        <div className="flex flex-col items-center justify-center space-y-4 sm:px-5 md:px-0 md:justify-start md:space-y-0 md:grid md:grid-cols-12  md:items-start">
          <div className="md:col-span-1 hidden md:block">
            <Image src={icon} alt="" width={50} height={50} className="icon" />
          </div>
          {/* Mobile screen icon */}
          <div className="md:hidden">
            <Image src={icon} alt="" width={62} height={62} className="icon" />
          </div>

          <div className=" benefits__single--text-wrap md:col-span-11">
            <h4
              className={`text-center md:text-left ${
                active === id ? "active" : "inactive"
              } `}
            >
              {title}
            </h4>
            <p
              className={`text-center md:text-left ${
                active === id ? "active" : "inactive"
              } `}
            >
              {desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleOffer;
