import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';


const MyItem = () => {
    const [myItems, setMyItems] = useState([]);
    const [user] = useAuthState(auth);

    
    useEffect(() => {
        const email = user?.email;
        // const url = (`http://localhost:5000/orders?email=${email}`);
        const url = (`https://arcane-sierra-49316.herokuapp.com/orders?/${email}`);
        
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setMyItems(data))
    }, [user])

    return (
        <div>
            <div className='all-service'>

                {
                    myItems.map(myItem => <Item key={myItem._id} myItem={myItem}></Item>)
                }

            </div>


        </div>
    );
};

export default MyItem;