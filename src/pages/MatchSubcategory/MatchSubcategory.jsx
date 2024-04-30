import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleMatchSubcategory from "./SingleMatchSubcategory";

const MatchSubcategory = () => {
  const [subcategories, setSubcategories] = useState([]);
  const { subcategory } = useParams();
  //   console.log(subcategory);
  useEffect(() => {
    fetch(
      `https://art-and-craft-server-mu.vercel.app/matchSubcategory/${subcategory}`
    )
      .then((res) => res.json())
      .then((data) => {
        setSubcategories(data);
      });
  }, [subcategory]);
  // console.log(subcategories);
  return (
    <div className="px-4 lg:px-12">
      <h2 className="lg:text-4xl text-3xl text-center mt-8 md:mb-3 md:mt-14 font-bold">
        All Art & Craft of {subcategory}
      </h2>
      <div className="grid grid-cols-1 py-5 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {subcategories.map((sub) => (
          <SingleMatchSubcategory
            sub={sub}
            key={sub._id}
          ></SingleMatchSubcategory>
        ))}
      </div>
    </div>
  );
};

export default MatchSubcategory;
