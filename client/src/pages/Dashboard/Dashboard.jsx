import Amazon from "../../assets/brands/amazon.png";
import Lacoste from "../../assets/brands/lacoste.png";
import Obey from "../../assets/brands/obey.png";
import Shopify from "../../assets/brands/shopify.png";
import Levis from "../../assets/brands/levis.png";
import HNM from "../../assets/brands/hm.png";
import { Link } from "react-router-dom";
import TopBar from "./TopBar";
import BreadCrumb from "./BreadCrumb";
import Sidebar from "./Sidebar";

const orders = [
  {
    id: 1,
    orderID: "#913522234",
    status: "IN PROGRESS",
    date: "Dec 30, 2019 5:18",
    total: "1500",
    products: "5",
    colour: "#FA8232",
  },
  {
    id: 2,
    orderID: "#612331347",
    status: "COMPLETED",
    date: "Feb 2, 2020 19:18",
    total: "1800",
    products: "3",
    colour: "#2DB224",
  },
  {
    id: 3,
    orderID: "#789246234",
    status: "CANCELLED",
    date: "MARCH 8, 2020 6:58",
    total: "3500",
    products: "11",
    colour: "#EE5858",
  },
  {
    id: 4,
    orderID: "#462353362",
    status: "IN PROGRESS",
    date: "Oct 21, 2020 11:18",
    total: "700",
    products: "4",
    colour: "#FA8232",
  },
];

const famousBrands = [
  {
    id: 1,
    image: Amazon,
  },
  {
    id: 2,
    image: Lacoste,
  },
  {
    id: 3,
    image: Obey,
  },
  {
    id: 4,
    image: Shopify,
  },
  {
    id: 5,
    image: Levis,
  },
  {
    id: 6,
    image: HNM,
  },
  {
    id: 7,
    image: Amazon,
  },
  {
    id: 8,
    image: HNM,
  },
  {
    id: 9,
    image: Lacoste,
  },
  {
    id: 10,
    image: Shopify,
  },
];

const browsingHistory = [
  {
    id: 1,
    image:
      "https://img.freepik.com/premium-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg",
    tag: "HOT",
    price: "70",
    title: "TOZO T6 True Wireless Earbuds Bluetooth Headphones",
    ratings: "738",
  },
  {
    id: 2,
    image:
      "https://www.shutterstock.com/image-photo/front-view-blue-wireless-earbuds-260nw-2314405417.jpg",

    price: "2300",
    title: "Samsung Electronics Samsung Galaxy S21 5G",
    ratings: "536",
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB6E-bxXMpQncTlWx70v5_UiuWCYbWMXFRnQ&s",
    tag: "Best Deals",
    price: "360",
    title: "Amazon Basics High Speed HDMI Cable ",
    ratings: "423",
  },
  {
    id: 4,
    image:
      "https://www.lg.com/content/dam/channel/wcms/in/images/washing-machines/fhm1408bdl_alsqeil_eail_in_c/gallery/FHM1408BDL-Washing-Machines-Front-View-DZ-01-v1.jpg",
    tag: "HOT",
    price: "80",
    title: "Portable Washing Machine",
    ratings: "816",
  },
];

