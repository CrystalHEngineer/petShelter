const PetController = require('../controllers/pet.controller');


module.exports = (app) => {
    app.get('/pet', PetController.listAll);
    app.post('/pet', PetController.create);
    app.get('/pet/:id', PetController.getOne);
    app.put('/pet/:id', PetController.update);
    // app.delete('/api/pet/:id', PetController.adopt);
    app.get('/pet/:id/payment', PetController.getOne);
    app.post('/pet/:id/payment', PetController.payment);

    // app.post("/pet/:id/payment", cors(), 
}