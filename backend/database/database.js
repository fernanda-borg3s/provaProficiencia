const mongoose = require('mongoose');

const connetcDatabase = () => {
    console.log("Wait, connectig");
// por enquanto isso esta no git ignore
    mongoose.connect("<Coloque a BASEURL gerada no mongo>",
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((error) => console.log(error));
};

module.exports = connetcDatabase;