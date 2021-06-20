import React, {useState, useEffect} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

const Edit = (props) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errs, setErrs] = useState({});
    const [image, setImage] = useState("");

    const [pet, setPet] = useState({});
    


    useEffect(() => {
        axios.get('http://localhost:8000/pet/' + props.id)
            .then((res) => {
                console.log(res.data);

                setPet(res.data);
                let pet = res.data;
                setName(pet.name);
                setType(pet.type);
                setDescription(pet.description);
                setSkill1(pet.skill1);
                setSkill2(pet.skill2);
                setSkill3(pet.skill3);
                setImage(pet.image);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);


    const submitHandler = (e) => {
        e.preventDefault();

        axios.put("http://localhost:8000/pet/" + props.id, {
            name: name,
            type: type,
            description: description,
            skill1: skill1,
            skill2: skill2,
            skill3, skill3,
            image: image
        })
            .then((res) => {
                if(res.data.errors){
                    console.log(res.data.errors);
                    setErrs(res.data.errors)
                }
                else{
                    console.log(res.data);
                    navigate("/pet/" + props.id);
                }
            })
    }

    return (
        <div>
            <h1 className="detailsheader">Pet Shelter</h1>
            <Link to={`/pet`} classname="detailsheader" className="linkspace">back to home</Link>
            <h2>Edit {pet.name}</h2>
            <form onSubmit={submitHandler}>
                <div className="box1">
                    <div className="edit">
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
                    <div className="edit">
                        <label>Pet type: </label>
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
                    <div className="edit">
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
                    <div className="edit">
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
                <div className="box1">
                    <div>
                        <h6>Skills (Optional:)</h6>
                        <label className="skillheaders">Skill 1: </label>
                        <input type="text"
                            name="skill1"
                            value={skill1}
                            onChange={(e) => setSkill1 (e.target.value)} />
                            {
                                errs.skill1 ? 
                                    <span>{errs.skill1.message}</span>
                                    :null
                            }
                    </div>
                    <div>
                        <label className="skillheaders">Skill 2: </label>
                        <input type="text"
                            name="skill2"
                            value={skill2}
                            onChange={(e) => setSkill2 (e.target.value)} />
                            {
                                errs.skill2 ? 
                                    <span>{errs.skill2.message}</span>
                                    :null
                            }
                    </div>
                    <div>
                        <label className="skillheaders">Skill 3: </label>
                        <input type="text"
                            name="skill3"
                            value={skill3}
                            onChange={(e) => setSkill3 (e.target.value)} />
                            {
                                errs.skill3 ? 
                                    <span>{errs.skill3.message}</span>
                                    :null
                            }
                    </div>
                </div>
                <div>
                    <button className="addpetbutton" type="submit">Edit Pet</button>
                </div>
            </form>
        </div>
    )
};

export default Edit;