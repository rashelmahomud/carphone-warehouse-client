import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';
const Service = ({service}) => {
    const {_id, name,img,description,cost, Quantity,sup} = service;
    const navigate= useNavigate();

    const handelerbtn = (id) => {
        navigate(`/details/${id}`);
    }
    return (
        <div className='servie-box'>
            <img src={img} alt="" />
           <div className='info'>
           <h1>{name}</h1>
            <p>{description}</p>
            <p><strong>{cost}</strong></p>
            <h6>Quantity:{Quantity}</h6>
            <p>{sup}</p>
            <button onClick={ () => handelerbtn(_id)} className='service-box-btn'>Update:{name}</button>

           </div>

        </div>
    );
};

export default Service;