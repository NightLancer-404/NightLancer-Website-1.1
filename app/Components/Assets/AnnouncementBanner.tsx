'use client'
import { ArrowDownToLine, Loader2 } from 'lucide-react'
import React, { useState } from 'react'

const AnnouncementBanner = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const downloadBrochure = () => {
        setIsLoading(true);
        const link = document.createElement('a');
        link.href = '/Assets/Nightlancer_brochure.pdf';
        link.setAttribute('download', 'NightLancer_Brochure.pdf');
        document.body.appendChild(link);
        link.click();
        link.parentNode?.removeChild(link);
        setTimeout(() => setIsLoading(false), 1000);
    }

    return (
        <div className='announcement_banner'>
            <div className='flex items-center h-[100%] gap-3'>
                <p className='announcement_banner_text'>Crafting Your Digital Masterpiece. Download the Brochure Here.</p>
                <div onClick={downloadBrochure}>
                    {
                        isLoading ? <Loader2 className='h-4 w-4 animate-spin' /> :
                            <ArrowDownToLine className='h-4 w-4 cursor-pointer animate-bounce' />
                    }
                </div>
            </div>
        </div>
    )
}

export default AnnouncementBanner