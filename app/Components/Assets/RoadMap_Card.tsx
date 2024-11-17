"use client";
import React, {
    useEffect,
    useRef,
    useState,
    createContext,
    useContext,
} from "react";
import { cn } from "~/Lib/utils";
import { motion } from "framer-motion";
import { MoveLeft, MoveRight } from "lucide-react";

interface CarouselProps {
    items: JSX.Element[];
    initialScroll?: number;
}

type Card = {
    phase: string;
    title: string;
    percentage: string;
    description: string;
    points: string[];
};


export const CarouselContext = createContext<{
    onCardClose: (index: number) => void;
    currentIndex: number;
}>({
    onCardClose: () => { },
    currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
    const carouselRef = React.useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = React.useState(false);
    const [canScrollRight, setCanScrollRight] = React.useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = initialScroll;
            checkScrollability();
        }
    }, [initialScroll]);

    const checkScrollability = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    const handleCardClose = (index: number) => {
        if (carouselRef.current) {
            const cardWidth = isMobile() ? 230 : 384;
            const gap = isMobile() ? 4 : 8;
            const scrollPosition = (cardWidth + gap) * (index + 1);
            carouselRef.current.scrollTo({
                left: scrollPosition,
                behavior: "smooth",
            });
            setCurrentIndex(index);
        }
    };

    const isMobile = () => {
        return window && window.innerWidth < 768;
    };

    return (
        <CarouselContext.Provider
            value={{ onCardClose: handleCardClose, currentIndex }}
        >
            <div className="relative w-full">
                <div
                    className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none]"
                    ref={carouselRef}
                    onScroll={checkScrollability}
                >
                    <div
                        className={cn(
                            "absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l"
                        )}
                    ></div>

                    <div
                        className={cn(
                            "flex flex-row justify-start gap-4 pl-4 py-4",
                            "max-w-7xl mx-auto"
                        )}
                    >
                        {items.map((item, index) => (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.5,
                                        delay: 0.2 * index,
                                        ease: "easeOut",
                                        once: true,
                                    },
                                }}
                                key={"card" + index}
                                className="last:pr-[5%] md:last:pr-[33%]  rounded-3xl"
                            >
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-end gap-6 mt-5">
                    <button
                        className="relative z-0 h-10 w-10 rounded-full roadmap_card_bg flex items-center justify-center disabled:opacity-50"
                        onClick={scrollLeft}
                        disabled={!canScrollLeft}
                    >
                        <MoveLeft className="h-6 w-6 text-white" />
                    </button>
                    <button
                        className="relative z-0 h-10 w-10 rounded-full roadmap_card_bg flex items-center justify-center disabled:opacity-50"
                        onClick={scrollRight}
                        disabled={!canScrollRight}
                    >
                        <MoveRight className="h-6 w-6 text-white" />
                    </button>
                </div>
            </div>
        </CarouselContext.Provider>
    );
};

export const Card = ({
    card,
    index,
    layout = false,
}: {
    card: Card;
    index: number;
    layout?: boolean;
}) => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const { onCardClose, currentIndex } = useContext(CarouselContext);

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                handleClose();
            }
        }

        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [open]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        onCardClose(index);
    };

    return (
        <>

            <motion.button
                layoutId={layout ? `card-${card.title}` : undefined}
                className=" w-[20rem] roadmap-card-gradient-border"
            >
                <div className="flex items-center justify-between">
                    <motion.p
                        layoutId={layout ? `phase-${card.phase}` : undefined}
                        className="uppercase roadmap_card_bg1 font-bold text-base"
                    >
                        {card.phase}
                    </motion.p>
                    <motion.p
                        layoutId={layout ? `percentage-${card.percentage}` : undefined}
                        className="p-2 text-white font-semibold text-base rounded-full roadmap_card_bg text-center w-12 h-12 flex items-center justify-center leading-none"
                    >
                        {card.percentage}
                    </motion.p>
                </div>
                <motion.p
                    layoutId={layout ? `title-${card.title}` : undefined}
                    className="capitalize roadmap_card_title py-[1.625rem] text-white flex items-center justify-start"
                >
                    {card.title}
                </motion.p>
                <motion.p
                    layoutId={layout ? `description-${card.description}` : undefined}
                    className="text-base py-[.5rem] text-gray-500 text-left"
                >
                    {card.description}
                </motion.p>
                <hr className="w-16 py-4" />
                {card.phase === "Phase 01" && (
                    <div className="py-2 roadmap_card_bg border flex items-center justify-center rounded-full">
                        <MoveRight className="cursor-pointer animate-pulse" />
                    </div>
                )}
                <ul>
                    {card.points.map((point, i) => (
                        <li key={i} className="flex gap-2 items-center justify-start">
                            <h1 className="w-3 h-3 roadmap_card_bg rounded-full"></h1>
                            <p className="2xl:text-base text-sm text-white text-left">{point}</p>
                        </li>
                    ))}
                </ul>
            </motion.button>
        </>
    );
};