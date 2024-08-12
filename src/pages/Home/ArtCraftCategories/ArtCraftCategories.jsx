import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const ArtCraftCategories = () => {
  const [craftCategory, setCraftCategory] = useState([]);
  useEffect(() => {
    fetch("https://art-and-craft-server-mu.vercel.app/craftCategory")
      .then((res) => res.json())
      .then((data) => {
        setCraftCategory(data);
      });
  }, []);
  // console.log(craftCategory);
  return (
    <div className="grid grid-cols-1 py-5 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {craftCategory.map((singleCraft) => (
        <Link
          to={`/matchSubcategory/${singleCraft?.subcategory}`}
          key={singleCraft?._id}
          className="flex hover:scale-105 transition-all hover:shadow-md-purple flex-col p-4 space-y-6  h-full  border-2 hover:border-[#0ad45f] border-gray-300 border-t-[#0ad45f] border-b-[#00e660d7] rounded-md  dark:bg-gray-50 dark:text-gray-800"
        >
          <div
            data-aos="fade-up-right"
            data-aos-duration="1000"
            data-aos-once="false"
            className="flex-grow"
          >
            <div className="rounded-lg">
              <img
                src={singleCraft?.image}
                alt=""
                className="object-cover rounded-md   w-full mb-4 h-52 md:h-60 mx-auto"
              />
            </div>

            <h2 className="mb-1 text-xl font-bold">
              {singleCraft?.subcategory}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ArtCraftCategories;
