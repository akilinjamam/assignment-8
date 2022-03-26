import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Watch.css'

const Watch = (props) => {
    const { name, price, image } = props;
    return (
        <div className='watch'>

            <img style={{ width: '60%' }} src={image} alt="" />
            <div style={{ position: 'absolute', bottom: '0', width: '100%' }} className='watch-detail'>
                <h3 className='h2' >{name}</h3>
                <h4 className='h2' >Price: ${price}</h4>

                <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className='the-btn' onClick={props.addToCart}> <p className='btn'>ADD TO CART</p>
                    <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
                </button>
            </div>



        </div>
    );
};

export default Watch;