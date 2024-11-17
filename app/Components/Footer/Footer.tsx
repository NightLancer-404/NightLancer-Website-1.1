'use client'
import { Loader2, Mail } from 'lucide-react';
import React, { useState } from 'react'
import { Button } from '../Assets/Button';
import { Link } from '@remix-run/react';

const Footer = () => {
    const [isLoading, setIsLoading] = useState(false)
    const date = new Date();
    let year = date.getFullYear();

    return (
        <>
            <div className='footer'>
                <div className='flex flex-col gap-4 max-[480px]:items-center'>
                    <Link to={'/'}>
                        <img src="/Images/Logos/Landscape.png" alt="LOGO" className='h-[3.5rem]' />
                    </Link>
                    <div className='flex gap-4'>
                        <Link to={'https://www.facebook.com/profile.php?id=61566937717871&mibextid=ZbWKwL'} target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24" fill="#B7B4BB" className='transition-all duration-300 ease-in-out hover:fill-[#fff] cursor-pointer'>
                                <path d="M20 0a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h16zm-4 7.28V4.5h-2.29c-2.1 0-3.42 1.6-3.42 3.89v1.67H8v2.77h2.29v6.67h2.85v-6.67h2.29l.57-2.77h-2.86V8.94c0-1.1.58-1.66 1.72-1.66H16z" />
                            </svg>
                        </Link>
                        <Link to={'https://www.instagram.com/nightlancet_404/profilecard/?igsh=MWthOWFpMjJ5c3ZubA=='} target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24" fill="#B7B4BB" className='transition-all duration-300 ease-in-out hover:fill-[#fff] cursor-pointer'>
                                <path d="M20 0a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h16zm-4.89 4.5H8.9C6.33 4.5 4.6 6.15 4.5 8.66V15.09c0 1.3.42 2.41 1.27 3.23a4.34 4.34 0 0 0 2.88 1.17l.27.01h6.16c1.3 0 2.4-.42 3.18-1.18a4.25 4.25 0 0 0 1.23-2.95l.01-.26V8.9c0-1.28-.42-2.36-1.21-3.15a4.24 4.24 0 0 0-2.92-1.23l-.26-.01zm-6.2 1.4h6.24c.9 0 1.66.26 2.2.8.47.5.77 1.18.81 1.97V15.1c0 .94-.32 1.7-.87 2.21-.5.47-1.17.74-1.98.78H8.92c-.91 0-1.67-.26-2.21-.78-.5-.5-.77-1.17-.81-2V8.88c0-.9.26-1.66.8-2.2a2.98 2.98 0 0 1 2-.78h6.45-6.23zM12 8.1a3.88 3.88 0 0 0 0 7.74 3.88 3.88 0 0 0 0-7.74zm0 1.39a2.5 2.5 0 0 1 2.48 2.48A2.5 2.5 0 0 1 12 14.45a2.5 2.5 0 0 1-2.48-2.48A2.5 2.5 0 0 1 12 9.49zm4.02-2.36a.88.88 0 1 0 0 1.76.88.88 0 0 0 0-1.76z" />
                            </svg>
                        </Link>
                        <Link to={'https://www.linkedin.com/in/night-lancer-988831332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24" fill="#B7B4BB" className='transition-all duration-300 ease-in-out hover:fill-[#fff] cursor-pointer'>
                                <path d="M20 0a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h16zM8.95 9.4H6.16v8.1h2.8V9.4zm6.84-.19c-1.32 0-2 .63-2.38 1.16l-.13.18V9.4h-2.79l.01.49V17.5h2.78v-4.52a1.52 1.52 0 0 1 1.52-1.64c.96 0 1.37.66 1.41 1.66v4.5H19v-4.64c0-2.49-1.37-3.65-3.2-3.65zM7.58 5.5C6.62 5.5 6 6.1 6 6.9c0 .73.54 1.32 1.38 1.4h.18c.97 0 1.57-.62 1.57-1.4-.01-.8-.6-1.4-1.55-1.4z" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className='flex flex-col justify-end gap-4'>
                    <Link to={"mailto:nightlancer404@gmail.com?subject=Support%20Request&body=Hi,%20I%20need%20help%20with%20..."}>
                        <Button
                            containerClassName="rounded-full"
                            as="button"
                            className="px-6"
                            gradientColor={`#952CA1`}
                        >
                            <span className='flex  justify-center items-center gap-2'>
                                Email Us
                                {
                                    isLoading ?
                                        <Loader2 className='h-6 w-6 animate-spin' />
                                        : <Mail className='h-6 w-6' />
                                }
                            </span>
                        </Button>
                    </Link>
                </div>
            </div>
            <div className='bottom_footer_border'>
                <div className='bg-black py-4 flex justify-between max-md:flex-col max-md:items-center max-md:text-center max-md:gap-2 px-16 max-[991px]:px-10 max-sm:px-6'>
                    <div>
                        <p>@{year} NightLancer.all Right Reserved</p>
                    </div>
                    <div className='flex gap-12 z-20 max-[328px]:flex-col max-[328px]:gap-2'>
                        <Link to={'/'}><p className='hover:text-[#fafafa] cursor-pointer'>Privacy policy</p></Link>
                        <Link to={'/'}><p className='hover:text-[#fafafa] cursor-pointer'>Terms of service</p></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer