const flashSaleData = [
  {
    title: "Lorem ipsum dolor sit amet.",
    img: "FlashSale.png",
    price: "$1,500",
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    img: "FlashSale.png",
    price: "$1,500",
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    img: "FlashSale.png",
    price: "$1,500",
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    img: "FlashSale.png",
    price: "$1,500",
  },
];

const About = () => {
  return (
    <div className="" style={{ backgroundColor: "#F6DDDD" }}>
      <div>
        <img
          src="about_1.png"
          className="object-cover w-full"
          alt="about_Section"
        />
      </div>

      <div className=" p-6">
        <div className="flex  gap-20 justify-between items-center  ">
          <div className="font-bold w-2/3 ">
            <h1 className="font-semibold text-3xl">FREQUENT DESIGNS</h1>
            <p className="font-thin pt-6">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer. Exclusive has more than 1 Million products
              to offer, growing at a very fast. Exclusive offers a diverse
              assotment in categories ranging from consumer.
            </p>
          </div>
          <div>
            <img src="about_2.png" alt="about_img" />
          </div>
        </div>

        <div className="flex  gap-20 justify-between items-center  ">
          <div>
            <img src="about_3.png" alt="about_img" />
          </div>
          <div className="font-bold w-2/3 ">
            <h1 className="font-semibold text-3xl">OUR STORY</h1>
            <p className="font-thin pt-6">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <img src="about_4.png" alt="img" />
        <div className="w-full h-full bg-white/60" />
        <span className="absolute top-32 left-10 ">
          <h1 className="uppercase text-3xl font-bold">Liable Source</h1>
          <p className="text-md w-1/2 font-thin">
            Fashion is defined in a number of different ways, and its
            application can be sometimes unclear
          </p>
        </span>
      </div>

      <div className="grid grid-cols-[70%_auto]  items-center p-10">
        <div>
          <h1 className="text-2xl font-semibold py-6">
            SUBSCRIBE TO OUR NEWSLETTER
          </h1>
          <p className="poppins-semibold  py-2 text-[191C1F]">
            Be the first to know about latest trends,sales, updates and more
          </p>
          <div className="grid grid-cols-[80%_auto]  justify-between items-center ">
            <div>
              <input
                type="email"
                name="email"
                id="email"
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
                className="bg-gray-50 rounded-sm border w-full border-gray-300 text-gray-900 text-sm  focus:ring-primary-600 focus:border-primary-600 block  p-2.5  "
                placeholder="name@company.com"
                required=""
              />
            </div>
            <button
              className="p-1 font-semibold border border-black rounded-sm"
              style={{
                boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-6 border justify-between  items-center p-2">
          <p className="text-[#191C1F] text-xl poppins-semibold">
            Stay Connected
          </p>
          <div className="flex justify-between gap-6">
            <img src="twitter.png" alt="twitter" />
            <img src="whatsapp.png" alt="whatsapp" />
            <img src="instagram.png" alt="instagram" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
