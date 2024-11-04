import React, { forwardRef } from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '../lib/utils'

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
    {
        variants: {
            variant: {
                default: "bg-[#2B9FE6] text-[#13161D] hover:bg-[#06E98A]",
                destructive: "bg-[#FF4842] text-white hover:bg-red-600",
                outline: "bg-transparent border border-[#2B9FE6] text-[#2B9FE6] hover:bg-[#2B9FE6] hover:text-[#13161D]",
                subtle: "bg-slate-100 text-slate-900 hover:bg-slate-200",
                ghost: "bg-transparent hover:bg-slate-100 text-slate-800",
                link: "bg-transparent underline-offset-4 hover:underline text-[#2B9FE6]",
            },
            size: {
                default: "h-10 py-2 px-4",
                sm: "h-9 px-3 rounded-md",
                lg: "h-11 px-8 rounded-md",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    href?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, href, ...props }, ref) => {
        if (href) {
            return (
                <a
                    className={cn(buttonVariants({ variant, size, className }))}
                    href={href}
                >
                    {props.children}
                </a>
            )
        }
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }