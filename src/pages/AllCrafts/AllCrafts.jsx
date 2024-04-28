import { Link, useLoaderData } from "react-router-dom";

const AllCrafts = () => {
  const allCraft = useLoaderData();
  console.log(allCraft);
  return (
    <div className="mx-auto md:pl-9">
      <h2 className="lg:text-4xl text-2xl md:text-3xl text-center mt-6 mb-3 md:mb-6 md:mt-8 font-bold">All Art & Craft</h2>
      <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-[18px] lg:text-xl">
            <th>User Name</th>
            <th>Sub Category</th>
            <th>Price</th>
            <th>Details</th>
          </tr>
        </thead>
        {allCraft.map((craft) => (
          <tbody key={craft._id}>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center lg:gap-3">
                  <div>
                    <div className="font-bold">{craft?.userName}</div>
                  </div>
                </div>
              </td>
              <td>
                {craft.itemName}
                <br />
                <span className="lg:badge lg:badge-ghost lg:badge-sm">
                  {craft?.subcategory}
                </span>
              </td>
              <td>${craft?.price}</td>
              <th>
                <Link
                  to={`/viewDetails/${craft?._id}`}
                  className="btn text-white bg-[#00E661] btn-sm"
                >
                  View Details
                </Link>
              </th>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
    </div>
  );
};

export default AllCrafts;
