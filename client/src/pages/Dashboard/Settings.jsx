import { useState } from "react";
import BreadCrumb from "./BreadCrumb";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

const Settings = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  return (
    <div className="">
      <TopBar />

      <BreadCrumb title="Settings" />
      <div className="grid grid-cols-2 lg:grid-cols-[25%_auto] mt-6 gap-8">
        <Sidebar />

        <div className="">
          <div className="bg-white  border border-gray-200 rounded-md pb-6">
            <h1 className="px-6 py-3 text-semibold">Account Settings</h1>
            <hr />

            <div className="grid grid-cols-1 lg:grid-cols-[20%_auto] px-6">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
                className="w-32 h-32 rounded-full mt-4"
              />

              <form className="mt-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-2">
                    <label> Display Name</label>
                    <input
                      type="text"
                      value="Kevin"
                      className="border-2 border-gray-200 rounded-md pl-3"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label> Display Name</label>
                    <input
                      type="text"
                      value="Kevin"
                      className="border-2 border-gray-200 rounded-md pl-3"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label> Full Name</label>
                    <input
                      type="text"
                      value="Kevin Gilbert"
                      className="border-2 border-gray-200 rounded-md pl-3"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label> Email</label>
                    <input
                      type="text"
                      value="Kevin.gilbert@gmail.com"
                      className="border-2 border-gray-200 rounded-md pl-3"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label> Secondary Email </label>
                    <input
                      type="text"
                      value="Kevin12345@gmail.com"
                      className="border-2 border-gray-200 rounded-md pl-3"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label> Phone Number </label>
                    <input
                      type="text"
                      value="+1-202-555-0118"
                      className="border-2 border-gray-200 rounded-md pl-3"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label> Country / Region </label>
                    <select className="border-2 border-gray-200 rounded-md pl-3">
                      <option> Choose a Country</option>
                      <option> Bangladesh</option>
                      <option> India </option>
                    </select>
                  </div>

                  <div className="flex flex-row gap-3">
                    <div className="flex flex-col gap-2">
                      <label> States</label>
                      <select className="border-2 border-gray-200 rounded-md pl-3">
                        <option> Choose a State</option>
                        <option> Uttarakhand</option>
                        <option> Uttar Pradesh </option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label> Zip Code </label>
                      <input
                        type="text"
                        value="1207"
                        className="border-2 border-gray-200 rounded-md pl-3"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <button className="px-6 py-3 rounded-md bg-pink-900 text-white">
                    {" "}
                    SAVE CHANGES{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div className="bg-white border border-gray-200 rounded-md pb-6 mt-8">
                <h1 className="px-6 py-3 text-semibold">BILLING ADDRESS</h1>
                <hr />

                <div className="grid grid-cols-1">
                  <form className="mt-4 px-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex flex-col gap-2 mt-3">
                        <label> First Name</label>
                        <input
                          type="text"
                          value="Kevin"
                          className="border-2 border-gray-200 rounded-md pl-3"
                        />
                      </div>

                      <div className="flex flex-col gap-2 mt-3">
                        <label> Last Name</label>
                        <input
                          type="text"
                          value="Kevin"
                          className="border-2 border-gray-200 rounded-md pl-3"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-3">
                      <label> Company Name ( Optional )</label>
                      <input
                        type="text"
                        value="Kevin Gilbert"
                        className="border-2 border-gray-200 rounded-md pl-3"
                      />
                    </div>

                    <div className="flex flex-col gap-2 mt-3">
                      <label> Address </label>
                      <input
                        type="text"
                        value="Road No.13x, Block C, Flat No. C, Dhaka"
                        className="border-2 border-gray-200 rounded-md pl-3"
                      />
                    </div>

                    <div className="flex flex-col gap-2 mt-3">
                      <label> Country </label>
                      <select className="border-2 border-gray-200 rounded-md pl-3">
                        <option> Choose a Country</option>
                        <option> Bangladesh</option>
                        <option> India </option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2 mt-3">
                      <label> Region / State </label>
                      <select className="border-2 border-gray-200 rounded-md pl-3">
                        <option> Choose a State </option>
                        <option> Himanchal Pradesh </option>
                        <option> Andhra Pradesh </option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-3">
                      <div className="flex flex-col gap-2">
                        <label> City </label>
                        <select className="border-2 border-gray-200 rounded-md pl-3">
                          <option> Choose a City</option>
                          <option> Dhaka</option>
                          <option> Dehradun </option>
                        </select>
                      </div>

                      <div className="flex flex-row gap-3">
                        <div className="flex flex-col gap-2">
                          <label> Zip Code </label>
                          <input
                            type="text"
                            value="1207"
                            className="border-2 border-gray-200 rounded-md pl-3"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-3">
                      <label> Email</label>
                      <input
                        type="text"
                        value="Kevin.gilbert@gmail.com"
                        className="border-2 border-gray-200 rounded-md pl-3"
                      />
                    </div>

                    <div className="flex flex-col gap-2 mt-3">
                      <label> Phone Number </label>
                      <input
                        type="text"
                        value="+1-202-555-0118"
                        className="border-2 border-gray-200 rounded-md pl-3"
                      />
                    </div>

                    <div className="mt-6">
                      <button className="px-6 py-3 rounded-md bg-pink-900 text-white">
                        {" "}
                        SAVE CHANGES{" "}
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-md pb-6 mt-8">
                <h1 className="px-6 py-3 text-semibold">SHIPPING ADDRESS</h1>
                <hr />

                <div className="grid grid-cols-1">
                  <form className="mt-4 px-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex flex-col gap-2 mt-3">
                        <label> First Name</label>
                        <input
                          type="text"
                          value="Kevin"
                          className="border-2 border-gray-200 rounded-md pl-3"
                        />
                      </div>

                      <div className="flex flex-col gap-2 mt-3">
                        <label> Last Name</label>
                        <input
                          type="text"
                          value="Kevin"
                          className="border-2 border-gray-200 rounded-md pl-3"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-3">
                      <label> Company Name ( Optional )</label>
                      <input
                        type="text"
                        value="Kevin Gilbert"
                        className="border-2 border-gray-200 rounded-md pl-3"
                      />
                    </div>

                    <div className="flex flex-col gap-2 mt-3">
                      <label> Address </label>
                      <input
                        type="text"
                        value="Road No.13x, Block C, Flat No. C, Dhaka"
                        className="border-2 border-gray-200 rounded-md pl-3"
                      />
                    </div>

                    <div className="flex flex-col gap-2 mt-3">
                      <label> Country </label>
                      <select className="border-2 border-gray-200 rounded-md pl-3">
                        <option> Choose a Country</option>
                        <option> Bangladesh</option>
                        <option> India </option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2 mt-3">
                      <label> Region / State </label>
                      <select className="border-2 border-gray-200 rounded-md pl-3">
                        <option> Choose a State </option>
                        <option> Himanchal Pradesh </option>
                        <option> Andhra Pradesh </option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-3">
                      <div className="flex flex-col gap-2">
                        <label> City </label>
                        <select className="border-2 border-gray-200 rounded-md pl-3">
                          <option> Choose a City</option>
                          <option> Dhaka</option>
                          <option> Dehradun </option>
                        </select>
                      </div>

                      <div className="flex flex-row gap-3">
                        <div className="flex flex-col gap-2">
                          <label> Zip Code </label>
                          <input
                            type="text"
                            value="1207"
                            className="border-2 border-gray-200 rounded-md pl-3"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-3">
                      <label> Email</label>
                      <input
                        type="text"
                        value="Kevin.gilbert@gmail.com"
                        className="border-2 border-gray-200 rounded-md pl-3"
                      />
                    </div>

                    <div className="flex flex-col gap-2 mt-3">
                      <label> Phone Number </label>
                      <input
                        type="text"
                        value="+1-202-555-0118"
                        className="border-2 border-gray-200 rounded-md pl-3"
                      />
                    </div>

                    <div className="mt-6">
                      <button className="px-6 py-3 rounded-md bg-pink-900 text-white">
                        {" "}
                        SAVE CHANGES{" "}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-md pb-6 ">
            <h1 className="px-6 py-3 text-semibold"> CHANGE PASSWORD </h1>
            <hr />

            <form className="px-6">
              <div className="flex flex-col gap-2 mt-3">
                <label> Curent Password </label>
                <input
                  type="password"
                  placeholder=""
                  className="border-2 border-gray-200 rounded-md pl-3"
                />
              </div>

              <div className="flex flex-col gap-2 mt-3">
                <label> New Password </label>
                <input
                  type="password"
                  placeholder="8+ characters "
                  className="border-2 border-gray-200 rounded-md pl-3"
                />
              </div>

              <div className="relative w-full  mt-8">
                <label> Confirm Password </label>
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Password"
                  className="w-full
                   px-4
                   py-2
                   text-base
                   border border-gray-300
                   rounded
                  outline-none
                focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                />
                <button
                  className="absolute inset-y-8 right-0 flex items-center px-4 py-3 text-gray-600"
                  onClick={togglePasswordVisibility}
                >
                  {isPasswordVisible ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  )}
                </button>
              </div>

              <div className="mt-6">
                <button className="px-6 py-3 rounded-md bg-pink-900 text-white">
                  CHANGE PASSWORD
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
