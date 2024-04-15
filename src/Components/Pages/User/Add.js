import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Add() {
    const { register, handleSubmit } = useForm();
    const navi = useNavigate();

    function saveData(data) {
        axios.post('http://localhost:5000/users', data)
        navi('/user/show')
    }
    return (
        <>
            <div className='container border border-4 w-75'>
                <center><u><b><h3>Airline form:</h3></b></u></center>
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
                   
                    
                    <input type='submit' value='Add' className='btn btn-outline-success col-6 btn-lg' />
                    <input type='reset' value='cancel' className='btn btn-outline-warning col-6 btn-lg' />
                </form>

            </div>
        </>
    )
}

export default Add