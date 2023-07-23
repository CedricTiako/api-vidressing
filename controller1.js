const { Client } = require('../models/client');
const { Produit } = require('../models/produit');
const { Commande } = require('../models/commande');
const { Panier } = require('../models/panier');
const { Livraison } = require('../models/livraison');
const { Paiement } = require('../models/paiement');
const { Categorie } = require('../models/categorie');
const { Marque } = require('../models/marque');
const { Image } = require('../models/image');

// Contrôleur pour l'entité Client
const clientController = {
  // Ajouter un client
  async ajouterClient(req, res) {
    try {
      const client = new Client(req.body);
      await client.save();
      res.status(201).send(client);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  // Modifier un client
  async modifierClient(req, res) {
    try {
      const client = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.send(client);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  // Supprimer un client
  async supprimerClient(req, res) {
    try {
      const client = await Client.findByIdAndDelete(req.params.id);
      if (!client) {
        return res.status(404).send();
      }
      res.send(client);
    } catch (error) {
      res.status(500).send(error);
    }
  }
};

// Contrôleur pour l'entité Produit
const produitController = {
  // Ajouter un produit
  async ajouterProduit(req, res) {
    try {
      const produit = new Produit(req.body);
      await produit.save();
      res.status(201).send(produit);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  // Modifier un produit
  async modifierProduit(req, res) {
    try {
      const produit = await Produit.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.send(produit);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  // Supprimer un produit
  async supprimerProduit(req, res) {
    try {
      const produit = await Produit.findByIdAndDelete(req.params.id);
      if (!produit) {
        return res.status(404).send();
      }
      res.send(produit);
    } catch (error) {
      res.status(500).send(error);
    }
  }
};

// Contrôleur pour l'entité Commande
const commandeController = {
  // Ajouter une commande
  async ajouterCommande(req, res) {
    try {
      const commande = new Commande(req.body);
      await commande.save();
      res.status(201).send(commande);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  // Modifier une commande
  async modifierCommande(req, res) {
    try {
      const commande = await Commande.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.send(commande);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  // Supprimer une commande
  async supprimerCommande(req, res) {
    try {
      const commande = await Commande.findByIdAndDelete(req.params.id);
      if (!commande) {
        return res.status(404).send();
      }
      res.send(commande);
    } catch (error) {
      res.status(500).send(error);
    }
  }
};

// Contrôleur pour l'entité Panier
const panierController = {
  // Ajouter un panier
  async ajouterPanier(req, res) {
    try {
      const panier = new Panier(req.body);
      await panier.save();
      res.status(201).send(panier);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  // Modifier un panier
  async modifierPanier(req, res) {
    try {
      const panier = await Panier.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.send(panier);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  // Supprimer un panier
  async supprimerPanier(req, res) {
    try {
      const panier = await Panier.findByIdAndDelete(req.params.id);
      if (!panier) {
        return res.status(404).send();
      }
      res.send(panier);
    } catch (error) {
      res.status(500).send(error);
    }
  }
};

// Contrôleur pour l'entité Livraison
const livraisonController = {
  // Ajouter une livraison
  async ajouterLivraison(req, res) {
    try {
      const livraison = new Livraison(req.body);
      await livraison.save();
      res.status(201).send(livraison);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  // Modifier une livraison
  async modifierLivraison(req, res) {
    try {
      const livraison = await Livraison.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.send(livraison);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  // Supprimer une livraison
  async supprimerLivraison(req, res) {
    try {
      const livraison = await Livraison.findByIdAndDelete(req.params.id);
      if (!livraison) {
        return res.status(404).send();
      }
      res.send(livraison);
    } catch (error) {
      res.status(500).send(error);
    }
  }
};

// Contrôleur pour l'entité Paiement
const paiementController = {
  // Ajouter un paiement
  async ajouterPaiement(req, res) {
    try {
      const paiement = new Paiement(req.body);
      await paiement.save();
      res.status(201).send(paiement);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  // Modifier un paiement
  async modifierPaiement(req, res) {
    try {
      const paiement = await Paiement.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.send(paiement);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  // Supprimer un paiement
  async supprimerPaiement(req, res) {
    try {
      const paiement = await Paiement.findByIdAndDelete(req.params.id);
      if (!paiement) {
        return res.status(404).send();
      }
      res.send(paiement);
    } catch (error) {
      res.status(500).send(error);
    }
  }
};

// Contrôleur pour l'entité Categorie
const categorieController = {
  // Ajouter une categorie
  async ajouterCategorie(req, res) {
    try {
      const categorie = new Categorie(req.body);
      await categorie.save();
      res.status(201).send(categorie);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  // Modifier une categorie
  async modifierCategorie(req, res) {
    try {
      const categorie = await Categorie.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.send(categorie);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  // Supprimer une categorie
  async supprimerCategorie(req, res) {
    try {
      const categorie = await Categorie.findByIdAndDelete(req.params.id);
      if (!categorie) {
        return res.status(404).send();
      }
      res.send(categorie);
    } catch (error) {
      res.status(500).send(error);
    }
  }
};

// Contrôleur pour l'entité Marque
const marqueController = {
  // Ajouter une marque
  async ajouterMarque(req, res) {
    try {
      const marque = new Marque(req.body);
      await marque.save();
      res.status(201).send(marque);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  // Modifier une marque
  async modifierMarque(req, res) {
    try {
      const marque = await Marque.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.send(marque);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  // Supprimer une marque
  async supprimerMarque(req, res) {
    try {
      const marque = await Marque.findByIdAndDelete(req.params.id);
      if (!marque) {
        return res.status(404).send();
      }
      res.send(marque);
    } catch (error) {
      res.status(500).send(error);
    }
  }
};

// Contrôleur pour l'entité Image
const imageController = {
  // Ajouter une image
  async ajouterImage(req, res) {
    try {
      const image = new Image(req.body);
      await image.save();
