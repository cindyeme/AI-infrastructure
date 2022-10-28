import Link from "next/link";

const SingleOffer = ({ title, desc, link, href, active, handleToggle, id }) => {
  return (
    <div className=" offer__text--wrapper group">
      <div
        className={`offer__single ${
          active === id ? "offer__single--active" : "offer__single--inactive"
        } `}
        onClick={() => handleToggle(id)}
      >
        <div className="flex flex-col items-center justify-center space-y-4 sm:px-5 md:px-0 md:justify-start md:space-y-0 md:grid md:grid-cols-12  md:items-start">
          <div className=" offer__single--text-wrap md:col-span-11">
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
            <Link
              href={`${href}`}
              className="text-primary text-sm hover:tracking-wider transition-all duration-400 ease-out group-hover:tracking-wider"
            >
              {link}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleOffer;
