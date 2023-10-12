import styled from "styled-components";
import colors from "../../../utils/colors";

const SessionLessons = {
    Container: styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-beetwen;
        align-items: center;
        gap: 8px;
    `,
    TitleContainer: styled.div`
        display: flex;
        flex: 1;
        flex-direction: row;
        align-items: center;
        gap: 8px
    `,
    IconBurge: styled.div`
        width: 24px;
        height: 24px;
        cursor: pointer;
    `,
    TextSession: styled.text`
        font-size: 24px;
        font-weight: 500;
        line-height: 32px;
        color: ${colors.text100}
    `
}

export default SessionLessons