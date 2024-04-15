import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Show() {
    const [users, setUser] = useState([])

    async function fetchData(){
        const result = await axios.get('http://localhost:5000/users');
        setUser(result.data);
    }

    useEffect(()=>{
        fetchData();
    }, [])
  return (
    <>
        <table className="table table-dark table-striped">
            <thead>
                <tr>
                    <th>Name:</th>
                    <th>Gate:</th>
                    <th>Gate Close:</th>
                    <th>Class:</th>
                    <th>Seat No:</th>
                    <th>Location:</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((obj)=>{
                        return(
                            <tr>
                                
                                <td>{obj.name}</td>
                                <td>{obj.gate}</td>
                                <td>{obj.close}</td>
                                <td>{obj.class}</td>
                                <td>{obj.seat}</td>
                                <td>{obj.location}</td>
                                 <td>
                                    <NavLink to={`/user/update/${obj.id}`}><button className="btn btn-outline-warning btn-sm me-3">UPDATE</button></NavLink>
                                    <NavLink to={`/user/delete/${obj.id}`}><button className="btn btn-outline-danger btn-sm" >DELETE</button></NavLink>
                                </td>
                            </tr>
                    )
                    })
                }
            </tbody>
        </table>
    </>
  )
}

export default Show