import { useState } from "react";
import BreadCrumb from "./BreadCrumb";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

const CardsAddresses = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="">
      <TopBar />

      <BreadCrumb />
      <div className="grid grid-cols-2 lg:grid-cols-[25%_auto] mt-6">
        <Sidebar />
        <div className="bg-white px-6">
          <div className="mt-6">
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-[#191C1F]">PAYMENT OPTION</h1>
              <button
                onClick={() => setShowModal(true)}
                className="flex flex-row gap-2 items-center justify-center"
              >
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
              </button>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-6">
            <div className="mt-3">
              <h1 className="text-[#191C1F] font-medium">Billing Address</h1>

              <h3 className="mt-6">KEVIN GILBERT</h3>

              <h3 className="mt-2 text-[#5F6C72] font-normal">
                East Canal Road, Majra, Near ISBT, Dhaka, Bangladesh
              </h3>

              <h3 className="mt-3 text-[#191C1F] font-semibold">
                Email :{" "}
                <span className="text-[#5F6C72] font-normal">
                  shubham@gmail.com
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
              <h1>SHIPPING ADDRESS </h1>

              <h3 className="mt-6">KEVIN GILBERT</h3>

              <h3 className="mt-2 text-[#5F6C72] font-normal">
                East Canal Road, Majra, Near ISBT, Dhaka, Bangladesh
              </h3>

              <h3 className="mt-3 text-[#191C1F] font-semibold">
                Email :{" "}
                <span className="text-[#5F6C72] font-normal">
                  {" "}
                  shubham@gmail.com
                </span>
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
          </div>

          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-center justify-between p-5">
                      <h3 className="text-md font-semibold mt-3 text-[#191C1F]">
                        Add New Card
                      </h3>
                      <button
                        className=" ml-auto  border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <div className=" flex flex-col gap-4">
                        <h1 className="text-[#191C1F] font-semibold text-base leading-6">
                          {" "}
                          Name on Card
                        </h1>

                        <input
                          type="text"
                          className="border-2 border-pink-200 rounded-md p-1"
                        />
                      </div>

                      <div className=" flex flex-col gap-4">
                        <h1 className="text-[#191C1F] font-semibold text-base leading-6">
                          {" "}
                          Card Number
                        </h1>

                        <input
                          type="text"
                          className="border-2 border-pink-200 rounded-md p-1"
                        />
                      </div>
                      <div className="flex flex-col lg:flex-row gap-3 mt-4">
                        <div className="flex flex-col gap-3 items-start justify-start">
                          <h1 className="text-[#191C1F] font-semibold text-base leading-6">
                            {" "}
                            Expiry Date
                          </h1>{" "}
                          <input
                            type="date"
                            className="border-2 border-pink-200 rounded-md p-1"
                          />
                        </div>

                        <div className="flex flex-col gap-3 items-start justify-center">
                          <h1 className="text-[#191C1F] font-semibold text-base leading-6">
                            CVV
                          </h1>
                          <input
                            type="text"
                            className="border-2 border-pink-200 rounded-md p-1"
                          />
                        </div>
                      </div>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-start p-6 ">
                      <button
                        className="bg-[#FF009C] text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        ADD CARD
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CardsAddresses;
