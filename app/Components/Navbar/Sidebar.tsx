'use client'
import { Link } from '@remix-run/react'
import { SquareX } from 'lucide-react'

const Sidebar = ({ active, setActive }: any) => {
    return (
        <div className={`small_screen_navbar ${active ? 'w-[350px] max-[350px]:w-[100%]' : 'w-[0]'}`}>
            <div className='flex flex-col justify-center py-10 gap-8'>
                <div className='flex justify-between items-center w-[100%] px-6'>
                    <Link to={'/'}>
                        <img src="/Images/Logos/Nightlancer-Logo.png" alt="LOGO" className='w-16' />
                    </Link>
                    <SquareX className='small_screen_cross' onClick={() => setActive(false)} />
                </div>
                <div className='nav_items_sidebar'>
                    <Link to={'#home'} className='group nav_item_sidebar' onClick={() => setActive(false)}>
                        <span className='group-hover:opacity-60 flex justify-between items-center'>Home <img src="/Images/Navbar/home.png" alt="Home" className='h-4 w-4' /></span>
                    </Link>
                    <Link to={'#whyus'} className='group nav_item_sidebar' onClick={() => setActive(false)}>
                        <span className='group-hover:opacity-60 flex justify-between items-center'>Why Us <img src="/Images/Navbar/whyus.png" alt="Why Us" className='h-4 w-4' /></span>
                    </Link>
                    <Link to={'#aboutus'} className='group nav_item_sidebar' onClick={() => setActive(false)}>
                        <span className='group-hover:opacity-60 flex justify-between items-center'>About <img src="/Images/Navbar/About.png" alt="About Us" className='h-4 w-4' /></span>
                    </Link>
                    <Link to={'#services'} className='group nav_item_sidebar' onClick={() => setActive(false)}>
                        <span className='group-hover:opacity-60 flex justify-between items-center'>Services <img src="/Images/Navbar/services.png" alt="Our Services" className='h-4 w-4' /></span>
                    </Link>
                    <Link to={'#roadmap'} className='group nav_item_sidebar' onClick={() => setActive(false)}>
                        <span className='group-hover:opacity-60 flex justify-between items-center'>Roadmap <img src="/Images/Navbar/roadmap.png" alt="Roadmap" className='h-4 w-4' /></span>
                    </Link>
                    <a href={'/Assets/Nightlancer_brochure.pdf'} download="NightLancer_Brochure.pdf" className='group nav_item_sidebar' onClick={() => setActive(false)}>
                        <span className='group-hover:opacity-60 flex justify-between items-center'>Download Brochure <img src="/Images/Navbar/download.png" alt="Download Brochure" className='h-4 w-4' /></span>
                    </a>
                    <Link to={'https://wa.me/918328837701'} target='_blank' className='group px-6 py-[.65rem]' onClick={() => setActive(false)}>
                        <span className='group-hover:opacity-60 flex justify-between items-center'>Contact Us <img src="/Images/Navbar/whatsapp-2.png" alt="Contact Us" className='h-4 w-4' /></span>
                    </Link>
                </div>
                <div className='flex justify-center gap-6'>
                    <Link to={'https://www.instagram.com/nightlancet_404/profilecard/?igsh=MWthOWFpMjJ5c3ZubA=='} target='_blank'>
                        <img src="/Images/Navbar/instagram.png" alt="Instagram" className='h-8 w-8' />
                    </Link>
                    <Link to={'https://www.youtube.com/@NightLancer-404'} target='_blank'>
                        <img src="/Images/Navbar/youtube.png" alt="Youtube" className='h-8 w-8' />
                    </Link>
                    <Link to={'https://www.facebook.com/profile.php?id=61566937717871&mibextid=ZbWKwL'} target='_blank'>
                        <img src="/Images/Navbar/facebook.png" alt="Facebook" className='h-8 w-8' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar