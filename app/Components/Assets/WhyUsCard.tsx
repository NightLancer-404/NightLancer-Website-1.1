interface WhyUsCardProps {
    name: string,
    desc: string,
    src: string
}

const WhyUsCard = ({ name, desc, src }: WhyUsCardProps) => {
    return (
        <div className='col-span-1 rounded-2xl p-6 bg-[#00000080] bg-opacity-65 backdrop-blur-[15px]'>
            <div className='grid grid-cols-7 gap-8 max-[991px]:grid-cols-1 max-md:grid-cols-7 max-[522px]:grid-cols-1'>
                <div className='col-span-2 max-[991px]:col-span-1 max-md:col-span-2 max-[522px]:col-span-1 flex items-center justify-center w-[100%]'>
                    <img src={src} alt="Loading..." className='h-[6rem] w-[6rem]' />
                </div>
                <div className='col-span-5 max-[991px]:col-span-1 max-md:col-span-5 max-md:text-left max-[522px]:col-span-1 max-[991px]:text-center max-[522px]:text-center text-left flex flex-col gap-4'>
                    <h4 className='why_choose_us_h4'>{name}</h4>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default WhyUsCard