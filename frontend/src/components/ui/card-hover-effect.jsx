import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
    items,
    className,
}) => {
    return (
        <div
            className={`grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 py-10 ${className}`}
        >
            {items.map((item, idx) => (
                <div
                    key={item?.link || idx}
                    className="relative group block p-2 h-full w-full"
                >
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
            className={`h-full w-full overflow-visible relative z-20 transition-all duration-500 ${className}`}
        >
            <div className="relative z-50 h-full">
                <div className="h-full">{children}</div>
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
