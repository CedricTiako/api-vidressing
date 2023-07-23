Voici des exemples de contrôleurs pour les modèles de schémas que vous avez fournis. Ces contrôleurs utilisent les méthodes CRUD (Create, Read, Update, Delete) pour gérer les entités de l'application Vidressing :

```
const VendeurPro = require('../models/vendeurPro');
const PersonneFortunee = require('../models/personneFortunee');
const Article = require('../models/article');
const Categorie = require('../models/categorie');
const ArticleCategorie = require('../models/articleCategorie');
const Evaluation = require('../models/evaluation');

// Contrôleur pour créer un nouveau vendeur professionnel
exports.creerVendeurPro = function (req, res) {
  const nouveauVendeurPro = new VendeurPro({
    nom: req.body.nom,
    adresse: req.body.adresse,
    email: req.body.email,
    telephone: req.body.telephone,
  });

  nouveauVendeurPro.save(function (err) {
    if (err) {
      res.status(500).send({ message: "Erreur lors de la création du vendeur professionnel : " + err });
    } else {
      res.status(201).send({ message: "Vendeur professionnel créé avec succès !" });
    }
  });
};

// Contrôleur pour récupérer tous les vendeurs professionnels
exports.recupererVendeursPro = function (req, res) {
  VendeurPro.find({}, function (err, vendeursPro) {
    if (err) {
      res.status(500).send({ message: "Erreur lors de la récupération des vendeurs professionnels : " + err });
    } else {
      res.status(200).send(vendeursPro);
    }
  });
};

// Contrôleur pour récupérer un vendeur professionnel par son ID
exports.recupererVendeurPro = function (req, res) {
  VendeurPro.findById(req.params.id, function (err, vendeurPro) {
    if (err) {
      res.status(500).send({ message: "Erreur lors de la récupération du vendeur professionnel : " + err });
    } else if (!vendeurPro) {
      res.status(404).send({ message: "Vendeur professionnel non trouvé" });
    } else {
      res.status(200).send(vendeurPro);
    }
  });
};

// Contrôleur pour mettre à jour un vendeur professionnel par son ID
exports.mettreAJourVendeurPro = function (req, res) {
  VendeurPro.findByIdAndUpdate(req.params.id, req.body, function (err, vendeurPro) {
    if (err) {
      res.status(500).send({ message: "Erreur lors de la mise à jour du vendeur professionnel : " + err });
    } else if (!vendeurPro) {
      res.status(404).send({ message: "Vendeur professionnel non trouvé" });
    } else {
      res.status(200).send({ message: "Vendeur professionnel mis à jour avec succès !" });
    }
  });
};

// Contrôleur pour supprimer un vendeur professionnel par son ID
exports.supprimerVendeurPro = function (req, res) {
  VendeurPro.findByIdAndDelete(req.params.id, function (err, vendeurPro) {
    if (err) {
      res.status(500).send({ message: "Erreur lors de la suppression du vendeur professionnel : " + err });
    } else if (!vendeurPro) {
      res.status(404).send({ message: "Vendeur professionnel non trouvé" });
    } else {
      res.status(200).send({ message: "Vendeur professionnel supprimé avec succès !" });
    }
  });
};

// Contrôleur pour créer une nouvelle personne fortunée
exports.creerPersonneFortunee = function (req, res) {
  const nouvellePersonneFortunee = new PersonneFortunee({
    nom: req.body.nom,
    adresse: req.body.adresse,
    email: req.body.email,
    telephone: req.body.telephone,
  });

  nouvellePersonneFortunee.save(function (err) {
    if (err) {
      res.status(500).send({ message: "Erreur lors de la création de la personne fortunée : " + err });
    } else {
      res.status(201).send({ message: "Personne fortunée créée avec succès !" });
    }
  });
};

// Contrôleur pour récupérer toutes les personnes fortunées
exports.recupererPersonnesFortunees = function (req, res) {
  PersonneFortunee.find({}, function (err, personnesFortunees) {
    if (err) {
     res.status(500).send({ message: "Erreur lors de la récupération des personnes fortunées : " + err });
    } else {
      res.status(200).send(personnesFortunees);
    }
  });
};

// Contrôleur pour récupérer une personne fortunée par son ID
exports.recupererPersonneFortunee = function (req, res) {
  PersonneFortunee.findById(req.params.id, function (err, personneFortunee) {
    if (err) {
      res.status(500).send({ message: "Erreur lors de la récupération de la personne fortunée : " + err });
    } else if (!personneFortunee) {
      res.status(404).send({ message: "Personne fortunée non trouvée" });
    } else {
      res.status(200).send(personneFortunee);
    }
  });
};

// Contrôleur pour mettre à jour une personne fortunée par son ID
exports.mettreAJourPersonneFortunee = function (req, res) {
  PersonneFortunee.findByIdAndUpdate(req.params.id, req.body, function (err, personneFortunee) {
    if (err) {
      res.status(500).send({ message: "Erreur lors de la mise à jour de la personne fortunée : " + err });
    } else if (!personneFortunee) {
      res.status(404).send({ message: "Personne fortunée non trouvée" });
    } else {
      res.status(200).send({ message: "Personne fortunée mise à jour avec succès !" });
    }
  });
};

// Contrôleur pour supprimer une personne fortunée par son ID
exports.supprimerPersonneFortunee = function (req, res) {
  PersonneFortunee.findByIdAndDelete(req.params.id, function (err, personneFortunee) {
    if (err) {
      res.status(500).send({ message: "Erreur lors de la suppression de la personne fortunée : " + err });
    } else if (!personneFortunee) {
      res.status(404).send({ message: "Personne fortunée non trouvée" });
    } else {
      res.status(200).send({ message: "Personne fortunée supprimée avec succès !" });
    }
  });
};

// Contrôleur pour créer un nouvel article
exports.creerArticle = function (req, res) {
  const nouvelArticle = new Article({
    titre: req.body.titre,
    description: req.body.description,
    prix: req.body.prix,
    photo: req.body.photo,
    id_vendeur_pro: req.body.id_vendeur_pro,
    id_personne_fortunee: req.body.id_personne_fortunee,
  });

  nouvelArticle.save(function (err) {
    if (err) {
      res.status(500).send({ message: "Erreur lors de la création de l'article : " + err });
    } else {
      res.status(201).send({ message: "Article créé avec succès !" });
    }
  });
};

// Contrôleur pour récupérer tous les articles
exports.recupererArticles = function (req, res) {
  Article.find({}, function (err, articles) {
    if (err) {
      res.status(500).send({ message: "Erreur lors de la récupération des articles : " + err });
    } else {
      res.status(200).send(articles);
    }
  });
};

// Contrôleur pour récupérer un article par son ID
exports.recupererArticle = function (req, res) {
  Article.findById(req.params.id, function (err, article) {
    if (err) {
      res.status(500).send({ message: "Erreur lors de la récupération de l'article : " + err });
    } else if (!article) {
      res.status(404).send({ message: "Article non trouvé" });
    } else {
      res.status(200).send(article);
    }
  });
};

// Contrôleur pour mettre à jour un article par son ID
exports.mettreAJourArticle = function (req, res) {
  Article.findByIdAndUpdate(req.params.id, req.body, function (err, article) {
    if (err) {
      res.status(500).send({ message: "Erreur lors de la mise à jour de l'article : " + err });
    } else if (!article) {
      res.status(404).send({ message: "Article non trouvé" });
    } else {
      res.status(200).send({ message: "Article mis à jour avec succès !" });
    }
  });
};

// Contrôleur pour supprimer un article par son ID
exports.supprimerArticle = function (req, res) {
  Article
