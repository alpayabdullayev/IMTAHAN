import React from 'react'
import SectionTitle from '../sectionTitle'
import { FaComment } from "react-icons/fa";

const RecentBlog = () => {
  return (
    <section className='py-20'>
        <div className='wrapper'>
            <SectionTitle/>

            <div className='py-10'>
                <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10 items-center'>
                <div className='flex group shadow-md flex-col gap-3 '>
                        <div className=' overflow-hidden '>
                            <img src="https://preview.colorlib.com/theme/tasty/images/image_1.jpg" className='group-hover:scale-105  duration-500' alt="" />
                        </div>
                        <div className='flex flex-col gap-3 px-4 '>
                            <p className='text-gray-600'>
                                July 7, 2018 Admin
                            </p>
                            <h4 className='w-8/12 font-bold  hover:text-yellow-500 duration-300'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </h4>
                            <div className='flex justify-between items-center py-2'>
                               <div>
                               <button>Read More</button>
                               </div>
                               <p className='flex items-center  gap-2'><span className='text-yellow-700'><FaComment /></span> 3 </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex group shadow-md flex-col gap-3 '>
                        <div className=' overflow-hidden relative'>
                            <img src="https://preview.colorlib.com/theme/tasty/images/image_6.jpg" className='group-hover:scale-105 duration-500' alt="" />
                        </div>
                        <div className='flex flex-col gap-3 px-4 '>
                            <p className='text-gray-600'>
                                July 7, 2018 Admin
                            </p>
                            <h4 className='w-8/12 font-bold  hover:text-yellow-500 duration-300'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </h4>
                            <div className='flex justify-between items-center py-2'>
                               <div>
                               <button>Read More</button>
                               </div>
                               <p className='flex items-center  gap-2'><span className='text-yellow-700'><FaComment /></span> 3 </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex group shadow-md flex-col gap-3 '>
                        <div className=' overflow-hidden relative'>
                            <img src="https://preview.colorlib.com/theme/tasty/images/image_3.jpg" className='group-hover:scale-105 duration-500' alt="" />
                        </div>
                        <div className='flex flex-col gap-3 px-4 '>
                            <p className='text-gray-600'>
                                July 7, 2018 Admin
                            </p>
                            <h4 className='w-8/12 font-bold  hover:text-yellow-500 duration-300'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </h4>
                            <div className='flex justify-between items-center py-2'>
                               <div>
                               <button>Read More</button>
                               </div>
                               <p className='flex items-center  gap-2'><span className='text-yellow-700'><FaComment /></span> 3 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default RecentBlog