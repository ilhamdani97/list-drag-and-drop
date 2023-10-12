import styled from "styled-components";
import colors from "../../../utils/colors";

const LeasonMateris = {
    Container: styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
    `,
    IconBurge: styled.div`
        width: 24px;
        height: 24px;
        cursor: pointer;
    `,
    TitleVideo: styled.div`
        display: flex;
        flex-direction: row;
        gap: 6px;
        align-items: center;
    `,
    TextVideo: styled.text`
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        color: ${colors.text100}
    `,
    line: styled.div`
        height: 20px;
        width: 1px;
        background-color: ${colors.basic80}
    `,
    TextRequired: styled.text`
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        color: ${colors.purplePrimary}
    `,
    Dot: styled.div`
        width: 6px;
        height: 6px;
        border-radius: 6px;
        background-color: ${colors.text50}
    `,
    TextPreview: styled.text`
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        color: ${colors.text80}
    `
};

export default LeasonMateris