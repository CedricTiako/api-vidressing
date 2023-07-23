const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const firebase = require('firebase/app');
require('firebase/storage');
const Article = require('./models/Article');

// Configuration de Firebase
firebase.initializeApp({
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID'
});
const storageRef = firebase.storage().ref();

// Route pour créer un nouvel article
router.post('/articles', upload.array('photos'), async (req, res) => {
  try {
    const photos = [];

    // Téléchargement des fichiers sur Firebase Storage
    for (let i = 0; i < req.files.length; i++) {
      const file = req.files[i];
      const snapshot = await storageRef.child(`photos/${file.originalname}`).put(file.buffer);
      const downloadURL = await snapshot.ref.getDownloadURL();
      photos.push(downloadURL);
    }

    // Création de l'article
    const article = new Article({
      titre: req.body.titre,
      description: req.body.description,
      prix: req.body.prix,
      photos: photos,
      id_vendeur_pro: req.body.id_vendeur_pro,
      id_personne_fortunee: req.body.id_personne_fortunee,
    });

    await article.save();

    res.status(201).json(article);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur lors de la création de l\'article' });
  }
});

module.exports = router;
