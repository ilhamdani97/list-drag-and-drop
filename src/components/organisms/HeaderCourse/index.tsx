import React from "react";
import HeaderCourses from "./styles";
import { CourseHeader, TabCourse } from "../../molecules";

interface Props {
    labelCourse: string;
    tabLabel: string;
    date: string;
    onPreview: () => void
}
const HeaderCourse = ({
    labelCourse,
    tabLabel,
    date,
    onPreview
}: Props) => {

    return (
        <HeaderCourses.Container>
            <CourseHeader 
                label={labelCourse}
                date={date}
                onPreview={onPreview}
            />
            <TabCourse tabMenu={tabLabel} />
        </HeaderCourses.Container>
    )
}

export default HeaderCourse;