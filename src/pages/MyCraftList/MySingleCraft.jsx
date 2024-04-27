import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const MySingleCraft = ({ item }) => {
  const { itemName, price, rating, customization, image, stockStatus, _id } = item || {};
  return (
    <div className="flex  hover:shadow-md-purple flex-col p-4 space-y-3  h-full  border-2 hover:border-[#ff26a2] border-gray-300 border-t-[#c2227d] border-l-[#c2227d]  rounded-md  dark:bg-gray-50 dark:text-gray-800">
      <div className="flex-grow">
        <div className="rounded-lg">
          <img
            src={image}
            alt=""
            className="object-cover rounded-md   w-full mb-4 h-52 md:h-60 mx-auto"
          />
        </div>

        <h2 className="mb-1 text-xl font-bold">{itemName}</h2>
        <hr className="my-4" />
        <div className="flex flex-wrap items-center justify-between">
        <p className="p-2 text-center font-bold">{customization}</p>
        <p className="font-medium">{stockStatus}</p>
        </div>
        
      </div>
      <hr />
      <div className="flex flex-wrap items-center justify-between">
        <div>
          <p className="p-2 text-center font-bold">${price}</p>
        </div>
        <div className="flex items-center gap-2 dark:text-gray-600">
          <div className="flex items-center gap-2">
            <p className="font-medium">{rating}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-4 items-center">
        <Link to={`/updateMyCraft/${_id}`} className="px-5 text-center py-2.5 relative rounded group font-medium w-full text-white  inline-block">
          <span className="absolute top-0 left-0 w-full h-full rounded opacity-60 filter blur-sm bg-gradient-to-br from-[#FF26A2] to-gray-900"></span>
          <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 filter group-active:opacity-0 rounded opacity-60 from-[#FF26A2] to-gray-900"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-[#FF26A2] to-gray-900"></span>
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-[#FF26A2] from-black"></span>
          <span className="relative">Update</span>
        </Link>
        <Link className="px-5 text-center py-2.5 relative rounded group font-medium w-full text-white  inline-block">
          <span className="absolute top-0 left-0 w-full h-full rounded opacity-60 filter blur-sm bg-gradient-to-br from-[#FF26A2] to-gray-900"></span>
          <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 filter group-active:opacity-0 rounded opacity-60 from-[#FF26A2] to-gray-900"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-[#FF26A2] to-gray-900"></span>
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-[#FF26A2] from-black"></span>
          <span className="relative">Delete</span>
        </Link>
      </div>
    </div>
  );
};

export default MySingleCraft;
MySingleCraft.propTypes = {
    item: PropTypes.object,
  };
  