import type { ReactNode } from "react"
import { tv } from 'tailwind-variants';
import { useInputContext } from "./InputContext";

export interface InputBoxProps {
    children: ReactNode
}

const inputBoxVariants = tv({
    base: ['w-full  px-3 py-2 text-md border rounded-lg relative z-1',
        'focus:outline-none',
        'focus:ring-2 ',
        'transition-all duration-300 ease-in-out'
    ],
    variants: {
        isDisabled: {
            true: 'opacity-50 pointer-events-none cursor-not-allowed',
            false: ''
        },
        isFocus: {
            true: '',
            false: ''
        },
        isError: {
            true: 'ring-error border-error',
            false: ''
        },
        accent: {
            primary: '',
            secondary: ''
        }
    },
    compoundVariants: [
        {
            isFocus: true,
            isError: false,
            accent: "primary",
            class: "border-primary focus:ring-primary"
        },
        {
            isFocus: true,
            isError: false,
            accent: "secondary",
            class: "border-secondary focus:ring-secondary"
        },
        {
            isFocus: false,
            isError: false,
            class: "border-gray-300"
        },
    ]
});

export function InputBox({ children }: InputBoxProps) {

    const {
        states: { isError, isFocus, isDisabled },
        refs: { boxRef },
        theme: { accentColor }
    } = useInputContext();

    return (
        <div ref={boxRef} className={inputBoxVariants({isDisabled, accent:accentColor, isError, isFocus })}>
            {children}
        </div>
    )
}