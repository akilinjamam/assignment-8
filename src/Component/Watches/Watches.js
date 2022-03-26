import React, { useEffect, useState } from 'react';
import Watch from '../Watch/Watch';
import './Watches.css'


const Watches = () => {

    const [watches, setWatches] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setWatches(data))
    }, [])
    return (
        <div className='watches'>
            {
                watches.map(watch => <Watch image={watch.image} watch={watch} key={watch.id} id={watch.id}></Watch>)
            }

        </div>
    );
};




export default Watches;