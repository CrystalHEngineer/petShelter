import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import { URLBASE } from '../consts';

const AddPet = (props) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill, setSkill] = useState("");
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
            skill: skill,
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
        <div>
            <h1 className="detailsheader">Pet Shelter</h1>
            <Link to={`/pet`} className="linkspace">back to home</Link>
            <h2>Know a pet needing a home?</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <div className="new">
                        <div>
                            <label>Pet Name: </label>
                                <input type="text"
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
                            <label>Pet Type: </label>
                                <input type="text"
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
                            <label>Pet Description: </label>
                            <input type="text"
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
                            <label>Pet Photo: </label>
                            <input type="text"
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
                    </div>
                    <div className="new">
                        <div>
                            <label>Skills (Optional): </label>
                            <input type="text"
                                name="skill1"
                                value={skill}
                                onChange={(e) => setSkill (e.target.value)} />
                                {
                                    errs.skill1 ? 
                                        <span>{errs.skill1.message}</span>
                                        :null
                                }
                        </div>
                    </div>
                    <div>
                        <button className="addpetbutton" type="submit">Add Pet</button>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default AddPet;