import styled from "styled-components";
import colors from "../../../utils/colors";

const LabelCourses = {
    Container: styled.div`
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        gap: 16px;

        @media (max-width: 500px) {
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 8px;
        };
    `,
    Title: styled.text`
        font-size: 32px;
        font-weight: 500;
        color: ${colors.text100};
        
    `,
    Date: styled.text`
        font-size: 12px;
        font-weight: 500;
        line-height: 16px;
        color: ${colors.textTertiary};
    `
}

export default LabelCourses