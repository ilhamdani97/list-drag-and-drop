import React, { useState } from "react";
import LeassonTimeActions from "./styles";
import { FaRegClock, FaDownload, FaRegEdit, FaTrashAlt, FaEdit } from 'react-icons/fa'
import { IconAction } from "../../atoms";
import colors from "../../../utils/colors";
interface Props {
    schadule: string;
    duration: string;
    isDownload: boolean;
    handleEdit: () => void;
    handleDelete: () => void;
}
const LeassonTimeAction = ({
    schadule,
    duration,
    isDownload,
    handleEdit,
    handleDelete
}: Props) => {

    const [showAction, setShowAction] = useState<boolean>(false);

    return (
        <LeassonTimeActions.Container>
            <FaRegClock/>
            <LeassonTimeActions.TextSchedule>
                {schadule}
            </LeassonTimeActions.TextSchedule>
            <LeassonTimeActions.Dot/>
            <FaRegClock/>
            <LeassonTimeActions.TextSchedule>
                {duration}
            </LeassonTimeActions.TextSchedule>
            <LeassonTimeActions.Dot/>
            {isDownload && (
                <>
                    <FaDownload style={{cursor: 'pointer'}}/>
                    <LeassonTimeActions.TextSchedule>
                        {'Downloadable'}
                    </LeassonTimeActions.TextSchedule>
                </>
            )}

            <IconAction type={'Lesson'} handleClick={() => {
                setShowAction(true);
            }}/>
            {showAction && (
                <LeassonTimeActions.ContainerAction>
                    <FaEdit color={colors.white} onClick={() => {
                        handleEdit();
                        setShowAction(false);
                    }}/>
                    <FaTrashAlt color={colors.white} onClick={() => {
                        handleDelete();
                        setShowAction(false);
                    }}/>
                </LeassonTimeActions.ContainerAction>
            )}
            
        </LeassonTimeActions.Container>
    )
}

export default LeassonTimeAction