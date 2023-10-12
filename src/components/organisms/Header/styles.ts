import styled from "styled-components";
import colors from "../../../utils/colors";

const Headers = {
    Container: styled.div`
        padding: 16px 56px 16px 56px;
        background-color: ${colors.white};
        display: flex;
        flex-direction: row;
        align-item: center;
        align-content: center;

        @media (max-width: 500px) {
            padding: 16px;
        };
    `
}

export default Headers