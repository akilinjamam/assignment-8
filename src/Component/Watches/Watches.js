import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

import Watch from '../Watch/Watch';
import './Watches.css'


const Watches = () => {

    const [watches, setWatches] = useState([]);
    const [cart, setCart] = useState([]);
    const [random, setRandom] = useState([])
    console.log(random)

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setWatches(data))
    }, []);

    const chooseOne = () => {



        let randomWatch = cart[Math.floor(Math.random() * cart.length)];

        if (cart.length === 4) {
            const showRandom = [];
            setRandom(randomWatch);
            setCart(showRandom)
        } else {
            alert('you have to choose Four Item')
        }



    }

    const theReset = () => {
        console.log('working');
        const clean = [];

        setCart(clean);
        setRandom(clean);
    }




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
                    cart.map(theCart => <Cart key={theCart.id} name={theCart.name} image={theCart.image} random={random}></Cart>)
                }

                <div className='for-flex'>
                    <div style={{ width: '50px', height: '50px', borderRadius: '50px' }}>
                        <img style={{ width: '25px', display: 'block', margin: 'auto', paddingTop: '4px' }} src={random.image} alt="" />
                    </div>
                    <p>{random.name}</p>
                </div>

                <button onClick={chooseOne} className='btn-two' style={{ border: 'none', borderRadius: '10px' }}> <p> Choose One for Me</p>
                </button> <br /> <br />

                <button onClick={theReset} className='btn-two' style={{ border: 'none', borderRadius: '10px' }}> <p> Choose Again</p>
                </button>
            </div>




        </div>
    );
};




export default Watches;