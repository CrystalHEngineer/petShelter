import React, {useState, useEffect} from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import { URLBASE } from '../consts';

const Edit = (props) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill, setSkill] = useState("");
    const [errs, setErrs] = useState({});
    const [image, setImage] = useState("");

    const [pet, setPet] = useState({});
    


    useEffect(() => {
        axios.get(URLBASE + 'pet/' + props.match.params.id)
            .then((res) => {
                console.log(res.data);

                setPet(res.data);
                let pet = res.data;
                setName(pet.name);
                setType(pet.type);
                setDescription(pet.description);
                setSkill(pet.skill);
                setImage(pet.image);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);


    const submitHandler = (e) => {
        e.preventDefault();

        axios.put(URLBASE + "pet/" + props.match.params.id, {
            name: name,
            type: type,
            description: description,
            skill: skill,
            image: image
        })
            .then((res) => {
                if(res.data.errors){
                    console.log(res.data.errors);
                    setErrs(res.data.errors)
                }
                else{
                    console.log(res.data);
                    return <Redirect to={`/pet/${pet.id}`} />
                }
            })
    }

    return (
        <div className="container">
            <div className="addPetForm">

            <h2 className="addPetHeader">Edit {pet.name}</h2>
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


                    <div className="edit">
                        <label className="addPetLabel">Pet type: </label>
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


                    <div className="edit">
                        <label className="addPetLabel">Pet Description: </label>
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


                    <div className="edit">
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
                        <button className="addPetButton" type="submit">Edit Pet</button>
                    </div>

                </form>
            </div>
        </div>
    )
};

export default Edit;