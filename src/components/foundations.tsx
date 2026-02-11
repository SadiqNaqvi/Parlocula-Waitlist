import { PropsWithChildren } from "react";
import { AppIcon } from "./Icons";
import { twMerge } from "tailwind-merge";

export const LogoIcon = ({ className }: { className?: string }) => (
    <AppIcon className={className} />
)

export const Input = ({ name, placeholder, max, min, disabled }: { name: string, max?: number, min?: number, placeholder?: string, disabled?: boolean }) => (
    <input
        name={name}
        maxLength={max}
        minLength={min}
        placeholder={placeholder}
        disabled={disabled}
        className="p-2 w-full border border-gray-500 border-opacity-50 rounded-md"
    />

)

type ChildrenWithClassName = PropsWithChildren<{ className?: string }>;

export const H3 = ({ children, className }: ChildrenWithClassName) => (
    <h3 className={twMerge("text-2xl sm:text-4xl text-center font-semibold", className)}>
        {children}
    </h3>
)

export const H4 = ({ children, className }: ChildrenWithClassName) => (
    <h4 className={twMerge("text-xl text-center font-semibold", className)}>
        {children}
    </h4>
)

export const H5 = ({ children, className }: ChildrenWithClassName) => (
    <h5 className={twMerge("font-semibold", className)}>{children}</h5>
)

export const Section = ({ children, className }: ChildrenWithClassName) => (
    <section>
        <div className={twMerge("max-w-2xl md:max-w-3xl mx-auto px-4", className)}>
            {children}
        </div>
    </section>
)

export const SubSection = ({ children, className }: ChildrenWithClassName) => (
    <div className={twMerge("w-fit mx-auto my-8", className)}> {children}</div >
)

export const UL = ({ children, className }: ChildrenWithClassName) => (
    <ul className={twMerge("my-4 w-fit mx-auto list-disc space-y-2 text-sm", className)}> {children}</ul>
)

export const Text = ({ children, ghost, strong, className }: ChildrenWithClassName & { ghost?: boolean, strong?: boolean }) => (
    <p className={twMerge("my-2 text-center", ghost ? "text-zinc-500 text-sm" : '', strong ? "font-semibold" : '', className)}>{children}</p>
)