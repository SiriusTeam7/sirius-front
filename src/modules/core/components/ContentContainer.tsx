import { ChevronRight } from "lucide-react"

import { cn } from "@core/lib/utils"
import { ContentContainerProps } from "@interfaces/ContentContainer.interface"



export function ContentContainer(props: ContentContainerProps) {
    const baseStyles = "rounded-lg bg-[#282d35] text-white p-4 hover:bg-[#2d323b] transition-colors"

    // No Icon Variant
    if (props.variant === "single-content") {
        return (
            <div className={cn(baseStyles, "flex flex-col gap-2", props.className)}>
                {props.children}
            </div>
        )
    }

    // Icon Text Variant
    if (props.variant === "img-content") {
        return (
            <div className={cn(baseStyles, "flex items-center gap-4", props.className)}>
                <div className="flex-shrink-0">
                    {props.image}
                </div>
                <div className="flex flex-col gap-2 flex-grow">
                    {props.children}
                </div>
                {props.rightIcon && (
                    <ChevronRight className="flex-shrink-0 w-5 h-5 text-gray-400" />
                )}
            </div>
        )
    }

    // Span Text Badge Variant
    if (props.variant === "icon-content") {
        return (
            <div className={cn(baseStyles, "flex items-center gap-4", props.className)}>
                <div className={cn(
                    "flex-shrink-0 w-8 h-8 rounded-full bg-[#FF4842] flex items-center justify-center font-medium",
                    props.iconClassName
                )}>
                    {props.iconText}
                </div>
                <div className="flex flex-col gap-2 flex-grow">
                    {props.children}
                </div>
                {props.rightIcon && (
                    <ChevronRight className="flex-shrink-0 w-5 h-5 text-gray-400" />
                )}
            </div>
        )
    }
}