import bannertwo from "../../../assets/painting-one.jpg";

const SliderThree = () => {
  return (
    <div
      className="hero min-h-[calc(100vh-80px)] bg-center bg-cover "
      style={{ backgroundImage: `url(${bannertwo})` }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-3xl">
          <h1 className="mb-5 px-3 text-3xl md:text-5xl text-[#dbdbdb] font-black">
            Find Your Next Art
            <span className="block text-[#00E661]">Treasure</span>
          </h1>
          <p className="mb-5 px-4 text-[#dbdbdb] flex-wrap max-w-xl mx-auto text-[18px]">
            Explore a curated collection of original artworks, ranging from
            stunning oil paintings to intricate pencil sketches
          </p>
        </div>
      </div>
    </div>
  );
};

export default SliderThree;
