import React from 'react';
import { MainDiv, Title, Desc, LinkTag, Heading4 } from './Card.style';
import Button from '../Button/Button';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';


function Card({ id, name = '', description = '', Link = '', price = '', category = '', btnClick, btnvalue = '', handlefavourite, favValue = '' }) {

    return (

        <div className='row'>
           
            <div className="product col-md-2">
                <div className="image-box">
                    <div className="images" id="image-1" />
                </div>
                <div className="text-box">
                    
                    <h2 className="item">{name}</h2>
                    <h3 className="price">${price}</h3>
                    <p className="description">{description}</p>
                    <h3 className="price">{category}</h3>
                    {/* <button type="button" name="item-1-button" id="item-1-button">Add to Cart</button> */}
                    {
                        btnvalue !== '' ? <Button onClick={btnClick}>{btnvalue}</Button> : null
                    }
                    {
                        favValue !== '' ? <FavoriteBorder onClick={handlefavourite} /> : null
                    }
                </div>
            </div>
        </div>

    );
}

export default Card;