import React from 'react';
import { Link } from 'react-router-dom';
import MyItem from './MyItem/MyItem';

const MyItems = () => {
    

    return (
        <div>
            <h1 className='my-5'>My Items ALL here</h1>
            <MyItem></MyItem>


            <button className='my-3 fw-bold'><Link  to='/addpackage'>Manage Items</Link></button>

          
        </div>
    );
};

export default MyItems;