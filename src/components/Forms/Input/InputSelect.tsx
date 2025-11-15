import { tv } from 'tailwind-variants';
import { useInputContext } from './InputContext';
import { Typography } from '../Typography';
import { useState } from 'react';
import { Menu } from '../../Layout/Menu';
import { Icon } from '../../Layout/Icon';
import { ChevronDown, ChevronUp } from 'lucide-react';

export interface InputSelectProps {
    placeholder?: string
    options: TOption[]
}

export type TOption = { value: string, label: string }


const InputSelectVariants = tv({
    base: 'text-md appearance-none bg-transparent border-transparent w-full outline-none cursor-pointer',
});

export function InputSelect({
    placeholder,
    options
}: InputSelectProps) {

    const [isOpen, setIsOpen] = useState(false);

    const {
        states: { isFocus, isLabelFloating, isDisabled },
        refs: { inputRef, boxRef },
        actions: { handleBlur, handleFocus, handleChange }
    } = useInputContext();

    let placeholderText = "";
    if (placeholder) {
        if ((isLabelFloating && isFocus) || !isLabelFloating) {
            placeholderText = placeholder;
        }
    }

    function handleInputFocus() {
        if (isDisabled) return;
        handleFocus(true);
        setIsOpen(true);
    }

    function handleCloseMenu() {
        setIsOpen(false);
        handleBlur();
    }

    function handleSelectOption(option: TOption) {
        handleChange(option.label);
        handleCloseMenu();
    }

    return (
        <Menu.Root fitAnchor orientation='bottom' onClose={handleCloseMenu}>
            <Menu.TriggerVirtualized isOpen={isOpen} virtualRef={boxRef} />
            <div className="p-1 flex gap-1 items-center content-center h-full">
                <input
                    ref={inputRef}
                    placeholder={placeholderText}
                    onFocus={handleInputFocus}
                    type={"text"}
                    readOnly 
                    disabled={isDisabled}
                    className={InputSelectVariants()}
                    style={{ caretColor: 'transparent' }}
                />
                <Icon component={isOpen ? ChevronUp : ChevronDown} />
            </div>
            <Menu.Content className='overflow-scroll max-h-60'>
                {
                    options.map((option, index) => {
                        return (
                            <Menu.Item key={index} onClick={() => handleSelectOption(option)}>
                                <Typography>
                                    {option.label}
                                </Typography>
                            </Menu.Item>
                        )
                    })
                }
            </Menu.Content>
        </Menu.Root >
    )
}