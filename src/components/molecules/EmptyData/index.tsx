import React from "react";
import EmptyDatas from "./styles";
import { FaFileExcel } from "react-icons/fa";
import colors from "../../../utils/colors";

interface Props {
    type: 'Lesson' | 'Session'
}

const EmptyData = ({
    type
}: Props) => {
    return (
        <EmptyDatas.Container type={type}>
            <FaFileExcel color={colors.purplePrimary} size={type === 'Lesson' ? 24 : 40}/>
            <EmptyDatas.TextEmpty type={type}>
                {'Data Not Found'}
            </EmptyDatas.TextEmpty>
        </EmptyDatas.Container>
    )
   
}

export default EmptyData