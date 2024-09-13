const TopBar = () => {
  return (
    <div className="flex flex-row gap-3 mt-4">
      <div className="flex flex-row gap-2 items-center justify-center  min-w-min">
        <h1 className="ml-40 "> All Categories </h1>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 6L8 11L3 6"
            stroke="#191C1F"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="flex flex-row gap-2">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.25 21.75H18.75"
            stroke="#5F6C72"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75V9.75Z"
            stroke="#5F6C72"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z"
            stroke="#5F6C72"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <h1 className="text-[#5F6C72]"> Track Order </h1>
      </div>

      <div className="flex flex-row gap-2">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.4812 9.34692H2.9812V4.84692"
            stroke="#5F6C72"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.8312 6.16885C17.0658 5.40236 16.1569 4.79429 15.1563 4.37941C14.1557 3.96453 13.0831 3.75098 12 3.75098C10.9168 3.75098 9.84421 3.96453 8.84362 4.37941C7.84304 4.79429 6.93407 5.40236 6.1687 6.16885L2.9812 9.34698"
            stroke="#5F6C72"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5188 14.6531H21.0188V19.1531"
            stroke="#5F6C72"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.1687 17.8312C6.93407 18.5977 7.84304 19.2058 8.84362 19.6206C9.84421 20.0355 10.9168 20.2491 12 20.2491C13.0831 20.2491 14.1557 20.0355 15.1563 19.6206C16.1569 19.2058 17.0658 18.5977 17.8312 17.8312L21.0187 14.6531"
            stroke="#5F6C72"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <h1 className="text-[#5F6C72]"> Compare </h1>
      </div>

      <div className="flex flex-row gap-2">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.1406 12.7501H18.1406C17.7428 12.7501 17.3613 12.9081 17.08 13.1894C16.7987 13.4707 16.6406 13.8522 16.6406 14.2501V18.0001C16.6406 18.3979 16.7987 18.7794 17.08 19.0607C17.3613 19.342 17.7428 19.5001 18.1406 19.5001H19.6406C20.0384 19.5001 20.42 19.342 20.7013 19.0607C20.9826 18.7794 21.1406 18.3979 21.1406 18.0001V12.7501ZM21.1406 12.7501C21.1407 11.5618 20.9054 10.3854 20.4484 9.28851C19.9915 8.19166 19.3218 7.19616 18.4781 6.35944C17.6344 5.52273 16.6334 4.86136 15.5328 4.41351C14.4322 3.96565 13.2538 3.74017 12.0656 3.75007C10.8782 3.74141 9.70083 3.96781 8.60132 4.41623C7.5018 4.86464 6.50189 5.5262 5.6592 6.36279C4.81651 7.19938 4.1477 8.19446 3.69131 9.29069C3.23492 10.3869 2.99997 11.5626 3 12.7501V18.0001C3 18.3979 3.15804 18.7794 3.43934 19.0607C3.72064 19.342 4.10218 19.5001 4.5 19.5001H6C6.39782 19.5001 6.77936 19.342 7.06066 19.0607C7.34196 18.7794 7.5 18.3979 7.5 18.0001V14.2501C7.5 13.8522 7.34196 13.4707 7.06066 13.1894C6.77936 12.9081 6.39782 12.7501 6 12.7501H3"
            stroke="#5F6C72"
            strokeWidth="1.5"
            strokeLinecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <h1 className="text-[#5F6C72]"> Customer Support </h1>
      </div>

      <div className="flex flex-row gap-2">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
            stroke="#5F6C72"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.25 11.25H12V16.5H12.75"
            stroke="#5F6C72"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.1875 7.875C12.1875 8.08211 12.0196 8.25 11.8125 8.25C11.6054 8.25 11.4375 8.08211 11.4375 7.875C11.4375 7.66789 11.6054 7.5 11.8125 7.5C12.0196 7.5 12.1875 7.66789 12.1875 7.875Z"
            fill="#191C1F"
            stroke="#5F6C72"
            stroke-width="1.5"
          />
        </svg>

        <h1 className="text-[#5F6C72]"> Need Help </h1>
      </div>

      <div className="flex flex-row gap-2 justify-end ml-24">
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.11719 11.6499C8.01759 13.5093 9.52112 15.009 11.3828 15.9046C11.5201 15.9696 11.672 15.9978 11.8235 15.9863C11.975 15.9748 12.1209 15.924 12.2469 15.839L14.9812 14.0124C15.1021 13.9305 15.2417 13.8805 15.387 13.8671C15.5324 13.8537 15.6788 13.8774 15.8125 13.9359L20.9313 16.1343C21.1062 16.2071 21.2524 16.3354 21.3472 16.4994C21.4421 16.6635 21.4804 16.8542 21.4563 17.0421C21.294 18.3084 20.6759 19.4722 19.7177 20.3157C18.7594 21.1592 17.5266 21.6246 16.25 21.6249C12.3049 21.6249 8.52139 20.0577 5.73179 17.2681C2.94218 14.4785 1.375 10.695 1.375 6.74991C1.37529 5.47329 1.84073 4.2405 2.68425 3.28224C3.52776 2.32398 4.69154 1.7059 5.95781 1.54366C6.14576 1.51952 6.33643 1.55783 6.50047 1.6527C6.66451 1.74756 6.79281 1.89372 6.86562 2.06866L9.06406 7.19835C9.12123 7.32998 9.14515 7.47365 9.1337 7.6167C9.12226 7.75976 9.07581 7.8978 8.99844 8.01866L7.17188 10.7968C7.09056 10.9224 7.04283 11.0669 7.03325 11.2162C7.02368 11.3656 7.05258 11.5149 7.11719 11.6499V11.6499Z"
            stroke="#191C1F"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <h1 className="text-[#191C1F]"> + 1-202-555-0104 </h1>
      </div>
    </div>
  );
};

export default TopBar;