const Dashboard = () => {
  return (
    <div className="">
      <TopBar />

      <BreadCrumb />
      <div className="grid grid-cols-2 lg:grid-cols-[25%_auto] mt-6">
        <Sidebar />
        <div className="bg-white px-6">
          <h1 className="text-semibold">Hello Kevin</h1>

          <p className="w-[45%] text-sm mt-2">
            {" "}
            From your account dashboard , you can easily check and view your
            <span className="text-[#FF009C]"> Recent Orders</span>, manage your{" "}
            <span className="text-[#FF009C]">
              {" "}
              Shipping and Bill addresses{" "}
            </span>
            and edit your
            <span className="text-[#FF009C]"> Password</span> and{" "}
            <span className="text-[#FF009C]">Account Details </span> .
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 mt-6">
            <div className="mt-3">
              <h1 className="text-[#191C1F] font-medium">Account Info</h1>

              <div className="flex flex-row gap-2 items-center justify-start">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5556/5556499.png"
                  className="w-6 h-6 "
                />

                <div className="flex flex-col">
                  <h3 className="text-[#191C1F] font-semibold">Kevin Durant</h3>
                  <h3 className="text-[#5F6C72] font-normal">
                    {" "}
                    Dhaka, Bangladesh{" "}
                  </h3>
                </div>
              </div>

              <h3 className="mt-3 text-[#191C1F] font-semibold">
                Email :{" "}
                <span className="text-[#5F6C72] font-normal">
                  shubham@gmail.com
                </span>
              </h3>
              <h3 className="mt-1 text-[#191C1F] font-semibold">
                Sec Email :{" "}
                <span className="text-[#5F6C72] font-normal">
                  shubh@gmail.com
                </span>
              </h3>
              <h3 className="mt-1 text-[#191C1F] font-semibold">
                Phone :{" "}
                <span className="text-[#5F6C72] font-normal">+1-202-404 </span>
              </h3>

              <button className="border-2 border-blue-100 rounded-md px-3 py-2 text-[#2DA5F3] mt-3">
                {" "}
                EDIT ACCOUNT
              </button>
            </div>

            <div className="mt-3  text-[#191C1F] font-semibold">
              <h1>BILLING ADDRESS </h1>

              <h3 className="mt-2 text-[#5F6C72] font-normal">
                Kevin Durant Dhaka, Bangladesh Dhaka, Bangladesh Dhaka,
                Bangladesh
              </h3>

              <h3 className="mt-3 text-[#191C1F] font-semibold">
                Email :{" "}
                <span className="text-[#5F6C72] font-normal">
                  {" "}
                  shubham@gmail.com
                </span>
              </h3>
              <h3 className="mt-1 text-[#191C1F] font-semibold">
                Sec Email :{" "}
                <span className="text-[#5F6C72] font-normal">
                  {" "}
                  shubh@gmail.com
                </span>{" "}
              </h3>
              <h3 className="mt-1 text-[#191C1F] font-semibold">
                Phone :
                <span className="text-[#5F6C72] font-normal">+1-202-404</span>
              </h3>

              <button className="border-2 border-blue-100 rounded-md px-3 py-2 text-[#2DA5F3] mt-3">
                {" "}
                EDIT ADDRESS
              </button>
            </div>

            <div className="mt-3">
              <div className="mt-3">
                <div className="flex flex-row gap-2">
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="56" height="56" rx="2" fill="white" />
                    <path
                      opacity="0.2"
                      d="M21.2374 25.9248L17.3124 30.6248C17.2136 30.7402 17.1438 30.8776 17.109 31.0255C17.0742 31.1734 17.0754 31.3275 17.1124 31.4748L18.6499 38.4373C18.687 38.6028 18.7656 38.7561 18.8783 38.8829C18.991 39.0097 19.1341 39.1057 19.2941 39.162C19.4541 39.2182 19.6257 39.2328 19.793 39.2045C19.9602 39.1761 20.1174 39.1057 20.2499 38.9998L23.9999 35.9998C21.7999 32.1748 21.0874 28.8123 21.2374 25.9248Z"
                      fill="#2DA5F3"
                    />
                    <path
                      opacity="0.2"
                      d="M34.6875 25.8374L38.6125 30.5499C38.7114 30.6653 38.7812 30.8027 38.816 30.9506C38.8508 31.0985 38.8496 31.2526 38.8125 31.3999L37.275 38.3499C37.2396 38.5165 37.1622 38.6712 37.0503 38.7995C36.9383 38.9277 36.7954 39.0253 36.6351 39.0829C36.4749 39.1405 36.3026 39.1562 36.1346 39.1285C35.9666 39.1009 35.8084 39.0308 35.675 38.9249L31.925 35.9249C34.125 32.0874 34.8375 28.7249 34.6875 25.8374Z"
                      fill="#2DA5F3"
                    />
                    <path
                      d="M30 40H26"
                      stroke="#2DA5F3"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M27.3749 14.4752C24.9999 16.3752 17.0624 23.9752 23.9999 36.0002H31.9999C38.7999 23.9752 30.9749 16.3877 28.6249 14.4752C28.4496 14.3288 28.2284 14.2485 27.9999 14.2485C27.7715 14.2485 27.5503 14.3288 27.3749 14.4752Z"
                      stroke="#2DA5F3"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21.2374 25.9248L17.3124 30.6248C17.2136 30.7402 17.1438 30.8776 17.109 31.0255C17.0742 31.1734 17.0754 31.3275 17.1124 31.4748L18.6499 38.4373C18.687 38.6028 18.7656 38.7561 18.8783 38.8829C18.991 39.0097 19.1341 39.1057 19.2941 39.162C19.4541 39.2182 19.6257 39.2328 19.793 39.2045C19.9602 39.1761 20.1174 39.1057 20.2499 38.9998L23.9999 35.9998"
                      stroke="#2DA5F3"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M34.6875 25.8252L38.6875 30.6252C38.7864 30.7406 38.8561 30.878 38.8909 31.0259C38.9258 31.1738 38.9246 31.3278 38.8875 31.4752L37.35 38.4377C37.3129 38.6032 37.2343 38.7565 37.1216 38.8833C37.009 39.0101 36.8659 39.1061 36.7059 39.1623C36.5459 39.2186 36.3742 39.2332 36.207 39.2049C36.0398 39.1765 35.8825 39.1061 35.75 39.0002L32 36.0002"
                      stroke="#2DA5F3"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M28 25.5C28.8284 25.5 29.5 24.8284 29.5 24C29.5 23.1716 28.8284 22.5 28 22.5C27.1716 22.5 26.5 23.1716 26.5 24C26.5 24.8284 27.1716 25.5 28 25.5Z"
                      fill="#2DA5F3"
                    />
                  </svg>

                  <div className="flex flex-col gap-2">
                    <h1> 154 </h1>
                    <h1> Total Orders </h1>
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <div className="flex flex-row gap-2">
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="56" height="56" rx="2" fill="white" />
                    <path
                      opacity="0.2"
                      d="M16 38V19C16 18.7348 16.1054 18.4804 16.2929 18.2929C16.4804 18.1054 16.7348 18 17 18H39C39.2652 18 39.5196 18.1054 39.7071 18.2929C39.8946 18.4804 40 18.7348 40 19V38L36 36L32 38L28 36L24 38L20 36L16 38Z"
                      fill="#FA8232"
                    />
                    <path
                      d="M21.5 25H34.5"
                      stroke="#FA8232"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21.5 29H34.5"
                      stroke="#FA8232"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16 38V19C16 18.7348 16.1054 18.4804 16.2929 18.2929C16.4804 18.1054 16.7348 18 17 18H39C39.2652 18 39.5196 18.1054 39.7071 18.2929C39.8946 18.4804 40 18.7348 40 19V38L36 36L32 38L28 36L24 38L20 36L16 38Z"
                      stroke="#FA8232"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <div className="flex flex-col gap-2">
                    <h1> 05 </h1>
                    <h1> Pending Orders </h1>
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <div className="flex flex-row gap-2">
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="56" height="56" rx="2" fill="white" />
                    <path
                      opacity="0.2"
                      d="M16.1375 21.3252C16.0469 21.4808 15.9995 21.6577 16 21.8377V34.1627C16.001 34.3407 16.0488 34.5154 16.1388 34.669C16.2288 34.8226 16.3577 34.9498 16.5125 35.0377L27.5125 41.2252C27.6608 41.3099 27.8292 41.3531 28 41.3502L28.1125 28.0002L16.1375 21.3252Z"
                      fill="#2DB324"
                    />
                    <path
                      d="M40 34.1627V21.8377C39.999 21.6596 39.9512 21.485 39.8612 21.3314C39.7712 21.1778 39.6423 21.0506 39.4875 20.9627L28.4875 14.7752C28.3393 14.6896 28.1711 14.6445 28 14.6445C27.8289 14.6445 27.6607 14.6896 27.5125 14.7752L16.5125 20.9627C16.3577 21.0506 16.2288 21.1778 16.1388 21.3314C16.0488 21.485 16.001 21.6596 16 21.8377V34.1627C16.001 34.3407 16.0488 34.5153 16.1388 34.6689C16.2288 34.8226 16.3577 34.9497 16.5125 35.0377L27.5125 41.2252C27.6607 41.3107 27.8289 41.3558 28 41.3558C28.1711 41.3558 28.3393 41.3107 28.4875 41.2252L39.4875 35.0377C39.6423 34.9497 39.7712 34.8226 39.8612 34.6689C39.9512 34.5153 39.999 34.3407 40 34.1627V34.1627Z"
                      stroke="#2DB324"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M34.125 31.0625V24.5625L22 17.875"
                      stroke="#2DB324"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M39.8624 21.3252L28.1125 28.0002L16.1375 21.3252"
                      stroke="#2DB324"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M28.1125 28L28 41.35"
                      stroke="#2DB324"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <div className="flex flex-col gap-2 ">
                    <h1> 149 </h1>
                    <h1> Completed Orders </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-[#191C1F]">PAYMENT OPTION</h1>
              <div className="flex flex-row gap-2 items-center justify-center">
                <h3 className="text-[#FA8232]">Add Card </h3>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.125 10H16.875"
                    stroke="#FA8232"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.25 4.375L16.875 10L11.25 15.625"
                    stroke="#FA8232"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="bg-white flex mt-4">
              <div className="space-y-16">
                <div className="flex flex-row gap-8 ">
                  <div className="w-72 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
                    <img
                      className="relative object-cover w-full h-full rounded-xl"
                      src="https://i.imgur.com/kGkSg1v.png"
                    />

                    <div className="w-full px-8 absolute top-8">
                      <div className="flex justify-between">
                        <div className="">
                          <div className="flex flex-row justify-between">
                            <p className="font-light">$95400.00 USD</p>
                          </div>
                        </div>

                        <h1>...</h1>
                      </div>
                      <div className="pt-4">
                        <p className="font-light">Card Number</p>
                        <p className="font-medium tracking-more-wider">
                          **** **** **** 7632
                        </p>
                      </div>
                      <div className="pt-6 pr-6">
                        <div className="flex justify-between">
                          <div className="">
                            <p className="font-light text-xs">VISA</p>
                          </div>
                          <div className="">
                            <p className="font-light text-xs">Kevin Gilbert</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-72 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
                    <img
                      className="relative object-cover w-full h-full rounded-xl"
                      src="https://i.imgur.com/Zi6v09P.png"
                    />

                    <div className="w-full px-8 absolute top-8">
                      <div className="flex justify-between">
                        <div className="">
                          <p className="font-light">$87583.00 USD</p>
                        </div>

                        <h1>...</h1>
                      </div>
                      <div className="pt-4">
                        <p className="font-light">Card Number</p>
                        <p className="font-medium tracking-more-wider">
                          **** **** **** 7632
                        </p>
                      </div>
                      <div className="pt-6 pr-6">
                        <div className="flex justify-between">
                          <div className="">
                            <p className="font-light text-xs">Maestro</p>
                          </div>
                          <div className="">
                            <p className="font-light text-xs">Kevin Gilbert</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="flex flex-row justify-between items-center mt-8">
              <h1 className="text-[#191C1F]">RECENT ORDER</h1>
              <div className="flex flex-row gap-2 items-center justify-center">
                <h3 className="text-[#FA8232]"> View All </h3>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.125 10H16.875"
                    stroke="#FA8232"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.25 4.375L16.875 10L11.25 15.625"
                    stroke="#FA8232"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 mt-12">
              <div className="">
                <h1>ORDER ID</h1>
              </div>

              <div>
                <h1>STATUS</h1>
              </div>

              <div>
                <h1>DATE</h1>
              </div>

              <div>
                <h1>TOTAL</h1>
              </div>

              <div>
                <h1>ACTION</h1>
              </div>
            </div>

            {orders.map((order) => (
              <div
                key={order.id}
                className="grid grid-cols-1 lg:grid-cols-5 mt-6"
              >
                <div className="">
                  <h1 className="text-[#191c1f]">{order.orderID}</h1>
                </div>

                <div>
                  <h1 className="" style={{ color: `${order.colour}` }}>
                    {order.status}
                  </h1>
                </div>

                <div>
                  <h1 className="text-[#5f6c72]">{order.date}</h1>
                </div>

                <div>
                  <h1 className="text-[#475156]">
                    ${order.total} (${order.products} products)
                  </h1>
                </div>

                <div className="flex flex-row gap-2">
                  <h1 className="text-[#2da5f3]">View Details</h1>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.5 8H13.5"
                      stroke="#2DA5F3"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9 3.5L13.5 8L9 12.5"
                      stroke="#2DA5F3"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-[#191C1F]">BROWSING HISTORY</h1>
              <div className="flex flex-row gap-2 items-center justify-center">
                <h3 className="text-[#FA8232]"> View All </h3>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.125 10H16.875"
                    stroke="#FA8232"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.25 4.375L16.875 10L11.25 15.625"
                    stroke="#FA8232"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 mt-12">
              {browsingHistory.map((browsingHistori) => (
                <div key={browsingHistori.id} className="flex flex-col gap-2">
                  <div className="flex items-center justify-center">
                    <img src={browsingHistori.image} className="w-32 h-32" />
                  </div>

                  <div className="flex flex-row gap-2 items-center">
                    <div className="flex flex-row gap-[2px] ">
                      <svg
                        width="14"
                        height="13"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.275 10.9188L10.425 12.9188C10.8312 13.175 11.3312 12.7938 11.2125 12.325L10.3 8.73752C10.2753 8.63807 10.2792 8.53369 10.3113 8.43638C10.3434 8.33907 10.4023 8.2528 10.4812 8.18752L13.3062 5.83127C13.675 5.52502 13.4875 4.90627 13.0062 4.87502L9.31875 4.63752C9.21813 4.63166 9.1214 4.59663 9.04038 4.53669C8.95935 4.47675 8.89754 4.39451 8.8625 4.30002L7.4875 0.837515C7.4511 0.737455 7.38479 0.651018 7.29758 0.589938C7.21037 0.528858 7.10647 0.496094 7 0.496094C6.89352 0.496094 6.78963 0.528858 6.70241 0.589938C6.6152 0.651018 6.54889 0.737455 6.5125 0.837515L5.1375 4.30002C5.10245 4.39451 5.04064 4.47675 4.95962 4.53669C4.87859 4.59663 4.78186 4.63166 4.68125 4.63752L0.993747 4.87502C0.512497 4.90627 0.324997 5.52502 0.693747 5.83127L3.51875 8.18752C3.59771 8.2528 3.65661 8.33907 3.68868 8.43638C3.72075 8.53369 3.72467 8.63807 3.7 8.73752L2.85625 12.0625C2.7125 12.625 3.3125 13.0813 3.79375 12.775L6.725 10.9188C6.8072 10.8665 6.90259 10.8387 7 10.8387C7.09741 10.8387 7.1928 10.8665 7.275 10.9188Z"
                          fill="#FA8232"
                        />
                      </svg>
                      <svg
                        width="14"
                        height="13"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.275 10.9188L10.425 12.9188C10.8312 13.175 11.3312 12.7938 11.2125 12.325L10.3 8.73752C10.2753 8.63807 10.2792 8.53369 10.3113 8.43638C10.3434 8.33907 10.4023 8.2528 10.4812 8.18752L13.3062 5.83127C13.675 5.52502 13.4875 4.90627 13.0062 4.87502L9.31875 4.63752C9.21813 4.63166 9.1214 4.59663 9.04038 4.53669C8.95935 4.47675 8.89754 4.39451 8.8625 4.30002L7.4875 0.837515C7.4511 0.737455 7.38479 0.651018 7.29758 0.589938C7.21037 0.528858 7.10647 0.496094 7 0.496094C6.89352 0.496094 6.78963 0.528858 6.70241 0.589938C6.6152 0.651018 6.54889 0.737455 6.5125 0.837515L5.1375 4.30002C5.10245 4.39451 5.04064 4.47675 4.95962 4.53669C4.87859 4.59663 4.78186 4.63166 4.68125 4.63752L0.993747 4.87502C0.512497 4.90627 0.324997 5.52502 0.693747 5.83127L3.51875 8.18752C3.59771 8.2528 3.65661 8.33907 3.68868 8.43638C3.72075 8.53369 3.72467 8.63807 3.7 8.73752L2.85625 12.0625C2.7125 12.625 3.3125 13.0813 3.79375 12.775L6.725 10.9188C6.8072 10.8665 6.90259 10.8387 7 10.8387C7.09741 10.8387 7.1928 10.8665 7.275 10.9188Z"
                          fill="#FA8232"
                        />
                      </svg>
                      <svg
                        width="14"
                        height="13"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.275 10.9188L10.425 12.9188C10.8312 13.175 11.3312 12.7938 11.2125 12.325L10.3 8.73752C10.2753 8.63807 10.2792 8.53369 10.3113 8.43638C10.3434 8.33907 10.4023 8.2528 10.4812 8.18752L13.3062 5.83127C13.675 5.52502 13.4875 4.90627 13.0062 4.87502L9.31875 4.63752C9.21813 4.63166 9.1214 4.59663 9.04038 4.53669C8.95935 4.47675 8.89754 4.39451 8.8625 4.30002L7.4875 0.837515C7.4511 0.737455 7.38479 0.651018 7.29758 0.589938C7.21037 0.528858 7.10647 0.496094 7 0.496094C6.89352 0.496094 6.78963 0.528858 6.70241 0.589938C6.6152 0.651018 6.54889 0.737455 6.5125 0.837515L5.1375 4.30002C5.10245 4.39451 5.04064 4.47675 4.95962 4.53669C4.87859 4.59663 4.78186 4.63166 4.68125 4.63752L0.993747 4.87502C0.512497 4.90627 0.324997 5.52502 0.693747 5.83127L3.51875 8.18752C3.59771 8.2528 3.65661 8.33907 3.68868 8.43638C3.72075 8.53369 3.72467 8.63807 3.7 8.73752L2.85625 12.0625C2.7125 12.625 3.3125 13.0813 3.79375 12.775L6.725 10.9188C6.8072 10.8665 6.90259 10.8387 7 10.8387C7.09741 10.8387 7.1928 10.8665 7.275 10.9188Z"
                          fill="#FA8232"
                        />
                      </svg>
                      <svg
                        width="14"
                        height="13"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.275 10.9188L10.425 12.9188C10.8312 13.175 11.3312 12.7938 11.2125 12.325L10.3 8.73752C10.2753 8.63807 10.2792 8.53369 10.3113 8.43638C10.3434 8.33907 10.4023 8.2528 10.4812 8.18752L13.3062 5.83127C13.675 5.52502 13.4875 4.90627 13.0062 4.87502L9.31875 4.63752C9.21813 4.63166 9.1214 4.59663 9.04038 4.53669C8.95935 4.47675 8.89754 4.39451 8.8625 4.30002L7.4875 0.837515C7.4511 0.737455 7.38479 0.651018 7.29758 0.589938C7.21037 0.528858 7.10647 0.496094 7 0.496094C6.89352 0.496094 6.78963 0.528858 6.70241 0.589938C6.6152 0.651018 6.54889 0.737455 6.5125 0.837515L5.1375 4.30002C5.10245 4.39451 5.04064 4.47675 4.95962 4.53669C4.87859 4.59663 4.78186 4.63166 4.68125 4.63752L0.993747 4.87502C0.512497 4.90627 0.324997 5.52502 0.693747 5.83127L3.51875 8.18752C3.59771 8.2528 3.65661 8.33907 3.68868 8.43638C3.72075 8.53369 3.72467 8.63807 3.7 8.73752L2.85625 12.0625C2.7125 12.625 3.3125 13.0813 3.79375 12.775L6.725 10.9188C6.8072 10.8665 6.90259 10.8387 7 10.8387C7.09741 10.8387 7.1928 10.8665 7.275 10.9188Z"
                          fill="#FA8232"
                        />
                      </svg>
                      <svg
                        width="14"
                        height="13"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.275 10.9188L10.425 12.9188C10.8312 13.175 11.3312 12.7938 11.2125 12.325L10.3 8.73752C10.2753 8.63807 10.2792 8.53369 10.3113 8.43638C10.3434 8.33907 10.4023 8.2528 10.4812 8.18752L13.3062 5.83127C13.675 5.52502 13.4875 4.90627 13.0062 4.87502L9.31875 4.63752C9.21813 4.63166 9.1214 4.59663 9.04038 4.53669C8.95935 4.47675 8.89754 4.39451 8.8625 4.30002L7.4875 0.837515C7.4511 0.737455 7.38479 0.651018 7.29758 0.589938C7.21037 0.528858 7.10647 0.496094 7 0.496094C6.89352 0.496094 6.78963 0.528858 6.70241 0.589938C6.6152 0.651018 6.54889 0.737455 6.5125 0.837515L5.1375 4.30002C5.10245 4.39451 5.04064 4.47675 4.95962 4.53669C4.87859 4.59663 4.78186 4.63166 4.68125 4.63752L0.993747 4.87502C0.512497 4.90627 0.324997 5.52502 0.693747 5.83127L3.51875 8.18752C3.59771 8.2528 3.65661 8.33907 3.68868 8.43638C3.72075 8.53369 3.72467 8.63807 3.7 8.73752L2.85625 12.0625C2.7125 12.625 3.3125 13.0813 3.79375 12.775L6.725 10.9188C6.8072 10.8665 6.90259 10.8387 7 10.8387C7.09741 10.8387 7.1928 10.8665 7.275 10.9188Z"
                          fill="#FA8232"
                        />
                      </svg>
                    </div>

                    <h1 className="text-[#77878f] text-sm">
                      ({browsingHistori.ratings})
                    </h1>
                  </div>
                  <h1 className="text-sm text-[#191c1f]">
                    {browsingHistori.title}
                  </h1>
                  <h1 className="text-[#2da5f3] text-sm">
                    ${browsingHistori.price}
                  </h1>
                </div>
              ))}
            </div>
            <div className="mt-6 flex- items-center justify-center">
              <div className="flex flex-row gap-2 items-center justify-center">
                <div className="p-2 border border-yellow-600 rounded-full">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.25 12H3.75"
                      stroke="#FA8232"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.5 5.25L3.75 12L10.5 18.75"
                      stroke="#FA8232"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>

                <div className="p-2 border border-yellow-600 rounded-full">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.75 12H20.25"
                      stroke="#FA8232"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.5 5.25L20.25 12L13.5 18.75"
                      stroke="#FA8232"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-black text-2xl font-bold">FAMOUS BRANDS</h1>

          <div className="grid grid-cols-3 lg:grid-cols-10 gap-2 mt-12 items-center justify-center">
            {famousBrands.map((famousBrand) => (
              <div key={famousBrand.id}>
                <img src={famousBrand.image} className="w-18 h-18" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
