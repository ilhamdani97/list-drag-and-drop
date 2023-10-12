import styled from "styled-components";
import colors from "../../../utils/colors";

const EventSchedules = {
    Container: styled.div`
        padding: 16px;
        border: 1px solid ${colors.lightGray};
        border-radius: 12px;
    `,
    Label: styled.div`
        font-size: 16px;
        font-weight: 500;  
        line-height: 24px;
    `
}

export default EventSchedules