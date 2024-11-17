'use client'
import React, { useState } from 'react'
import { Button } from '../Assets/Button'
import { Loader2, MoveRight } from 'lucide-react'
import { Link } from '@remix-run/react'

const LetsStarted = () => {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <div className='lets_started relative'>
            <div className='lets_started_headings'>
                <h6 className='sub_heading'>Ready, Set, Go!</h6>
                <h1 className='hero_title'>Let's Get Started</h1>
                <p className='description text-[#fafafa]'>be a part of an exciting journey toward innovation and success. Together, we can achieve great things!</p>
            </div>
            <Link to={'https://wa.me/918328837701'} target='_blank'>
                <Button
                    containerClassName="rounded-full"
                    as="button"
                    className="px-6"
                    gradientColor={`#952CA1`}
                >
                    <span className='flex  justify-center items-center gap-2'>
                        Connect on whatsapp
                        {
                            isLoading ?
                                <Loader2 className='h-6 w-6 animate-spin' />
                                : <MoveRight className='h-6 w-6' />
                        }
                    </span>
                </Button>
            </Link>

            <div className='absolute -top-28 right-[0%] max-sm:w-[100%] opacity-80'>
                <svg className='max-sm:w-[100%]' width="517" height="569" viewBox="0 0 517 569" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="478.75" cy="125.748" r="125" transform="rotate(37 478.75 125.748)" fill="url(#paint0_linear_0_1)" />
                    <circle cx="203.057" cy="443.048" r="125" transform="rotate(-173 203.057 443.048)" fill="url(#paint1_linear_0_1)" />
                    <circle cx="204.724" cy="253.731" r="125" transform="rotate(-139 204.724 253.731)" fill="url(#paint2_linear_0_1)" />
                    <circle cx="370" cy="175.003" r="75" transform="rotate(22 370 175.003)" fill="url(#paint3_linear_0_1)" />
                    <circle cx="75.3427" cy="365.343" r="75" transform="rotate(-113 75.3427 365.343)" fill="url(#paint4_linear_0_1)" />
                    <circle cx="338.129" cy="363.13" r="75" transform="rotate(117 338.129 363.13)" fill="url(#paint5_linear_0_1)" />
                    <defs>
                        <linearGradient id="paint0_linear_0_1" x1="479.339" y1="250.748" x2="478.16" y2="0.74771" gradientUnits="userSpaceOnUse">
                            <stop offset="0.311" stopColor="#0F0E20" stopOpacity="0" />
                            <stop offset="0.946" stopColor="#D9D9D9" stopOpacity="0.3" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_0_1" x1="203.646" y1="568.048" x2="202.467" y2="318.048" gradientUnits="userSpaceOnUse">
                            <stop offset="0.311" stopColor="#0F0E20" stopOpacity="0" />
                            <stop offset="0.946" stopColor="#D9D9D9" stopOpacity="0.3" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_0_1" x1="205.313" y1="378.731" x2="204.135" y2="128.731" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#6100FF" stopOpacity="0" />
                            <stop offset="0.946" stopColor="#952CA1" stopOpacity="0.3" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_0_1" x1="370.354" y1="250.003" x2="369.646" y2="100.003" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#0F0E20" stopOpacity="0" />
                            <stop offset="0.946" stopColor="#D9D9D9" stopOpacity="0.3" />
                        </linearGradient>
                        <linearGradient id="paint4_linear_0_1" x1="75.6963" y1="440.343" x2="74.9891" y2="290.343" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#0F0E20" stopOpacity="0" />
                            <stop offset="0.946" stopColor="#D9D9D9" stopOpacity="0.3" />
                        </linearGradient>
                        <linearGradient id="paint5_linear_0_1" x1="338.482" y1="438.13" x2="337.775" y2="288.13" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#0F0E20" stopOpacity="0" />
                            <stop offset="0.946" stopColor="#D9D9D9" stopOpacity="0.3" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    )
}

export default LetsStarted