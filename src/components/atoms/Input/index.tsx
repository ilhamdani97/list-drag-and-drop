import React from "react";
import Inputs from "./styles";

export interface PropsInput {
    placeholder: string;
    value: string;
    setValue: (e: string) => void;
    variant: 'small' | 'default';
    onFocus?: React.FocusEventHandler<HTMLInputElement> | undefined
}

const Input = ({
    placeholder,
    value,
    setValue,
    variant,
    onFocus
}:PropsInput) => {
    return (
        <Inputs
            onFocus={onFocus}
            variant={variant}
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    )
}

export default Input;