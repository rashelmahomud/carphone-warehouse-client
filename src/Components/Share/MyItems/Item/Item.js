import React from 'react';
import './Item.css'

const Item = ({ myItem }) => {
    const {name, img, description, cost} = myItem;

    const handleUserDelete = (id) => {
        console.log('deleting id');
        const proceed = window.confirm('are you sure you want to delete?')
        if (proceed) {
            const url = `https://arcane-sierra-49316.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                
                    if (data.deletedCount > 0) {
                        window.location.reload();
                    }

                })
        }
    }
    
    return (
        <div className='add-servie'>
            <img src={img} alt="" />
            {/* <div className='info'> */}
                <h3>{name}</h3>
                <p>{description}</p>
                <p><strong>{cost}</strong></p>

                <button onClick={() => handleUserDelete(myItem._id)} className='service-btn'>Delete</button>

            {/* </div> */}

        </div>
    );
};

export default Item;