import React from 'react';
import loaderSrc from '../../assets/giphy.gif';


const Loader = props => (
    <div>
        <img
        style={{ width: 100 }} 
        alt="Loader Icon"
        src={loaderSrc}/>
    </div>
);

export default Loader;