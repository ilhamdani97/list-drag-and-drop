import React from "react";
import Buttons from "./styles";
import { IconType } from "react-icons";

interface Props {
    title: string;
    disable?: boolean;
    variant: 'primary' | 'secondary' | 'disable' | 'danger' ,
    mode: 'small' | 'default';
    onClick: () => void;
    Icon?: IconType
}
const Button = ({
    title,
    disable,
    variant,
    mode,
    onClick,
    Icon
}: Props) => {
    return (
        <Buttons mode={mode} disabled={disable} variant={variant} onClick={onClick}>
            {Icon && <Icon/>}
            {title}
        </Buttons>
    )
}

export default Button;