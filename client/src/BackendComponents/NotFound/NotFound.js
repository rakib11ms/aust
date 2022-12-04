import React from 'react';
import { Link } from 'react-router-dom';
import noroute from '../../image/noroute.jpg';

const NotFound = () => {
    return (
        <div>
            <div className='d-flex justify-content-center'>
                <img src={noroute} alt="" />
            </div>
            <div style={{ display: "grid", placeItems: "center" }}>
                <h1>404 Not Found</h1>
                <Link to="/admin-dashboard">Go Back To Dashboard</Link>
            </div>
        </div>
    );
}

export default NotFound;
