import bannertwo from "../../../assets/painting-one.jpg"

const SliderThree = () => {
    return (
        <div
      className="hero min-h-[calc(100vh-80px)] bg-center bg-cover "
      style={{ backgroundImage: `url(${bannertwo})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl">
          <h1 className="mb-5 px-3 text-3xl md:text-5xl lg:text-6xl font-black">
            Unlock Your Dream{" "}
            <span className="animate-text bg-gradient-to-r from-blue-500 via-[#FE26A1] to-[#b4d343] bg-clip-text text-transparent">
              Home
            </span>
          </h1>
          <p className="mb-5 px-4 flex-wrap text-[18px] lg:text-xl animate__animated animate__bounceInUp animate__delay-1s">
            Experience deluxe living in this stunning villa. With spacious
            rooms, beautiful landscaping.
          </p>
        </div>
      </div>
    </div>
    );
};

export default SliderThree;