import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const { name, image } = props
    console.log(name)
    return (
        <div>
            <div className='cart'>

                <div className='for-flex'>
                    <div style={{ backgroundColor: 'white', width: '50px', height: '50px', borderRadius: '50px' }}>
                        <img style={{ width: '25px', display: 'block', margin: 'auto', paddingTop: '4px' }} src={image} alt="" />
                    </div>

                    <p>{name}</p>

                </div>

            </div>


        </div>
    );
};

export default Cart;