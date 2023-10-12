import React from "react";
import Headers from "./styles";
import { BackHeader } from "../../molecules";

interface Props {
    title: string;
    goBack: () => void;
}
const Header = ({
    title,
    goBack
}: Props) => {
    
    return (
        <Headers.Container>
            <BackHeader title={title} handleBack={goBack}/>
        </Headers.Container>
    )
}

export default Header;