import Headings from '../Assets/Headings'
import QnA from '../Assets/QnA'
import { QnAData } from '../../Data/faqData'

const FAQ = () => {
    return (
        <div className='faq relative'>
            <div className='flex flex-col gap-16'>
                <Headings
                    heading='Frequently Asked Questions'
                    subHeading='Need Help ?'
                    description='Quick solutions to common inquiries for better experience.'
                />
                <div className='flex flex-col items-center z-20'>
                    <div className='w-[80%] max-md:w-[100%] flex flex-col gap-4'>
                        {
                            QnAData.map((qna, index) => (
                                <QnA
                                    key={index}
                                    question={qna.question}
                                    answer={qna.answer}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className='absolute right-[0%] top-[10%]'>
                <svg width="250" height="577" viewBox="0 0 250 577" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_383_51)">
                        <path d="M223.996 51.515C293.029 52.1274 352.015 261.261 351.236 349.101C350.456 436.942 194.139 647.721 176.996 431.515C186.447 222.116 50.7167 330.857 51.4961 243.016C52.2754 155.175 154.963 50.9025 223.996 51.515Z" fill="url(#paint0_linear_383_51)" />
                    </g>
                    <defs>
                        <filter id="filter0_f_383_51" x="0.492737" y="0.512695" width="401.751" height="576.412" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="25.5" result="effect1_foregroundBlur_383_51" />
                        </filter>
                        <linearGradient id="paint0_linear_383_51" x1="351.243" y1="348.353" x2="101.242" y2="347.062" gradientUnits="userSpaceOnUse">
                            <stop offset="0.311" stopColor="#0F0E20" stopOpacity="0" />
                            <stop offset="0.946" stopColor="#6100FF" stopOpacity="0.3" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className='absolute left-[0%] bottom-[20%]'>
                <svg width="208" height="475" viewBox="0 0 308 775" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_1319_106)">
                        <path d="M91.0001 723.749C21.9757 724.991 -44.1662 430.617 -46.4033 306.193C-48.6404 181.769 100.373 -121.511 124.932 184.157C159.5 351.5 197.118 380.383 256.851 447.277C259.088 571.701 160.025 722.508 91.0001 723.749Z" fill="url(#paint0_linear_1319_106)" />
                    </g>
                    <defs>
                        <filter id="filter0_f_1319_106" x="-97.4282" y="0.945312" width="405.316" height="773.808" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="25.5" result="effect1_foregroundBlur_1319_106" />
                        </filter>
                        <linearGradient id="paint0_linear_1319_106" x1="-108.024" y1="350.915" x2="141.928" y2="345.766" gradientUnits="userSpaceOnUse">
                            <stop offset="0.311" stopColor="#0F0E20" stopOpacity="0" />
                            <stop offset="0.946" stopColor="#6100FF" stopOpacity="0.3" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div >
    )
}

export default FAQ