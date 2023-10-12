import React from "react";
import LabelCourses from "./styles";

interface Props {
    label: string;
    date: string;
}

const LabelCourse = ({
    label,
    date
}: Props) => {

    return (
        <LabelCourses.Container>
            <LabelCourses.Title>
                {label}
            </LabelCourses.Title>
            <LabelCourses.Date>
                {date}
            </LabelCourses.Date>
        </LabelCourses.Container>
    )
}

export default LabelCourse;