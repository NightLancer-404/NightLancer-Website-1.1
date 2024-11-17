import Headings from '../Assets/Headings'
import WhyUsCard from '../Assets/WhyUsCard'
import { WhyUsCardData } from '../../Data/whyUsData'

const WhyUs = () => {

    return (
        <div className='px-[6.5rem] py-[4.5rem] max-[1200px]:px-[4rem] max-[991px]:px-[2.5rem] max-sm:px-6 relative' id='whyus'>
            <div className='flex flex-col gap-12'>
                <Headings
                    heading='Why Choose Us'
                    subHeading='The Nightlancer Advantage'
                    description='4 reasons to take your web design career to the next level with Nightlancer.'
                />
                <div className='grid grid-cols-2 gap-6 max-md:grid-cols-1'>
                    {
                        WhyUsCardData.map((card, index) => (
                            <WhyUsCard
                                name={card.name}
                                desc={card.desc}
                                src={card.src}
                                key={index}
                            />
                        ))
                    }
                </div>
            </div>
            <div className='absolute left-[70%] top-[17%] translate-x-[-30%] -z-10'>
                <svg width="116" height="116" viewBox="0 0 116 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_277_61)">
                        <ellipse cx="58.1591" cy="58.425" rx="22.5147" ry="22.4416" fill="#5D2E76" />
                    </g>
                    <defs>
                        <filter id="filter0_f_277_61" x="0.644409" y="0.983398" width="115.029" height="114.883" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="17.5" result="effect1_foregroundBlur_277_61" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className='absolute left-0 top-[50%] translate-y-[-30%] -z-10'>
                <svg width="268" height="497" viewBox="0 0 268 497" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_279_64)">
                        <path d="M117.134 232.952C117.134 295.486 71.4367 346.18 15.0668 346.18C-41.3031 346.18 -87 295.486 -87 232.952C-87 170.418 -41.3031 150.326 15.0668 150.326C107.627 150.326 117.134 170.418 117.134 232.952Z" fill="#5D2E76" />
                    </g>
                    <defs>
                        <filter id="filter0_f_279_64" x="-237" y="0.326172" width="504.134" height="495.854" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_279_64" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className='absolute right-0 bottom-0 -z-10'>
                <svg width="470" height="507" viewBox="0 0 470 507" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_328_55)">
                        <path d="M415.174 253.027C470.21 304.031 368.581 356.055 311.105 356.055C298.097 320.352 150 309.928 150 253.027C150 196.127 253.63 150 311.105 150C368.581 150 415.174 196.127 415.174 253.027Z" fill="#5D2E76" />
                    </g>
                    <defs>
                        <filter id="filter0_f_328_55" x="0" y="0" width="581.003" height="506.055" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_328_55" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    )
}

export default WhyUs