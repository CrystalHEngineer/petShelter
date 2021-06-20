const mongoose = require('mongoose');
const db_name = "pet";

mongoose.connect("mongodb://localhost/" + db_name, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Successfully connected to the " + db_name + "database"))
    .catch((err) => {
        console.log("Something went wrong while connecting to the database " + db_name + ": ");
        console.log(err);
    });