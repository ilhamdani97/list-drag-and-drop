import React from "react";
import CourseHeaders from "./styles";
import { Button, LabelCourse } from "../../atoms";
import { FaEye } from "react-icons/fa";
interface Props {
    label: string;
    date: string;
    onPreview: () => void
}
const CourseHeader = ({
    label,
    date,
    onPreview
}: Props) => {

    return (
        <CourseHeaders.Container>
            <LabelCourse label={label} date={date}/>
            <Button title={'Preview'} variant={'secondary'} onClick={onPreview} mode={'default'} Icon={FaEye}/>
        </CourseHeaders.Container>
    )
}

export default CourseHeader