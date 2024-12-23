import React, { useEffect, useState } from 'react'
import Title from '../components/Title'

const Contact = () => {

    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(()=>{
      setIsVisible(true);
    },[])

  return (
    <div className={`p-6 flex-col text-center font-sans transition-opacity ease-in duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Title: Contact Us */}
      <div className="text-center text-2xl mb-8">
        <Title text1="CONTACT" text2="US" />
      </div>

      {/* Contact Information Description */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <p className="text-gray-400 leading-relaxed">
          If you have any questions or need assistance, feel free to reach out to us. We're here to help and will get
          back to you as soon as possible. Below are our contact details:
        </p>
      </div>

      {/* Contact Details Section */}
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Address */}
        <div className="bg-black bg-opacity-25 p-6 border border-gray-300 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-200 mb-4">Our Address</h3>
          <p className="text-gray-400">
            1234 E-Commerce Street, <br />
            Shopping City, SC 56789
          </p>
        </div>

        {/* Phone Number */}
        <div className="bg-black bg-opacity-25  p-6 border border-gray-300 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-200 mb-4">Phone Number</h3>
          <p className="text-gray-400">+1 (123) 456-7890</p>
        </div>

        {/* Email */}
        <div className="bg-black bg-opacity-25  p-6 border border-gray-300 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-200 mb-4">Email</h3>
          <p className="text-gray-400">support@ourwebsite.com</p>
        </div>

        {/* Social Media */}
        <div className="bg-black bg-opacity-25  p-6 border border-gray-300 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-200 mb-4">Follow Us</h3>
          <p className="text-gray-400">Find us on our social media channels:</p>
          <div className="flex space-x-4 mt-3 justify-center">
            <a className="text-blue-300 hover:text-white cursor-pointer transition-all duration-300">
              Facebook
            </a>
            <a className="text-blue-300 hover:text-white cursor-pointer transition-all duration-300">
              Twitter
            </a>
            <a className="text-blue-300 hover:text-white cursor-pointer transition-all duration-300">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <button className='border border-white px-8 py-4 my-10 text-sm hover:bg-black transition-all duration-500'>Explore More</button>
    </div>
  )
}

export default Contact
