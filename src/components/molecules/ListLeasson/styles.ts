import styled from "styled-components";
import colors from "../../../utils/colors";

const ListLeassons = {
    Container: styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 12px;
        align-items: center;
        border-radius: 8px;
        padding: 4px 8px 4px 8px;
        transition: background 0s ease-out 0s;
        background-color: transparent;
        cursor: pointer;
        &:hover,
        &:focus {
            background-color: ${colors.gray100};
            transition-duration: 0.3s;
        };
    `
}

export default ListLeassons