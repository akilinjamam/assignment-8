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


    const addToCart = (selectedWatch) => {
        console.log(selectedWatch);
        const matches = cart.find(theWatch => theWatch.id === selectedWatch.id);
        if (matches) {
            alert('cannot select similar product twice');
        } else {
            if (cart.length <= 3) {
                const newCart = [...cart, selectedWatch]
                setCart(newCart)
            } else {
                alert('you can select maximum Four')
            }
        }


    }
    return (
        <div className='wathes-and-cart' >
            <div className='watches'>
                {
                    watches.map(watch => <Watch image={watch.image} watch={watch} key={watch.id} name={watch.name} addToCart={() => addToCart(watch)} price={watch.price}></Watch>)
                }
            </div>

            <div className='the-cart'>
                <h2>Selected watches: {cart.length}</h2>
                {
                    cart.map(theCart => <Cart key={theCart.id} name={theCart.name} image={theCart.image}></Cart>)
                }
            </div>


        </div>
    );
};




export default Watches;