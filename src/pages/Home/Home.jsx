import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import SingleCraft from "../../components/SingleCraft/SingleCraft";

const Home = () => {
  const allCraft = useLoaderData();
  console.log(allCraft);
  return (
    <section>
      <Banner></Banner>
      <div className="px-4 lg:px-12 ">
        <h2 className="lg:text-5xl md:text-4xl text-3xl text-center mt-8 md:mb-3 md:mt-14 font-bold">Craft Items</h2>
        <div className="grid grid-cols-1 py-5 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {allCraft.slice(0, 6).map((craft) => (
            <SingleCraft craft={craft} key={craft._id}></SingleCraft>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Home;
