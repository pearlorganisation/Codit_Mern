import BreadCrumb from "./BreadCrumb";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

const browsingHistory = [
  {
    id: 1,
    image:
      "https://img.freepik.com/premium-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg",
    tag: "HOT",
    price: "70",
    title: "TOZO T6 True Wireless Earbuds Bluetooth Headphones",
    ratings: "738",
    date: "17-10-2020",
  },
  {
    id: 2,
    image:
      "https://www.shutterstock.com/image-photo/front-view-blue-wireless-earbuds-260nw-2314405417.jpg",

    price: "2300",
    title: "Samsung Electronics Samsung Galaxy S21 5G",
    ratings: "536",
    date: "17-10-2020",
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB6E-bxXMpQncTlWx70v5_UiuWCYbWMXFRnQ&s",
    tag: "Best Deals",
    price: "360",
    title: "Amazon Basics High Speed HDMI Cable ",
    ratings: "423",
    date: "17-10-2020",
  },
  {
    id: 4,
    image:
      "https://www.lg.com/content/dam/channel/wcms/in/images/washing-machines/fhm1408bdl_alsqeil_eail_in_c/gallery/FHM1408BDL-Washing-Machines-Front-View-DZ-01-v1.jpg",
    tag: "HOT",
    price: "80",
    title: "Portable Washing Machine",
    ratings: "816",
    date: "17-10-2020",
  },
  {
    id: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB6E-bxXMpQncTlWx70v5_UiuWCYbWMXFRnQ&s",
    tag: "Best Deals",
    price: "360",
    title: "Amazon Basics High Speed HDMI Cable ",
    ratings: "423",
    date: "17-10-2020",
  },
  {
    id: 6,
    image:
      "https://www.lg.com/content/dam/channel/wcms/in/images/washing-machines/fhm1408bdl_alsqeil_eail_in_c/gallery/FHM1408BDL-Washing-Machines-Front-View-DZ-01-v1.jpg",
    tag: "HOT",
    price: "80",
    title: "Portable Washing Machine",
    ratings: "816",
    date: "17-10-2020",
  },
];

const BrowsingHistory = () => {
  return (
    <div className="">
      <TopBar />

      <BreadCrumb />
      <div className="grid grid-cols-2 lg:grid-cols-[25%_auto] mt-6">
        <Sidebar />
        <div className="bg-white px-6">
          <div className="mt-12">
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-[#191C1F]">BROWSING HISTORY</h1>
              <div className="flex flex-row gap-2 items-center justify-center">
                <div className="relative flex flex-wrap items-center">
                  <label
                    className="cursor-pointer pr-2 text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
                    htmlFor="id-c01"
                  >
                    Turn Browsing History on/off
                  </label>
                  <input
                    className="peer relative h-4 w-8 cursor-pointer appearance-none rounded-lg bg-slate-300 transition-colors after:absolute after:top-0 after:left-0 after:h-4 after:w-4 after:rounded-full after:bg-slate-500 after:transition-all checked:bg-[#FF009C] checked:after:left-4 checked:after:bg-[#FF009C] hover:bg-slate-400 after:hover:bg-slate-600 checked:hover:bg-[#FF009C] checked:after:hover:bg-[#FF009C] focus:outline-none checked:focus:bg-[#FF009C] checked:after:focus:bg-white focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-200 disabled:after:bg-slate-300"
                    type="checkbox"
                    value=""
                    id="id-c01"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="relative my-6">
                <input
                  id="id-s03"
                  type="search"
                  name="id-s03"
                  placeholder="Search here"
                  aria-label="Search content"
                  className="peer relative h-10 w-full rounded border border-slate-200 px-4 pr-12 text-sm text-slate-500 outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-4 top-2.5 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                  aria-label="Search icon"
                  role="graphics-symbol"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>

              <div className="relative my-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <input
                  datepicker
                  id="default-datepicker"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Select date"
                />
              </div>
            </div>

            <div className=" border border-gray-200 rounded-md">
              <h1 className="p-2">17 Oct, 2020</h1>
              <hr />
              <div className="grid grid-cols-1 lg:grid-cols-4 mt-4">
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
            </div>

            <div className=" border border-gray-200 rounded-md mt-8">
              <h1 className="p-2">21 Oct, 2020</h1>
              <hr />
              <div className="grid grid-cols-1 lg:grid-cols-4 mt-4">
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
            </div>

            <div className="flex items-center justify-center mt-8">
              <button className="px-6  py-2 border border-pink-400 rounded-md text-pink-600">
                {" "}
                LOAD MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowsingHistory;
