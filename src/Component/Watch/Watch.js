import React from 'react';
import './Watch.css'

const Watch = (props) => {
    return (
        <div className='watch'>

            <img style={{ width: '60%' }} src={props.image} alt="" />
            <div style={{ position: 'absolute', bottom: '0', width: '100%' }} className='watch-detail'>
                <h3 className='h2' >{props.name}</h3>
                <h4 className='h2' >Price: ${props.price}</h4>

                <button onClick={props.addToCart}> <p className='btn'>ADD TO CART</p> </button>
            </div>



        </div>
    );
};

export default Watch;