import styled from "styled-components";



export const MainDiv = styled.div `    
background-color: white;
    position: relative;
    margin: 25px auto;
    width: 280px;
    height: 180px;
    padding: 10px;
    box-shadow: 3px 10px 20px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    border: 0;
    border-radius: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`


export const Title = styled.h2`
    font-size: 1.3rem;
    color: black;
`

export const Desc = styled.h6`
    font-size: 1rem;
    color: black;
    font-style: italic;
`

export const LinkTag = styled.a`
    color: rgba(var(--bs-link-color-rgb),var(--bs-link-opacity,1));
    text-decoration: underline;
    text-align: center;
`
export const Heading4 = styled.h4`
    font-size: 1.5rem;
    color:darkslategrey;
`


