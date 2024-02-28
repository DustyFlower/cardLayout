import styled, {css} from 'styled-components';

type ButtonStylePropsType = {
    buttonType: 'first' | 'second'
}

export const Button = styled.button<ButtonStylePropsType>`
    position: relative;
    left: 20px;
    top: 135px;
    width: 86px;
    height: 30px;
    border-radius: 5px;
    border: 2px solid rgb(78, 113, 254);

    font-family: Inter, sans-serif;
    font-size: 10px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0;
    
    ${props => props.buttonType === 'first' && css<ButtonStylePropsType>`
        background: rgb(78, 113, 254);
        color: white;
    `}
    ${props => props.buttonType === 'second' && css<ButtonStylePropsType>`
        color: rgb(78, 113, 254);
        background: transparent;
    `}
`