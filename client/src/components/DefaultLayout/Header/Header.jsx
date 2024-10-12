import { useEffect, useRef, useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

// Avtar with darpdown menu
const AvatarMenue = () => {
  const [state, setState] = useState(false);

  const profileRef = useRef();

  const navigation = [
    { title: "Dashboard", path: "/" },
    { title: "Analytics", path: "/" },
    { title: "Profile", path: "/" },
    { title: "Settings", path: "/" },
  ];

  useEffect(() => {
    const handleDropDown = (e) => {
      if (!profileRef.current.contains(e.target)) setState(false);
    };
    document.addEventListener("click", handleDropDown);
  }, []);

  return (
    <header className="relative border-t lg:border-none">
      <div className="">
        <button
          ref={profileRef}
          className="hidden w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 lg:focus:ring-2 lg:block"
          onClick={() => setState(!state)}
        >
          <img src="user.svg" className="w-full h-full rounded-full" />
        </button>
      </div>
      <ul
        className={`bg-white top-14 right-0 mt-6 space-y-6 lg:absolute lg:border lg:rounded-md lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${
          state ? "" : "lg:hidden"
        }`}
      >
        {navigation.map((item, idx) => (
          <li key={idx}>
            <a
              className="block text-gray-600 hover:text-gray-900 lg:hover:bg-gray-50 lg:p-3"
              href={item.path}
            >
              {item.title}
            </a>
          </li>
        ))}
        <button className="block w-full text-justify text-gray-600 hover:text-gray-900 border-t py-3 lg:hover:bg-gray-50 lg:p-3">
          Logout
        </button>
      </ul>
    </header>
  );
};

export default function Header() {
  const [state, setState] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { cartData } = useSelector((state) => state.cart);

  const cartQuantity = cartData.length;

  const { wishlistData } = useSelector((state) => state.wishlist);

  console.log("Wihslist data", wishlistData);

  // Replace / paths with your paths
  const navigation = [{ img: "wishlist.svg", path: "/wishlist" }];

  const submenuNav = [
    { title: "Home", path: "/" },
    { title: "Men's", path: "/mens" },
    { title: "Women's", path: "/womens" },
    { title: "Kids", path: "/kids" },
    { title: "Accessories", path: "/accessories" },
    { title: "Gifts", path: "/gifts" },
    { title: "Contact Us", path: "/contact_us" },
    { title: "About Us", path: "/about_us" },
  ];

  return (
    <header className="text-base lg:text-sm">
      <div
        className={`bg-white items-center gap-x-14 px-4 max-w-screen-xl mx-auto lg:flex lg:px-8 lg:static ${
          state ? "h-full fixed inset-x-0" : ""
        }`}
      >
        <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
          <a href="/">
            <img src="logo.svg" width={60} height={30} alt="logo" />
          </a>
          <div className="lg:hidden">
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`nav-menu flex-1 pb-28 mt-8 overflow-y-auto max-h-screen lg:block lg:overflow-visible lg:pb-0 lg:mt-0 ${
            state ? "" : "hidden"
          }`}
        >
          <ul className="items-center space-y-6 lg:flex lg:space-x-6 lg:space-y-0">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex-1 items-center justify-start pb-4 lg:flex lg:pb-0"
            >
              <div className="flex items-center gap-1 px-2 border   rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search"
                  className="w- px-2 py-2 text-gray-500 bg-transparent rounded-md outline-none"
                />
              </div>
            </form>
            {navigation.map((item, idx) => {
              return (
                <li key={idx}>
                  <a
                    href={item.path}
                    className="block text-gray-700 hover:text-gray-900"
                  >
                    <img src={item.img} alt={item.title} />
                    <p>{item.title}</p>
                  </a>
                </li>
              );
            })}

            <Link to={"/checkout"}>
              <div className="relative">
                <FaShoppingBasket className="text-2xl cursor-pointer hover:text-purple-600 transition transform duration-200" />

                {cartQuantity > 0 && (
                  <div className="absolute bg-purple-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce -top-1 -right-2 rounded-full top- text-white">
                    {cartQuantity}
                  </div>
                )}
              </div>
            </Link>
            <AvatarMenue />
          </ul>
        </div>
      </div>
      <nav className="border poppins-semibold">
        {/* Dropdown Button for Mobile */}
        <div className="md:hidden flex justify-between items-center max-w-screen-xl mx-auto px-4">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="p-3 text-gray-700 border-b-2 border-b-transparent hover:border-b-pink-500 duration-150"
          >
            Menu
          </button>
        </div>

        {/* Dropdown for Mobile */}
        <ul
          className={`${isDropdownOpen ? "block" : "hidden"
            } md:hidden bg-white shadow-lg p-4`}
        >
          {submenuNav.map((item, idx) => {
            return (
              <NavLink
                key={idx}
                to={item.path}
                className={({ isActive }) =>
                  `block p-3 text-gray-700 border-b-2 border-b-transparent hover:border-b-pink-500 duration-150 ${isActive ? "border-b-pink-500 " : ""
                  }`
                }
                onClick={() => setIsDropdownOpen(false)} 
              >
                {item.title}
              </NavLink>
            );
          })}
        </ul>

        {/* Regular Nav for larger screens */}
        <ul className="hidden md:hidden lg:flex justify-center items-center gap-x-3 max-w-screen-xl mx-auto px-4 lg:px-8">
          {submenuNav.map((item, idx) => {
            return (
              <NavLink
                key={idx}
                to={item.path}
                className={({ isActive }) =>
                  `block p-3 text-gray-700 border-b-2 border-b-transparent hover:border-b-pink-500 duration-150 ${isActive ? "border-b-pink-500 " : ""
                  }`
                }
              >
                {item.title}
              </NavLink>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
