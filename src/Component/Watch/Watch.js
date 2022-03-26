import React from 'react';

const Watch = (props) => {
    return (
        <div>
            <h2>this is watch: {props.id}</h2>
            <img style={{ width: '40%' }} src={props.image} alt="" />
        </div>
    );
};

export default Watch;