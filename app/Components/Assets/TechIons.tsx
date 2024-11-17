const TechIons = () => {
    const techIcons = [
        { src: "/Images/Hero/tech-icon-1.webp", alt: "Tailwind" },
        { src: "/Images/Hero/tech-icon-2.webp", alt: "Remix" },
        { src: "/Images/Hero/tech-icon-3.webp", alt: "React" },
        { src: "/Images/Hero/tech-icon-4.webp", alt: "Node" },
        { src: "/Images/Hero/tech-icon-7.webp", alt: "Express" },
        { src: "/Images/Hero/tech-icon-6.webp", alt: "Mongo" },
        { src: "/Images/Hero/tech-icon-5.webp", alt: "Next" },
    ];

    return (
        <div className='flex'>
            <div className='h-10 w-10 overflow-hidden rounded-full border-[1.5px] border-[#0D0D0D]'>
                <img src="/Images/Hero/Typescript.webp" alt="Typescript" />
            </div>
            {
                techIcons.map((icon, index) => (
                    <div className='h-10 w-10 overflow-hidden rounded-full border-[2px] border-[#0D0D0D] -ml-3' key={index}>
                        <img src={icon.src} alt={icon.alt} />
                    </div>
                ))
            }
        </div>
    )
}

export default TechIons