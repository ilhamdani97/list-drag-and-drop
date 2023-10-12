import React from "react";
import SwitchButtons from "./styles";
import Switch from 'react-switch';

interface Props {
    label: string;
    value: boolean;
    onChange: (value: boolean) => void;

}

const SwitchButton = ({
    label,
    value,
    onChange
}: Props) => {

    return (
        <SwitchButtons.Container>
            <Switch onChange={(value: boolean) => onChange(value)} checked={value}/>
            <SwitchButtons.TextToogle>
                {label}
            </SwitchButtons.TextToogle>
        </SwitchButtons.Container>
    )
}

export default SwitchButton