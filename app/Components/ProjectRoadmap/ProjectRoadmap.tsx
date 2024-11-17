import Headings from '../Assets/Headings'
import { Card, Carousel } from '../Assets/RoadMap_Card'
import { data } from '../../Data/roadMapData'

const ProjectRoadmap = () => {

    const cards = data.map((card, index) => (
        <Card key={card.phase} card={card} index={index} />
    ));
    return (
        <>
            <div className='Roadmap py-6 2xl:px-16 lg:px-14 md:px-12 sm:px-10 px-4' id='roadmap'>
                <div className='flex flex-col gap-16'>
                    <Headings
                        heading='Project Roadmap'
                        subHeading='Our Journey'
                        description='Outlined steps to achieve our goals and future vision.'
                    />
                    <Carousel items={cards} />
                </div>
            </div>
        </>
    )
}

export default ProjectRoadmap