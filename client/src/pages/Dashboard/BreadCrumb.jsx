import React from "react";

const BreadCrumb = ({ title }) => {
  return (
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

              <span
                className={`ms-1 text-sm font-medium ${
                  title ? `text-gray-700` : `text-[#FF009C]`
                }  md:ms-2 dark:text-gray-400`}
              >
                Dashboard
              </span>
            </div>
          </li>

          {title && (
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

                <span className="ms-1 text-sm font-medium text-[#2DA5F3] md:ms-2 dark:text-gray-400">
                  {title}
                </span>
              </div>
            </li>
          )}
        </ol>
      </nav>
    </div>
  );
};

export default BreadCrumb;
