const Pet = require('../models/pet.model');
const stripelib = require('stripe');
const stripe = stripelib(process.env.STRIPE_SECRET_TEST);
// const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)


module.exports = {
    create: (req, res) => {
        console.log(req.body);

        Pet.create(req.body)
            .then((newPet) => {
                console.log(newPet);
                res.json(newPet);
            })
            .catch((err) => {
                console.log("Error found in create.");
                console.log(err);
                res.json(err);
            });
    },

    listAll: (req, res) => {
        Pet.find({})
            .then((allPets) => {
                console.log(allPets);
                res.json(allPets);
            })
            .catch((err) => {
                console.log("Error found in listAll.");
                console.log(err);
                res.json(err);
            });
    },

    getOne: (req, res) => {
        console.log(req.params.id);

        Pet.findById(req.params.id)
            .then((onePet) => {
                console.log(onePet);
                res.json(onePet);
            })
            .catch((err) => {
                console.log("Error found in getOne.");
                console.log(err);
                res.json(err);
            });
    },

    update: (req, res) => {
        console.log(req.body);
        console.log(req.params.id);

        Pet.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })
            .then((updatedPet) => {
                console.log(updatedPet);
                res.json(updatedPet);
            })
            .catch((err) => {
                console.log("Error found in update.");
                console.log(err);
                res.json(err);
            });
    },


    payment: async (request, response) => {
        // console.log(req.params.id);
        // once payment is successful, we will want to mark the pet as adopted in the database. 
        let {amount, id} = request.body
        try {
            const payment = await stripe.paymentIntents.create({
                amount,
                currency: "USD",
                description: "Cute animal",
                payment_method: id,
                confirm: true
            })
            console.log("Payment", payment)
            response.json({
                message: "Payment successful!",
                success: true
            })
    
        } catch (error) {
            console.log("Error", error),
            response.json({
                message: "Payment failed",
                success: false
            })
        }
    },

    adopt: (req, res) => {
        console.log(req.params.id);

        Pet.findByIdAndDelete(req.params.id)
            .then((adoptPet) => {
                console.log(adoptPet);
                res.json(adoptPet);
            })
            .catch((err) => {
                console.log("Error found in delete.");
                console.log(err);
                res.json(err);
            });
    },
}