import styled from "styled-components";
import colors from "../../../utils/colors";

const EmptyDatas = {
    Container: styled.div<{type: 'Lesson' | 'Session'}>`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;
        gap: 8px;
        border: 1px solid ${colors.lightGray};
        border-radius: 8px;
        margin-right: 8px;
        margin-top: 16px;
        @media (max-width: 500px) {
            margin-right:${props => props.type === 'Session' ? '0px' : '8px'};
        };
        padding: ${props => props.type === 'Session' ? '60px' : '8px'}
    `,
    TextEmpty: styled.text<{type: 'Lesson' | 'Session'}>`
        font-size: ${props => props.type === 'Lesson' ? '14px' : '18px'};
        font-weight: 600;
        line-height: ${props => props.type === 'Lesson' ? '24px' : '16px'};
        color: ${colors.text100}
    `
}

export default EmptyDatas;