import { Link } from "react-router-dom";
import { FiStar } from "react-icons/fi";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
const MySingleCraft = ({ item, setItems, items }) => {
  const { itemName, price, rating, customization, image, stockStatus, _id } =
    item || {};

  const handleDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/craft/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const remaining = items.filter((itm) => itm._id !== id);
            setItems(remaining);
            Swal.fire({
              title: "Deleted!",
              text: "Your item has been deleted.",
              icon: "success",
            });
          });
      }
    });
  };
  return (
    <div className="flex  hover:shadow-md-purple flex-col p-4 space-y-3  h-full  border-2 hover:border-[#00E661] border-gray-300 border-b-[#00E661] border-t-[#00E661]  rounded-md  dark:bg-gray-50">
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
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="p-2 text-center font-bold">Customization: {customization}</p>
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
            <p className="font-medium flex items-center gap-1">{rating} <FiStar></FiStar></p>
          </div>
        </div>
      </div>
      <div className="flex text-white justify-end gap-4 items-center">
        <Link
          to={`/updateMyCraft/${_id}`}
          className="px-5 text-center border border-[#00E661] py-2.5 relative rounded group font-medium w-full   inline-block"
        >
          <span className="absolute top-0 left-0 w-full h-full rounded opacity-60 filter blur-sm bg-gradient-to-br from-[#00E661] to-gray-900"></span>
          <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 filter group-active:opacity-0 rounded opacity-60 from-[#00E661] to-gray-900"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-[#00E661] to-gray-900"></span>
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-[#00E661] from-black"></span>
          <span className="relative">Update</span>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="px-5 text-center border border-[#FF0000] py-2.5 relative rounded group font-medium w-full   inline-block"
        >
          <span className="absolute top-0 left-0 w-full h-full rounded opacity-60 filter blur-sm bg-gradient-to-br from-[#FF0000] to-gray-900"></span>
          <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 filter group-active:opacity-0 rounded opacity-60 from-[#FF0000] to-gray-900"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-[#FF0000] to-gray-900"></span>
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-[#FF0000] from-black"></span>
          <span className="relative">Delete</span>
        </button>
      </div>
    </div>
  );
};

export default MySingleCraft;
MySingleCraft.propTypes = {
  item: PropTypes.object,
  setItems: PropTypes.func,
  items: PropTypes.array,
};
