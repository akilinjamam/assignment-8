import React from 'react';
import './Watch.css'

const Watch = (props) => {
    return (
        <div className='watch'>

            <img style={{ width: '60%' }} src={props.image} alt="" />
            <div style={{ position: 'absolute', bottom: '0', width: '100%' }} className='watch-detail'>
                <h3 className='h2' >this is watch: {props.id}</h3>

                <button> <p className='btn'>ADD TO CART</p> </button>
            </div>



        </div>
    );
};

export default Watch;