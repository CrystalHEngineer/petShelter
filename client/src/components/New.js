import React, {useState} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

const New = (props) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errs, setErrs] = useState({});
    const [image, setImage] = useState("");

    

    const submitHandler = (e) => {
        e.preventDefault();

        console.log("I'm trying to create a pet.");

        axios.post("http://localhost:8000/pet", {
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
                    setErrs(res.data.errors);
                }
                else {
                    console.log(res.data)
                    navigate("/pet");
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <h1 className="detailsheader">Pet Shelter</h1>
            <Link to={`/pet`} classname="detailsheader" className="linkspace">back to home</Link>
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
                            <h6>Skills (Optional:)</h6>
                            <label>Skill 1: </label>
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
                            <label>Skill 2: </label>
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
                            <label>Skill 3: </label>
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
                        <button className="addpetbutton" type="submit">Add Pet</button>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default New;