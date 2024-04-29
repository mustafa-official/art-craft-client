import message from "../../assets/message.png";

const Contact = () => {
  return (
    <div>
      <h2 className="lg:text-4xl text-3xl text-center mt-8 md:mb-8 md:mt-14 font-bold">
        Contact Us
      </h2>
      <div className="md:mt-0 mt-4 lg:mt-0 flex justify-center items-center">
        <div className="grid mb-2 md:mb-6 grid-cols-1 items-center gap-4 lg:gap-12 rounded-lg md:grid-cols-2">
          <div className="w-full lg:w-[450px]">
            <img className="w-full" src={message} />
          </div>
          <div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm">
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder=""
                  className="w-full p-3 rounded border border-[#00E661]"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-3 rounded border border-[#00E661]"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="3"
                  className="w-full p-3 rounded border border-[#00E661]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-[#00E661] text-white"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
