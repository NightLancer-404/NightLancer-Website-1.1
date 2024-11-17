import { ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleScroll = () => {
        if (window.scrollY >= 100) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        visible && (
            <div
                className='bg-black border border-white flex justify-center items-center rounded-full h-10 w-10 m-[1.5px] cursor-pointer z-50 fixed bottom-10 right-3'
                onClick={scrollToTop}
            >
                <ChevronUp className='h-6 w-6 text-white animate-pulse' />
            </div>
        )
    );
};

export default ScrollToTopButton;
