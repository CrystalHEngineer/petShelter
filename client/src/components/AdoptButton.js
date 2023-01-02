// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import {Link} from '@react';

// const AdoptButton = (props) => {
//     const [pet, setPet] = useState({});

//     const {_id, adoptPetFunct} = props


//     useEffect(() => {
//         axios.get('http://localhost:8000/api/pet/' + props.id)
//             .then((res) => {
//                 console.log(res.data);
//                 setPet(res.data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             })
//     }, []);

//     const adoptPet = (petId) => {
//         axios.delete(`http://localhost:8000/api/pet/${petId}`)
//             .then((res) => {
//                 console.log(res.data);
//                 console.log("pet ID: " + petId);

//                 return <Redirect to="/pet" />
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }
    
    
//     return (
//         <button className="adoptButton" onClick={() => adoptPetFunct(_id)}>Adopt {pet.name}</button>
//     )
// }


// const AdoptButton = (props) => {
//     const [allPets, setAllPets] = useState({});
//     const {_id, adoptPetFunct} = props

//     useEffect(() => {
//         axios.get("http://localhost:3000/api/pet")
//             .then((res) => {
//                 console.log(res.data);
//                 setAllPets(res.data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             })
//     }, {});

//     return(
//         <button onClick={() => adoptPetFunct(_id)}>Adopt</button>

//         {
//             allPets.map((pet, index) => (
//                 <button onClick={() => adoptPetFunct(_id)}>Adopt</button>
//             ))
//         }
//     )
// }

// export default AdoptButton;