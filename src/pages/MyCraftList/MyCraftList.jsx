import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MySingleCraft from "./MySingleCraft";

const MyCraftList = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  // const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://art-and-craft-server-mu.vercel.app/myCraft/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [user]);

  const handleSelectChange = (e) => {
    const selectValue = e.target.value;
    fetch(`https://art-and-craft-server-mu.vercel.app/myValue/${selectValue}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const filterEmail = data.filter((d) => d.email === user.email);
        setItems(filterEmail);
      });
  };
  // console.log(data);
  // console.log(items);
  return (
    <div className="min-h-[calc(100vh-80px)]">
      <h2 className="lg:text-4xl text-2xl md:text-3xl text-center mt-6 mb-3 md:mb-8 md:mt-8 font-bold">
        My Art & Craft
      </h2>
      {/* <div className="relative h-10 w-72 min-w-[200px] mx-auto">
        
        <select
          className="peer h-full w-full rounded-[7px] border border-blue-gray-300 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          onChange={handleSelectChange}
        >
          <option selected disabled>Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Select Customization
        </label>
      </div> */}
      <div className="w-44 min-w-[150px] mx-auto">
        <select
          onChange={handleSelectChange}
          className="select border border-[#00E661] select-bordered w-full"
        >
          <option selected disabled>
            Customization
          </option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="grid grid-cols-1 py-5 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 lg:px-12">
        {items.map((item) => (
          <MySingleCraft
            items={items}
            setItems={setItems}
            key={item._id}
            item={item}
          ></MySingleCraft>
        ))}
      </div>
    </div>
  );
};

export default MyCraftList;
