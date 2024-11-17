import { ResponsiveHeroSection } from './ResponsiveHeroSection';
import { motion } from 'framer-motion';
import { cards } from '../../Data/heroCardData'

const HeroSection = () => {
    return (
        <>
            <div className='p-2'>
                <div className=' grid grid-cols-2 max-[991px]:hidden gap-12 flex-col items-center justify-center  w-[100%]'>
                    {cards.map((card, idx) => (
                        <motion.div
                            key={"card" + idx}
                            style={{
                                rotate: Math.random() * 30 - 10,
                            }}
                            className='col-span-1 space-y-1 w-40 h-40 p-2 bg-[#121212] rounded-lg'
                            whileHover={{
                                scale: 1.1,
                                rotate: 0,
                                zIndex: 100,
                            }}
                            whileTap={{
                                scale: 1.1,
                                rotate: 0,
                                zIndex: 100,
                            }}
                        >
                            <img src={card.imgSrc} alt="loading..." className='w-8' />
                            <h1 className={`${idx % 2 === 0 ? `text-gradient-animation1` : `text-gradient-animation2`} text-base hero_subh1`}>{card.title}</h1>
                            <p className='text-xs text-white'>{card.description}</p>
                        </motion.div>
                    ))}
                </div>


                <div className='min-[991px]:hidden flex-col items-center justify-center'>
                    <ResponsiveHeroSection />
                </div>
            </div>
        </>
    );
};

export default HeroSection;
