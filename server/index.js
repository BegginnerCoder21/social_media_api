const express = require('express');
const app = express();
require('dotenv').config();
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const dbConnect = require('./config/dbConnect');
router = require('./routes/mainRoute');



app.use(express.json());
app.use(express.urlencoded({extended : true}));

// app.use(cors());
// app.use(helmet());

//Connexion à la base donnée
dbConnect();

app.use('/api', router);

mongoose.connection.once('open', () => {
    console.log("Connexion à la db effectué avec succès");
    app.listen(process.env.PORT, () => {
        console.log('Le serveur écoute votre requête.');
    });
});
