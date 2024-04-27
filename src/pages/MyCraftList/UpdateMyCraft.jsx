

const UpdateMyCraft = () => {
    return (
        <section className="p-6 text-black">
      <form  className="w-[50%] mx-auto">
        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
          <div className="col-span-full sm:col-span-3">
            <label className="text-sm">Name</label>
            <input
              
              name="name"
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 rounded-md  border border-black"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label className="text-sm">Email</label>
            <input
              
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
              
              name="price"
              type="number"
              placeholder="Price"
              className="w-full px-4 py-2 rounded-md  border border-black"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label className="text-sm">Rating</label>
            <input
              
              name="rating"
              type="text"
              placeholder="Rating"
              className="w-full px-4 py-2 rounded-md  border border-black"
            />
          </div>
        </div>
        <div className="grid mt-4 grid-cols-6 gap-4 col-span-full lg:col-span-3">
          <div className="col-span-full sm:col-span-3">
            <label className="text-sm">Process</label>
            <input
              
              name="processTime"
              type="number"
              placeholder="Process time"
              className="w-full px-4 py-2 rounded-md  border border-black"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label className="text-sm">Image</label>
            <input
              
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
              
              name="customization"
              type="text"
              placeholder="Customization"
              className="w-full px-4 py-2 rounded-md  border border-black"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label className="text-sm">Stock Status</label>
            <input
              
              name="stockStatus"
              type="text"
              placeholder="Stock Status"
              className="w-full px-4 py-2 rounded-md  border border-black"
            />
          </div>
        </div>
        <div className="mt-6">
          <textarea
            
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

export default UpdateMyCraft;