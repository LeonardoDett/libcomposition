import { tv } from 'tailwind-variants';
import { Icon } from '../../Layout/Icon';
import { LoaderCircle } from 'lucide-react';
import type { ComponentProps, ReactNode } from 'react';


export interface ButtonProps extends ComponentProps<'button'> {
    children: ReactNode,
    variant?: keyof typeof ButtonVariants.variants.variant
    color?: keyof typeof ButtonVariants.variants.color
    loading?: boolean
    size?: keyof typeof ButtonVariants.variants.size
}

export const ButtonVariants = tv({
    base: [
        "inline-flex items-center justify-center",
        "font-medium rounded-lg transition duration-100 ease-in-out",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "focus:outline-none",
        "cursor-pointer",
        "active:scale-95"
    ],
    variants: {
        color: {
            primary: "",
            secondary: "",
            success: "",
            cancel: "",
            warning: "",
            info: "",
        },
        variant: {
            fill: "text-white",
            outline: "bg-transparent border",
            text: "bg-transparent"
        },
        disabled: {
            true: "pointer-events-none opacity-50",
            false: ""
        },
        loading: {
            true: "relative text-transparent",
            false: ""
        },
        size: {
            icon: "p-2.5 text-sm",
            sm: "px-2.5 py-1.5 text-sm",
            md: "px-4 py-2 text-base",
            lg: "px-6 py-3 text-lg"
        }
    },
    compoundVariants: [
        {
            variant: "fill",
            color: "primary",
            disabled: false,
            class: "bg-primary hover:bg-primary-700 focus:ring-primary-400"
        },
        {
            variant: "fill",
            color: "secondary",
            disabled: false,
            class: "bg-secondary hover:bg-secondary-700 focus:ring-secondary-400"
        },
        {
            variant: "fill",
            color: "success",
            disabled: false,
            class: "bg-success-600 hover:bg-success-700 focus:ring-success-400"
        },
        {
            variant: "fill",
            color: "cancel",
            disabled: false,
            class: "bg-error hover:bg-error-700 focus:ring-error-400"
        },
        {
            variant: "fill",
            color: "warning",
            disabled: false,
            class: "bg-warning-500 hover:bg-warning-600 focus:ring-warning-300"
        },
        {
            variant: "fill",
            color: "info",
            disabled: false,
            class: "bg-cyan-600 hover:bg-cyan-700 focus:ring-cyan-400"
        },

        // Outline + cores
        {
            variant: "outline",
            color: "primary",
            disabled: false,
            class: "text-primary border-primary hover:bg-primary-50"
        },
        {
            variant: "outline",
            color: "secondary",
            disabled: false,
            class: "text-secondary border-secondary hover:bg-secondary-50"
        },
        {
            variant: "outline",
            color: "success",
            disabled: false,
            class: "text-success-600 border-success-600 hover:bg-success-50"
        },
        {
            variant: "outline",
            color: "cancel",
            disabled: false,
            class: "text-error border-error hover:bg-error-50"
        },
        {
            variant: "outline",
            color: "warning",
            disabled: false,
            class: "text-warning-600 border-warning-600 hover:bg-warning-50"
        },
        {
            variant: "outline",
            color: "info",
            disabled: false,
            class: "text-cyan-600 border-cyan-600 hover:bg-cyan-50"
        },

        // Text + cores
        {
            variant: "text",
            color: "primary",
            disabled: false,
            class: "text-primary hover:bg-primary-50"
        },
        {
            variant: "text",
            color: "secondary",
            disabled: false,
            class: "text-secondary hover:bg-secondary-50"
        },
        {
            variant: "text",
            color: "success",
            disabled: false,
            class: "text-success-600 hover:bg-success-50"
        },
        {
            variant: "text",
            color: "cancel",
            disabled: false,
            class: "text-error hover:bg-error-50"
        },
        {
            variant: "text",
            color: "warning",
            disabled: false,
            class: "text-warning-600 hover:bg-warning-50"
        },
        {
            variant: "text",
            color: "info",
            disabled: false,
            class: "text-cyan-600 hover:bg-cyan-50"
        },
        {
            loading: true,
            class: "after:absolute after:inset-0 after:flex after:items-center after:justify-center"
        },
        {
            disabled: true,
            class: "cursor-not-allowed border-gray-200 bg-gray-300 hover:bg-gray-100  text-gray-900"
        },
    ],
    defaultVariants: {
        variant: "fill",
        color: "primary",
        size: "md",
        disabled: false,
        loading: false
    }
});

export function Button({
    children,
    variant = "fill",
    loading = false,
    disabled = false,
    size = "md",
    color = "primary",
    className,
    ...rest
}: ButtonProps) {
    
    if (loading) {
        disabled = true;
    }
    return (

        <button
            {...rest}
            aria-busy={loading}
            disabled={disabled}
            className={ButtonVariants({ variant, loading, disabled, size, color, className })}>
            {loading && (
                <Icon component={LoaderCircle} size={20} className="animate-spin absolute" />
            )}
            <span className={`inline-flex items-center justify-center ${loading ? "invisible" : ""}`}>
                {children}
            </span>
        </button>
    )
}