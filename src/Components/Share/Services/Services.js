import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';



const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:5000/service';
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <h1 className='my-5'>All Inventory</h1>

            <div className='service-all'>

                {
                    services.slice(0, 6).map(service => <Service key={service._id} service={service}></Service>)
                }


            </div>
        </div>
    );
};

export default Services;