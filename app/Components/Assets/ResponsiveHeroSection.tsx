import { motion } from "framer-motion";
import { cards } from '../../Data/heroCardData'

export function ResponsiveHeroSection() {
    return (
        <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 gap-x-7 gap-y-9 w-full md:grid-cols-4 sm:grid-cols-2 min-[400px]:grid-cols-1 max-[991px]:px-[2.5rem] max-sm:px-6">
                {cards.map((card, idx) => (
                    <motion.div
                        key={"card" + idx}
                        style={{
                            rotate: Math.random() * 20 - 10,
                        }}
                        className='col-span-1 p-4 bg-[#121212] rounded-lg overflow-hidden flex flex-col items-center justify-center'
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
                        <p className='text-xs text-white text-center'>{card.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
