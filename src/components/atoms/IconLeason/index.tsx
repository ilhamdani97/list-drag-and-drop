import React from "react";
import IconLeasons from "./styles";
import { FaMapMarkerAlt, FaVideo } from "react-icons/fa";

interface Props {
    type: boolean;
}

const IconLeason = ({
    type
}: Props) => {
    return (
        <IconLeasons.Container>
            {type ? <FaVideo size={24}/> : <FaMapMarkerAlt size={24}/> }
        </IconLeasons.Container>
    )
}

export default IconLeason;