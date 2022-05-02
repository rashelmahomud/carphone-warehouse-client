import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetails from '../../hook/useServiceDetails';
import './Details.css';

const Details = () => {
    const { servicesId } = useParams();
    const [quantity, setQuantity] = useState({});
    const [service, setService] = useServiceDetails(servicesId);

    const updateQuantity = (e) => {
        console.log(e);
        e.preventDefault();
        const quantity = e.target.quantity.value;
        if (!quantity || quantity < 0) {
            return;
        }
        fetch(`http://localhost:5000/service/${servicesId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ quantity })
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                window.alert('quantity added');
                window.location.reload();

                e.target.reset();
            })
    }

    return (
        <div>
            <div className='d-flex mx-auto w-50 my-5'>
                <div className='details-site'>
                    <img src={service.img} alt="" />
                    <div className='my-2'>
                        <h2>{service.name}</h2>
                        <p><strong>{service.cost}</strong></p>
                        <h4>Quantity:{service.quantity}</h4>
                        <button className='service-box-btn bg-primary'>Delivery</button>
                    </div>


                </div>
            </div>
            <div>

                <form onSubmit={updateQuantity}>
                    <input type="number" name="quantity" id="" />
                    <input type="submit" value="Add Quantity" />
                </form>
            </div>
        </div>
    );
};

export default Details;