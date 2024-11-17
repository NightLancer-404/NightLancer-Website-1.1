import Headings from '../Assets/Headings'
import MypeCard from '../Assets/MypeCard'

const MYPE = () => {
    return (
        <div className='mype relative'>
            <div className='flex flex-col gap-16'>
                <Headings
                    heading='Making Your project easier'
                    subHeading='How easier?'
                    description='Addressing Your Challenges: Our Solutions to Make Your Life Easier.'
                />
                <div className='grid grid-cols-2 gap-8 max-md:grid-cols-1'>
                    <MypeCard
                        name='The problems you are facing'
                        color='text-[#FF0000]'
                        icon='wrong-mark.svg'
                        points={['Struggling with  web design and unexpected expenses.', 'feeling disconnected from the design process.', 'Concerns reliability, data privacy, and unclear contracts.', 'Poor mobile performance and slow loading websites.']}
                    />
                    <MypeCard
                        name='The Solutions we propose'
                        color='text-[#70FF00]'
                        icon='check-mark.svg'
                        points={['Affordable rates, clear pricing, and flexible payments.', 'Direct updates and focused vision.', 'Clear contracts, proven track record, and full transparency.', 'Fast, responsive design across all devices.']}
                    />
                </div>
            </div>
            <div className='absolute left-[0%] -bottom-[10%] z-[1] overflow-hidden max-sm:w-[100%]'>
                <svg width="357" height="593" viewBox="0 0 357 593" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_355_88)">
                        <path d="M177.057 261.67C275.102 292.688 107.771 505.165 -1.6035 424.517C-81.022 424.517 -182.007 426.068 -106.185 311.817C-106.185 239.581 14.8445 150.521 94.263 150.521C94.263 150.521 102.604 301.477 177.057 261.67Z" fill="#6100FF" />
                    </g>
                    <defs>
                        <filter id="filter0_f_355_88" x="-283" y="0.520508" width="639.713" height="592.143" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_355_88" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className='absolute left-[50%] top-[50%] translate-x-[-70%] translate-y-[-20%] z-10 overflow-hidden '>
                <svg width="415" height="441" viewBox="0 0 415 441" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_355_86)">
                        <ellipse cx="207.424" cy="220.528" rx="57.0842" ry="70.3084" fill="#6100FF" />
                    </g>
                    <defs>
                        <filter id="filter0_f_355_86" x="0.340027" y="0.219727" width="414.168" height="440.617" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_355_86" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className='absolute top-0 right-[0%] z-[5] overflow-hidden'>
                <svg width="427" height="755" viewBox="0 0 427 755" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_382_49)">
                        <path d="M159.069 243.582L173.642 218.271L194.761 190.263L223.516 161.375L262.151 153.305L299.567 150.731L330.42 164.248L348.063 176.76L372.14 223.605L440.714 251.151L460.258 266.641L485.495 290.419L509.014 335.622L514.957 386.21L503.91 431.136L493.793 469.254L475.104 500.31L445.94 535.639L420.862 563.595L386.995 587.086L342.469 604.759L307.89 603.83L273.372 591.84L247.535 578.458L226.224 553.005L206.787 514.573L199.968 473.722L209.005 434.273L217.941 389.291L191.33 362.548L160.48 320.401L150.002 281.403L159.069 243.582Z" fill="#6100FF" />
                    </g>
                    <defs>
                        <filter id="filter0_f_382_49" x="0.00164795" y="0.731445" width="664.955" height="754.027" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_382_49" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    )
}

export default MYPE