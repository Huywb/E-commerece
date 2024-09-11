import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../components/NewsLetter'

const Contact = () => {
  return (
    <div >

        <div className='text-center text-2xl pt-10 border-t'>
            <Title text1={"CONTACT"} text2={"US"}></Title>
        </div>

        <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
            <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
            <div className='flex flex-col justify-center items-start gap-6'>
                <p className='font-semibold text-xl text-gray-600'>Our Store</p>
                <p className='text-gray-500'>45754 United Station <br /> Suite 350, Washington</p>
                <p className='text-gray-500'>Tel : (145) 123 456 7778 <br />admin@frv.com</p>
                <p className='font-semibold text-xl text-gray-600'>Carrers at Forever</p>
                <p className='text-gray-500'>Learn more about our teams and jos openings</p>
                <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>
                  Explore Jobs
                </button>
            </div>
        </div>
        <NewsLetter></NewsLetter>
    </div>
  )
}

export default Contact