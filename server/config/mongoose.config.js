const mongoose = require('mongoose');
const db_name = "pet";

module.exports = () => mongoose.connect(process.env.mongoDB, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Successfully connected to the " + db_name + "database"))
    .catch((err) => {
        console.log("Something went wrong while connecting to the database " + db_name + ": ");
        console.log(err);
    });