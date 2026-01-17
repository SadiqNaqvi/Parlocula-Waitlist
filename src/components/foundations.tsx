import { PropsWithChildren } from "react";
import { AppIcon } from "./Icons";

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

export const H3 = ({ children, className = '', skipCenter }: PropsWithChildren<{ className?: string, skipCenter?: boolean }>) => (
    <h3 className={`text-2xl sm:text-4xl ${skipCenter ? "" : "text-center"} font-semibold ` + className}>{children}</h3>
)

export const H4 = ({ children, className = '', skipCenter }: PropsWithChildren<{ className?: string, skipCenter?: boolean }>) => (
    <h4 className={`text-xl ${skipCenter ? "" : "text-center"} font-semibold ` + className}>{children}</h4>
)

export const H5 = ({ children, className = '' }: PropsWithChildren<{ className?: string, skipCenter?: boolean }>) => (
    <h5 className={"-ml-4 font-semibold " + className}>{children}</h5>
)

export const Section = ({ children, skipCenter }: PropsWithChildren<{ skipCenter?: boolean }>) => (
    <section>
        <div className={`max-w-screen-md ${skipCenter ? '' : " mx-auto"} px-4`}>
            {children}
        </div>
    </section >
)

export const SubSection = ({ children, skipCenter }: PropsWithChildren<{ margin?: string, skipCenter?: boolean }>) => (
    <div className={`w-fit ${skipCenter ? '' : " mx-auto"} my-8`}> {children}</div >
)

export const UL = ({ children, skipCenter }: PropsWithChildren<{ skipCenter?: boolean }>) => (
    <ul className={`my-4 w-fit ${skipCenter ? '' : " mx-auto"} list-disc list-inside space-y-2 text-sm`}> {children}</ul>
)

export const Text = ({ children, ghost, strong, skipCenter }: PropsWithChildren<{ ghost?: boolean, strong?: boolean, skipCenter?: boolean }>) => (
    <p className={`my-2 ${skipCenter ? "" : "text-center"} ${ghost ? "text-zinc-500 text-sm" : ''} ${strong ? "font-semibold" : ''}`}>{children}</p>
)