import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleCraft = ({ craft }) => {
  // console.log(craft);
  const { itemName, subcategory, price, image, stockStatus, _id } = craft || {};
  return (
    <div className="flex  hover:shadow-md-purple flex-col p-6 space-y-6 rounded-md h-full  border-2 hover:border-[#00E661] border-gray-300 border-l-[#00E661] border-r-[#00e660d7]   dark:bg-gray-50 dark:text-gray-800">
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
        {/* <Link
          to={`/viewDetails/${_id}`}
          className="px-5 text-center border border-[#00E661] text-white py-2.5 relative rounded group font-medium w-full   inline-block"
        >
          <span className="absolute top-0 left-0 w-full h-full rounded opacity-60 filter blur-sm bg-gradient-to-br from-[#00E661] to-gray-900"></span>
          <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 filter group-active:opacity-0 rounded opacity-60 from-[#00E661] to-gray-900"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-[#00E661] to-gray-900"></span>
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-[#00E661] from-black"></span>
          <span className="relative">View Detailss</span>
        </Link> */}

        <Link
          to={`/viewDetails/${_id}`}
          className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-lg"
        >
          <span className="w-full h-full bg-gradient-to-br  from-[#00E661] via-[#ff5478] to-[#00E661] group-hover:from-[#ff5478] group-hover:via-[#00E661] group-hover:to-[#ff5478] absolute"></span>
          <span className="relative px-4 py-2 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
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
