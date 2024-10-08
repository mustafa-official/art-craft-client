import banner from "../../../assets/paintaing-two.jpg";

const SliderTwo = () => {
  return (
    <div
      className="hero min-h-[calc(100vh-80px)] bg-center bg-cover "
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-3xl">
          <h1 className="mb-5 px-3 text-3xl md:text-5xl text-[#dbdbdb] font-black">
            Exclusive Offers on Original
            <span className="block text-[#0ad45f]">Artworks</span>
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

export default SliderTwo;
