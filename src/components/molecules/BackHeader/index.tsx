import React from "react";
import BackHeaders from "./styles";
import { FaArrowLeft } from "react-icons/fa";

interface Props {
    title: string;
    handleBack: () => void;
}

const BackHeader = ({
    title,
    handleBack
}: Props) => {
    
    return (
        <BackHeaders.Container >
            <BackHeaders.Icon>
                <FaArrowLeft size={20} onClick={handleBack}/>
            </BackHeaders.Icon>
            <BackHeaders.LineGap/>
            <BackHeaders.TextHeader>
                {title}
            </BackHeaders.TextHeader>
        </BackHeaders.Container>
    )
}

export default BackHeader;