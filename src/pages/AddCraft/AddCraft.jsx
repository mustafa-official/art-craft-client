import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const AddCraft = () => {
  const { user } = useContext(AuthContext);
  const [customizationValue, setCustomizationValue] = useState("");
  const [stockValue, setStockValue] = useState("");
  const handleCustomization = (e) => {
    setCustomizationValue(e.target.value);
  };
  const handleStock = (e) => {
    setStockValue(e.target.value);
  };
  // console.log(customizationValue, stockValue);
  const handleAddItem = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.name.value;
    const email = form.email.value;
    const itemName = form.itemName.value;
    const subcategory = form.subcategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const processTime = form.processTime.value;
    const image = form.image.value;
    const customization = customizationValue;
    const stockStatus = stockValue;
    const description = form.description.value;

    const itemInfo = {
      userName,
      email,
      itemName,
      subcategory,
      price,
      rating,
      processTime,
      image,
      customization,
      stockStatus,
      description,
    };
    console.log(itemInfo);
    fetch("http://localhost:5000/craft", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(itemInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Added Successfully!",
            icon: "success",
          });
          form.reset();
        }
      });
  };

  return (
    <section className="p-6">
      <form
        onSubmit={handleAddItem}
        className="w-full mx-auto md:w-[60%] mt-8 lg:mt-6 px-4 md:px-8 py-8 mb-3 lg:mb-5 rounded-xl border border-[#00E661] "
      >
        <h1 className="text-2xl font-bold text-center mb-12">Add Craft</h1>
        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
          <div className="col-span-full sm:col-span-3">
            <label className="text-sm">Name</label>
            <input
              value={user?.displayName}
              name="name"
              type="text"
              className="w-full px-4 py-2 rounded-md  border border-black"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label className="text-sm">Email</label>
            <input
              value={user?.email}
              name="email"
              type="email"
              className="w-full px-4 py-2 rounded-md  border border-black"
            />
          </div>
        </div>
        <div className="grid mt-4 grid-cols-6 gap-4 col-span-full lg:col-span-3">
          <div className="col-span-full sm:col-span-3">
            <label className="text-sm">Item Name</label>
            <input
              required
              name="itemName"
              type="text"
              className="w-full px-4 py-2 rounded-md  border border-black"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="lastname" className="text-sm">
              Subcategory
            </label>
            <input
              required
              name="subcategory"
              type="text"
              className="w-full px-4 py-2 rounded-md  border border-black"
            />
          </div>
        </div>

        <div className="grid mt-4 grid-cols-6 gap-4 col-span-full lg:col-span-3">
          <div className="col-span-full sm:col-span-3">
            <label className="text-sm">Price</label>
            <input
              required
              name="price"
              type="text"
              className="w-full px-4 py-2 rounded-md  border border-black"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label className="text-sm">Rating</label>
            <input
              required
              name="rating"
              type="text"
              className="w-full px-4 py-2 rounded-md  border border-black"
            />
          </div>
        </div>
        <div className="grid mt-4 grid-cols-6 gap-4 col-span-full lg:col-span-3">
          <div className="col-span-full sm:col-span-3">
            <label className="text-sm">Process Time</label>
            <input
              required
              name="processTime"
              type="text"
              className="w-full px-4 py-2 rounded-md  border border-black"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label className="text-sm">Image URL</label>
            <input
              required
              name="image"
              type="text"
              className="w-full px-4 py-2 rounded-md  border border-black"
            />
          </div>
        </div>
        <div className="grid mt-4 grid-cols-6 gap-4 col-span-full lg:col-span-3">
          {/* <div className="col-span-full sm:col-span-3">
            <label className="text-sm">Customization</label>
            <input
              required
              name="customization"
              type="text"
           
              className="w-full px-4 py-2 rounded-md  border border-black"
            />
          </div> */}
          <div className="col-span-full sm:col-span-3">
            <select
          required
              onChange={handleCustomization}
              className="select border border-black  select-bordered w-full"
            >
              <option disabled selected>
                Select Customization
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          {/* <div className="col-span-full sm:col-span-3">
            <label className="text-sm">Stock Status</label>
            <input
              required
              name="stockStatus"
              type="text"
          
              className="w-full px-4 py-2 rounded-md  border border-black"
            />
          </div> */}
          <div className="col-span-full sm:col-span-3">
            <select
            required
              onChange={handleStock}
              className="select border border-black select-bordered w-full"
            >
              <option disabled selected>
                Select Stock Status
              </option>
              <option value="In Stock">In Stock</option>
              <option value="Made to Order">Made to Order</option>
            </select>
          </div>
        </div>
        <div className="mt-6">
          <textarea
            required
            name="description"
            className="border border-black w-full rounded-md px-4 py-2"
            placeholder="Write short description"
            rows="3"
          ></textarea>
        </div>

        <input
          type="submit"
          value="Add Craft"
          className="bg-[#00E661] text-white rounded-md font-bold py-2 mt-2  px-4 cursor-pointer"
        />
      </form>
    </section>
  );
};

export default AddCraft;
