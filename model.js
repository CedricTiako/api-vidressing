const mongoose = require('mongoose');

// Schéma pour l'entité Client
const clientSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true
  },
  prenom: {
    type: String,
    required: true
  },
  adresse: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  mot_de_passe: {
    type: String,
    required: true
  },
  telephone: {
    type: String,
    required: true
  }
});

// Schéma pour l'entité Produit
const produitSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  taille: {
    type: String,
    required: true
  },
  couleur: {
    type: String,
    required: true
  },
  prix: {
    type: Number,
    required: true
  },
  quantite: {
    type: Number,
    required: true
  },
  categorie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categorie'
  },
  marque: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Marque'
  }
});

// Schéma pour l'entité Commande
const commandeSchema = new mongoose.Schema({
  numero_commande: {
    type: String,
    required: true
  },
  date_commande: {
    type: Date,
    required: true
  },
  montant_total: {
    type: Number,
    required: true
  },
  adresse_livraison: {
    type: String,
    required: true
  },
  statut_commande: {
    type: String,
    required: true
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client'
  },
  livraison: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Livraison'
  },
  paiement: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Paiement'
  }
});

// Schéma pour l'entité Panier
const panierSchema = new mongoose.Schema({
  date_creation: {
    type: Date,
    default: Date.now
  },
  montant_total: {
    type: Number,
    required: true
  },
  statut_panier: {
    type: String,
    required: true
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client'
  }
});

// Schéma pour l'entité Livraison
const livraisonSchema = new mongoose.Schema({
  nom_destinataire: {
    type: String,
    required: true
  },
  adresse_livraison: {
    type: String,
    required: true
  },
  numero_suivi: {
    type: String,
    required: true
  }
});

// Schéma pour l'entité Paiement
const paiementSchema = new mongoose.Schema({
  type_carte_credit: {
    type: String,
    required: true
  },
  numero_carte_credit: {
    type: String,
    required: true
  },
  date_expiration: {
    type: Date,
    required: true
  },
  code_securite: {
    type: String,
    required: true
  }
});

// Schéma pour l'entité Categorie
const categorieSchema = new mongoose.Schema({
  nom_categorie: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

// Schéma pour l'entité Marque
const marqueSchema = new mongoose.Schema({
  nom_marque: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

// Schéma pour l'entité Image
const imageSchema = new mongoose.Schema({
  url_image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  taille: {
    type: String,
    required: true
  },
  produit: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Produit'
  }
});

const Client = mongoose.model('Client', clientSchema);
const Produit = mongoose.model('Produit', produitSchema);
const Commande = mongoose.model('Commande', commandeSchema);
const Panier = mongoose.model('Panier', panierSchema);
constLivraison = mongoose.model('Livraison', livraisonSchema);
const Paiement = mongoose.model('Paiement', paiementSchema);
const Categorie = mongoose.model('Categorie', categorieSchema);
const Marque = mongoose.model('Marque', marqueSchema);
const Image = mongoose.model('Image', imageSchema);

module.exports = {
  Client,
  Produit,
  Commande,
  Panier,
  Livraison,
  Paiement,
  Categorie,
  Marque,
  Image
};
