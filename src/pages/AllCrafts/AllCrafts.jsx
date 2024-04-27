import { Link, useLoaderData } from "react-router-dom";

const AllCrafts = () => {
    const allCraft = useLoaderData();
    console.log(allCraft);
  return (
    <div className="overflow-x-auto md:px-10">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>User Name</th>
            <th>Sub Category</th>
            <th>Price</th>
            <th>Details</th>
          </tr>
        </thead>
        {
            allCraft.map(craft=><tbody key={craft._id}>
                {/* row 1 */}
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-bold">{craft?.userName}</div>
                       
                      </div>
                    </div>
                  </td>
                  <td>
                    {craft.itemName}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                    {craft?.subcategory}
                    </span>
                  </td>
                  <td>${craft?.price}</td>
                  <th>
                    <Link to={`/viewDetails/${craft?._id}`} className="btn btn-secondary btn-xs">View Details</Link>
                  </th>
                </tr>
              </tbody>)
        }
        
      </table>
    </div>
  );
};

export default AllCrafts;
