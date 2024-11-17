import Headings from '../Assets/Headings'
import ServicesCard1, { ServicesCard2 } from '../Assets/ServicesCard'

const Services = () => {
    return (
        <div className='services' id='services'>
            <div className='flex flex-col gap-16'>
                <Headings
                    heading='Our Services'
                    subHeading='What are we doing ?'
                    description='Explore our services and elevate your projects to excellence.'
                />
                <ServicesCard1
                    name='UI/UX Design'
                    desc='Improve your skills faster with hands-on projects. Advance your career with complete confidence.'
                    img='/Images/Our-services/Uiux.png'
                    icon='/Images/Our-services/uiux_icon.webp'
                />
                <ServicesCard2
                    name='Website Design'
                    desc='We create beautiful, user-friendly websites that captivate and responsive.'
                    img='/Images/Our-services/Website.png'
                    icon='/Images/Our-services/website_icon.webp'
                />
                <ServicesCard1
                    name='Rest APIs'
                    desc='We create robust, scalable APIs that seamlessly integrate with your applications.'
                    img='/Images/Our-services/Rest-api.png'
                    icon='/Images/Our-services/api_icon.webp'
                />
                <ServicesCard2
                    name='Logo Design'
                    desc={`Our designs are crafted to visually represent your brand's identity and values effectively.`}
                    img='/Images/Our-services/Logo.png'
                    icon='/Images/Our-services/logo_icon.webp'
                />
            </div>
        </div>
    )
}

export default Services