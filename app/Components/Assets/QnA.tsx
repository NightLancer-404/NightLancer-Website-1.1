import { Plus } from 'lucide-react'
import React, { useState } from 'react'
import toast from 'react-hot-toast';


interface QnAProps {
    question: string,
    answer: string,
}

const notify = () => {
    const toastId = toast.loading('Waiting...', {
        style: {
            borderRadius: '50px',
            border: '1px solid #fff',
            background: '#121212',
            color: '#fff',
        }
    });

    setTimeout(() => {
        toast.success('Your feedback has been received!', {
            id: toastId,
            style: {
                borderRadius: '50px',
                border: '1px solid #fff',
                background: '#121212',
                color: '#fff',
            }
        });

        setTimeout(() => {
            toast.success('Thanks for your feedback!', {
                id: toastId,
            });
        }, 1000);

    }, 500);
};


const QnA = ({ question, answer }: QnAProps) => {
    const [active, setActive] = useState(false)

    return (
        <div className='faq_card_border'>
            <div className='faq_card'>
                <div className='flex justify-between items-center gap-4 cursor-pointer' onClick={() => setActive(!active)}>
                    <h6 className='faq_question'>{question}</h6>
                    <span className='h-8 w-8 text-[#fafafa] flex items-center justify-center'>
                        <Plus className={`transition-all duration-300 ease-in-out ${active ? 'rotate-45' : 'rotate-180'}`} />
                    </span>
                </div>
                <div className={`faq_ans_div ${active ? 'h-[100%]' : 'h-[0] overflow-hidden'}`}>
                    <p className='faq_answer'>{answer}</p>
                    <div className='faq_feedback rounded-full'>
                        <p>Was this content helpful?</p>
                        <div className='flex items-center gap-3'>
                            <span className='h-4 w-4 text-black cursor-pointer hover:scale-110 transition-all duration-100 ease-in-out' onClick={notify}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M2 8.99997H5V21H2C1.44772 21 1 20.5523 1 20V9.99997C1 9.44769 1.44772 8.99997 2 8.99997ZM7.29289 7.70708L13.6934 1.30661C13.8693 1.13066 14.1479 1.11087 14.3469 1.26016L15.1995 1.8996C15.6842 2.26312 15.9026 2.88253 15.7531 3.46966L14.5998 7.99997H21C22.1046 7.99997 23 8.8954 23 9.99997V12.1043C23 12.3656 22.9488 12.6243 22.8494 12.8658L19.755 20.3807C19.6007 20.7554 19.2355 21 18.8303 21H8C7.44772 21 7 20.5523 7 20V8.41419C7 8.14897 7.10536 7.89462 7.29289 7.70708Z"></path>
                                </svg>
                            </span>
                            <span className='h-4 w-4 text-black cursor-pointer hover:scale-110 transition-all duration-100 ease-in-out' onClick={notify}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M22 15H19V3H22C22.5523 3 23 3.44772 23 4V14C23 14.5523 22.5523 15 22 15ZM16.7071 16.2929L10.3066 22.6934C10.1307 22.8693 9.85214 22.8891 9.65308 22.7398L8.8005 22.1004C8.3158 21.7369 8.09739 21.1174 8.24686 20.5303L9.40017 16H3C1.89543 16 1 15.1046 1 14V11.8957C1 11.6344 1.05118 11.3757 1.15064 11.1342L4.24501 3.61925C4.3993 3.24455 4.76447 3 5.16969 3H16C16.5523 3 17 3.44772 17 4V15.5858C17 15.851 16.8946 16.1054 16.7071 16.2929Z"></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QnA