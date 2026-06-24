// Architecture en silo SEO : 6 piliers, chacun avec ses sous-services.
// `legacy` = ancienne URL (slug WP) → sert aux redirections 301.
// `img` = visuel (dans public/assets/) pour les cartes « même domaine » et la grille.

export interface SubService {
  slug: string;
  title: string;
  intro: string;
  img: string;
  legacy?: string;
  children?: ChildPage[];
}

// Niveau 4 du cocon : pages filles longue traîne, rattachées à une page-service mère.
export interface ChildPage {
  slug: string;
  title: string;
  intro: string;
  img: string;
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
    title: "S'installer et vivre en Espagne",
    short: "S'installer en Espagne",
    intro:
      "Toutes les démarches pour vous installer, vivre et prendre votre retraite en Espagne en toute sérénité.",
    subservices: [
      {
        slug: 'installation-administrative',
        title: "Accompagnement à l'installation administrative",
        intro: "NIE, empadronamiento, résidence : nous gérons vos démarches administratives en Espagne.",
        img: 'area-inmobiliario.jpg',
        legacy: 'installation-administrative-espagne',
        children: [
          {
            slug: 'obtenir-le-nie-en-espagne',
            title: 'Obtenir le NIE en Espagne',
            intro: 'Numéro d’identification d’étranger : à quoi il sert, qui en a besoin et comment l’obtenir.',
            img: 'obtenir-le-NIE-en-Espagne.jpg',
          },
          {
            slug: 'empadronamiento-espagne',
            title: 'L’empadronamiento (inscription à la mairie)',
            intro: 'Le certificat d’empadronamiento : rôle, pièces à fournir et démarche auprès de l’ayuntamiento.',
            img: 'expatriation-en-espagne.jpg',
          },
          {
            slug: 'obtention-du-tie-espagne',
            title: 'Obtention du TIE (carte de séjour)',
            intro: 'Carte d’identité d’étranger : qui est concerné, différence avec le NIE et procédure.',
            img: 'obtention-du-TIE.jpg',
          },
        ],
      },
      {
        slug: 'protection-sociale-retraite',
        title: 'Protection sociale et retraite en Espagne',
        intro: "Sécurité sociale, retraite et santé : optimisez votre protection sociale entre la France et l'Espagne.",
        img: 'area-auditoria.jpg',
        legacy: 'protection-sociale-et-retraite-en-espagne',
        children: [
          {
            slug: 'retraite-francais-en-espagne',
            title: 'Prendre sa retraite en Espagne (Français)',
            intro: 'Pension française perçue en Espagne, fiscalité des pensions et formalités du retraité.',
            img: 'expatriation-en-espagne.jpg',
          },
          {
            slug: 'securite-sociale-espagne',
            title: 'Sécurité sociale en Espagne',
            intro: 'Affiliation, coordination France-Espagne et droits sociaux des nouveaux résidents.',
            img: 'area-laboral.jpg',
          },
          {
            slug: 'carte-sante-espagnole',
            title: 'Accès aux soins et carte de santé espagnole',
            intro: 'Tarjeta sanitaria, couverture publique et articulation avec la carte européenne.',
            img: 'carte-de-sante-espagnole.jpg',
          },
        ],
      },
      {
        slug: 'accompagnement-bancaire',
        title: 'Accompagnement bancaire et financier',
        intro: "Ouverture de compte, financement et gestion bancaire pour votre projet espagnol.",
        img: 'area-fiscalidad.jpg',
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
        img: 'area-mercantil.jpg',
        legacy: 'droit-fiscal-espagnol',
        children: [
          {
            slug: 'regime-impatries-loi-beckham',
            title: 'Régime des impatriés (loi Beckham) en Espagne',
            intro: 'Imposition forfaitaire à 24 % des revenus du travail : conditions, durée et démarches.',
            img: 'impatries-en-espagne.jpg',
          },
          {
            slug: 'modele-720-biens-a-letranger',
            title: 'Modèle 720 : déclarer ses biens à l’étranger',
            intro: 'Comptes, titres et immobilier hors d’Espagne : qui doit déclarer, quand et comment.',
            img: 'area-fiscalidad.jpg',
          },
          {
            slug: 'impot-sur-le-patrimoine-espagne',
            title: 'Impôt sur le patrimoine (IP) en Espagne',
            intro: 'Seuils, exonérations et articulation avec l’IFI français pour les résidents.',
            img: 'area-fiscal.jpg',
          },
          {
            slug: 'convention-fiscale-franco-espagnole',
            title: 'La convention fiscale franco-espagnole',
            intro: 'Comment la convention répartit l’imposition et évite la double imposition.',
            img: 'area-mercantil.jpg',
          },
        ],
      },
      {
        slug: 'conseils-fiscaux-valencia',
        title: 'Services de conseils fiscaux à Valence',
        intro: 'Accompagnement fiscal local pour particuliers et entreprises dans la région de Valence.',
        img: 'area-fiscal.jpg',
        legacy: 'services-conseils-fiscaux',
        children: [
          {
            slug: 'tva-iva-espagne',
            title: 'La TVA (IVA) en Espagne',
            intro: 'Taux, obligations déclaratives et fonctionnement de l’IVA pour les entreprises.',
            img: 'area-fiscal.jpg',
          },
          {
            slug: 'regime-autonomo-espagne',
            title: 'Devenir autónomo (travailleur indépendant) en Espagne',
            intro: 'Inscription, cotisations et obligations fiscales du régime de l’autónomo.',
            img: 'area-fiscalidad.jpg',
          },
          {
            slug: 'declaration-irpf-espagne',
            title: 'La déclaration de revenus (IRPF) en Espagne',
            intro: 'Qui doit déclarer, calendrier et particularités pour les résidents étrangers.',
            img: 'area-mercantil.jpg',
          },
        ],
      },
    ],
  },
  {
    slug: 'entreprendre',
    title: 'Entreprendre et droit des affaires',
    short: 'Entreprendre',
    intro: "Créez et développez votre entreprise en Espagne avec un accompagnement juridique complet.",
    subservices: [
      {
        slug: 'creation-entreprise',
        title: "Création d'entreprise en Espagne",
        intro: 'Choix de la structure, constitution et formalités pour créer votre société en Espagne.',
        img: 'area-sucesiones.jpg',
        legacy: 'creation-entreprise-espagne',
      },
      {
        slug: 'droit-des-affaires',
        title: 'Droit des affaires et contrats commerciaux',
        intro: 'Sécurisez vos contrats et vos opérations commerciales en Espagne.',
        img: 'area-extranjeria.jpg',
        legacy: 'droit-des-affaires-espagne',
      },
      {
        slug: 'droit-commercial',
        title: 'Services de droit commercial à Valence',
        intro: 'Conseil en droit commercial pour vos activités dans la région de Valence.',
        img: 'area-social-corporativa.jpg',
        legacy: 'droit-commercial',
      },
    ],
  },
  {
    slug: 'emploi-rh',
    title: 'Emploi et ressources humaines',
    short: 'Emploi et RH',
    intro: 'Recrutement, contrats et conformité sociale pour vos équipes en Espagne.',
    subservices: [
      {
        slug: 'droit-du-travail',
        title: 'Conseil en droit du travail et recrutement',
        intro: 'Embauche, contrats de travail et relations sociales conformes au droit espagnol.',
        img: 'area-fiscal.jpg',
        legacy: 'droit-du-travail-et-recrutement-en-espagne',
      },
      {
        slug: 'ressources-humaines',
        title: 'Conseil en ressources humaines',
        intro: 'Gestion RH, paie et accompagnement de vos collaborateurs en Espagne.',
        img: 'area-laboral.jpg',
        legacy: 'conseil-en-ressources-humaines',
      },
      {
        slug: 'compliance-du-travail',
        title: 'Compliance du travail',
        intro: 'Mise en conformité de vos pratiques sociales avec la réglementation espagnole.',
        img: 'compliance-travail-audit-conformite.jpg',
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
        img: 'area-laboral.jpg',
        legacy: 'acquisition-immobiliere-espagne',
        children: [
          {
            slug: 'credit-immobilier-espagne',
            title: 'Crédit immobilier en Espagne',
            intro: 'Obtenir un prêt immobilier espagnol en tant que non-résident : conditions, apport et démarches.',
            img: 'ouvrir-un-compte-bancaire-en-Espagne.jpg',
          },
          {
            slug: 'fiscalite-achat-immobilier-espagne',
            title: 'Fiscalité de l’achat immobilier en Espagne',
            intro: 'ITP, IVA, frais de notaire et impôts annuels : ce que coûte vraiment l’acquisition.',
            img: 'compra-propiedad-img.jpg',
          },
          {
            slug: 'plus-value-revente-immobiliere-espagne',
            title: 'Plus-value à la revente immobilière en Espagne',
            intro: 'Imposition de la plus-value, plusvalía municipale et retenue applicable aux non-résidents.',
            img: 'prop-vertical.jpg',
          },
        ],
      },
    ],
  },
  {
    slug: 'litiges',
    title: 'Litiges et médiation',
    short: 'Litiges',
    intro: "Résolvez vos différends en Espagne par la médiation ou la voie contentieuse.",
    subservices: [
      {
        slug: 'mediation-resolution',
        title: 'Médiation et résolution des litiges',
        intro: 'Médiation, négociation et représentation pour régler vos litiges en Espagne.',
        img: 'area-social-corporativa.jpg',
        legacy: 'resolution-de-litiges-espagne',
      },
    ],
  },
];
