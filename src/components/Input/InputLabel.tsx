import { useEffect, type ReactNode } from "react"
import { tv } from 'tailwind-variants';
import { useInputContext } from "./InputContext";

export interface InputLabelProps {
    children: ReactNode,
    floating: boolean
}

const inputLabelVariants = tv({
    base: [
        "px-1 bg-white transition-all duration-200 bg-white z-2",
        "pointer-events-none"
    ],
    variants: {
        isActive: {
            true: "",
            false: ""
        },
        isError: {
            true: "text-red-500",
            false: "text-gray-500"
        },
        floating: {
            true: "absolute left-3 top-3.5 text-md",
            false: "block"
        }
    },
    compoundVariants: [
        {
            isActive: true,
            floating: true,
            class: "-top-2.5 text-sm"
        },
    ]
});

export function InputLabel({ children, floating }: InputLabelProps) {

    const {
        states: { isError, isActive },
        actions: { handleRegisterLabelFloating },
        refs: { labelRef }
    } = useInputContext();

    useEffect(() => {
        handleRegisterLabelFloating(floating);
    }, [floating, handleRegisterLabelFloating])

    return (
        <label ref={labelRef} className={inputLabelVariants({ isActive, isError, floating })}>
            {children}
        </label>
    )
}