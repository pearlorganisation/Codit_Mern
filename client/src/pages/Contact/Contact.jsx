import React from 'react';
import { IoLocation } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import Faq from '../../components/Faq/Faq';

async function submitForm(data) {
  try {
    const res = await fetch('http://localhost:8000/api/v1/contact-us', {
      method: 'POST', // Ensure the correct HTTP method
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    
    return res.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

const Contact = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  async function contactSubmission(data) {
    try {
      data.phoneNumber = data.phoneNumber.replace(/\s+/g, '');
      console.log(data,"Contact form data")

      await submitForm(data);
      alert('Message sent successfully!');
    } catch (error) {
      alert('Failed to send message. Please try again.');
    }
  }

  return (
    <div>
      <div className='grid grid-cols-1 lg:grid-cols-[40%_auto] gap-8 p-16 poppins-semibold'>
        <div className='border border-pink-400 bg-[#FFFFFF] p-5 md:p-10 rounded-lg' style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
          <div>
            <h1 className='text-base md:text-xl text-center font-bold'>Contact us</h1>
            <div className='flex flex-col justify-center items-baseline gap-4 p-10'>
              <div className='flex gap-2'>
                <AiOutlineMail className='text-pink-700' size={30} />
                <span>info@example.com</span>
              </div>
              <div className='flex gap-2'>
                <FaPhoneAlt className='text-pink-700' size={20} />
                <span>001985512-854</span>
              </div>
              <div className='flex gap-2'>
                <IoLocation className='text-pink-700' size={30} />
                <span>John Smith 123 Main Street Amsterdam, NH 1000 Netherlands</span>
              </div>
            </div>
          </div>
          <div>
            <h1 className='text-xl text-center font-bold py-5'>Social Media</h1>
            <div className='flex flex-col justify-items-start gap-4 p-10'>
              <div className='flex items-center gap-5'>
                <img className='size-10' src='twitter.png' alt='Twitter' />
                <p className='font-bold'>TWITTER HANDLE</p>
              </div>
              <div className='flex gap-5 items-center'>
                <img className='size-10' src='instagram.png' alt='Instagram' />
                <p className='font-bold'>INSTAGRAM HANDLE</p>
              </div>
              <div className='flex gap-5 items-center'>
                <img className='size-10' src='whatsapp.png' alt='WhatsApp' />
                <p className='font-bold'>WHATSAPP NUMBER</p>
              </div>
              <div className='flex gap-5 items-center'>
                <img className='size-10' src='facebook.png' alt='Facebook' />
                <p className='font-bold'>FACEBOOK HANDLE</p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full border p-8 bg-[#FFFFFF] border-pink-500 rounded-lg' style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
          <h1 className='text-center font-bold text-2xl'>Contact with Us</h1>
          <form onSubmit={handleSubmit(contactSubmission)} className="space-y-5">
            <div>
              <label className="font-medium" htmlFor='firstName'>First Name</label>
              <input
                {...register('firstName', { required: 'First name is required', minLength: { value: 3, message: 'Min Length for first name is 3' }, maxLength: { value: 25, message: 'Max Length for first name is 25' } })}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-pink-600 shadow-sm rounded-lg"
              />
              {errors.firstName && <p className='text-red-500 text-sm'>{errors.firstName.message}</p>}
            </div>
            <div>
              <label className="font-medium" htmlFor='lastName'>Last Name</label>
              <input
                {...register('lastName', { required: 'Last name is required', minLength: { value: 3, message: 'Min Length for last name is 3' }, maxLength: { value: 25, message: 'Max Length for last name is 25' } })}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-pink-600 shadow-sm rounded-lg"
              />
              {errors.lastName && <p className='text-red-500 text-sm'>{errors.lastName.message}</p>}
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' } })}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-pink-600 shadow-sm rounded-lg"
              />
              {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
            </div>
            <div>
              <label className="font-medium">Phone Number</label>
              <input
                {...register('phoneNumber', { required: 'Phone number is required', maxLength: { value: 30, message: 'Phone number cannot be more than 30 digits' } })}
                className="w-full py-2 appearance-none bg-transparent outline-none border focus:border-pink-600 shadow-sm rounded-lg"
              />
              {errors.phoneNumber && <p className='text-red-500 text-sm'>{errors.phoneNumber.message}</p>}
            </div>
            <div>
              <label className="font-medium">Message</label>
              <textarea
                {...register('message', { required: 'Message is required' })}
                className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-pink-600 shadow-sm rounded-lg"
              ></textarea>
              {errors.message && <p className='text-red-500 text-sm'>{errors.message.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
      <div className='p-6'>
        <Faq />
      </div>
    </div>
  );
};

export default Contact;
