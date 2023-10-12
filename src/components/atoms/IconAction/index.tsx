import React from "react";
import IconLeasons from "./styles";
import { FaEllipsisH, FaEllipsisV, FaTrash } from "react-icons/fa";
import colors from "../../../utils/colors";

interface Props {
    type: 'Section' | 'Lesson';
    handleClick: () => void;
}

const IconAction = ({
    type,
    handleClick
}: Props) => {
    return (
        <IconLeasons.Container onClick={handleClick}>
            {type === 'Section' ? <FaTrash color={colors.purplePrimary}/> : <FaEllipsisV color={colors.text100}/> }
        </IconLeasons.Container>
    )
}

export default IconAction;