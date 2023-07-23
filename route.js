const express = require('express');
const router = express.Router();

const vendeurProController = require('../controllers/vendeurProController');
const personneFortuneeController = require('../controllers/personneFortuneeController');
const articleController = require('../controllers/articleController');
const evaluationController = require('../controllers/evaluationController');

// Routes pour les vendeurs professionnels
router.post('/vendeurs-pro', vendeurProController.creerVendeurPro);
router.get('/vendeurs-pro', vendeurProController.recupererVendeursPro);
router.get('/vendeurs-pro/:id', vendeurProController.recupererVendeurPro);
router.put('/vendeurs-pro/:id', vendeurProController.mettreAJourVendeurPro);
router.delete('/vendeurs-pro/:id', vendeurProController.supprimerVendeurPro);

// Routes pour les personnes fortunées
router.post('/personnes-fortunees', personneFortuneeController.creerPersonneFortunee);
router.get('/personnes-fortunees', personneFortuneeController.recupererPersonnesFortunees);
router.get('/personnes-fortunees/:id', personneFortuneeController.recupererPersonneFortunee);
router.put('/personnes-fortunees/:id', personneFortuneeController.mettreAJourPersonneFortunee);
router.delete('/personnes-fortunees/:id', personneFortuneeController.supprimerPersonneFortunee);

// Routes pour les articles
router.post('/articles', articleController.creerArticle);
router.get('/articles', articleController.recupererArticles);
router.get('/articles/:id', articleController.recupererArticle);
router.put('/articles/:id', articleController.mettreAJourArticle);
router.delete('/articles/:id', articleController.supprimerArticle);

// Routes pour les évaluations
router.post('/evaluations', evaluationController.creerEvaluation);
router.get('/evaluations', evaluationController.recupererEvaluations);
router.get('/evaluations/:id', evaluationController.recupererEvaluation);
router.put('/evaluations/:id', evaluationController.mettreAJourEvaluation);
router.delete('/evaluations/:id', evaluationController.supprimerEvaluation);

module.exports = router;
