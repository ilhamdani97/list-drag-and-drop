import styled from 'styled-components';
import colors from '../../utils/colors';

const Event = {
    Container: styled.div`
        min-height: 100vh;
        background-color: ${colors.gray50};
        padding-bottom: 24px;
    `,
    Content: styled.div<{height: number}>`
        background-color: ${colors.gray50};
        padding: 0px 40px;
        height: ${props => props.height}px;
    `,
    ContentButton: styled.div`
        display: flex;
        justify-content: flex-end;
        margin-top: 16px;
    `,
    Header: styled.div`
        background-color: ${colors.darkGray};
        height: 25vh;
        width: 100%;
        display: flex;
        justify-content:center; 
        align-items:center;
    `,
    ImageHeader: styled.img.attrs(({src}) => ({
        alt: 'image-header',
        src: src
    }))`
        width: 126px;
        height: 48px;
    `,
    Footer: styled.div`
        display: flex;
        flex-direction: row,
        justify-content: center;
        justify-content: center; 
        align-items:center;
        padding: 16px;
        background-color: ${colors.darkGray};
        position: sticky;
        bottom: 0;
        gap: 8px;
    `
}

export default Event;
