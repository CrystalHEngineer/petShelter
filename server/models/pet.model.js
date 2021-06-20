const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "You must have a name for pet."],
        minlength: [3, "Name must be at least 3 characters long."],
    },
    type: {
        type: String,
        required: [true, "You must have a breed type for pet."],
        minlength: [3, "Breed must be at least 3 characters long."],
    },
    description: {
        type: String,
        required: [true, "You must have a description for pet."],
        minlength: [3, "Description must be at least 3 characters long."],
    },
    skill1: {
        type: String,
    },
    skill2: {
        type: String,
    },
    skill3: {
        type: String,
    },
    image: {
        type: String,
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Pet", PetSchema);