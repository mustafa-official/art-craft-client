import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const SingleCraft = ({ craft }) => {
  // console.log(craft);
  const { itemName, subcategory, price, image, stockStatus, _id } = craft || {};
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="false"
      className="flex  hover:shadow-md-purple flex-col p-6 space-y-6 rounded-md h-full  border-2 hover:border-[#0ad45f] border-gray-300 border-l-[#0ad45f] border-r-[#00e660d7]   dark:bg-gray-50 dark:text-gray-800"
    >
      <div className="flex-grow">
        <div className="rounded-lg">
          <img
            src={image}
            alt=""
            className="object-cover rounded-md   w-full mb-4 h-52 md:h-60 mx-auto"
          />
        </div>

        <h2 className="mb-1 text-xl font-bold">{itemName}</h2>
        <p className="text-[16px]  flex items-center gap-1 dark:text-white">
          {subcategory}
        </p>
      </div>
      <hr />
      <div className="flex flex-wrap items-center justify-between">
        <div>
          <p className="p-2 text-center font-bold">{stockStatus}</p>
        </div>
        <div className="flex items-center gap-2 dark:text-white">
          <div className="flex items-center gap-2">
            <p className="font-medium">${price}</p>
          </div>
        </div>
      </div>
      <div>
        <Link
          to={`/viewDetails/${_id}`}
          className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-lg"
        >
          <span className="relative px-4 py-2 transition-all ease-out border border-[#0ad45f] bg-[#0ad45f] rounded-md group-hover:bg-opacity-0 duration-400">
            <span className="relative text-white">View Details</span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SingleCraft;
SingleCraft.propTypes = {
  craft: PropTypes.object,
};
