import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const MyItem = () => {
    const [myItems, setMyItems] = useState([]);
   
    useEffect(() => {
        const url = 'https://arcane-sierra-49316.herokuapp.com/service';
        fetch(url)
            .then(res => res.json())
            .then(data => setMyItems(data))
    }, [])
    return (
        <div>
            <div className='all-service'>

                {/* {
                    myItems.slice(0,6).map(myItem => <Item key={myItem._id} myItem={myItem}></Item>)
                } */}

                {
                    myItems.map(myItem => <Item key={myItem._id} myItem={myItem}></Item>)
                }

            </div>


        </div>
    );
};

export default MyItem;