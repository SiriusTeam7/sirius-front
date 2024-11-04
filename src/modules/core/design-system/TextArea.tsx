import React, { forwardRef } from 'react'
import { cn } from '../lib/utils'

const Textarea = forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
    ({ className, ...props }, ref) => {
        return (
            <textarea
                className={cn(
                    "flex min-h-[80px] w-full rounded-lg border border-[#2B9FE6] bg-[#1E2329] px-3 py-2 text-sm text-white placeholder-gray-400",
                    "focus:outline-none focus:border-[#06E98A] focus:ring-1 focus:ring-[#06E98A]",
                    "disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Textarea.displayName = "Textarea"

export { Textarea }