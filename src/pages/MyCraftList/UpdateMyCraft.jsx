import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateMyCraft = () => {
  const loadedItem = useLoaderData();
  const [customizationValue, setCustomizationValue] = useState("");
  const [stockValue, setStockValue] = useState("");
  const [subcate, setSubcate] = useState("");
  const handleCustomization = (e) => {
    setCustomizationValue(e.target.value);
  };
  const handleStock = (e) => {
    setStockValue(e.target.value);
  };
  const handleSubcategory = (e) => {
    setSubcate(e.target.value);
  };
  const {
    _id,
    email,
    userName,
    itemName,
    subcategory,
    price,
    rating,
    processTime,
    image,
    customization,
    stockStatus,
    description,
  } = loadedItem || {};

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.name.value;
    // const email = form.email.value;
    const itemName = form.itemName.value;
    const subcategory = subcate;
    const price = form.price.value;
    const rating = form.rating.value;
    const processTime = form.processTime.value;
    const image = form.image.value;
    const customization = customizationValue;
    const stockStatus = stockValue;
    const description = form.description.value;

    const updateInfo = {
      userName,
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
    // console.log(updateInfo);
    fetch(`https://art-and-craft-server-mu.vercel.app/craft/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Good job!",
            text: "Updated Successfully",
            icon: "success",
          });
        }
      });
  };

  return (
    <section className="p-6">
      <form
        onSubmit={handleUpdate}
        className="w-full mx-auto md:w-[60%] mt-8 lg:mt-6 px-4 md:px-8 py-8 mb-3 lg:mb-5 rounded-xl border border-[#00E661] "
      >
        <h1 className="text-2xl font-bold text-center mb-12">Update Craft</h1>
        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
          <div className="col-span-full sm:col-span-3">
            <label className="text-sm">Name</label>
            <input
              value={userName}
              name="name"
              type="text"
              className="w-full px-4 py-2 rounded-md  border border-black"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label className="text-sm">Email</label>
            <input
              value={email}
              name="email"
              type="email"
              className="w-full px-4 py-2 rounded-md  border border-black"
            />
          </div>
        </div>
        <div className="grid mt-4 grid-cols-6 gap-4 col-span-full lg:col-span-3">
          <div className="col-span-full">
            <label className="text-sm">Item Name</label>
            <input
              defaultValue={itemName}
              name="itemName"
              type="text"
              className="w-full px-4 py-2 rounded-md  border border-black"
            />
          </div>
          {/* <div className="col-span-full sm:col-span-3">
            <label htmlFor="lastname" className="text-sm">
              Subcategory
            </label>
            <input
              defaultValue={subcategory}
              name="subcategory"
              type="text"
              className="w-full px-4 py-2 rounded-md  border border-black"
            />
          </div> */}
        </div>
        <div className="col-span-full mt-6 sm:col-span-3">
          <select
            defaultValue={subcategory}
            onChange={handleSubcategory}
            className="select border border-black  select-bordered w-full"
          >
            <option disabled selected>
              Select Subcategory
            </option>
            <option value="Landscape Painting">Landscape Painting</option>
            <option value="Portrait Drawing">Portrait Drawing</option>
            <option value="Watercolour Painting">Watercolour Painting</option>
            <option value="Oil Painting">Oil Painting</option>
            <option value="Charcoal Sketching">Charcoal Sketching</option>
            <option value="Cartoon Drawing">Cartoon Drawing</option>
          </select>
        </div>

        <div className="grid mt-4 grid-cols-6 gap-4 col-span-full lg:col-span-3">
          <div className="col-span-full sm:col-span-3">
            <label className="text-sm">Price</label>
            <input
              defaultValue={price}
              name="price"
              type="text"
              className="w-full px-4 py-2 rounded-md  border border-black"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label className="text-sm">Rating</label>
            <input
              defaultValue={rating}
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
              defaultValue={processTime}
              name="processTime"
              type="text"
              className="w-full px-4 py-2 rounded-md  border border-black"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label className="text-sm">Image URL</label>
            <input
              defaultValue={image}
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
              
              name="customization"
              type="text"
           
              className="w-full px-4 py-2 rounded-md  border border-black"
            />
          </div> */}
          <div className="col-span-full sm:col-span-3">
            <select
              defaultValue={customization}
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
              
              name="stockStatus"
              type="text"
          
              className="w-full px-4 py-2 rounded-md  border border-black"
            />
          </div> */}
          <div className="col-span-full sm:col-span-3">
            <select
              defaultValue={stockStatus}
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
            defaultValue={description}
            name="description"
            className="border border-black w-full rounded-md px-4 py-2"
            rows="3"
          ></textarea>
        </div>

        <input
          type="submit"
          value="Update"
          className="bg-[#00E661] text-white rounded-md font-bold py-2 mt-2  px-4 cursor-pointer"
        />
      </form>
    </section>
  );
};

export default UpdateMyCraft;
