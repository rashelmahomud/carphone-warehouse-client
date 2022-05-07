import React from 'react';
import { useSignInWithGithub } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import img from '../../../../src/social/github.png';
import auth from '../../firebase.init';

const SocialBtn = () => {
    const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error) {
        errorElement =
            <div>
                <p>Error: {error?.message} {error?.message}</p>
            </div>
    }

    if (user) {
        navigate('/home');
    }
    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{ height: '1px' }} className='bg-primary w-25'></div>
                <div><p className='mx-2'>or</p></div>
                <div style={{ height: '1px' }} className='bg-primary w-25'></div>
            </div>
            {errorElement}
            <div>
                <br />
                <button onClick={() => signInWithGithub()} className='btn btn-primary w-50'>
                    <img style={{ height: '30px' }} className='w-25 mx-3' src={img} alt="" />
                    Sign In
                </button>
            </div>
        </div>
    );
};

export default SocialBtn;