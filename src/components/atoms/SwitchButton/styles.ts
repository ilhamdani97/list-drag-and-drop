import styled from "styled-components";
import colors from "../../../utils/colors";

const SwitchButtons = {
    Container: styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 16px;
        margin-top: 8px;
    `,
    TextToogle: styled.text`
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        color: ${colors.text100}
    `
}

export default SwitchButtons;