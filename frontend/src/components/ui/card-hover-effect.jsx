import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
    items,
    className,
}) => {
    let [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div
            className={`grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10 ${className}`}
        >
            {items.map((item, idx) => (
                <div
                    key={item?.link || idx}
                    className="relative group  block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-[rgba(228,0,0,0.35)] block  rounded-3xl z-0 shadow-[0_0_50px_rgba(228,0,0,0.5)] pointer-events-none"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.3, ease: "easeInOut" },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.25, ease: "easeInOut", delay: 0.05 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card>
                        {item.children}
                    </Card>
                </div>
            ))}
        </div>
    );
};

export const Card = ({
    className,
    children,
}) => {
    return (
        <div
            className={`rounded-2xl h-full w-full p-4 overflow-hidden bg-[#0c0c0e] border border-[var(--st-border)] group-hover:border-[var(--st-red)] group-hover:shadow-[0_0_15px_rgba(228,0,0,0.1)] relative z-20 transition-all duration-500 ${className}`}
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};

export const CardTitle = ({
    className,
    children,
}) => {
    return (
        <h4 className={`text-white font-bold tracking-[0.15em] mt-4 font-[var(--st-font-classic)] text-xl text-center group-hover:text-[var(--st-red)] transition-colors duration-500 ${className}`}>
            {children}
        </h4>
    );
};

export const CardDescription = ({
    className,
    children,
}) => {
    return (
        <p
            className={`mt-4 text-zinc-500 tracking-wide leading-relaxed text-sm text-center ${className}`}
        >
            {children}
        </p>
    );
};
