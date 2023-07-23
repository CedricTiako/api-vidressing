// Schéma pour l'entité Vendeur Professionnel
const VendeurProSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  adresse: { type: String, required: true },
  email: { type: String, required: true },
  telephone: { type: String, required: true },
});

// Schéma pour l'entité Personne Fortunée
const PersonneFortuneeSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  adresse: { type: String, required: true },
  email: { type: String, required: true },
  telephone: { type: String, required: true },
});

// Schéma pour l'entité Article
const ArticleSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  description: { type: String, required: true },
  prix: { type: Number, required: true },
  photo: { type: String, required: true },
  date_publication: { type: Date, default: Date.now },
  id_vendeur_pro: { type: mongoose.Schema.Types.ObjectId, ref: 'VendeurPro', required: true },
  id_personne_fortunee: { type: mongoose.Schema.Types.ObjectId, ref: 'PersonneFortunee', required: true },
});

// Schéma pour l'entité Catégorie
const CategorieSchema = new mongoose.Schema({
  nom: { type: String, required: true },
});

// Schéma pour l'entité Article_Categorie
const ArticleCategorieSchema = new mongoose.Schema({
  id_article: { type: mongoose.Schema.Types.ObjectId, ref: 'Article', required: true },
  id_categorie: { type: mongoose.Schema.Types.ObjectId, ref: 'Categorie', required: true },
});

// Schéma pour l'entité Evaluation
const EvaluationSchema = new mongoose.Schema({
  id_utilisateur: { type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateur', required: true },
  id_article: { type: mongoose.Schema.Types.ObjectId, ref: 'Article', required: true },
  note: { type: Number, required: true },
  commentaire: { type: String },
});
