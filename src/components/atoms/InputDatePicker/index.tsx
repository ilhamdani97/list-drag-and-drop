import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import Input, { PropsInput } from "../Input";
import moment from "moment";
import InputDatePickers from "./styles";

interface Props {
    value: string | undefined;
    label: string;
    onChange: (value: Date) => void;
}

const InputDatePicker = ({
    value,
    label,
    onChange
}: Props) => {

    const [showDate, setShowDate] = useState<boolean>(false);
    const [valueDate, setValueDate] = useState(new Date());
    
    const handleChange = (date: Date) => {
        setShowDate(!setShowDate);
        setValueDate(date);
        onChange(date);
    };
    return (
        <>
            <Input
                value={moment(valueDate).format('lll')} 
                variant={'default'}
                placeholder={label}
                setValue={()=> {}}
                onFocus={()=> setShowDate(true)}
            />

            {showDate && (
                <DatePicker
                    value={value}
                    locale={'id'}
                    selected={valueDate}
                    onChange={(date) => handleChange(date || new Date())}
                    popperPlacement={'bottom'}
                    timeInputLabel={"Time:"}
                    dateFormat={'dd MM yyy h:mm aa'}
                    showTimeInput
                    inline
                    withPortal
                    popperContainer={InputDatePickers.Popper}
                />
            )}

        </>
    )
}

export default InputDatePicker