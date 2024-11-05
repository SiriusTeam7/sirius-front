import { forwardRef } from 'react'

import { cn } from '@core/lib/utils'
import { buttonVariants } from '@core/utils/buttonVariants'
import { ButtonProps } from '@interfaces/Button.interface'

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