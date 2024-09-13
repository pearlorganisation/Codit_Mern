import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import ClipLoader from "react-spinners/ClipLoader";
import { registerUser } from "../../features/actions/authActions";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import SuccessMessage from "../../components/SuccessMessage/SuccessMessage";

const Signup = () => {
  const { loading, error, success, userInfo } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const [verificationSent, setVerificationSent] = useState(false);

  const navigate = useNavigate();

  //   useEffect(() => {
  //     if (success) navigate("/login");
  //   }, [navigate, userInfo, success]);

  const submitForm = async (info) => {
    dispatch(registerUser(info));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:gap-12 px-10 ">
      <div className="lg:mt-20 mt-6 md:border-r-2">
        <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20230613/pngtree-ecommerce-website-with-shopping-cart-with-the-shopping-cart-on-a-image_2975658.jpg"
          className="w-full h-full rounded-xl"
        />
      </div>

      <div className="p-4 md:px-8 md:py-4 lg:w-[75%] items-center justify-center">
        <h1 className="py-5 text-3xl font-bold text-[#315288]">Sign Up !</h1>
        <p className="text-base text-[#5E5E5E] font-normal pb-2">
          If you are already a member you can login with your email address and
          password.
        </p>

        {verificationSent && <h1> Thank You Mail Sent Successfully</h1>}
        <form
          className="space-y-1 md:space-y-2"
          onSubmit={handleSubmit(submitForm)}
        >
          <div>
            <label
              htmlFor="firstname"
              className="block mb-2 text-base font-medium text-[#668DCB]"
            >
              {" "}
              First name
            </label>
            <input
              type="text"
              name="firstname"
              className="bg-white border border-[#9b9b9b] text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="First name"
              {...register("firstName")}
            />
          </div>
          <div>
            <label
              htmlFor="lastname"
              className="block mb-2 text-base font-medium text-[#668DCB]"
            >
              Last name
            </label>
            <input
              type="text"
              name="lastname"
              className="bg-white border border-[#9b9b9b] text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Last name"
              {...register("lastName")}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-base font-medium text-[#668DCB]"
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="bg-white border border-[#9b9b9b] text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email Address"
              {...register("email")}
            />
          </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="block mb-2 text-base font-medium text-[#668DCB]"
            >
              Phone number
            </label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              className="bg-white border border-[#9b9b9b] text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Phone Number"
              {...register("phoneNumber")}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-[#668DCB]"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              {...register("password")}
              className="bg-white border border-[#9b9b9b] text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required=""
                />
              </div>
              <div className=" ml-1 text-sm">
                <label
                  htmlFor="remember"
                  className="text-[#668DCB] font-medium text-base"
                >
                  Terms and Conditions
                </label>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-[#315288] hover:bg-[#3663ac] px-4 py-3  rounded-md"
          >
            {loading ? <ClipLoader /> : <span className="">Register</span>}
          </button>
          <div className="flex items-center justify-center">
            <p className="text-base font-medium text-[#696F79] ">
              Already have an account ?{" "}
              <a
                href="signup"
                className="font-medium text-[#2C73EB] hover:underline dark:text-blue-500"
              >
                Login Here
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

// {userInfo.message && !error && (
//     <SuccessMessage>{userInfo.message}</SuccessMessage>
//   )}

// {!error && !userInfo.success && (
//     <ErrorMessage>{userInfo.message}</ErrorMessage>
//   )}
