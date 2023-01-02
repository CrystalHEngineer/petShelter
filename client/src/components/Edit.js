import React, {useState, useEffect} from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';

const Edit = (props) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill, setSkill] = useState("");
    const [errs, setErrs] = useState({});
    const [image, setImage] = useState("");

    const [pet, setPet] = useState({});
    


    useEffect(() => {
        axios.get('http://localhost:8000/pet/' + props.match.params.id)
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

        axios.put("http://localhost:8000/pet/" + props.match.params.id, {
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
        <div>
            <h1 className="detailsheader">Pet Shelter</h1>
            <Link to={`/pet`} className="linkspace">back to home</Link>
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
                        <label className="skillheaders">Skills: </label>
                        <input type="text"
                            name="skill"
                            value={skill}
                            onChange={(e) => setSkill (e.target.value)} />
                            {
                                errs.skill ? 
                                    <span>{errs.skill.message}</span>
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