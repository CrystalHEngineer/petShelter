import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Details = (props) => {
    const [pet, setPet] = useState({});
    const [name, setName] = useState("");
    console.log(pet);
    console.log(props);
    useEffect(() => {
        axios.get('http://localhost:8000/pet/' + props.match.params.id) 
            .then((res) => {
                console.log(res);
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
        axios.get(`http://localhost:8000/pet/${props.match.params.id}/payment`)
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
        <section>
        <div className="container">

            <div className="boxDetails">

                    


                    <div className="petDetails">
                        <img className="detailsPic" src={pet.image}/>
                        <h2 className="detailsHeader">Hi! My name is {pet.name}</h2>
                        <p className="detailsDescription">{pet.description}</p> 
                        <Link   to={`/pet/${pet._id}/payment`}><button className="adoptBtn">Adopt {pet.name}</button></Link>
                    </div>
                    

                </div>


            </div>
        </section>
        
    )
};

export default Details;