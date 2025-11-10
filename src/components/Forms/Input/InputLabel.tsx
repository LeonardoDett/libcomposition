import { useEffect, type ReactNode } from "react"
import { tv } from 'tailwind-variants';
import { useInputContext } from "./InputContext";

export interface InputLabelProps {
    children: ReactNode,
    floating?: boolean
}

const inputLabelVariants = tv({
    base: [
        "px-1 transition-all duration-200 z-2 bg-transparent text-primary",
        "pointer-events-none"
    ],
    variants: {
        isFocus: {
            true: "",
            false: ""
        },
        isActive: {
            true: "",
            false: ""
        },
        isError: {
            true: "text-error",
            false: ""
        },
        accent: {
            primary: "",
            secondary: ""
        },
        floating: {
            true: "absolute left-3 top-3.5 text-md bg-background",
            false: "block"
        }
    },
    compoundVariants: [
        {
            isFocus: true,
            isError: false,
            accent: "primary",
            class: "text-primary"
        },
        {
            isFocus: true,
            isError: false,
            accent: "secondary",
            class: "text-secondary"
        },
        {
            isFocus: false,
            isError: false,
            class: "text-gray-500"
        },

        {
            isActive: true,
            floating: true,
            class: "-top-2.5 text-sm"
        },
    ]
});

export function InputLabel({ children, floating = false }: InputLabelProps) {

    const {
        states: { isError, isActive, isFocus },
        actions: { handleRegisterLabelFloating },
        refs: { labelRef },
        theme: { accentColor }
    } = useInputContext();

    useEffect(() => {
        handleRegisterLabelFloating(floating);
    }, [floating, handleRegisterLabelFloating])

    return (
        <label ref={labelRef} className={inputLabelVariants({ isActive, isError, floating, isFocus, accent: accentColor })}>
            {children}
        </label>
    )
}