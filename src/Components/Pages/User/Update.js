import React from 'react';
import { useEffect } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';

function Update() {
    const { register, handleSubmit, setValue } = useForm();
    const { userId } = useParams();
    const navi = useNavigate();

    async function fetchData() {
        const result = await axios.get(`http://localhost:5000/users/${userId}`)
        setValue('name', result.data.name);
        setValue('gate', result.data.gate);
        setValue('close', result.data.close);
        setValue('class', result.data.class);
        setValue('seat', result.data.seat);
        setValue('location', result.data.location);
        
        
    }

    function saveData(data) {
        axios.put(`http://localhost:5000/users/${userId}`, data)
        navi('/user/show')
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <>
            <div className='container'>
                <center><u><b><h1>Update form</h1></b></u></center>
                <form onSubmit={handleSubmit(saveData)} className='m-auto'>
                    <label htmlFor='n'>Name Passenger</label>
                    <input type='text' id='n' className='form-control'
                        {...register('name')} />
                    <br /><br />
                    <label htmlFor='g'>Gate</label>
                    <input type='number' id='g' className='form-control'
                        {...register('gate')} />
                    <br /><br />
                    <label htmlFor='c'>Gate Close</label>
                    <input type='time' id='c' className='form-control'
                        {...register('close')} />
                    <br /><br />
                    <label htmlFor='cl'>Class</label>
                    <input type='text' id='cl' className='form-control'
                        {...register('class')} />
                    <br /><br />
                    <label htmlFor='no'>Seat NO</label>
                    <input type='number' id='no' className='form-control'
                        {...register('seat')} />
                    <br /><br />
                    <label htmlFor='l'>Loaction</label>
                    <input type='text' id='l' className='form-control'
                        {...register('location')} />
                    <br /><br />
                    <input type='submit' value='update' className='btn btn-outline-success col-6 btn-lg' />
                    <NavLink to='/user/show'><input type='reset' value='cancel' className='btn btn-outline-warning col-6 btn-lg' /></NavLink>
                </form>
            </div>
        </>
    )
}

export default Update