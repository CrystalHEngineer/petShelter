import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import { URLBASE } from '../consts';

const AddPet = (props) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    // const [skill, setSkill] = useState("");
    const [errs, setErrs] = useState({});
    const [image, setImage] = useState("");
    console.log("Trying to show new.")
    

    const submitHandler = (e) => {
        e.preventDefault();

        console.log("I'm trying to create a pet.");

        axios.post(URLBASE + "pet", {
            name: name,
            type: type,
            description: description,
            // skill: skill,
            image: image
        })
            .then((res) => {
                if(res.data.errors){
                    console.log(res.data.errors);
                    setErrs(res.data.errors);
                }
                else {
                    console.log(res.data)
                    return (<Redirect to="/pet" />)
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className="container">
            <div className="addPetForm">

                <h2 className="addPetHeader">Know A Pet Needing A Home?</h2>
                <form onSubmit={submitHandler}>
                
                    
                        <div>
                            <label className="addPetLabel">Pet Name: </label>
                                <input className="addPetInput" type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName (e.target.value)} />
                                    {
                                        errs.name ? 
                                            <span>{errs.name.message}</span>
                                            :null
                                    }
                        </div>


                        <div>
                            <label className="addPetLabel">Pet Type: </label>
                                <input className="addPetInput" type="text"
                                    name="type"
                                    value={type}
                                    onChange={(e) => setType (e.target.value)} />
                                    {
                                        errs.type ? 
                                            <span>{errs.type.message}</span>
                                            :null
                                    }
                        </div>


                        <div>
                            <label className="addPetLabelDesc">Pet Description: </label>
                            <input className="addPetInput" type="text"
                                name="description"
                                value={description}
                                onChange={(e) => setDescription (e.target.value)} />
                                {
                                    errs.description ? 
                                        <span>{errs.description.message}</span>
                                        :null
                                }
                        </div>


                        <div>
                            <label className="addPetLabel">Pet Photo: </label>
                            <input className="addPetInput" type="text"
                            name="image"
                            value={image}
                            placeholder="Paste photo link here."
                            onChange={(e) => setImage (e.target.value)} />
                            {
                                errs.image ? 
                                    <span>{errs.image.message}</span>
                                    :null
                            }
                        </div>


                    
                    <div>
                        <button className="addPetButton" type="submit">Add Pet</button>
                    </div>
            
                </form>
            </div>
        </div>
    )
};

export default AddPet;