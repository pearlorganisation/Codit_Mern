import BreadCrumb from "./BreadCrumb";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

const orders = [
  {
    id: 1,
    orderID: "#913522234",
    status: "IN PROGRESS",
    title: "GooglePixel 6 Pro 5G",
    image:
      "https://www.shutterstock.com/image-photo/front-view-blue-wireless-earbuds-260nw-2314405417.jpg",
    category: "SmartPhone",
    date: "Dec 30, 2019 5:18",
    total: "1500",
    products: "5",
    colour: "#FA8232",
  },
  {
    id: 2,
    orderID: "#612331347",
    status: "COMPLETED",
    image:
      "https://www.shutterstock.com/image-photo/front-view-blue-wireless-earbuds-260nw-2314405417.jpg",
    category: "Accessories",
    title: "Pixel Back Cover",
    date: "Feb 2, 2020 19:18",
    total: "1800",
    products: "3",
    colour: "#2DB224",
  },
  {
    id: 3,
    orderID: "#789246234",
    status: "CANCELLED",
    image:
      "https://www.shutterstock.com/image-photo/front-view-blue-wireless-earbuds-260nw-2314405417.jpg",
    category: "Laptop",
    title: "HP Victus E1060ax",
    date: "MARCH 8, 2020 6:58",
    total: "3500",
    products: "11",
    colour: "#EE5858",
  },
  {
    id: 4,
    orderID: "#462353362",
    status: "IN PROGRESS",
    image:
      "https://www.shutterstock.com/image-photo/front-view-blue-wireless-earbuds-260nw-2314405417.jpg",
    category: "TV",
    title: "Samsung 43 inch TV",
    date: "Oct 21, 2020 11:18",
    total: "3700",
    products: "4",
    colour: "#FA8232",
  },
];

