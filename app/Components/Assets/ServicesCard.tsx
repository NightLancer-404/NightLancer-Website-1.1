interface ServicesCardProps {
    name: string,
    desc: string,
    icon: string,
    img: string
}

const ServicesCard1 = ({ name, desc, icon, img }: ServicesCardProps) => {
    return (
        <div className='flex justify-between items-center gap-16 max-md:gap-4 max-md:flex-col'>
            <div className='w-[40%] flex flex-col gap-4 items-start justify-center max-md:w-[60%] max-sm:w-[100%]'>
                <div className="card_icon-wrapper">
                    <img src={icon} alt="loading..." width="20" height="20" className="icon-1x1-small" />
                </div>
                <h3 className='service_card_title'>{name}</h3>
                <p className='service_card_desc'>{desc}</p>
            </div>
            <div className='w-[40%] flex justify-end items-center max-[895px]:w-[50%] max-md:w-[60%] max-sm:w-[80%]'>
                <img src={img} alt="Loading..." className='h-[20rem] w-[20rem] max-md:w-[100%] max-md:h-[100%]' />
            </div>
        </div>
    )
}

export default ServicesCard1

export const ServicesCard2 = ({ name, desc, icon, img }: ServicesCardProps) => {
    return (
        <div className='flex justify-between items-center gap-16 max-md:gap-4 max-md:flex-col-reverse'>
            <div className='w-[40%] flex justify-center items-center max-[895px]:w-[50%] max-md:w-[60%] max-sm:w-[100%]'>
                <img src={img} alt="Loading..." className='h-[20rem] w-[20rem] z-10' />
            </div>
            <div className='w-[40%] flex flex-col gap-4 items-start justify-center max-md:w-[60%] max-sm:w-[100%]'>
                <div className="card_icon-wrapper">
                    <img src={icon} alt="loading..." width="20" height="20" className="icon-1x1-small" />
                </div>
                <h3 className='service_card_title'>{name}</h3>
                <p className='service_card_desc'>{desc}</p>
            </div>
        </div>
    )
}