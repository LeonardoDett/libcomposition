import { createContext, useContext, type RefObject } from "react";

export interface InputContextProps {
    states: {
        isError: boolean;
        isActive: boolean;
        isFocus: boolean;
        isDisabled: boolean;
        hasContent: boolean;
        isLabelFloating: boolean;
    },
    actions: {
        handleActive: (state: boolean) => void;
        handleFocus: (state: boolean) => void;
        handleBlur: () => void;
        handleRegisterLabelFloating: (state: boolean) => void;
    },
    refs: {
        inputRef: RefObject<HTMLInputElement | null>;
        labelRef: RefObject<HTMLLabelElement | null>;
    },
    theme: {
        accentColor: "primary" | "secondary" | undefined
    }
}

export const InputContext = createContext<InputContextProps | null>(null)

export function useInputContext() {
    const context = useContext(InputContext);
    if (!context) throw new Error("useInputContext deve ser usado dentro de <InputRoot />");
    return context;
}