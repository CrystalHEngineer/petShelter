import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


const ListAll = (props) => {
    const [allPets, setAllPets] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/pet")
            .then((res) => {
                console.log(res.data);
                setAllPets(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    // const adoptPet = (petId) => {
    //     axios.pet(`http://localhost:3000/api/pet/${petId}`)
    //         .then((res) => {
    //             console.log(res.data);
    //             setAllPets(allPets.filter(
    //                 (petElement) => petElement._id !== petId))
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }

    return (
        <div>
            <Link to={`/pet/addpet`} className="homepage">add a pet to the shelter</Link>
            <h2 className="dashHeader">These pets are looking for a family.</h2>
            <div>
                <table className="headTable">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allPets.map((pet, index) => (
                                <tr key={index}>
                                    <td>
                                        {pet.name}
                                    </td>
                                    <td>
                                        {pet.type}
                                    </td>
                                    <td>
                                        <Link to={`/pet/${pet._id}`}>Details</Link> | <Link to={`/pet/${pet._id}/edit`}>Edit</Link> 
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
};

<div className="body">
            <div className="container">
                <div className="background"></div>
                <div className="content-area">
                    <div>
                        <h1 className="welcomeHeader">Welcome to A Pawfect Life</h1>
                        <h2 className="welcomeDescription">Our mission is to provide animals with the best care until they are adopted by their forever family.</h2>
                        <Link to={`/pet`} className="dashboardButton">Dashboard</Link>
                    </div>
                </div>
            </div>
        </div>

export default ListAll;