import { useEffect, useRef, useState, type ReactNode } from "react"
import { InputContext, type InputContextProps } from "./InputContext"

export interface InputRootProps {
    children: ReactNode
    error: boolean
    disabled: boolean
}

export function InputRoot({ children, error, disabled }: InputRootProps) {
    const [isActive, setIsActive] = useState(false);
    const [isFocus, setIsFocus] = useState(false);
    const [isDisabled, setIsDisabled] = useState(disabled);
    const [isError, setIsError] = useState(disabled);
    const [hasContent, setHasContent] = useState(false);
    const [isLabelFloating, setIsLabelFloating] = useState(false);

    const inputRef = useRef<HTMLInputElement | null>(null);
    const labelRef = useRef<HTMLLabelElement | null>(null);

    const handleActive = (value: boolean) => setIsActive(value);
    const handleRegisterLabelFloating = (value: boolean) => setIsLabelFloating(value);

    const handleFocus = (value: boolean) => {
        setIsActive(value);
        setIsFocus(value)
    };

    useEffect(() => {
        setIsDisabled(disabled);
        setIsError(error);
    }, [disabled, error]);

    useEffect(() => {
        if (inputRef.current) {
            const state = inputRef.current.value !== ''
            setHasContent(state);
            setIsActive(state);
        }
    }, []);

    const handleBlur = () => {
        setIsFocus(false);
        if (inputRef.current) {
            const state = inputRef.current.value !== ''
            setHasContent(state);
            setIsActive(state);
        }
    };


    const data: InputContextProps = {
        states: {
            isError,
            isActive,
            isFocus,
            isDisabled,
            hasContent,
            isLabelFloating
        },
        actions: {
            handleActive,
            handleFocus,
            handleBlur,
            handleRegisterLabelFloating
        },
        refs: {
            inputRef,
            labelRef
        }
    }

    return (
        <InputContext.Provider value={data}>
            <div className="relative flex flex-col w-full">
                {children}
            </div>
        </InputContext.Provider>
    )
}