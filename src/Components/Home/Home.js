import React from 'react';
import { Link } from 'react-router-dom';
import CustomerReviews from '../Share/CustomerReviews/CustomerReviews';
import Services from '../Share/Services/Services';
import Banner from './Banner/Banner';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <div>
      
            
            <button className='my-3 fw-bold'><Link  to='/addpackage'>Manage Items</Link></button>
  
                <CustomerReviews></CustomerReviews>
            </div>
        </div>

    );
};

export default Home;