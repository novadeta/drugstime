import { tw } from "@/lib/utils"
import React from "react"

interface props {
    children: React.ReactNode,
    className?: string
}

export const Headline: React.FC<props> = ({children, className = ""}) => {
    return (
        <>
            <h1 className={tw("mt-6 mx-auto text-headline text-3xl md:text-4xl text-center font-medium", className)}>{children}</h1>

        </>
    )
}

export const SubHeadline : React.FC<props> = ({children,className = ""} : {children : React.ReactNode, className?: string}) => {
    return (
        <>
            <p className={tw("mt-6 mx-auto text-subHeadline text-lg md:text-xl text-center",className)}>{children}</p>
        </>
    )
}