interface MypeCardProp {
    name: string,
    color: string,
    icon: string
    points: string[]
}

const MypeCard = ({ name, color, icon, points }: MypeCardProp) => {
    return (
        <div className='col-span-1 rounded-2xl p-8 bg-[#201E39] bg-opacity-60 backdrop-blur-[15px] z-20'>
            <div className='rounded-full bg-[#00000080] bg-opacity-65 backdrop-blur-[15px] p-3 mb-8 text-center'>
                <h3 className={`mype_card_title ${color}`}>{name}</h3>
            </div>
            <div className='flex flex-col gap-6'>
                {
                    points.map((point, index) => (
                        <div className='flex items-center gap-3' key={index}>
                            <img src={`/Images/Make-your-project-easier/${icon}`} alt="Icon" className='h-6 w-6 mb-1' />
                            <p className={`text-[#fafafa]`}>{point}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MypeCard