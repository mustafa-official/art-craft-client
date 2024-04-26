import Swal from "sweetalert2";

const AddCraft = () => {
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
    const customization = form.customization.value;
    const stockStatus = form.stockStatus.value;
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
    <section className="p-6 text-black">
      <form onSubmit={handleAddItem} className="w-[50%] mx-auto">
        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
          <div className="col-span-full sm:col-span-3">
            <label className="text-sm">Name</label>
            <input
              required
              name="name"
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 rounded-md  border border-black"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label className="text-sm">Email</label>
            <input
              required
              name="email"
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-md  border border-black"
            />
          </div>
        </div>
        <div className="grid mt-4 grid-cols-6 gap-4 col-span-full lg:col-span-3">
          <div className="col-span-full sm:col-span-3">
            <label className="text-sm">Item</label>
            <input
              required
              name="itemName"
              type="text"
              placeholder="Item name"
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
              placeholder="Subcategory name"
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
              type="number"
              placeholder="Price"
              className="w-full px-4 py-2 rounded-md  border border-black"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label className="text-sm">Rating</label>
            <input
              required
              name="rating"
              type="number"
              placeholder="Rating"
              className="w-full px-4 py-2 rounded-md  border border-black"
            />
          </div>
        </div>
        <div className="grid mt-4 grid-cols-6 gap-4 col-span-full lg:col-span-3">
          <div className="col-span-full sm:col-span-3">
            <label className="text-sm">Process</label>
            <input
              required
              name="processTime"
              type="number"
              placeholder="Process time"
              className="w-full px-4 py-2 rounded-md  border border-black"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label className="text-sm">Image</label>
            <input
              required
              name="image"
              type="text"
              placeholder="Image URL"
              className="w-full px-4 py-2 rounded-md  border border-black"
            />
          </div>
        </div>
        <div className="grid mt-4 grid-cols-6 gap-4 col-span-full lg:col-span-3">
          <div className="col-span-full sm:col-span-3">
            <label className="text-sm">Customization</label>
            <input
              required
              name="customization"
              type="text"
              placeholder="Customization"
              className="w-full px-4 py-2 rounded-md  border border-black"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label className="text-sm">Stock Status</label>
            <input
              required
              name="stockStatus"
              type="text"
              placeholder="Stock Status"
              className="w-full px-4 py-2 rounded-md  border border-black"
            />
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
          value="Add Item"
          className="bg-black py-2 text-white px-4 cursor-pointer"
        />
      </form>
    </section>
  );
};

export default AddCraft;
