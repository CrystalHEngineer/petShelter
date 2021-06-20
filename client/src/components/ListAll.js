import React, { useEffect, useState } from 'react';
import {Link, navigate} from '@reach/router';
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
            <h1 className="detailsheader">Pet Shelter</h1>
            <Link to={`/pet/new`} className="detailsheader" className="homepage">add a pet to the shelter</Link>
            <h2>These pets are looking for a good home</h2>
            <div>
                <table className="headTable">
                    <thead>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
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

export default ListAll;