interface HeadingProps {
    heading: string,
    subHeading: string,
    description: string
}

const Headings = ({ heading, subHeading, description }: HeadingProps) => {
    return (
        <div className='flex flex-col items-center text-center gap-4 z-20'>
            <h6 className='sub_heading'>{subHeading}</h6>
            <h2 className='heading'>{heading}</h2>
            <p className='description'>{description}</p>
        </div>
    )
}

export default Headings