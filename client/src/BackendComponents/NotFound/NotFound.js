import React from 'react';
import noroute from '../../image/noroute.jpg';

const NotFound = () => {
    return (
        <div>
            <div className='d-flex justify-content-center'>
            <img src={noroute} alt=""/>
            </div>
            <h1 style={{display: "grid", placeItems: "center"}}>404 Not Found</h1>
        </div>
    );
}

export default NotFound;
