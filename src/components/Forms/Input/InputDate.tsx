import { format } from "date-fns";
import { Popper } from "../../Layout/Popper";
import { Calendar } from "../../Layout/Calendar";
import { useState } from "react";
import { tv } from "tailwind-variants";
import { useInputContext } from "./InputContext";

type InputDateProps = {
    value?: Date;
    placeholder?: string;
    onChange?: (date: Date) => void;
};

const InputFieldVariants = tv({
    base: 'text-md appearance-none bg-transparent border-transparent w-full outline-none',
});

export const InputDate = ({ value, onChange, placeholder }: InputDateProps) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(value ?? null);

    const {
        states: { isFocus, isLabelFloating, isDisabled },
        refs: { inputRef },
        actions: { handleBlur, handleFocus, handleChange }
    } = useInputContext();

    let placeholderText = "";
    if (placeholder) {
        if ((isLabelFloating && isFocus) || !isLabelFloating) {
            placeholderText = placeholder + "";
        }
    }

    const handleDateChange = (date: Date) => {
        handleChange(format(date, "dd/MM/yyyy"));
        setSelectedDate(date);
        onChange?.(date);
    };

    return (
        <Popper.Root orientation="bottom">
            <Popper.TriggerClick>
                <input
                    ref={inputRef}
                    placeholder={placeholderText}
                    onBlur={handleBlur}
                    onFocus={() => handleFocus(true)}
                    disabled={isDisabled}
                    className={InputFieldVariants()}
                    type="text"
                    readOnly
                />
            </Popper.TriggerClick>
            <Popper.Content>
                <Calendar onDateSelect={handleDateChange} selectedDate={selectedDate} />
            </Popper.Content>
        </Popper.Root>
    );
};
