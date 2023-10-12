import styled from 'styled-components';
import colors from '../../../utils/colors';

const Buttons = styled.button<{ variant?: 'primary' | 'secondary' | 'disable' | 'danger', mode: 'small' | 'default' }>`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 8px;
    background-color: ${props => props.variant === 'primary' ? colors.purplePrimary: props.variant === 'secondary' ? 'transparent' : props.variant === 'danger' ? '#F44336' : colors.lightGray};
    color: ${props => props.variant === 'primary' ? colors.white : props.variant === 'secondary' ? colors.purplePrimary : colors.white};
    font-size: 16px;
    padding: ${props => props.mode === 'small' ? '8px' : '8px 16px 8px 16px;'};
    border: 1px solid ${props => props.variant === 'disable' ? colors.lightGray : props.variant === 'danger' ? 'transparent' : colors.purplePrimary};
    border-radius: 8px;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    margin-left: 8px;
    transition: background 0s ease-out 0s;
    @media (max-width: 500px) {
        padding: 8px;
        font-size: 12px;
        margin-left: 0px;
    };

`;

export default Buttons;
