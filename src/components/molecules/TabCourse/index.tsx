import React from "react";
import TabCourses from "./styles";

interface Props {
    tabMenu: string;
}
const TabCourse = ({
    tabMenu
}: Props) => {

    return (
        <TabCourses.Container>
            <TabCourses.TextMenu>
                {tabMenu}
            </TabCourses.TextMenu>
            <TabCourses.lineBottom/>
        </TabCourses.Container>
    )
}

export default TabCourse