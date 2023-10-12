import styled from "styled-components";

const CourseHeaders = {
    Container: styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        @media (max-width: 500px) {
            flex-direction: column;
            justify-content: flex-start;
        };
    `
}

export default CourseHeaders;