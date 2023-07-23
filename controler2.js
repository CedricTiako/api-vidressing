// Contrôleur pour l'entité Client
const clientController = {
  // Ajouter un client
  async ajouterClient(req, res) {
    try {
      const client = new Client();
      client.nom = req.body.nom;
      client.prenom = req.body.prenom;
      client.adresse = req.body.adresse;
      client.email = req.body.email;
      client.telephone = req.body.telephone;
      await client.save();
      res.status(201).send(client);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  // Modifier un client
  async modifierClient(req, res) {
    try {
      const client = await Client.findByIdAndUpdate(req.params.id);
      client.nom = req.body.nom;
      client.prenom = req.body.prenom;
      client.adresse = req.body.adresse;
      client.email = req.body.email;
      client.telephone = req.body.telephone;
      await client.save();
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
      const produit = new Produit();
      produit.nom = req.body.nom;
      produit.description = req.body.description;
      produit.prix = req.body.prix;
      produit.quantite = req.body.quantite;
      produit.photo = req.body.photo;
      produit.categorie = req.body.categorie;
      produit.marque = req.body.marque;
      await produit.save();
      res.status(201).send(produit);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  // Modifier un produit
  async modifierProduit(req, res) {
    try {
      const produit = await Produit.findByIdAndUpdate(req.params.id);
      produit.nom = req.body.nom;
      produit.description = req.body.description;
      produit.prix = req.body.prix;
      produit.quantite = req.body.quantite;
      produit.photo = req.body.photo;
      produit.categorie = req.body.categorie;
      produit.marque = req.body.marque;
      await produit.save();
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
      const commande = new Commande();
      commande.date = req.body.date;
      commande.client = req.body.client;
      commande.produits = req.body.produits;
      commande.prixTotal = req.body.prixTotal;
      commande.livraison = req.body.livraison;
      commande.paiement = req.body.paiement;
      await commande.save();
      res.status(201).send(commande);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  // Modifier une commande
  async modifierCommande(req, res) {
    try {
      const commande = await Commande.findByIdAndUpdate(req.params.id);
      commande.date = req.body.date;
      commande.client = req.body.client;
      commande.produits = req.body.produits;
      commande.prixTotal = req.body.prixTotal;
      commande.livraison = req.body.livraison;
      commande.paiement = req.body.paiement;
      await commande.save();
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
  // Ajouter un produit au panier
  async ajouterProduit(req, res) {
    try {
      const panier = await Panier.findOne({ client: req.body.client });
      if (!panier) {
        const nouveauPanier = new Panier();
        nouveauPanier.client = req.body.client;
        nouveauPanier.produits.push({
          produit: req.body.produit,
          quantite: req.body.quantite
        });
        await nouveauPanier.save();
        res.status(201).send(nouveauPanier);
      } else {
        const produitIndex = panier.produits.findIndex(
          (prod) => prod.produit.toString() === req.body.produit
        );
        if (produitIndex === -1) {
          panier.produits.push({
            produit: req.body.produit,
            quantite: req.body.quantite
          });
        } else {
          panier.produits[produitIndex].quantite += req.body.quantite;
        }
        await panier.save();
        res.send(panier);
      }
    } catch (error) {
      res.status(400).send(error);
    }
  },

  // Modifier la quantité d'un produit dans le panier
  async modifierQuantite(req, res) {
    try {
      const panier = await Panier.findOne({ client: req.body.client });
      if (!panier) {
        return res.status(404).send();
      } else {
        const produitIndex = panier.produits.findIndex(
          (prod) => prod.produit.toString() === req.body.produit
        );
        if (produitIndex === -1) {
          return res.status(404).send();
        } else {
          panier.produits[produitIndex].quantite = req.body.quantite;
          await panier.save();
          res.send(panier);
        }
      }
    } catch (error) {
      res.status(400).send(error);
    }
  },

  // Supprimer un produit du panier
  async supprimerProduit(req, res) {
    try {
      const panier = await Panier.findOne({ client: req.body.client });
      if (!panier) {
        return res.status(404).send();
      } else {
        const produitIndex = panier.produits.findIndex(
          (prod) => prod.produit.toString() === req.body.produit
        );
        if (produitIndex === -1) {
          return res.status(404).send();
        } else {
          panier.produits.splice(produitIndex, 1);
          await panier.save();
          res.send(panier);
        }
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
};

module.exports = {
  clientController,
  produitController,
  commandeController,
  panierController
};
