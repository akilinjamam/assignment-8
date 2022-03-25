import React, { useEffect, useState } from 'react';

const Watches = () => {

    const [watches, setWatches] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setWatches(data))
    }, [])
    return (
        <div>
            {
                watches.map(watch => <Watch image={watch.image} watch={watch} key={watch.id} id={watch.id}></Watch>)
            }

        </div>
    );
};


const Watch = (props) => {
    console.log(props.watch)
    return (
        <div>
            <h2>this is watch: {props.id}</h2>
            <img style={{ width: '30%' }} src={props.image} alt="" />
        </div>
    )
}

export default Watches;