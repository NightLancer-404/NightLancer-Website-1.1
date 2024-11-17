'use client'
import React from 'react'
import Headings from '../Assets/Headings'
import ImageCarousel from '../Assets/ImageCarousel'

const AboutUs = () => {
    return (
        <>
            <div className='px-[6.5rem] py-[4.5rem] max-[1200px]:px-[4rem] max-[991px]:px-[2.5rem] max-sm:px-6 relative' id='aboutus'>
                <div className='flex flex-col gap-12'>
                    <Headings
                        heading='About NightLancer'
                        subHeading='Who we are?'
                        description=''
                    />
                    <div className='grid grid-cols-2 gap-12 max-md:grid-cols-1'>
                        <div className='col-span-1 flex flex-col gap-12 justify-center'>
                            <p className='text-zinc-100'>At NightLancer, our aim is to transform your digital dreams into reality by providing top-notch web design at a reasonable price with customizable plans. We build robust, high-performing websites with stunning UI/UX and custom 3D elements. Put your faith in us to realize your digital vision.</p>
                            <div className='flex gap-12'>
                                <div>
                                    <h1 className='font-extrabold text-5xl text-white max-sm:text-[2.5rem]'>1.5+</h1>
                                    <p className='text-zinc-100 text-[.85rem]'>Experience More Than 1.5 years.</p>
                                </div>
                                <div>
                                    <h1 className='font-extrabold text-5xl text-white max-sm:text-[2.5rem]'>2x</h1>
                                    <p className='text-zinc-100 text-[.85rem]'>We claim that we are 2 times faster, more effective and perform better than others.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-1'>
                            <img src="/Images/About-us/About.webp" alt="Loading.." className='w-[100%]' />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-[#fafafa] text-center mb-6'>Let's take a look at our previous projects…</p>
                <ImageCarousel />
            </div>
        </>
    )
}

export default AboutUs