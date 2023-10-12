import styled from 'styled-components';
import colors from '../../../utils/colors';

const Inputs = styled.input<{variant?: 'small' | 'default'}>`
    background-color: ${colors.white};
    border: 2px solid ${props => props.variant === 'small' ? 'transparent' : colors.purplePrimary};
    border-radius: 16px;
    width: 100%;
    padding: 12px;
    color: ${colors.lightGray};
    width: 100%;
    font-size: 18px;
    @media (max-width: 768px) {
        margin-right: 0px;
        padding: 6px;
    };
`;

export default Inputs