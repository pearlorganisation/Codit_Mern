import React from 'react'
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Faq from '../../components/Faq/Faq';

const Contact = () => {
  return (
    <div className=''>

<div className='grid  grid-cols-1 lg:grid-cols-[40%_auto] gap-8 p-16 poppins-semibold'>

    <div className='border border-pink-400 bg-[#FFFFFF] p-5 md:p-10 rounded-lg' style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
        <div>
        <h1 className='text-base md:text-xl text-center font-bold '>Contact us   </h1>

        <div className='flex flex-col justify-center items-baseline gap-4 p-10'>
        <div className='flex gap-2'> <AiOutlineMail className='text-pink-700' size={30}/> <span>info@example.com</span></div>
       <div className='flex gap-2'> <FaPhoneAlt  className='text-pink-700' size={20} /> <span>001985512-854</span> </div>
       <div className='flex gap-2'> <IoLocation  className='text-pink-700' size={30} /> <span>John Smith 123 Main Street Amsterdam, NH 1000 Netherlands</span> </div>
        </div>
       
        </div>
        <div>
            <div>
            <h1 className='text-xl text-center font-bold py-5'>
                Social Media
            </h1>
              <div className='flex flex-col justify-items-start  gap-4 p-10 '>
                <div className='flex items-center gap-5 '> <img className='size-10' src='twitter.png'/> <p className='font-bold  '>TWITTER HANDLE</p></div>
                <div className='flex gap-5  items-center'> <img className='size-10' src='instagram.png'/> <p className='font-bold '>INSTAGRAM HANDLE</p></div>
                <div className='flex gap-5  items-center'> <img className='size-10' src='whatsapp.png'/> <p className='font-bold '>WHATSAPP NUMBER</p></div>
                <div className='flex gap-5  items-center'> <img className='size-10' src='facebook.png'/> <p className='font-bold '>FACEBOOK HANDLE</p></div>
              </div>
            </div> 
            
        </div>
       
    </div>
   
   <div className='w-full border p-8 bg-[#FFFFFF] border-pink-500 rounded-lg 'style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
   <h1 className='text-center font-bold text-2xl'>Contact with Us</h1>

   <div>
   <form
                        onSubmit={(e) => e.preventDefault()}
                        className="space-y-5"
                    >
                        <div>
                            <label className="font-medium" htmlFor='firstName'>
                                First Name
                            </label>
                            <input
                                id='firstName'
                                type="text"
                                required
                                className=" w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-pink-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium" htmlFor='firstName'>
                                Last Name
                            </label>
                            <input
                                id='lastName'
                                type="text"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-pink-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-pink-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Phone number
                            </label>
                            <div className="relative mt-2">
                                <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                                    <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                                        <option>US</option>
                                        <option>ES</option>
                                        <option>MR</option>
                                    </select>
                                </div>
                                <input
                                    type="number"
                                    placeholder="+1 (555) 000-000"
                                    required
                                    className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-pink-600 shadow-sm rounded-lg"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="font-medium">
                                Message
                            </label>
                            <textarea required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-pink-600 shadow-sm rounded-lg"></textarea>
                        </div>
                        <button
                            className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
                        >
                            Submit
                        </button>
                    </form>
   </div>
   </div>
     


</div>
<div className='p-6'>
<Faq/>
</div>


    </div>
  )
}

export default Contact