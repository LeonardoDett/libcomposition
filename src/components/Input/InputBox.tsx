import type { ReactNode } from "react"
import { tv } from 'tailwind-variants';
import { useInputContext } from "./InputContext";

export interface InputBoxProps {
    children: ReactNode
}

const inputBoxVariants = tv({
    base: ['w-full border-gray-300 px-4 py-3 text-md border rounded-lg relative z-1',
        'focus:outline-none',
        'focus:ring-2 focus:ring-blue-500',
        'focus:border-blue-500'
    ],
    variants: {
        isDisabled: {
            true: 'opacity-50 pointer-events-none cursor-not-allowed',
            false: ''
        }
    }
});

export function InputBox({ children }: InputBoxProps) {

    const {
        states: { isDisabled },
    } = useInputContext();

    return (
        <div className={inputBoxVariants({isDisabled})}>
            {children}
        </div>
    )
}