import React from 'react';
import { MainDiv, Title, Desc, LinkTag, Heading4 } from './Card.style';
import Button from '../Button/Button';




function Card({ id,name = '', description = '', Link = '', price = '', category = '', btnClick, btnvalue=''}) {
    return (
        
        <div className='row'>
            <MainDiv>
                <h1>{id}</h1>
                <Title> {name}</Title>
                <Desc>{description}</Desc>
                <LinkTag href='#'>{Link}</LinkTag>
                <Heading4>{price}</Heading4>
                <Heading4>{category}</Heading4>
                {
                    btnvalue !== '' ? <Button onClick={btnClick}>{btnvalue}</Button> : null
                }
                
            </MainDiv>
        </div>

    );
}

export default Card;