import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/modules/core/lib/buttonVariants";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}