const TrackOrder = () => {
  return (
    <div>
      <TopBar />
      <BreadCrumb />

      <div className="grid grid-cols-2 lg:grid-cols-[25%_auto] mt-6">
        <Sidebar />

        <div className="p-3 ">
          <div className="p-2 border-2 border-gray-200 rounded-md">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-3 items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.25 12H3.75"
                    stroke="#191C1F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.5 5.25L3.75 12L10.5 18.75"
                    stroke="#191C1F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <h1>Order Details</h1>
              </div>
              <div className="flex flex-row gap-3 items-center justify-center">
                <h1> Leave Rating</h1>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.125 10H16.875"
                    stroke="#B13481"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 3.125V16.875"
                    stroke="#B13481"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>

            <hr className="mt-2 bg-gray-200" />

            <div className="p-2 bg-[#F7E99E]">
              <div className="flex flex-row justify-between px-4">
                <div className="flex flex-col">
                  <h1 className="text-[#191C1F] text-xl ">#94784335</h1>
                  <h3 className="text-sm text-[#475156]">
                    {" "}
                    4 Products . Order Placed in 17 Jan, 2021 at 7.32 PM{" "}
                  </h3>
                </div>

                <h1 className="text-3xl font-bold text-[#2da5f3]">$1199.00</h1>
              </div>
            </div>
            <div className="mt-2">
              <h1 className="text-[#475156]">
                Order Expected Arrival{" "}
                <span className="text-[#191C1F] font-bold">23 Jan, 2021</span>
              </h1>

              <h1> Stepper Component</h1>

              <ol className="flex items-center w-full text-xs text-gray-900 font-medium sm:text-base">
                <li className="flex w-full relative text-[#FA8232]  after:content-['']  after:w-full after:h-[6px]  after:bg-[#FA8232] after:inline-block after:absolute lg:after:top-3 after:top-2 after:left-10">
                  <div className="block whitespace-nowrap z-10">
                    <span className="w-6 h-6 bg-[#FA8232] border-2 border-transparent rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-white lg:w-6 lg:h-6">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.125 3.375L4.875 8.625L2.25 6"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>{" "}
                    <div className="flex flex-col items-center justify-center">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.2"
                          d="M10 27H6C5.73478 27 5.48043 26.8946 5.29289 26.7071C5.10536 26.5196 5 26.2652 5 26V6C5 5.73478 5.10536 5.48043 5.29289 5.29289C5.48043 5.10536 5.73478 5 6 5H10V27Z"
                          fill="#2DB324"
                        />
                        <path
                          d="M14 14H22"
                          stroke="#2DB324"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14 18H22"
                          stroke="#2DB324"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M26 5H6C5.44772 5 5 5.44772 5 6V26C5 26.5523 5.44772 27 6 27H26C26.5523 27 27 26.5523 27 26V6C27 5.44772 26.5523 5 26 5Z"
                          stroke="#2DB324"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10 5V27"
                          stroke="#2DB324"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <h1>Order Placed</h1>
                    </div>
                  </div>
                </li>
                <li className="flex w-full relative text-gray-900  after:content-['']  after:w-full after:h-0.5  after:bg-gray-200 after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-4">
                  <div className="block whitespace-nowrap z-10">
                    <span className="w-6 h-6 bg-[#FA8232] border-2 border-[#FA8232] rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-[#FA8232] lg:w-6 lg:h-6"></span>{" "}
                    <div className="flex flex-col items-center justify-center mt-4">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.2"
                          d="M4.1375 9.3252C4.04693 9.48077 3.99946 9.65768 4 9.8377V22.1627C4.00096 22.3407 4.04884 22.5154 4.13882 22.669C4.2288 22.8226 4.35769 22.9498 4.5125 23.0377L15.5125 29.2252C15.6608 29.3099 15.8292 29.3531 16 29.3502L16.1125 16.0002L4.1375 9.3252Z"
                          fill="#FA8232"
                        />
                        <path
                          d="M28 22.1627V9.83766C27.999 9.65963 27.9512 9.485 27.8612 9.33137C27.7712 9.17775 27.6423 9.05057 27.4875 8.96266L16.4875 2.77516C16.3393 2.68958 16.1711 2.64453 16 2.64453C15.8289 2.64453 15.6607 2.68958 15.5125 2.77516L4.5125 8.96266C4.35769 9.05057 4.22879 9.17775 4.13882 9.33137C4.04884 9.485 4.00096 9.65963 4 9.83766V22.1627C4.00096 22.3407 4.04884 22.5153 4.13882 22.6689C4.22879 22.8226 4.35769 22.9497 4.5125 23.0377L15.5125 29.2252C15.6607 29.3107 15.8289 29.3558 16 29.3558C16.1711 29.3558 16.3393 29.3107 16.4875 29.2252L27.4875 23.0377C27.6423 22.9497 27.7712 22.8226 27.8612 22.6689C27.9512 22.5153 27.999 22.3407 28 22.1627V22.1627Z"
                          stroke="#FA8232"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M22.125 19.0625V12.5625L10 5.875"
                          stroke="#FA8232"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M27.8627 9.3252L16.1127 16.0002L4.1377 9.3252"
                          stroke="#FA8232"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.1125 16L16 29.35"
                          stroke="#FA8232"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <h1> Packaging</h1>
                    </div>
                  </div>
                </li>
                <li className="flex w-full relative text-gray-900 after:content-['']  after:w-full after:h-0.5  after:bg-gray-200 after:inline-block after:absolute lg:after:top-5  after:top-3 after:left-4">
                  <div className="block whitespace-nowrap z-10">
                    <span className="w-6 h-6 bg-gray-50 border-2 border-[#FA8232] rounded-full flex justify-center items-center mx-auto mb-3 text-sm  lg:w-8 lg:h-8"></span>{" "}
                    <div className="flex flex-col items-center justify-center">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.2"
                          d="M22 18H2V23C2 23.2652 2.10536 23.5196 2.29289 23.7071C2.48043 23.8946 2.73478 24 3 24H5.5C5.5 23.2044 5.81607 22.4413 6.37868 21.8787C6.94129 21.3161 7.70435 21 8.5 21C9.29565 21 10.0587 21.3161 10.6213 21.8787C11.1839 22.4413 11.5 23.2044 11.5 24H20.5C20.4997 23.4731 20.6381 22.9553 20.9014 22.4989C21.1648 22.0425 21.5437 21.6635 22 21.4V18Z"
                          fill="#FA8232"
                        />
                        <path
                          opacity="0.2"
                          d="M26.5 24C26.5003 23.4732 26.362 22.9557 26.0988 22.4993C25.8356 22.043 25.4569 21.664 25.0008 21.4005C24.5447 21.1369 24.0273 20.9982 23.5005 20.9981C22.9737 20.998 22.4562 21.1366 22 21.4V15H30V23C30 23.2652 29.8946 23.5196 29.7071 23.7071C29.5196 23.8946 29.2652 24 29 24H26.5Z"
                          fill="#FA8232"
                        />
                        <path
                          d="M22 10H27.325C27.5242 9.99872 27.7192 10.0577 27.8843 10.1693C28.0494 10.2808 28.1769 10.4397 28.25 10.625L30 15"
                          stroke="#FA8232"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M2 18H22"
                          stroke="#FA8232"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M23.5 27C25.1569 27 26.5 25.6569 26.5 24C26.5 22.3431 25.1569 21 23.5 21C21.8431 21 20.5 22.3431 20.5 24C20.5 25.6569 21.8431 27 23.5 27Z"
                          stroke="#FA8232"
                          stroke-width="2"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M8.5 27C10.1569 27 11.5 25.6569 11.5 24C11.5 22.3431 10.1569 21 8.5 21C6.84315 21 5.5 22.3431 5.5 24C5.5 25.6569 6.84315 27 8.5 27Z"
                          stroke="#FA8232"
                          stroke-width="2"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M20.5 24H11.5"
                          stroke="#FA8232"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5.5 24H3C2.73478 24 2.48043 23.8946 2.29289 23.7071C2.10536 23.5196 2 23.2652 2 23V9C2 8.73478 2.10536 8.48043 2.29289 8.29289C2.48043 8.10536 2.73478 8 3 8H22V21.4"
                          stroke="#FA8232"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M22 15H30V23C30 23.2652 29.8946 23.5196 29.7071 23.7071C29.5196 23.8946 29.2652 24 29 24H26.5"
                          stroke="#FA8232"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <h3> On the Road</h3>
                    </div>
                  </div>
                </li>

                <li className="flex w-full relative text-gray-900  ">
                  <div className="block whitespace-nowrap z-10">
                    <span className="w-6 h-6 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-sm  lg:w-8 lg:h-8"></span>
                    <div className="flex flex-col justify-center items-center">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.2"
                          d="M25 19.1123L20.4 23.7123C20.2746 23.8295 20.1227 23.9146 19.9573 23.9603C19.7918 24.0061 19.6178 24.011 19.45 23.9748L12.2 22.1623C12.0676 22.1254 11.9442 22.0615 11.8375 21.9748L5 16.6373L9.075 8.97478L15.4875 7.09978C15.7154 7.03444 15.959 7.05216 16.175 7.14978L20.5 9.11228H17.9125C17.7826 9.11182 17.654 9.13698 17.5339 9.18632C17.4138 9.23565 17.3045 9.30819 17.2125 9.39978L12.3125 14.2873C12.2125 14.39 12.1354 14.5128 12.0863 14.6475C12.0373 14.7823 12.0174 14.9259 12.0281 15.0689C12.0387 15.2119 12.0796 15.351 12.148 15.477C12.2164 15.603 12.3109 15.713 12.425 15.7998L13.1 16.3123C13.7932 16.8297 14.635 17.1092 15.5 17.1092C16.365 17.1092 17.2068 16.8297 17.9 16.3123L19.5 15.1123L25 19.1123Z"
                          fill="#FA8232"
                        />
                        <path
                          d="M30.0875 15.2251L27 16.7626L23 9.11259L26.125 7.55009C26.3572 7.43171 26.6269 7.40996 26.8751 7.48957C27.1233 7.56919 27.33 7.74371 27.45 7.97509L30.525 13.8626C30.5874 13.9804 30.6255 14.1096 30.6372 14.2424C30.6489 14.3752 30.634 14.509 30.5932 14.636C30.5525 14.7629 30.4867 14.8805 30.3999 14.9816C30.313 15.0828 30.2068 15.1656 30.0875 15.2251V15.2251Z"
                          stroke="#FA8232"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.99979 16.6375L1.91229 15.0875C1.79341 15.0292 1.68746 14.9477 1.60073 14.8476C1.51401 14.7476 1.44829 14.6311 1.40747 14.5052C1.36666 14.3793 1.35159 14.2464 1.36315 14.1145C1.37471 13.9826 1.41268 13.8544 1.47479 13.7375L4.54979 7.84999C4.67008 7.61878 4.87588 7.44367 5.12337 7.36195C5.37086 7.28023 5.64047 7.29837 5.87479 7.41249L8.99979 8.97499L4.99979 16.6375Z"
                          stroke="#FA8232"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M27 16.7627L25 19.1127L20.4 23.7127C20.2746 23.8299 20.1227 23.915 19.9573 23.9608C19.7918 24.0065 19.6178 24.0114 19.45 23.9752L12.2 22.1627C12.0676 22.1258 11.9442 22.062 11.8375 21.9752L5 16.6377"
                          stroke="#FA8232"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M25.0001 19.1123L19.5001 15.1123L17.9001 16.3123C17.2069 16.8297 16.3651 17.1092 15.5001 17.1092C14.6351 17.1092 13.7933 16.8297 13.1001 16.3123L12.4251 15.7998C12.311 15.713 12.2166 15.603 12.1481 15.477C12.0797 15.351 12.0388 15.2119 12.0282 15.0689C12.0175 14.9259 12.0374 14.7823 12.0864 14.6476C12.1355 14.5128 12.2126 14.39 12.3126 14.2873L17.2126 9.39981C17.3047 9.30822 17.4139 9.23568 17.534 9.18635C17.6541 9.13701 17.7828 9.11186 17.9126 9.11231H23.0001"
                          stroke="#FA8232"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.0752 8.97478L15.4877 7.09978C15.7155 7.03444 15.9592 7.05216 16.1752 7.14978L20.5002 9.11228"
                          stroke="#FA8232"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14 26.6125L10.2375 25.6625C10.0842 25.6279 9.94221 25.5547 9.825 25.45L7 23"
                          stroke="#FA8232"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <h1> Delivered</h1>
                    </div>
                  </div>
                </li>
              </ol>
            </div>

            <div className="mt-8 px-4">
              <h1>Order Activity</h1>

              <div className="flex flex-row gap-3 mt-3">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="47"
                    height="47"
                    rx="1.5"
                    fill="#EAF7E9"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="47"
                    height="47"
                    rx="1.5"
                    stroke="#D5F0D3"
                  />
                  <path
                    d="M25.875 19.875L17.625 28.125L13.5 24"
                    stroke="#2DB324"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M34.4999 19.875L26.2499 28.125L24.0562 25.9313"
                    stroke="#2DB324"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div className="flex flex-col ">
                  <h1>
                    Your Order has been delivered. Thank you or shopping with
                    Codit
                  </h1>
                  <h3> 23 JAN, 2023 at 7:32 PM</h3>
                </div>
              </div>

              <div className="flex flex-row gap-3 mt-3">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="47"
                    height="47"
                    rx="1.5"
                    fill="#EAF6FE"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="47"
                    height="47"
                    rx="1.5"
                    stroke="#D5EDFD"
                  />
                  <path
                    d="M24 27C27.3137 27 30 24.3137 30 21C30 17.6863 27.3137 15 24 15C20.6863 15 18 17.6863 18 21C18 24.3137 20.6863 27 24 27Z"
                    stroke="#2DA5F3"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M14.9062 32.2499C15.8278 30.6534 17.1533 29.3277 18.7496 28.406C20.3459 27.4843 22.1567 26.999 24 26.999C25.8433 26.999 27.6541 27.4843 29.2504 28.406C30.8467 29.3277 32.1722 30.6534 33.0938 32.2499"
                    stroke="#2DA5F3"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="flex flex-col ">
                  <h1>
                    Our Delivery man (John) has picked up your order for deivery
                  </h1>
                  <h3> 25 JAN, 2023 at 5:32 PM</h3>
                </div>
              </div>

              <div className="flex flex-row gap-3 mt-3">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="47"
                    height="47"
                    rx="1.5"
                    fill="#EAF6FE"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="47"
                    height="47"
                    rx="1.5"
                    stroke="#D5EDFD"
                  />
                  <path
                    d="M17.25 33.75H30.75"
                    stroke="#2DA5F3"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M31.5 21.75C31.5 28.5 24 33.75 24 33.75C24 33.75 16.5 28.5 16.5 21.75C16.5 19.7609 17.2902 17.8532 18.6967 16.4467C20.1032 15.0402 22.0109 14.25 24 14.25C25.9891 14.25 27.8968 15.0402 29.3033 16.4467C30.7098 17.8532 31.5 19.7609 31.5 21.75V21.75Z"
                    stroke="#2DA5F3"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M24 24.75C25.6569 24.75 27 23.4069 27 21.75C27 20.0931 25.6569 18.75 24 18.75C22.3431 18.75 21 20.0931 21 21.75C21 23.4069 22.3431 24.75 24 24.75Z"
                    stroke="#2DA5F3"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="flex flex-col ">
                  <h1>Your Order has reached at last mile hub.</h1>
                  <h3> 26 JAN, 2023 at 11:15 AM</h3>
                </div>
              </div>

              <div className="flex flex-row gap-3 mt-3">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="47"
                    height="47"
                    rx="1.5"
                    fill="#EAF7E9"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="47"
                    height="47"
                    rx="1.5"
                    stroke="#D5F0D3"
                  />
                  <path
                    d="M28.125 21.75L22.6219 27L19.875 24.375"
                    stroke="#2DB324"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M24 33C28.9706 33 33 28.9706 33 24C33 19.0294 28.9706 15 24 15C19.0294 15 15 19.0294 15 24C15 28.9706 19.0294 33 24 33Z"
                    stroke="#2DB324"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="flex flex-col ">
                  <h1>Your Order is Successfully verified.</h1>
                  <h3> 23 JAN, 2023 at 7:32 PM</h3>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <div className="flex flex-row justify-between items-center mt-8">
                <h1 className="text-[#191C1F]"> PRODUCT (02) </h1>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[40%_auto_auto_auto] mt-12">
                <div className="">
                  <h1>PRODUCTS </h1>
                </div>

                <div>
                  <h1>PRICE</h1>
                </div>

                <div>
                  <h1>QUANTITY</h1>
                </div>

                <div>
                  <h1>SUBTOTAL</h1>
                </div>
              </div>

              {orders.map((order) => (
                <div
                  key={order.id}
                  className="grid grid-cols-1 lg:grid-cols-[40%_auto_auto_auto] mt-6 items-start"
                >
                  <div className="flex flex-row gap-3">
                    <img src={order.image} className="w-16 h-16" />

                    <div className="flex flex-col gap-3">
                      <h1 className="text-[#2Da5F3]">{order.category}</h1>
                      <h1 className="text-[#191c1f]">{order.title}</h1>
                    </div>
                  </div>

                  <div>
                    <h1 className="">${order.total}</h1>
                  </div>

                  <div className="flex items-center justify-start">
                    <h1 className="text-[#5f6c72]">x{order.products}</h1>
                  </div>

                  <div>
                    <h1 className="text-[#475156]">${order.total}</h1>
                  </div>
                </div>
              ))}

              <div className="grid grid-cols-1 lg:grid-cols-3 mt-6">
                <div className="mt-3">
                  <h1 className="text-[#191C1F] font-medium">
                    Billing Address{" "}
                  </h1>

                  <div className="flex flex-row gap-2 items-center justify-start mt-6">
                    <div className="flex flex-col">
                      <h3 className="text-[#191C1F] font-semibold">
                        Kevin Durant
                      </h3>
                    </div>
                  </div>

                  <p className="text-[#5F6C72] font-normal mt-3 w-[80%]">
                    East Tejturi Bajar, Ward No.4 , Road, No.13, Flat No.5D,
                    Dhaka, Bangladesh
                  </p>

                  <h3 className="mt-3 text-[#191C1F] font-semibold">
                    Email :{" "}
                    <span className="text-[#5F6C72] font-normal">
                      shubham@gmail.com
                    </span>
                  </h3>

                  <h3 className="mt-1 text-[#191C1F] font-semibold">
                    Phone :{" "}
                    <span className="text-[#5F6C72] font-normal">
                      +1-202-404{" "}
                    </span>
                  </h3>
                </div>

                <div className="mt-3">
                  <h1 className="text-[#191C1F] font-medium">
                    Shipping Address{" "}
                  </h1>

                  <div className="flex flex-row gap-2 items-center justify-start mt-6">
                    <div className="flex flex-col">
                      <h3 className="text-[#191C1F] font-semibold">
                        Kevin Durant
                      </h3>
                    </div>
                  </div>

                  <p className="text-[#5F6C72] font-normal mt-3 w-[80%]">
                    East Tejturi Bajar, Ward No.4 , Road, No.13, Flat No.5D,
                    Dhaka, Bangladesh
                  </p>

                  <h3 className="mt-3 text-[#191C1F] font-semibold">
                    Email :{" "}
                    <span className="text-[#5F6C72] font-normal">
                      shubham@gmail.com
                    </span>
                  </h3>

                  <h3 className="mt-1 text-[#191C1F] font-semibold">
                    Phone :{" "}
                    <span className="text-[#5F6C72] font-normal">
                      +1-202-404{" "}
                    </span>
                  </h3>
                </div>

                <div className="mt-3">
                  <h1> Order Notes </h1>
                  <p className="mt-6 w-[80%] text-[#576C72]">
                    {" "}
                    East Tejturi Bajar, Ward No.4 , Road, No.13, Flat No.5D,
                    Dhaka, Bangladesh East Tejturi Bajar, Ward No.4 , Road,
                    No.13, Flat No.5D, Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
