/** Personal Tax Services hub + 5 service pages (EN / FR). */
module.exports = [
  {
    path: '/personal-tax-services/',
    type: 'hub',
    en: {
      nav: 'Personal Tax',
      title: 'Personal Tax Services in Scarborough, Ontario',
      desc: 'T1 personal tax returns, rental property and capital gains, new housing rebates, financial planning and CRA appeal support in Scarborough.',
      h1: 'Personal Tax Services',
      kicker: 'Personal Services',
      lead: 'From a simple employment return to rental income, capital gains and CRA appeals, we help individuals and families file accurately and keep more of what they earn.',
      card: 'Personal returns, rental and capital gains reporting, rebates and CRA appeal support.',
      snippets: [
        [
          'What is the difference between a tax deduction and a tax credit?',
          'A deduction reduces your taxable income, so its value depends on your marginal tax rate. A non-refundable credit directly reduces the tax you owe, calculated at a set rate. Both lower your tax bill, but they work at different steps of the return.',
        ],
      ],
      sections: [
        {
          h: 'Personal tax support for every stage of life',
          p: ['Whether you are a new graduate, a growing family, a landlord or a retiree, your return should reflect every deduction and credit available to you.'],
          ul: [
            'Annual T1 return preparation and electronic filing',
            'Rental income, capital gains and property sales',
            'GST/HST new housing rebate applications',
            'Tax-focused personal financial planning',
            'Help with CRA reviews, audits and appeals',
          ],
        },
      ],
    },
    fr: {
      nav: 'Fiscalité des particuliers',
      title: 'Services fiscaux pour particuliers à Scarborough',
      desc: "Déclarations T1, immeubles locatifs et gains en capital, remboursements pour habitations neuves, planification financière et appels auprès de l'ARC à Scarborough.",
      h1: 'Services fiscaux pour particuliers',
      kicker: 'Services aux particuliers',
      lead: "D'une simple déclaration de salarié aux revenus locatifs, gains en capital et appels auprès de l'ARC, nous aidons les particuliers et les familles à produire avec exactitude et à conserver davantage de leurs revenus.",
      card: "Déclarations personnelles, revenus locatifs, gains en capital, remboursements et appels auprès de l'ARC.",
      snippets: [
        [
          "Quelle est la différence entre une déduction et un crédit d'impôt?",
          "Une déduction réduit votre revenu imposable, et sa valeur dépend de votre taux marginal d'imposition. Un crédit non remboursable réduit directement l'impôt à payer, selon un taux fixe. Les deux diminuent votre facture fiscale, mais ils interviennent à des étapes différentes de la déclaration.",
        ],
      ],
      sections: [
        {
          h: 'Un soutien fiscal à chaque étape de la vie',
          p: ["Que vous soyez nouveau diplômé, famille en croissance, propriétaire d'immeuble locatif ou retraité, votre déclaration doit refléter toutes les déductions et tous les crédits auxquels vous avez droit."],
          ul: [
            "Préparation et transmission électronique de la déclaration T1 annuelle",
            "Revenus locatifs, gains en capital et ventes de biens",
            "Demandes de remboursement de la TPS/TVH pour habitations neuves",
            "Planification financière axée sur la fiscalité",
            "Aide pour les examens, vérifications et appels de l'ARC",
          ],
        },
      ],
    },
  },

  {
    path: '/personal-tax-services/t1-tax-returns/',
    type: 'service',
    en: {
      nav: 'Personal Income Tax Returns (T1)',
      title: 'Personal Income Tax Returns (T1) in Scarborough',
      desc: 'T1 personal tax return preparation for employees, self-employed individuals, families, students, seniors and newcomers. Accurate and filed on time.',
      h1: 'Personal Income Tax Returns (T1)',
      kicker: 'Personal Services',
      lead: 'Your T1 return is more than a filing: it determines refunds, benefits and RRSP room. We prepare it carefully and explain the result in plain language.',
      card: 'Annual personal tax return preparation and e-filing for individuals and families.',
      snippets: [
        [
          'What documents do I need to file my T1 tax return?',
          "Gather your T4, T5 and other slips, RRSP and FHSA contribution receipts, tuition forms, medical and donation receipts, child care expenses, and last year's notice of assessment. Self-employed taxpayers also need income and expense records. Complete documents prevent missed deductions.",
        ],
      ],
      sections: [
        {
          h: 'What we prepare',
          ul: [
            'Employment, pension, investment and self-employment income',
            'RRSP, FHSA, child care, tuition, medical and donation claims',
            'Spouse, common-law partner and dependant optimization',
            'Prior-year adjustments and overdue returns',
            'Returns for students, seniors and newcomers to Canada',
          ],
        },
        {
          h: 'Filing deadlines',
          p: ['Most individuals must file by April 30. Self-employed individuals and their spouses or common-law partners have until June 15, although any balance owing is still due April 30.'],
        },
      ],
    },
    fr: {
      nav: 'Déclarations de revenus des particuliers (T1)',
      title: 'Déclarations de revenus T1 à Scarborough',
      desc: "Préparation de la déclaration T1 pour salariés, travailleurs autonomes, familles, étudiants, aînés et nouveaux arrivants. Exacte et produite à temps.",
      h1: 'Déclarations de revenus des particuliers (T1)',
      kicker: 'Services aux particuliers',
      lead: "Votre déclaration T1 est plus qu'un dépôt : elle détermine remboursements, prestations et droits de cotisation au REER. Nous la préparons avec soin et expliquons le résultat simplement.",
      card: "Préparation et transmission électronique de la déclaration annuelle pour particuliers et familles.",
      snippets: [
        [
          "Quels documents faut-il pour produire ma déclaration T1?",
          "Rassemblez vos feuillets T4, T5 et autres, vos reçus de cotisation au REER et au CELIAPP, formulaires de scolarité, reçus médicaux et de dons, frais de garde d'enfants et l'avis de cotisation de l'an dernier. Les travailleurs autonomes ajoutent leurs revenus et dépenses.",
        ],
      ],
      sections: [
        {
          h: 'Ce que nous préparons',
          ul: [
            "Revenus d'emploi, de pension, de placement et de travail autonome",
            "Demandes liées au REER, au CELIAPP, aux frais de garde, à la scolarité, aux frais médicaux et aux dons",
            "Optimisation pour conjoint, conjoint de fait et personnes à charge",
            "Modifications d'années antérieures et déclarations en retard",
            "Déclarations pour étudiants, aînés et nouveaux arrivants au Canada",
          ],
        },
        {
          h: 'Dates limites de production',
          p: ["La plupart des particuliers doivent produire leur déclaration avant le 30 avril. Les travailleurs autonomes et leur conjoint ont jusqu'au 15 juin, mais tout solde dû reste exigible le 30 avril."],
        },
      ],
    },
  },

  {
    path: '/personal-tax-services/rental-property-capital-gains/',
    type: 'service',
    en: {
      nav: 'Rental Property & Capital Gains',
      title: 'Rental Property and Capital Gains Tax Reporting',
      desc: 'Rental income reporting, capital cost allowance and capital gains on real estate, stocks and other property. Accurate T1 filing in Scarborough.',
      h1: 'Rental Property and Capital Gains',
      kicker: 'Personal Services',
      lead: 'Property income and gains are among the most heavily reviewed items on a personal return. We report them accurately and plan to reduce your tax legally.',
      card: 'Rental income, expenses, capital cost allowance and capital gains reporting.',
      snippets: [
        [
          'How is a capital gain taxed in Canada?',
          'A capital gain is the profit from selling property for more than its adjusted cost base. Currently, 50 percent of the gain is included in your taxable income and taxed at your marginal rate. The principal residence exemption may eliminate tax on the sale of your home.',
        ],
      ],
      sections: [
        {
          h: 'What we handle',
          ul: [
            'Rental income and expense reporting for residential properties',
            'Capital cost allowance advice and recapture implications',
            'Reporting sales of real estate, shares and other property',
            'Principal residence designation and reporting',
            'Co-ownership and spousal rental income allocation',
          ],
        },
        {
          h: 'Keep the right records',
          p: ['Retain purchase documents, legal fees, major improvement invoices and rental statements. They establish your cost base and support deductions if the CRA asks.'],
        },
      ],
    },
    fr: {
      nav: 'Immeubles locatifs et gains en capital',
      title: 'Immeubles locatifs et gains en capital : déclaration',
      desc: "Déclaration des revenus locatifs, de la déduction pour amortissement et des gains en capital sur immeubles, actions et autres biens. Production T1 à Scarborough.",
      h1: 'Immeubles locatifs et gains en capital',
      kicker: 'Services aux particuliers',
      lead: "Les revenus et gains immobiliers figurent parmi les éléments les plus examinés d'une déclaration personnelle. Nous les déclarons avec exactitude et planifions pour réduire légalement votre impôt.",
      card: "Revenus locatifs, dépenses, déduction pour amortissement et gains en capital.",
      snippets: [
        [
          "Comment un gain en capital est-il imposé au Canada?",
          "Un gain en capital est le profit tiré de la vente d'un bien à un prix supérieur à son prix de base rajusté. Actuellement, 50 pour cent du gain est imposable à votre taux marginal. L'exemption pour résidence principale peut éliminer l'impôt sur la vente de votre domicile.",
        ],
      ],
      sections: [
        {
          h: 'Ce que nous prenons en charge',
          ul: [
            "Déclaration des revenus et dépenses locatifs d'immeubles résidentiels",
            "Conseils sur la déduction pour amortissement et la récupération",
            "Déclaration de la vente d'immeubles, d'actions et d'autres biens",
            "Désignation et déclaration de la résidence principale",
            "Répartition des revenus locatifs en copropriété et entre conjoints",
          ],
        },
        {
          h: 'Conserver les bons documents',
          p: ["Conservez les documents d'achat, les frais juridiques, les factures de rénovations majeures et les relevés locatifs. Ils établissent votre prix de base et appuient vos déductions si l'ARC pose des questions."],
        },
      ],
    },
  },

  {
    path: '/personal-tax-services/gst-hst-new-housing-rebates/',
    type: 'service',
    en: {
      nav: 'GST/HST New Housing Rebates',
      title: 'GST/HST New Housing Rebate Applications',
      desc: 'Eligibility review and application for the GST/HST new housing rebate and Ontario new housing rebate for owner-built, new and rental homes.',
      h1: 'GST/HST New Housing Rebates',
      kicker: 'Personal Services',
      lead: 'Buying or building a new home can include thousands of dollars in recoverable tax. We review your eligibility and prepare the application correctly the first time.',
      card: 'Federal and Ontario new housing rebate eligibility review and applications.',
      snippets: [
        [
          'Who qualifies for the GST/HST new housing rebate?',
          'Individuals who buy or build a new or substantially renovated home as their primary residence may qualify, provided the purchase price or fair market value falls under the rebate thresholds. The federal rebate phases out between 350,000 and 450,000 dollars, and Ontario offers a separate provincial rebate.',
        ],
      ],
      sections: [
        {
          h: 'What we do',
          ul: [
            'Eligibility review for purchased, owner-built and substantially renovated homes',
            'Application preparation using builder statements and closing documents',
            'Guidance on whether the rebate was assigned to the builder',
            'Rental property rebate review for landlords',
            'Filing within the CRA time limit',
          ],
        },
        {
          h: 'Act within the time limit',
          p: ['Rebate applications must generally be filed within two years after ownership transfers or construction is complete. Gather your agreement of purchase and sale and closing statements early.'],
        },
      ],
    },
    fr: {
      nav: 'Remboursements TPS/TVH pour habitations neuves',
      title: "Remboursement TPS/TVH pour habitations neuves",
      desc: "Examen d'admissibilité et demande du remboursement fédéral de la TPS/TVH et du remboursement ontarien pour habitations neuves, construites par le propriétaire ou locatives.",
      h1: "Remboursements de la TPS/TVH pour habitations neuves",
      kicker: 'Services aux particuliers',
      lead: "L'achat ou la construction d'une habitation neuve peut comporter des milliers de dollars de taxe récupérable. Nous vérifions votre admissibilité et préparons correctement la demande dès la première fois.",
      card: "Examen d'admissibilité et demandes de remboursement fédéral et ontarien pour habitations neuves.",
      snippets: [
        [
          "Qui est admissible au remboursement de la TPS/TVH pour habitations neuves?",
          "Les particuliers qui achètent ou construisent une habitation neuve ou rénovée en grande partie comme résidence principale peuvent être admissibles, selon le prix d'achat. Le remboursement fédéral diminue entre 350 000 et 450 000 dollars, et l'Ontario offre un remboursement provincial distinct.",
        ],
      ],
      sections: [
        {
          h: 'Ce que nous faisons',
          ul: [
            "Examen d'admissibilité pour habitations achetées, construites par le propriétaire ou rénovées en grande partie",
            "Préparation de la demande à partir des états du constructeur et des documents de clôture",
            "Conseils pour savoir si le remboursement a été cédé au constructeur",
            "Examen du remboursement pour immeubles locatifs des propriétaires-bailleurs",
            "Production dans le délai prescrit par l'ARC",
          ],
        },
        {
          h: 'Respecter le délai',
          p: ["Les demandes doivent généralement être produites dans les deux ans suivant le transfert de propriété ou l'achèvement de la construction. Rassemblez tôt votre contrat d'achat-vente et vos états de clôture."],
        },
      ],
    },
  },

  {
    path: '/personal-tax-services/personal-financial-planning/',
    type: 'service',
    en: {
      nav: 'Personal Financial Planning',
      title: 'Tax-Focused Personal Financial Planning',
      desc: 'Tax-focused personal financial planning in Scarborough: RRSP, TFSA and FHSA strategy, income splitting, education savings and retirement income timing.',
      h1: 'Personal Financial Planning',
      kicker: 'Personal Services',
      lead: 'Good planning starts with understanding how each decision affects your tax. We help you organize savings, income and goals with the tax side clearly in view.',
      card: 'Tax-focused planning for savings, retirement income and family goals.',
      snippets: [
        [
          'How much can I contribute to my RRSP?',
          "Your RRSP deduction limit is 18 percent of your previous year's earned income, up to the annual dollar maximum, plus unused room carried forward and minus pension adjustments. Your personal limit appears on your CRA notice of assessment and in CRA My Account.",
        ],
      ],
      sections: [
        {
          h: 'Planning topics',
          ul: [
            'RRSP, TFSA and FHSA contribution strategy',
            'Income splitting and spousal planning',
            'Retirement income timing, including CPP, OAS and RRIF withdrawals',
            'Education savings and RESP contributions',
            'Year-end tax planning for employees and self-employed individuals',
          ],
        },
        {
          h: 'A tax-first approach',
          p: ['Our planning focuses on the tax impact of your choices, so you can make informed decisions alongside your lawyer, banker or investment adviser.'],
        },
      ],
    },
    fr: {
      nav: 'Planification financière personnelle',
      title: 'Planification financière axée sur la fiscalité',
      desc: "Planification financière personnelle axée sur la fiscalité à Scarborough : stratégie REER, CELI et CELIAPP, fractionnement du revenu, épargne-études et retraite.",
      h1: 'Planification financière personnelle',
      kicker: 'Services aux particuliers',
      lead: "Une bonne planification commence par comprendre l'effet fiscal de chaque décision. Nous vous aidons à organiser épargne, revenus et objectifs en gardant clairement la fiscalité en vue.",
      card: "Planification axée sur la fiscalité : épargne, revenu de retraite et objectifs familiaux.",
      snippets: [
        [
          "Combien puis-je cotiser à mon REER?",
          "Votre plafond de déduction REER correspond à 18 pour cent du revenu gagné de l'année précédente, jusqu'au maximum annuel en dollars, plus les droits inutilisés reportés, moins les facteurs d'équivalence. Votre plafond personnel figure sur votre avis de cotisation de l'ARC et dans Mon dossier de l'ARC.",
        ],
      ],
      sections: [
        {
          h: 'Sujets de planification',
          ul: [
            "Stratégie de cotisation au REER, au CELI et au CELIAPP",
            "Fractionnement du revenu et planification avec conjoint",
            "Calendrier du revenu de retraite, y compris RPC, SV et retraits d'un FERR",
            "Épargne-études et cotisations à un REEE",
            "Planification fiscale de fin d'année pour salariés et travailleurs autonomes",
          ],
        },
        {
          h: 'Une approche axée sur la fiscalité',
          p: ["Notre planification met l'accent sur l'effet fiscal de vos choix, pour que vous preniez des décisions éclairées avec votre avocat, votre banquier ou votre conseiller en placements."],
        },
      ],
    },
  },

  {
    path: '/personal-tax-services/cra-appeals-audit-facilitation/',
    type: 'service',
    en: {
      nav: 'CRA Appeals & Audit Facilitation',
      title: 'CRA Appeals and Audit Facilitation in Scarborough',
      desc: 'Help with CRA reassessments, notices of objection, taxpayer relief requests, payment arrangements and personal tax audits.',
      h1: 'CRA Appeals and Audit Facilitation',
      kicker: 'Personal Services',
      lead: 'If you disagree with an assessment or face a personal audit, deadlines are strict and the details matter. We help you respond clearly and protect your appeal rights.',
      card: 'Notices of objection, relief requests, payment arrangements and audit support.',
      snippets: [
        [
          'How long do I have to file a notice of objection?',
          'Individuals generally have until the later of one year after the filing due date or 90 days from the date on the notice of assessment to file a notice of objection. Most corporations and other taxpayers have 90 days, so acting quickly is important.',
        ],
      ],
      sections: [
        {
          h: 'How we help',
          ul: [
            'Review of assessments, reassessments and CRA letters',
            'Preparation of notices of objection',
            'Taxpayer relief requests for penalties and interest',
            'Assistance with payment arrangements',
            'Representation during personal tax audits with your authorization',
          ],
        },
        {
          h: 'Act early',
          p: ['The sooner we see the CRA’s letter, the more options you have. Bring the notice, your return and supporting records to your first meeting.'],
        },
      ],
    },
    fr: {
      nav: "Appels et facilitation des vérifications de l'ARC",
      title: "Appels et vérifications de l'ARC à Scarborough",
      desc: "Aide pour nouvelles cotisations de l'ARC, avis d'opposition, demandes d'allègement, ententes de paiement et vérifications fiscales de particuliers.",
      h1: "Appels et facilitation des vérifications de l'ARC",
      kicker: 'Services aux particuliers',
      lead: "Si vous contestez une cotisation ou faites face à une vérification, les délais sont stricts et les détails comptent. Nous vous aidons à répondre clairement et à protéger vos droits d'appel.",
      card: "Avis d'opposition, demandes d'allègement, ententes de paiement et soutien lors des vérifications.",
      snippets: [
        [
          "De combien de temps dispose-t-on pour produire un avis d'opposition?",
          "Les particuliers ont généralement jusqu'à la plus tardive des dates suivantes : un an après la date limite de production ou 90 jours après la date de l'avis de cotisation. La plupart des sociétés et autres contribuables disposent de 90 jours; il importe donc d'agir rapidement.",
        ],
      ],
      sections: [
        {
          h: 'Comment nous aidons',
          ul: [
            "Examen des cotisations, nouvelles cotisations et lettres de l'ARC",
            "Préparation des avis d'opposition",
            "Demandes d'allègement pour pénalités et intérêts",
            "Aide pour les ententes de paiement",
            "Représentation lors de vérifications de particuliers, avec votre autorisation",
          ],
        },
        {
          h: 'Agir tôt',
          p: ["Plus tôt nous voyons la lettre de l'ARC, plus vous avez d'options. Apportez l'avis, votre déclaration et les pièces justificatives à votre première rencontre."],
        },
      ],
    },
  },
];
