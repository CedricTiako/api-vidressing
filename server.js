const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Configuration de Mongoose pour se connecter à la base de données MongoDB
mongoose.connect('mongodb://localhost:27017/vidressing', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Configuration de body-parser pour traiter les requêtes POST avec des données JSON
app.use(bodyParser.json());

// Configuration de CORS pour permettre les requêtes cross-domain
app.use(cors());

// Importation des routes
const routes = require('./routes');

// Configuration des routes
app.use('/api', routes);

// Démarrage du serveur
app.listen(3000, () => {
  console.log('Le serveur est démarré sur le port 3000');
});
