import styled from "styled-components";
import colors from "../../../utils/colors";

const TabCourses = {
    Container: styled.div`
        margin-top: 36px;
        padding-bottom: 24px;
        border-bottom: 1px solid ${colors.lightGray}
    `,
    TextMenu: styled.text`
        font-size: 16px;
        lineHeight: 24px;
        font-weight: 500;
        color: ${colors.purplePrimary}
    `,
    lineBottom: styled.div`
        width: 95px;
        height: 2px;
        border-radius: 16px;
        position: absolute;
        margin-top: 23.5px;
        background-color: ${colors.purplePrimary}
    `
}

export default TabCourses