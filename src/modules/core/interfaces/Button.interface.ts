import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "@core/utils/buttonVariants";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}
