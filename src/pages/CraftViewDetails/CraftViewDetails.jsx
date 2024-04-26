import { useLoaderData } from "react-router-dom";

const CraftViewDetails = () => {
  const loadedCraft = useLoaderData();
  const {userName,
    email,
    itemName,
    subcategory,
    price,
    rating,
    processTime,
    image,
    customization,
    stockStatus,
    description,} = loadedCraft || {}
 
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={image}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-4xl font-bold">{itemName}</h1>
          <p className="py-3">
            {description}
          </p>
          <div className="flex items-center gap-3 lg:gap-10">
            <div className="space-y-4">
              <p className="text-[16px] lg:text-[18px]">Subcategory:</p>
              <p className="text-[16px] lg:text-[18px]">Customization:</p>
              <p className="text-[16px] lg:text-[18px]">Name:</p>
              <p className="text-[16px] lg:text-[18px]">Email:</p>
              <p className="text-[16px] lg:text-[18px]">Stock Status:</p>
              <p className="text-[16px] lg:text-[18px]">Process Time:</p>
              <p className="text-[16px] lg:text-[18px]">Rating:</p>
              <p className="text-[16px] lg:text-[18px]">Price:</p>
            </div>
            <div className="space-y-4 flex-wrap">
              <p className="text-[16px] lg:text-[18px]">{subcategory}</p>
              <p className="text-[16px] lg:text-[18px]">{customization}</p>
              <p className="text-[16px] lg:text-[18px]">{userName}</p>
              <p className="text-[16px] lg:text-[18px]">{email}</p>
              <p className="text-[16px] lg:text-[18px]">{stockStatus}</p>
              <p className="text-[16px] lg:text-[18px]">{processTime} min</p>
              <p className="text-[16px] lg:text-[18px]">{rating}</p>
              <p className="text-[16px] lg:text-[18px]">${price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftViewDetails;
