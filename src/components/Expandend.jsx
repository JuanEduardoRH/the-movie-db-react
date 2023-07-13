import { motion } from "framer-motion";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export const Expanded = ({ children, initial, animate }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const arrowClassName = 'duration-300 bg-primary-400 hover:bg-primary-600 w-16 rounded-full';

    return (
        <div className="relative">
            <motion.div
                className={`${isExpanded ? '' : 'after:bg-gradient-to-t after:from-primary after:absolute after:w-full after:left-0 after:bottom-0 after:h-36'} overflow-hidden`}
                initial={initial}
                animate={!isExpanded ? {} : {
                    ...animate,
                    height: isExpanded ? animate.height : initial.height,
                }}
                transition={{
                    ease: 'easeInOut'
                }}
                children={children}
            />
            <div onClick={() => setIsExpanded(!isExpanded)} className="absolute bg-transparent top-[calc(100%_+_10px)] w-full flex justify-center text-white cursor-pointer">
                {isExpanded ? <MdKeyboardArrowUp className={arrowClassName} size={25} /> : <MdKeyboardArrowDown className={arrowClassName} size={25} />}
            </div>
        </div>
    )
}
