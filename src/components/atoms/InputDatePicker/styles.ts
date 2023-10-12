import styled from "styled-components";

const InputDatePickers = {
    Calendar: styled.div`
        border-radius: 10px;
        box-shadow: 0 6px 12px rgba(27, 37, 86, 0.16);
        overflow: hidden;
    `,
    Popper : styled.div`
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
    `
}

export default InputDatePickers