import styled from 'styled-components';

export const Card = styled.div`
    background: rgb(255, 255, 255);
    border-radius: 15px;
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
    width: 300px;
    height: 350px;
    position: absolute;
    margin: 0 auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 12px;

    button {
        cursor: pointer;
    }
`