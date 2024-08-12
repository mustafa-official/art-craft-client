import message from "../../assets/message.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Contact = () => {
  return (
    <div>
      <h2 className="lg:text-4xl text-3xl text-center mt-8 md:mb-8 md:mt-14 font-bold">
        Contact Us
      </h2>
      <div className="md:mt-0 mt-4 lg:mt-0 flex justify-center items-center">
        <div className="grid mb-2 md:mb-6 grid-cols-1 items-center gap-4 lg:gap-12 rounded-lg md:grid-cols-2">
          <div
            data-aos="fade-up-right"
            data-aos-duration="1000"
            className="w-full lg:w-[450px]"
          >
            <img className="w-full" src={message} />
          </div>
          <div data-aos="fade-up-left"
            data-aos-duration="1000">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm">
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder=""
                  className="w-full p-3 rounded border border-[#0ad45f]"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-3 rounded border border-[#0ad45f]"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="3"
                  className="w-full p-3 rounded border border-[#0ad45f]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-[#0ad45f] text-white"
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
