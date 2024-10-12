import BreadCrumb from "./BreadCrumb";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

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
  {
    id: 5,
    orderID: "#913522234",
    status: "IN PROGRESS",
    date: "Dec 30, 2019 5:18",
    total: "1500",
    products: "5",
    colour: "#FA8232",
  },
  {
    id: 6,
    orderID: "#612331347",
    status: "COMPLETED",
    date: "Feb 2, 2020 19:18",
    total: "1800",
    products: "3",
    colour: "#2DB224",
  },
  {
    id: 7,
    orderID: "#789246234",
    status: "CANCELLED",
    date: "MARCH 8, 2020 6:58",
    total: "3500",
    products: "11",
    colour: "#EE5858",
  },
  {
    id: 8,
    orderID: "#462353362",
    status: "IN PROGRESS",
    date: "Oct 21, 2020 11:18",
    total: "700",
    products: "4",
    colour: "#FA8232",
  },
];

const OrderHistory = () => {
  return (
    <div className="">
      <TopBar />

      <BreadCrumb title="Order History" />

      <div className="grid grid-cols-2 lg:grid-cols-[25%_auto] mt-6">
        <Sidebar />
        <div className="bg-white px-6">
          <div className="mt-12">
            <div className="flex flex-row justify-between items-center mt-8">
              <h1 className="text-[#191C1F]">ORDER HISTORY</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 mt-12 bg-blue-200">
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

            <div className="mt-6 flex- items-center justify-center">
              <div className="flex flex-row gap-2 items-center justify-center">
                <div className="p-2 border border-[#B13481] rounded-full">
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
                      stroke="#B13481"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center">
                  <h1 className="text-white"> 1</h1>
                </div>
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <h1 className=""> 2</h1>
                </div>
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <h1 className=""> 3</h1>
                </div>
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <h1 className=""> 4</h1>
                </div>
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <h1 className=""> 5</h1>
                </div>

                <div className="p-2 border border-[#B13481] rounded-full">
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
                      stroke="#B13481"
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
    </div>
  );
};

export default OrderHistory;
