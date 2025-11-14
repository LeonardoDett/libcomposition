import type { ElementType, ReactNode } from "react";
import { tv } from "tailwind-variants";

const typographyStyles = tv({
  base: "text-gray-600",
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
      "7xl": "text-7xl",
      "8xl": "text-8xl",
      "9xl": "text-9xl"
    },
    color: {
      gray: "text-gray-600",
      primary: "text-primary",
      secondary: "text-secondary",
      success: "text-success",
      error: "text-error",
      warning: "text-warning",
      info: "text-info",
      inherit: "text-inherit"
    },
    weight: {
      thin: "font-thin",
      extralight: "font-extralight",
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
      black: "font-black"
    }
  },
  defaultVariants: {
    size: "md",
    color: "gray",
    weight: "normal"
  }
})

interface TypographyProps {
  children: ReactNode
  component?: ElementType
  size?: keyof typeof typographyStyles.variants.size
  color?: keyof typeof typographyStyles.variants.color
  weight?: keyof typeof typographyStyles.variants.weight
  className?: string
}

export function Typography({ children, size, color, weight, component: Component = "p", className }: TypographyProps) {
  return (
    <Component className={typographyStyles({ size, color, weight, class: className })}>{children}</Component>
  );
}
