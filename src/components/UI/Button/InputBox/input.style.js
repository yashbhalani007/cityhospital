import styled from "styled-components";


export const BaseInput = styled.input`
    border-radius: 0;
    box-shadow: none;
    font-size: 14px;
    padding: 10px !important;
    height: 44px;

    &:focus {
        border-color: #FF6337;
        box-shadow: none;
    }
`

export const InputError = styled.span`
    color: red;
`