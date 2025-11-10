import { tv } from 'tailwind-variants';
import { useInputContext } from './InputContext';
import { Popper } from '../../Layout/Popper';
import { Typography } from '../Typography';
import { useState } from 'react';

export interface InputSelectProps {
    placeholder?: string
    options: TOption[]
}

export type TOption = { value: string, label: string }


const InputSelectVariants = tv({
    base: 'text-md appearance-none bg-transparent border-transparent w-full outline-none',
});

export function InputSelect({
    placeholder,
    options
}: InputSelectProps) {

    const [isOpen, setIsOpen] = useState(false);

    const {
        states: { isFocus, isLabelFloating, isDisabled },
        refs: { inputRef, boxRef },
        actions: { handleBlur, handleFocus }
    } = useInputContext();

    let placeholderText = "";
    if (placeholder) {
        if ((isLabelFloating && isFocus) || !isLabelFloating) {
            placeholderText = placeholder;
        }
    }

    function handleInputFocus() {
        handleFocus(true);
        setIsOpen(true);
    }

    function handleInputBlur() {
        handleBlur();
        setIsOpen(false);
    }

    function handleSelectOption(option:TOption) {
        if (inputRef.current) {
            inputRef.current.value = option.label;
        }

        handleInputBlur()
    }

    return (
        <Popper.Root orientation='bottom' fitAnchor onClose={handleInputBlur} >
            <Popper.TriggerVirtualized isOpen={isOpen} virtualRef={boxRef} />
            <input
                ref={inputRef}
                placeholder={placeholderText}
                onFocus={handleInputFocus}
                type={"text"}
                disabled={isDisabled}
                className={InputSelectVariants()}
            />
            <Popper.Content maxHeight='200px' >
                {
                    options.map((option, index) => {
                        return (
                            <div key={index} onClick={() => handleSelectOption(option)}>
                                <Typography>
                                    {option.label}
                                </Typography>
                            </div>
                        )
                    })
                }
            </Popper.Content>
        </Popper.Root >


    )
}