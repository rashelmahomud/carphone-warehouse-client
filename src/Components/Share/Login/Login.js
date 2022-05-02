import React, { useState } from 'react';
import { Button, Form} from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialBtn from '../SocialBtn/SocialBtn';
import { sendPasswordResetEmail } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const handelEmailBlur = event => {
    setEmail(event.target.value);

  };
  const handelPasswordBlur = event => {
    setPassword(event.target.value);
  }

  if (user) {
    navigate(from, { replace: true });
  }
  const handeluserSignIn = event => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  }
  const handelResetPassword = () => {
    sendPasswordResetEmail(auth, email)
    .then( () => {
      toast('Send Your Email')

    })
  }

  return (
    <div className='container w-50 my-5'>
      {/* <button onClick={singInWighGoogle}>google ligin</button> */}
      <h1>Login</h1>
      <div className='login-box'>
        <Form onSubmit={handeluserSignIn} >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handelEmailBlur} type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handelPasswordBlur} type="password" placeholder="Password" required />
          </Form.Group>
          {
            loading && <p>loading....</p>
          }
          <p>{error?.message}</p>
          <Button variant="primary" type="submit">
            Login
          </Button>
          <Button onClick={handelResetPassword} className='ms-2' variant="primary" type="submit">
            Reset Password
          </Button>

          <p>You can Register Here: <Link to='/signup' className='fw-bold cursor-pointer'>Create an Account</Link></p>


        </Form>
        <SocialBtn></SocialBtn>
        <ToastContainer />

      </div>
    </div>
  );
};

export default Login;