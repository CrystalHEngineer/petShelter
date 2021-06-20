import React, {useEffect, useState} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';
import AdoptButton from './AdoptButton';

const Details = (props) => {
    const [pet, setPet] = useState({});
    const [name, setName] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/pet/' + props.id)
            .then((res) => {
                let pet = res.data;
                setName(pet.name);
                console.log(res.data);
                setPet(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    const payment = (petId) => {
        axios.get(`http://localhost:8000/pet/${petId}/payment`)
            // .then((res) => {
            //     console.log(res.data);
            //     console.log("pet ID: " + petId);

            //     navigate(`/pet/${petId}/success`)
            // })
            // .catch((err) => {
            //     console.log(err);
            // })
    }

    // const adoptPet = (petId) => {
    //     axios.delete(`http://localhost:8000/api/pet/${petId}`)
    //         .then((res) => {
    //             console.log(res.data);
    //             console.log("pet ID: " + petId);

    //             navigate('/pet')
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }

    return  (
        <div className="container">
            <h1 className="detailsheader">Pet Shelter</h1>
            <Link to={`/pet`} classname="detailsheader" className="linkspace">back to home</Link>
            <h2 className="secondheader">Details about: {pet.name}</h2>
            <Link className="secondheader" className="AdoptButton" to={`/pet/${pet._id}/payment`}>Adopt {pet.name}</Link>
            <div className="detailssect">
                <div>
                    <p className="type">Pet Type: </p>
                    <p className="type">{pet.type}</p>
                </div>
                <div>
                    <p className="description">Description: </p>
                    <p className="description">{pet.description}</p>
                </div>
                <div>
                    <p className="image">Photo of {pet.name}</p>
                    <img className="pic" src={pet.image}/>
                </div>
                <div className="skill top">
                    <p>Skills: </p>
                </div>
                <div className="skill">
                    <p>{pet.skill1}</p>
                    <p>{pet.skill2}</p>
                    <p >{pet.skill3}</p>
                </div>
            </div>
        </div>
    )
};

export default Details;