import styled from "styled-components";
import colors from "../../../utils/colors";

const IconAction = {
    Container: styled.div`
        border-radius: 8px;
        width: 32px;
        height: 32px;
        background-color: ${colors.basic};
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
    `
}

export default IconAction;