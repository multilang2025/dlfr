// Architecture en silo SEO : 6 piliers, chacun avec ses sous-services.
// `legacy` = ancienne URL (slug WP) → sert aux redirections 301.
// Les `intro` sont des résumés de départ, à enrichir avec le contenu exact extrait.

export interface SubService {
  slug: string;
  title: string;
  intro: string;
  legacy?: string;
}

export interface Silo {
  slug: string;
  title: string;
  short: string;
  intro: string;
  subservices: SubService[];
}

export const silos: Silo[] = [
  {
    slug: 's-installer-en-espagne',
    title: "S'installer & vivre en Espagne",
    short: "S'installer en Espagne",
    intro:
      "Toutes les démarches pour vous installer, vivre et prendre votre retraite en Espagne en toute sérénité.",
    subservices: [
      {
        slug: 'installation-administrative',
        title: "Accompagnement à l'installation administrative",
        intro: "NIE, empadronamiento, résidence : nous gérons vos démarches administratives en Espagne.",
        legacy: 'installation-administrative-espagne',
      },
      {
        slug: 'protection-sociale-retraite',
        title: 'Protection sociale et retraite en Espagne',
        intro: "Sécurité sociale, retraite et santé : optimisez votre protection sociale entre la France et l'Espagne.",
        legacy: 'protection-sociale-et-retraite-en-espagne',
      },
      {
        slug: 'accompagnement-bancaire',
        title: 'Accompagnement bancaire et financier',
        intro: "Ouverture de compte, financement et gestion bancaire pour votre projet espagnol.",
        legacy: 'accompagnement-bancaire-et-financier-en-espagne',
      },
    ],
  },
  {
    slug: 'fiscalite',
    title: 'Fiscalité franco-espagnole',
    short: 'Fiscalité',
    intro: "Optimisez votre fiscalité entre la France et l'Espagne, en conformité avec la convention fiscale.",
    subservices: [
      {
        slug: 'droit-fiscal-franco-espagnol',
        title: 'Conseil en droit fiscal franco-espagnol',
        intro: 'Résidence fiscale, double imposition, déclarations : un conseil fiscal sur mesure.',
        legacy: 'droit-fiscal-espagnol',
      },
      {
        slug: 'conseils-fiscaux-valencia',
        title: 'Services de conseils fiscaux à Valence',
        intro: 'Accompagnement fiscal local pour particuliers et entreprises dans la région de Valence.',
        legacy: 'services-conseils-fiscaux',
      },
    ],
  },
  {
    slug: 'entreprendre',
    title: 'Entreprendre & droit des affaires',
    short: 'Entreprendre',
    intro: "Créez et développez votre entreprise en Espagne avec un accompagnement juridique complet.",
    subservices: [
      {
        slug: 'creation-entreprise',
        title: "Création d'entreprise en Espagne",
        intro: 'Choix de la structure, constitution et formalités pour créer votre société en Espagne.',
        legacy: 'creation-entreprise-espagne',
      },
      {
        slug: 'droit-des-affaires',
        title: 'Droit des affaires et contrats commerciaux',
        intro: 'Sécurisez vos contrats et vos opérations commerciales en Espagne.',
        legacy: 'droit-des-affaires-espagne',
      },
      {
        slug: 'droit-commercial',
        title: 'Services de droit commercial à Valence',
        intro: 'Conseil en droit commercial pour vos activités dans la région de Valence.',
        legacy: 'droit-commercial',
      },
    ],
  },
  {
    slug: 'emploi-rh',
    title: 'Emploi & ressources humaines',
    short: 'Emploi & RH',
    intro: 'Recrutement, contrats et conformité sociale pour vos équipes en Espagne.',
    subservices: [
      {
        slug: 'droit-du-travail',
        title: 'Conseil en droit du travail et recrutement',
        intro: 'Embauche, contrats de travail et relations sociales conformes au droit espagnol.',
        legacy: 'droit-du-travail-et-recrutement-en-espagne',
      },
      {
        slug: 'ressources-humaines',
        title: 'Conseil en ressources humaines',
        intro: 'Gestion RH, paie et accompagnement de vos collaborateurs en Espagne.',
        legacy: 'conseil-en-ressources-humaines',
      },
      {
        slug: 'compliance-du-travail',
        title: 'Compliance du travail',
        intro: 'Mise en conformité de vos pratiques sociales avec la réglementation espagnole.',
        legacy: 'compliance-du-travail',
      },
    ],
  },
  {
    slug: 'immobilier',
    title: 'Immobilier',
    short: 'Immobilier',
    intro: "Achetez et sécurisez votre bien immobilier en Espagne en toute confiance.",
    subservices: [
      {
        slug: 'acquisition-immobiliere',
        title: 'Acquisition immobilière et droit de la propriété',
        intro: "Vérifications, contrats et accompagnement juridique pour votre achat immobilier en Espagne.",
        legacy: 'acquisition-immobiliere-espagne',
      },
    ],
  },
  {
    slug: 'litiges',
    title: 'Litiges & médiation',
    short: 'Litiges',
    intro: "Résolvez vos différends en Espagne par la médiation ou la voie contentieuse.",
    subservices: [
      {
        slug: 'mediation-resolution',
        title: 'Médiation et résolution des litiges',
        intro: 'Médiation, négociation et représentation pour régler vos litiges en Espagne.',
        legacy: 'resolution-de-litiges-espagne',
      },
    ],
  },
];
