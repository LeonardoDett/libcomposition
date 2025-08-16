import { tv } from 'tailwind-variants';
import { useInputContext } from './InputContext';

export interface InputFieldProps {
    placeholder?: string
    type?: string
}

const InputFieldVariants = tv({
    base: 'text-md appearance-none bg-transparent border-transparent w-full outline-none',
});

export function InputField({
    placeholder,
    type = "text"
}: InputFieldProps) {

    const {
        states: { isFocus, isLabelFloating, isDisabled },
        refs: { inputRef },
        actions: { handleBlur, handleFocus }
    } = useInputContext();

    let placeholderText = "";
    if ((isLabelFloating && isFocus) || !isLabelFloating) {
        placeholderText = placeholder + "";
    }


    return (
        <input
            ref={inputRef}
            placeholder={placeholderText}
            onBlur={handleBlur}
            onFocus={() => handleFocus(true)}
            type={type}
            disabled={isDisabled}
            className={InputFieldVariants()}
        />
    )
}