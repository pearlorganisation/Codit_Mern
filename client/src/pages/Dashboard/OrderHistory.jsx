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

      <div className="bg-[#F2F4F5] mt-8 py-3">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex justify-center items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center justify-center">
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 ml-32"
                >
                  <path
                    d="M9.875 15.25V11.5C9.875 11.3343 9.80915 11.1753 9.69194 11.0581C9.57473 10.9409 9.41576 10.875 9.25 10.875H6.75C6.58424 10.875 6.42527 10.9409 6.30806 11.0581C6.19085 11.1753 6.125 11.3343 6.125 11.5V15.25C6.125 15.4158 6.05915 15.5748 5.94194 15.692C5.82473 15.8092 5.66576 15.875 5.5 15.875H1.75C1.58424 15.875 1.42527 15.8092 1.30806 15.692C1.19085 15.5748 1.125 15.4158 1.125 15.25V8.02348C1.1264 7.93699 1.14509 7.85165 1.17998 7.77249C1.21486 7.69332 1.26523 7.62194 1.32812 7.56255L7.57812 1.88286C7.69334 1.77745 7.84384 1.71899 8 1.71899C8.15616 1.71899 8.30666 1.77745 8.42187 1.88286L14.6719 7.56255C14.7348 7.62194 14.7851 7.69332 14.82 7.77249C14.8549 7.85165 14.8736 7.93699 14.875 8.02348V15.25C14.875 15.4158 14.8092 15.5748 14.6919 15.692C14.5747 15.8092 14.4158 15.875 14.25 15.875H10.5C10.3342 15.875 10.1753 15.8092 10.0581 15.692C9.94085 15.5748 9.875 15.4158 9.875 15.25Z"
                    stroke="#5F6C72"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center justify-center">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 2.25L8.25 6L4.5 9.75"
                    stroke="#77878F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <a
                  href="#"
                  className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                >
                  My Profile
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-center">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 2.25L8.25 6L4.5 9.75"
                    stroke="#77878F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <a
                  href="#"
                  className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 2.25L8.25 6L4.5 9.75"
                    stroke="#77878F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span className="ms-1 text-sm font-medium text-[#2Da5F3] md:ms-2 dark:text-gray-400">
                  Order History
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-[25%_auto] mt-6">
        <div className="bg-white">
          <div className="flex flex-col gap-2 mt-2">
            <div className="flex flex-row gap-2 p-2  rounded-sm">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.2"
                  d="M2.5 6.25L10 10.625L17.5 6.25L10 1.875L2.5 6.25Z"
                  fill="white"
                />
                <path
                  d="M2.5 13.75L10 18.125L17.5 13.75"
                  stroke="black"
                  stroke-opacity="0.58"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.5 10L10 14.375L17.5 10"
                  stroke="black"
                  stroke-opacity="0.58"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.5 6.25L10 10.625L17.5 6.25L10 1.875L2.5 6.25Z"
                  stroke="black"
                  stroke-opacity="0.58"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h1> Dashboard </h1>
            </div>

            <div className="flex flex-row gap-2 p-2 bg-red-300">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 10.9062V16.25C3.75 16.4158 3.81585 16.5747 3.93306 16.6919C4.05027 16.8092 4.20924 16.875 4.375 16.875H15.625C15.7908 16.875 15.9497 16.8092 16.0669 16.6919C16.1842 16.5747 16.25 16.4158 16.25 16.25V10.9062"
                  stroke="#5F6C72"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.21875 3.125H15.7812C15.9168 3.12612 16.0485 3.17075 16.1568 3.25233C16.2651 3.33391 16.3443 3.44812 16.3828 3.57812L17.5 7.5H2.5L3.61719 3.57812C3.65568 3.44812 3.73492 3.33391 3.84322 3.25233C3.95152 3.17075 4.08317 3.12612 4.21875 3.125V3.125Z"
                  stroke="#5F6C72"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.5 7.5V8.75C7.5 9.41304 7.23661 10.0489 6.76777 10.5178C6.29893 10.9866 5.66304 11.25 5 11.25C4.33696 11.25 3.70107 10.9866 3.23223 10.5178C2.76339 10.0489 2.5 9.41304 2.5 8.75V7.5"
                  stroke="#5F6C72"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.5 7.5V8.75C12.5 9.41304 12.2366 10.0489 11.7678 10.5178C11.2989 10.9866 10.663 11.25 10 11.25C9.33696 11.25 8.70107 10.9866 8.23223 10.5178C7.76339 10.0489 7.5 9.41304 7.5 8.75V7.5"
                  stroke="#5F6C72"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.5 7.5V8.75C17.5 9.41304 17.2366 10.0489 16.7678 10.5178C16.2989 10.9866 15.663 11.25 15 11.25C14.337 11.25 13.7011 10.9866 13.2322 10.5178C12.7634 10.0489 12.5 9.41304 12.5 8.75V7.5"
                  stroke="#5F6C72"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h1> Order History </h1>
            </div>

            <div className="flex flex-row gap-2 p-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.375 18.125H15.625"
                  stroke="#5F6C72"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.25 8.125C16.25 13.75 10 18.125 10 18.125C10 18.125 3.75 13.75 3.75 8.125C3.75 6.4674 4.40848 4.87769 5.58058 3.70558C6.75269 2.53348 8.3424 1.875 10 1.875C11.6576 1.875 13.2473 2.53348 14.4194 3.70558C15.5915 4.87769 16.25 6.4674 16.25 8.125V8.125Z"
                  stroke="#5F6C72"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 10.625C11.3807 10.625 12.5 9.50571 12.5 8.125C12.5 6.74429 11.3807 5.625 10 5.625C8.61929 5.625 7.5 6.74429 7.5 8.125C7.5 9.50571 8.61929 10.625 10 10.625Z"
                  stroke="#5F6C72"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h1> Track Order </h1>
            </div>

            <div className="flex flex-row gap-2 p-2">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.75 16.875C7.75 17.1511 7.52614 17.375 7.25 17.375C6.97386 17.375 6.75 17.1511 6.75 16.875C6.75 16.5989 6.97386 16.375 7.25 16.375C7.52614 16.375 7.75 16.5989 7.75 16.875Z"
                  fill="#191C1F"
                  stroke="#5F6C72"
                  stroke-width="1.5"
                />
                <path
                  d="M15.875 16.875C15.875 17.1511 15.6511 17.375 15.375 17.375C15.0989 17.375 14.875 17.1511 14.875 16.875C14.875 16.5989 15.0989 16.375 15.375 16.375C15.6511 16.375 15.875 16.5989 15.875 16.875Z"
                  fill="#191C1F"
                  stroke="#5F6C72"
                  stroke-width="1.5"
                />
                <path
                  d="M4.30469 5.625H18.3203L16.2578 12.8438C16.1842 13.1057 16.0266 13.3363 15.8093 13.5C15.5919 13.6638 15.3268 13.7516 15.0547 13.75H7.57031C7.29819 13.7516 7.03308 13.6638 6.81572 13.5C6.59836 13.3363 6.44078 13.1057 6.36719 12.8438L3.53906 2.95313C3.50169 2.82246 3.42275 2.70754 3.3142 2.62578C3.20565 2.54401 3.0734 2.49986 2.9375 2.5H1.625"
                  stroke="#5F6C72"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h1> Shopping Cart </h1>
            </div>

            <div className="flex flex-row gap-2 p-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 16.875C10 16.875 2.1875 12.5 2.1875 7.18751C2.1875 6.24836 2.51289 5.33821 3.1083 4.61193C3.70371 3.88564 4.53236 3.38808 5.45328 3.2039C6.37419 3.01971 7.33047 3.16029 8.15943 3.6017C8.98838 4.04311 9.63879 4.7581 10 5.62501C10.3612 4.7581 11.0116 4.04311 11.8406 3.6017C12.6695 3.16029 13.6258 3.01971 14.5467 3.2039C15.4676 3.38808 16.2963 3.88564 16.8917 4.61193C17.4871 5.33821 17.8125 6.24836 17.8125 7.18751C17.8125 12.5 10 16.875 10 16.875Z"
                  stroke="#5F6C72"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h1> Wishlist </h1>
            </div>

            <div className="flex flex-row gap-2 p-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.23438 7.78906H2.48438V4.03906"
                  stroke="#5F6C72"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.8594 5.14038C14.2216 4.50165 13.4641 3.99492 12.6303 3.64918C11.7965 3.30345 10.9027 3.12549 10 3.12549C9.09735 3.12549 8.20355 3.30345 7.36973 3.64918C6.53591 3.99492 5.77843 4.50165 5.14063 5.14038L2.48438 7.78882"
                  stroke="#5F6C72"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.7656 12.2109H17.5156V15.9609"
                  stroke="#5F6C72"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.14062 14.8594C5.77843 15.4981 6.53591 16.0048 7.36973 16.3506C8.20355 16.6963 9.09734 16.8743 10 16.8743C10.9027 16.8743 11.7965 16.6963 12.6303 16.3506C13.4641 16.0048 14.2216 15.4981 14.8594 14.8594L17.5156 12.2109"
                  stroke="#5F6C72"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h1> Compare</h1>
            </div>

            <div className="flex flex-row gap-2 p-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.25 3.125H3.75C3.40482 3.125 3.125 3.40482 3.125 3.75V16.25C3.125 16.5952 3.40482 16.875 3.75 16.875H16.25C16.5952 16.875 16.875 16.5952 16.875 16.25V3.75C16.875 3.40482 16.5952 3.125 16.25 3.125Z"
                  stroke="#5F6C72"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.25 3.125V16.875"
                  stroke="#5F6C72"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.75 8.75H13.75"
                  stroke="#5F6C72"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.75 11.25H13.75"
                  stroke="#5F6C72"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h1> Cards and Addresses </h1>
            </div>

            <div className="flex flex-row gap-2 p-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 6.25V10"
                  stroke="#5F6C72"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.25 11.875L10 10"
                  stroke="#5F6C72"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.3906 7.78906H17.5156V4.66406"
                  stroke="#5F6C72"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.8594 14.8594C13.8982 15.8214 12.6732 16.4768 11.3394 16.7425C10.0056 17.0082 8.62301 16.8724 7.36644 16.3522C6.10987 15.832 5.03581 14.9508 4.28013 13.8201C3.52445 12.6894 3.12109 11.36 3.12109 10C3.12109 8.64002 3.52445 7.31058 4.28013 6.17988C5.03581 5.04917 6.10987 4.16798 7.36644 3.64779C8.62301 3.12761 10.0056 2.99179 11.3394 3.25752C12.6732 3.52324 13.8982 4.17858 14.8594 5.14063L17.5157 7.78907"
                  stroke="#5F6C72"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h1> Browsing History </h1>
            </div>

            <div className="flex flex-row gap-2 p-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 13.75C12.0711 13.75 13.75 12.0711 13.75 10C13.75 7.92893 12.0711 6.25 10 6.25C7.92893 6.25 6.25 7.92893 6.25 10C6.25 12.0711 7.92893 13.75 10 13.75Z"
                  stroke="#5F6C72"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.3516 5.08594C14.5495 5.26823 14.737 5.45573 14.9141 5.64844L17.0469 5.95313C17.3944 6.55665 17.6622 7.20265 17.8438 7.875L16.5469 9.60156C16.5469 9.60156 16.5703 10.1328 16.5469 10.3984L17.8438 12.125C17.6631 12.7976 17.3952 13.4437 17.0469 14.0469L14.9141 14.3516C14.9141 14.3516 14.5469 14.7344 14.3516 14.9141L14.0469 17.0469C13.4434 17.3944 12.7974 17.6622 12.125 17.8438L10.3984 16.5469C10.1333 16.5703 9.86667 16.5703 9.60156 16.5469L7.875 17.8438C7.20236 17.6631 6.55625 17.3952 5.95313 17.0469L5.64844 14.9141C5.45573 14.7318 5.26823 14.5443 5.08594 14.3516L2.95312 14.0469C2.60561 13.4434 2.33776 12.7974 2.15625 12.125L3.45313 10.3984C3.45313 10.3984 3.42969 9.86719 3.45313 9.60156L2.15625 7.875C2.33692 7.20236 2.60481 6.55625 2.95312 5.95313L5.08594 5.64844C5.26823 5.45573 5.45573 5.26823 5.64844 5.08594L5.95313 2.95312C6.55665 2.60561 7.20265 2.33776 7.875 2.15625L9.60156 3.45313C9.86667 3.42968 10.1333 3.42968 10.3984 3.45313L12.125 2.15625C12.7976 2.33692 13.4437 2.60481 14.0469 2.95312L14.3516 5.08594Z"
                  stroke="#5F6C72"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h1> Settings </h1>
            </div>

            <div className="flex flex-row gap-2 p-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5938 6.71875L16.875 10L13.5938 13.2812"
                  stroke="#5F6C72"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.125 10H16.875"
                  stroke="#5F6C72"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.125 16.875H3.75C3.58424 16.875 3.42527 16.8092 3.30806 16.6919C3.19085 16.5747 3.125 16.4158 3.125 16.25V3.75C3.125 3.58424 3.19085 3.42527 3.30806 3.30806C3.42527 3.19085 3.58424 3.125 3.75 3.125H8.125"
                  stroke="#5F6C72"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h1> Logout </h1>
            </div>
          </div>
        </div>
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
