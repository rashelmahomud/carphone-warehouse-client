import { sendEmailVerification } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ confirmpassword, setConfirmpassword] = useState('');
  const [ error, setError ] = useState('');

  const naviage = useNavigate();

const [ createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

  const handleEmailBlur = event => {
    setEmail(event.target.value);
  }

  const handlePasswordBlur = event => {
    setPassword(event.target.value);
  }

  const handleComfirmPasswordBlur = event => {
    setConfirmpassword(event.target.value);
  }

  if(user){
    naviage('/home')
  };

  const verfyEmail = () => {

    sendEmailVerification(auth.currentUser)
    .then( () => {
      console.log('Email Verifications code Sent');
    })

  };


  const handelCreateUser = event =>{
      event.preventDefault();

      if(password !== confirmpassword){
        setError('Your two passords did not match');
        return;
      }
      createUserWithEmailAndPassword(email, password);
      verfyEmail();
  }
    return (
        <div className='container w-50 my-5'> 
        <h1>SignUp</h1>
        <div>
          <Form onSubmit={handelCreateUser} className='signup'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter your Name:</Form.Label>
              <Form.Control type="text" placeholder="Enter your Name" required />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Comfirm Password</Form.Label>
              <Form.Control onBlur={handleComfirmPasswordBlur} type="password" placeholder="Confirm Password" required />
            </Form.Group>
            <p>{error}</p>
            <Button variant="primary" type="submit">
              SignUp
            </Button>
          
            <p><Link to='/login'>Already Have a Account</Link></p>
          </Form>
        </div>
      </div>
    );
};

export default SignUp;