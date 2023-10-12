import styled from "styled-components";
import colors from "../../../utils/colors";

const CardSessions = {
    Container: styled.div`
        padding: 8px 4px 8px 4px;
        border: 1px solid ${colors.lightGray};
        border-radius: 8px;
        margin-top: 24px;
        cursor: pointer;
        gap: 16px;
    `,
    Content: styled.div<{height: number}>`
        margin-left: 16px;
        gap: 16px;
        height: ${props => props.height}px;
    `,
    ButtonAdd: styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 8px;
        margin-bottom: 8px;
        margin-top: 8px;
        gap: 16px;
    `,
    textAdd: styled.text`
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        color: ${colors.text100}
    `
}

export default CardSessions