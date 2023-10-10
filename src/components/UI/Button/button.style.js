import styled from "styled-components";

  const BaseButton =  styled.button`
    border: 0;
    padding: 10px 35px;
    transition: 0.4s;
    border-radius: 50px;
    cursor: pointer;
`

export const PrimaryBtw = styled(BaseButton)`
    background: ${props => props.disabled ? 'gray' : '#FF6337' } ;
    color: #fff;

    &:hover {
        background: ${props => props.disabled ? 'gray' : '#1c84e3' };
    }

`

export const SecondaryBtw = styled(BaseButton)`
    background: linear-gradient(to right, #c6ffdd, #fbd786, #f7797d);;
    color: #000;
    border: 2px solid black;

`

export const Outlinebtw = styled(BaseButton)`
    background: black;
    color: #fff;

`