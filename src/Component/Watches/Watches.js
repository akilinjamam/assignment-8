import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

import Watch from '../Watch/Watch';
import './Watches.css'


const Watches = () => {

    const [watches, setWatches] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setWatches(data))
    }, []);


    const addToCart = (watch) => {
        console.log(watch);
        const newCart = [...cart, watch]
        setCart(newCart)
    }
    return (
        <div className='wathes-and-cart' >
            <div className='watches'>
                {
                    watches.map(watch => <Watch image={watch.image} watch={watch} key={watch.id} name={watch.name} addToCart={() => addToCart(watch)}></Watch>)
                }
            </div>

            <div className='the-cart'>
                <h2>selected watch {cart.length}</h2>
                {
                    cart.map(theCart => <Cart key={theCart.id} name={theCart.name} image={theCart.image}></Cart>)
                }
            </div>


        </div>
    );
};




export default Watches;