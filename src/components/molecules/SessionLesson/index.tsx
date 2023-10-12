import React from "react";
import SessionLessons from "./styles";
import { FaGripVertical, FaRegEdit } from "react-icons/fa";
import colors from "../../../utils/colors";
import { IconAction } from "../../atoms";

interface Props {
    label: string;
    handleEdit: () => void;
    handleAction: () => void;
}

const SessionLesson = ({
    label,
    handleEdit,
    handleAction
}: Props) => {
    return (
        <SessionLessons.Container>
            <SessionLessons.TitleContainer>
                <SessionLessons.IconBurge>
                    <FaGripVertical color={colors.text50} size={22} onClick={handleEdit}/>
                </SessionLessons.IconBurge>
                <SessionLessons.TextSession>
                    {label}
                </SessionLessons.TextSession>
                <FaRegEdit style={{cursor: 'pointer'}} color="#BCC0D0" onClick={handleEdit}/>
            </SessionLessons.TitleContainer>
            <IconAction type={'Section'} handleClick={handleAction}/>

        </SessionLessons.Container>
    )
}

export default SessionLesson