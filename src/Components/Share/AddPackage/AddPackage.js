import React from 'react';
import { useForm } from 'react-hook-form';

const AddPackage = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);

        const url = `https://arcane-sierra-49316.herokuapp.com/service`;
        console.log(url);
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    };

    return (
        <div>
            <h1>All Your Favorite</h1>
            <form className='m-5 d-flex mx-auto flex-column w-50' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Enter Your Name' className='mt-3' {...register("name", { required: true, maxLength: 20 })} />

                <textarea placeholder='Writen your text-' className='mt-3' {...register("description")} />
                <input placeholder='Price' className='mt-3' type="number" {...register("cost")} />
                <input placeholder='Img URL' className='mt-3' type="text" {...register("img")} />
                <input type="submit" />
            </form>

        </div>
    );
};

export default AddPackage;