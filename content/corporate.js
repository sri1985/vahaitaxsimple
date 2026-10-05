/** Corporate Services hub + 5 service pages (EN / FR). */
module.exports = [
  {
    path: '/corporate-services/',
    type: 'hub',
    en: {
      nav: 'Corporate Services',
      title: 'Corporate Services and Registrations in Scarborough',
      desc: 'Incorporation, name changes, GST/HST and payroll registrations, director and address updates, and shareholder documents for Ontario corporations.',
      h1: 'Corporate Services and Registrations',
      kicker: 'Corporate Services',
      lead: 'We take care of the filings and records that keep your corporation organized, compliant and in good standing.',
      card: 'Incorporation, registrations, director changes and corporate records.',
      snippets: [
        [
          'What is the difference between federal and Ontario incorporation?',
          'Ontario incorporation gives your corporation legal status in Ontario and protects its name there, while federal incorporation under the Canada Business Corporations Act offers nationwide name protection and the right to operate in every province. Costs, filing requirements and expansion plans determine the better choice.',
        ],
      ],
      sections: [
        {
          h: 'Corporate support in one place',
          p: ['Corporate housekeeping is easy to overlook until a bank, buyer or lender asks for it. We keep your documents current so they are ready when you need them.'],
          ul: [
            'New incorporation registration',
            'Name changes and business name registration',
            'GST/HST and payroll account registrations',
            'Director, officer and address changes',
            'Share certificates and shareholder agreements',
          ],
        },
      ],
    },
    fr: {
      nav: 'Services aux sociétés',
      title: 'Services aux sociétés et inscriptions à Scarborough',
      desc: "Constitution en société, changements de nom, inscriptions à la TPS/TVH et à la paie, changements d'administrateurs et d'adresse, documents d'actionnaires en Ontario.",
      h1: 'Services aux sociétés et inscriptions',
      kicker: 'Services aux sociétés',
      lead: "Nous nous occupons des dépôts et des registres qui gardent votre société organisée, conforme et en règle.",
      card: "Constitution, inscriptions, changements d'administrateurs et registres de la société.",
      snippets: [
        [
          "Quelle est la différence entre une constitution fédérale et ontarienne?",
          "La constitution en Ontario donne un statut juridique dans la province et protège le nom de la société dans cette province, alors que la constitution fédérale offre une protection du nom à l'échelle nationale. Les coûts, les exigences et vos projets d'expansion déterminent le meilleur choix.",
        ],
      ],
      sections: [
        {
          h: 'Un soutien aux sociétés en un seul endroit',
          p: ["La tenue des registres d'une société est facile à négliger jusqu'à ce qu'une banque, un acheteur ou un prêteur la demande. Nous gardons vos documents à jour pour qu'ils soient prêts au besoin."],
          ul: [
            "Inscription de nouvelles sociétés",
            "Changements de nom et enregistrement de noms commerciaux",
            "Ouverture de comptes de TPS/TVH et de paie",
            "Changements d'administrateurs, de dirigeants et d'adresse",
            "Certificats d'actions et conventions entre actionnaires",
          ],
        },
      ],
    },
  },

  {
    path: '/corporate-services/incorporation/',
    type: 'service',
    en: {
      nav: 'New Incorporation Registration',
      title: 'Incorporate a Business in Ontario | Scarborough',
      desc: 'New corporation registration in Ontario or federally, including name search, articles, share structure, minute book and CRA account set-up.',
      h1: 'New Incorporation Registration',
      kicker: 'Corporate Services',
      lead: 'Incorporating gives your business legal separation, credibility and planning flexibility. We manage the paperwork so your corporation starts on solid ground.',
      card: 'Ontario and federal incorporation with name search, articles and minute book.',
      snippets: [
        [
          'How long does it take to incorporate a business in Ontario?',
          'Online incorporation through the Ontario Business Registry can often be completed within a few business days once the name search and application are accepted. Preparing directors, shareholders, share structure and the registered address in advance helps avoid delays and keeps registration straightforward.',
        ],
      ],
      sections: [
        {
          h: 'What incorporation includes',
          ul: [
            'Name search and name report guidance',
            'Preparation and filing of articles of incorporation',
            'Share structure and director and shareholder planning',
            'Organizational resolutions and minute book set-up',
            'CRA business number, GST/HST and payroll account set-up',
          ],
        },
        {
          h: 'Information we need',
          ul: [
            'Proposed corporate name and alternatives',
            'Full names and addresses of directors',
            'Names of initial shareholders and intended share structure',
            'Registered office address in Ontario',
          ],
        },
      ],
    },
    fr: {
      nav: 'Inscription de nouvelles sociétés',
      title: 'Constituer une société en Ontario | Scarborough',
      desc: "Constitution en société en Ontario ou au fédéral : recherche de nom, statuts, structure du capital, livre de procès-verbaux et ouverture des comptes de l'ARC.",
      h1: 'Inscription de nouvelles sociétés',
      kicker: 'Services aux sociétés',
      lead: "La constitution en société offre séparation juridique, crédibilité et souplesse de planification. Nous gérons la paperasse pour que votre société démarre sur des bases solides.",
      card: "Constitution ontarienne et fédérale avec recherche de nom, statuts et livre de procès-verbaux.",
      snippets: [
        [
          "Combien de temps faut-il pour constituer une société en Ontario?",
          "La constitution en ligne par le Registre des entreprises de l'Ontario peut souvent se terminer en quelques jours ouvrables, une fois la recherche de nom et la demande acceptées. Préparer d'avance administrateurs, actionnaires, structure du capital et adresse du siège social évite les retards et simplifie l'inscription.",
        ],
      ],
      sections: [
        {
          h: 'Ce que comprend la constitution',
          ul: [
            "Aide à la recherche et au rapport de nom",
            "Préparation et dépôt des statuts constitutifs",
            "Planification de la structure du capital, des administrateurs et des actionnaires",
            "Résolutions d'organisation et mise en place du livre de procès-verbaux",
            "Numéro d'entreprise de l'ARC et ouverture des comptes de TPS/TVH et de paie",
          ],
        },
        {
          h: 'Renseignements requis',
          ul: [
            "Dénomination proposée et solutions de rechange",
            "Noms complets et adresses des administrateurs",
            "Noms des premiers actionnaires et structure du capital prévue",
            "Adresse du siège social en Ontario",
          ],
        },
      ],
    },
  },

  {
    path: '/corporate-services/business-name-changes/',
    type: 'service',
    en: {
      nav: 'Business Name Changes',
      title: 'Business Name Changes in Ontario | Scarborough',
      desc: 'Change your corporate or business name in Ontario. Name search, resolutions, articles of amendment and CRA account updates handled for you.',
      h1: 'Business Name Changes',
      kicker: 'Corporate Services',
      lead: 'Rebranding or restructuring often means a new name. We manage the legal filings and the follow-up updates so your records stay consistent.',
      card: 'Corporate and business name changes, filings and follow-up updates.',
      snippets: [
        [
          "How do I change my corporation's name in Ontario?",
          'A corporation changes its name by filing articles of amendment with the Ontario Business Registry after shareholders approve a special resolution. A new name search report is generally needed, and you must update your bank, CRA accounts, licences and contracts afterward.',
        ],
      ],
      sections: [
        {
          h: 'What we handle',
          ul: [
            'Name availability and name report search',
            'Special resolution drafting',
            'Articles of amendment filing',
            'Update of GST/HST and payroll accounts with the CRA',
            'Checklist of banks, licences and suppliers to notify',
          ],
        },
        {
          h: 'Sole proprietorships and partnerships',
          p: ['We also assist with registering, renewing or changing the business name of a sole proprietorship or partnership.'],
        },
      ],
    },
    fr: {
      nav: "Changements de nom d'entreprise",
      title: "Changement de nom d'entreprise en Ontario | Scarborough",
      desc: "Changez la dénomination de votre société ou entreprise en Ontario. Recherche de nom, résolutions, statuts de modification et mise à jour des comptes de l'ARC.",
      h1: "Changements de nom d'entreprise",
      kicker: 'Services aux sociétés',
      lead: "Un changement d'image ou de structure s'accompagne souvent d'un nouveau nom. Nous gérons les dépôts juridiques et les mises à jour pour que vos dossiers restent cohérents.",
      card: "Changements de nom de société et d'entreprise, dépôts et mises à jour.",
      snippets: [
        [
          "Comment changer la dénomination de ma société en Ontario?",
          "Une société change de nom en déposant des statuts de modification au Registre des entreprises de l'Ontario après l'approbation d'une résolution spéciale par les actionnaires. Un nouveau rapport de recherche de nom est généralement requis, et vous devez ensuite mettre à jour banque, comptes de l'ARC, permis et contrats.",
        ],
      ],
      sections: [
        {
          h: 'Ce que nous prenons en charge',
          ul: [
            "Recherche de disponibilité et rapport de nom",
            "Rédaction de la résolution spéciale",
            "Dépôt des statuts de modification",
            "Mise à jour des comptes de TPS/TVH et de paie auprès de l'ARC",
            "Liste de contrôle des banques, permis et fournisseurs à aviser",
          ],
        },
        {
          h: 'Entreprises individuelles et sociétés de personnes',
          p: ["Nous aidons aussi à enregistrer, renouveler ou modifier le nom commercial d'une entreprise individuelle ou d'une société de personnes."],
        },
      ],
    },
  },

  {
    path: '/corporate-services/gst-hst-payroll-registration/',
    type: 'service',
    en: {
      nav: 'GST/HST & Payroll Registrations',
      title: 'GST/HST and Payroll Account Registration',
      desc: 'CRA business number, GST/HST and payroll account registration for new and existing Ontario corporations, with remittance guidance.',
      h1: 'GST/HST and Payroll Registrations',
      kicker: 'Corporate Services',
      lead: 'Before you charge HST or pay your first employee, the right CRA accounts must be open. We register them correctly and explain your filing obligations.',
      card: 'CRA business number, GST/HST and payroll account registration.',
      snippets: [
        [
          'Do I need a separate CRA payroll account for my corporation?',
          'Yes. A corporation with employees must open a CRA payroll program account under its business number before paying wages. The account lets you remit source deductions, file T4 slips and report CPP, EI and income tax, with remittances due on a schedule the CRA assigns.',
        ],
      ],
      sections: [
        {
          h: 'Registration services',
          ul: [
            'Business number confirmation',
            'GST/HST account registration and effective-date planning',
            'Payroll program account registration',
            'Guidance on remittance and filing frequency',
            'Explanation of your first filing deadlines',
          ],
        },
        {
          h: 'When registration is required',
          p: ['Most businesses must register for GST/HST once worldwide taxable revenue exceeds 30,000 dollars over four consecutive calendar quarters. Many choose to register earlier to claim input tax credits.'],
        },
      ],
    },
    fr: {
      nav: 'Inscriptions TPS/TVH et paie',
      title: 'Inscription aux comptes de TPS/TVH et de paie',
      desc: "Numéro d'entreprise de l'ARC, inscription à la TPS/TVH et au compte de paie pour sociétés ontariennes nouvelles ou existantes, avec conseils sur les remises.",
      h1: 'Inscriptions à la TPS/TVH et à la paie',
      kicker: 'Services aux sociétés',
      lead: "Avant de percevoir la TVH ou de payer un premier employé, les bons comptes de l'ARC doivent être ouverts. Nous les inscrivons correctement et expliquons vos obligations de production.",
      card: "Numéro d'entreprise de l'ARC, inscription à la TPS/TVH et au compte de paie.",
      snippets: [
        [
          "Ma société a-t-elle besoin d'un compte de paie distinct à l'ARC?",
          "Oui. Une société qui a des employés doit ouvrir un compte de retenues sur la paie de l'ARC, rattaché à son numéro d'entreprise, avant de verser des salaires. Ce compte permet de remettre les retenues et de produire les T4, selon un calendrier attribué par l'ARC.",
        ],
      ],
      sections: [
        {
          h: "Services d'inscription",
          ul: [
            "Confirmation du numéro d'entreprise",
            "Inscription à la TPS/TVH et choix de la date d'entrée en vigueur",
            "Ouverture du compte de retenues sur la paie",
            "Conseils sur la fréquence des remises et des déclarations",
            "Explication de vos premières échéances",
          ],
        },
        {
          h: "Quand l'inscription est requise",
          p: ["La plupart des entreprises doivent s'inscrire à la TPS/TVH lorsque leurs revenus taxables mondiaux dépassent 30 000 dollars sur quatre trimestres civils consécutifs. Plusieurs choisissent de s'inscrire plus tôt pour demander des crédits de taxe sur les intrants."],
        },
      ],
    },
  },

  {
    path: '/corporate-services/directors-address-changes/',
    type: 'service',
    en: {
      nav: 'Add/Change Directors & Address',
      title: 'Change Directors and Address for Ontario Corporations',
      desc: 'Add or remove directors and officers and update your registered office address. Notice of change filings and CRA updates for Ontario corporations.',
      h1: 'Add or Change Directors and Address',
      kicker: 'Corporate Services',
      lead: 'Directors move, partners join and offices relocate. We file the required notices promptly so your corporate record stays accurate and in good standing.',
      card: 'Director and officer changes, notice filings and address updates.',
      snippets: [
        [
          'How soon must an Ontario corporation report a change of directors?',
          "Ontario corporations must file a notice of change within 15 days of a change in directors, officers or registered office address. Keeping this information current protects the corporation's good standing and ensures official notices reach the correct address.",
        ],
      ],
      sections: [
        {
          h: 'What we handle',
          ul: [
            'Appointment or resignation of directors and officers',
            'Director resolutions and consents',
            'Notice of change filings',
            'Registered office and mailing address updates',
            'Address updates with the CRA and your business accounts',
          ],
        },
        {
          h: 'Why accuracy matters',
          p: ['Out-of-date corporate records can delay bank accounts, financing and sales of the business. Regular maintenance avoids surprises during due diligence.'],
        },
      ],
    },
    fr: {
      nav: "Ajout ou changement d'administrateurs et d'adresse",
      title: "Changer administrateurs et adresse d'une société",
      desc: "Ajoutez ou retirez des administrateurs et dirigeants et mettez à jour l'adresse du siège social. Avis de changement et mises à jour auprès de l'ARC.",
      h1: "Ajout ou changement d'administrateurs et d'adresse",
      kicker: 'Services aux sociétés',
      lead: "Les administrateurs changent, des associés se joignent et les bureaux déménagent. Nous déposons rapidement les avis requis pour que votre dossier corporatif demeure exact et en règle.",
      card: "Changements d'administrateurs et de dirigeants, avis et mises à jour d'adresse.",
      snippets: [
        [
          "En combien de temps une société ontarienne doit-elle signaler un changement d'administrateurs?",
          "Les sociétés ontariennes doivent déposer un avis de changement dans les 15 jours suivant tout changement d'administrateurs, de dirigeants ou d'adresse du siège social. Garder ces renseignements à jour protège la bonne situation de la société et garantit que les avis officiels parviennent à la bonne adresse.",
        ],
      ],
      sections: [
        {
          h: 'Ce que nous prenons en charge',
          ul: [
            "Nomination ou démission d'administrateurs et de dirigeants",
            "Résolutions et consentements des administrateurs",
            "Dépôt des avis de changement",
            "Mise à jour du siège social et de l'adresse postale",
            "Mise à jour de l'adresse auprès de l'ARC et de vos comptes d'entreprise",
          ],
        },
        {
          h: "Pourquoi l'exactitude compte",
          p: ["Des registres désuets peuvent retarder l'ouverture de comptes bancaires, un financement ou la vente de l'entreprise. Un entretien régulier évite les surprises lors d'une vérification diligente."],
        },
      ],
    },
  },

  {
    path: '/corporate-services/shareholder-certificates-agreements/',
    type: 'service',
    en: {
      nav: 'Shareholder Certificates & Agreements',
      title: 'Shareholder Certificates and Agreements | Scarborough',
      desc: 'Share certificates, share registers, transfer resolutions and shareholder agreement coordination for Ontario private corporations.',
      h1: 'Shareholder Certificates and Agreements',
      kicker: 'Corporate Services',
      lead: 'Clear ownership records prevent disputes and simplify future sales, financing and estate planning. We prepare and maintain the documents that prove who owns what.',
      card: 'Share certificates, registers, transfers and shareholder agreements.',
      snippets: [
        [
          'What is a shareholder agreement and do I need one?',
          'A shareholder agreement is a private contract among a corporation’s owners that sets out voting rights, share transfers, dividend policy and dispute resolution. It is not legally required, but it prevents costly conflicts, particularly when two or more people own the business.',
        ],
      ],
      sections: [
        {
          h: 'Corporate ownership records',
          ul: [
            'Share certificates for issued shares',
            'Share register and ledger updates',
            'Share issuance and transfer resolutions',
            'Shareholder agreement preparation, coordinated with your lawyer',
            'Minute book maintenance',
          ],
        },
        {
          h: 'Working with your lawyer',
          p: ['Where a document requires legal advice, we coordinate with your lawyer so the corporate records and the legal agreements match.'],
        },
      ],
    },
    fr: {
      nav: "Certificats d'actions et conventions d'actionnaires",
      title: "Certificats d'actions et conventions d'actionnaires",
      desc: "Certificats d'actions, registres, résolutions de transfert et coordination des conventions entre actionnaires pour sociétés privées ontariennes.",
      h1: "Certificats d'actions et conventions d'actionnaires",
      kicker: 'Services aux sociétés',
      lead: "Des registres de propriété clairs préviennent les différends et simplifient les ventes, financements et planifications successorales futurs. Nous préparons et tenons à jour les documents qui prouvent qui possède quoi.",
      card: "Certificats d'actions, registres, transferts et conventions entre actionnaires.",
      snippets: [
        [
          "Qu'est-ce qu'une convention entre actionnaires et en ai-je besoin?",
          "Une convention entre actionnaires est un contrat privé entre les propriétaires d'une société qui précise les droits de vote, les transferts d'actions, la politique de dividendes et le règlement des différends. Elle n'est pas obligatoire, mais elle prévient des conflits coûteux, surtout lorsque plusieurs personnes possèdent l'entreprise.",
        ],
      ],
      sections: [
        {
          h: 'Registres de propriété de la société',
          ul: [
            "Certificats pour les actions émises",
            "Mise à jour du registre des actions",
            "Résolutions d'émission et de transfert d'actions",
            "Préparation de conventions entre actionnaires, en coordination avec votre avocat",
            "Tenue du livre de procès-verbaux",
          ],
        },
        {
          h: 'Collaboration avec votre avocat',
          p: ["Lorsqu'un document exige un avis juridique, nous collaborons avec votre avocat pour que les registres de la société et les ententes juridiques concordent."],
        },
      ],
    },
  },
];
