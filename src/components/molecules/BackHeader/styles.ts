import styled from "styled-components";
import colors from "../../../utils/colors";

const BackHeaders = {
    Container: styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        align-content: center;
        gap: 16px;
        background-color: ${colors.white}
    `,
    Icon: styled.div`
        width: 20px;
        height: 20px;
        cursor: pointer;
    `,
    LineGap: styled.div`
        height: 40px;
        width: 1px;
        background-color: ${colors.text50};
        @media (max-width: 500px) {
            height: 24px;
        };
    `,
    TextHeader: styled.text`
        font-size: 18px;
        font-weight: 600;
        line-height: 24px;
        color: ${colors.text100}
    `
}

export default BackHeaders;