import styled from "styled-components";
import colors from "../../../utils/colors";

const LeassonTimeActions = {
    Container: styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
    `,
    TextSchedule: styled.text`
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        color: ${colors.text100}
    `,
    Dot: styled.div`
        width: 6px;
        height: 6px;
        border-radius: 6px;
        margin-left: 6px;
        margin-right: 6px;
        background-color: ${colors.text50}
    `,
    ContainerAction: styled.div`
        display: flex;
        flex-direction: row;
        padding: 2px;
        align-items: center;
        justify-content: center;
        gap: 8px;
        height: 30px;
        border-radius: 8px;
        width: 60px;
        position: absolute;
        right: 48px;
        margin-top: 64px;
        background-color: ${colors.purplePrimary}
    `

}

export default LeassonTimeActions;