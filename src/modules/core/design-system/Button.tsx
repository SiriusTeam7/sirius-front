import React, { forwardRef } from 'react'
import { VariantProps } from 'class-variance-authority'
import { cn } from '@core/lib/utils'
import { buttonVariants } from '@core/utils/buttonVariants'

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

export { Button }