/**
 * Business Tax & Accounting hub + 8 service pages (EN / FR).
 * snippets: [question, answer]  -> rendered as <h2> + <p>; answers must be 35-50 words.
 * sections: { h, p?: string[], ul?: string[] }
 */
module.exports = [
  {
    path: '/business-tax-accounting/',
    type: 'hub',
    en: {
      nav: 'Business Tax',
      title: 'Business Tax & Accounting Services in Scarborough',
      desc: 'T2 corporate returns, bookkeeping, payroll, GST/HST, financial statements, business plans and CRA audit support for Ontario businesses. Call 416-439-2688.',
      h1: 'Business Tax and Accounting Services',
      kicker: 'Business Services',
      lead: 'From your first day in business to annual filings and CRA reviews, VAHAI TAX keeps your books accurate, your filings on time and your tax position clear.',
      card: 'Accounting, tax and compliance support for incorporated businesses and self-employed owners.',
      snippets: [
        [
          'What accounting services does a small business need?',
          'Most small businesses need accurate bookkeeping, regular GST/HST filing, payroll remittances if they have employees, year-end financial statements and an annual T2 or T1 business return. Coordinating these services keeps filings consistent and helps avoid penalties and interest.',
        ],
      ],
      sections: [
        {
          h: 'Support at every stage of your business',
          p: ['Whether you are planning a launch, growing a team or preparing for a lender review, our services are designed to work together so nothing falls between the cracks.'],
          ul: [
            'Start-up planning and registration guidance',
            'Monthly or quarterly bookkeeping and HST filing',
            'Payroll, T4A and T5 information returns',
            'Year-end financial statements and T2 corporate returns',
            'Representation during CRA reviews and audits',
          ],
        },
      ],
    },
    fr: {
      nav: 'Fiscalité des entreprises',
      title: "Fiscalité et comptabilité des entreprises",
      desc: "Déclarations T2, tenue de livres, paie, TPS/TVH, états financiers, plans d'affaires et soutien lors des vérifications de l'ARC pour entreprises ontariennes. 416-439-2688.",
      h1: "Services fiscaux et comptables pour entreprises",
      kicker: "Services aux entreprises",
      lead: "Du premier jour d'exploitation aux déclarations annuelles et aux examens de l'ARC, VAHAI TAX tient vos livres à jour, produit vos déclarations à temps et clarifie votre situation fiscale.",
      card: "Soutien comptable, fiscal et réglementaire pour les sociétés et les travailleurs autonomes.",
      snippets: [
        [
          "De quels services comptables une petite entreprise a-t-elle besoin?",
          "La plupart des petites entreprises ont besoin d'une tenue de livres exacte, de déclarations régulières de TPS/TVH, de remises de retenues sur la paie si elles ont des employés, d'états financiers annuels et d'une déclaration T2 ou T1. Coordonner ces services évite pénalités et intérêts.",
        ],
      ],
      sections: [
        {
          h: "Un soutien à chaque étape de votre entreprise",
          p: ["Que vous prépariez un lancement, fassiez croître votre équipe ou prépariez un examen par un prêteur, nos services fonctionnent ensemble pour que rien ne soit oublié."],
          ul: [
            "Planification de démarrage et aide à l'inscription",
            "Tenue de livres mensuelle ou trimestrielle et production de la TVH",
            "Paie, feuillets T4A et T5",
            "États financiers de fin d'exercice et déclarations T2",
            "Représentation lors des examens et vérifications de l'ARC",
          ],
        },
      ],
    },
  },

  {
    path: '/business-tax-accounting/t2-tax-returns/',
    type: 'service',
    en: {
      nav: 'Business Income Tax Returns (T2)',
      title: 'T2 Corporate Income Tax Returns in Scarborough',
      desc: 'Accurate T2 corporate tax return preparation and filing for Ontario corporations, including GIFI schedules and year-end tax adjustments.',
      h1: 'Business Income Tax Returns (T2)',
      kicker: 'Business Services',
      lead: 'Every Canadian corporation must file a T2 return each year, even when it has no income to report. We prepare complete, accurate returns and file them on time.',
      card: 'Preparation and e-filing of annual T2 corporate returns with all required schedules.',
      snippets: [
        [
          'When is a T2 corporate tax return due?',
          "A T2 return is due six months after the corporation's fiscal year-end. Any tax owing is generally due earlier, within two months of year-end, or three months for eligible Canadian-controlled private corporations. Late filing can trigger penalties and daily interest from the CRA.",
        ],
      ],
      sections: [
        {
          h: 'What our T2 service includes',
          ul: [
            'Review of your financial statements and tax adjustments',
            'Completion of GIFI, capital cost allowance and other schedules',
            'Small business deduction and tax credit analysis',
            'Shareholder loan and dividend reporting',
            'Electronic filing and confirmation with the CRA',
          ],
        },
        {
          h: 'Why filing correctly matters',
          p: ['Errors on a corporate return can lead to reassessments, lost deductions and penalties. We reconcile your records before filing so your return is supportable if the CRA asks questions.'],
        },
      ],
    },
    fr: {
      nav: "Déclarations de revenus des entreprises (T2)",
      title: "Déclarations de revenus T2 des sociétés à Scarborough",
      desc: "Préparation et production précises de la déclaration T2 pour sociétés ontariennes, y compris les annexes IFGI et les ajustements fiscaux de fin d'exercice.",
      h1: "Déclarations de revenus des entreprises (T2)",
      kicker: "Services aux entreprises",
      lead: "Toute société canadienne doit produire une déclaration T2 chaque année, même sans revenu à déclarer. Nous préparons des déclarations complètes et exactes, et les produisons à temps.",
      card: "Préparation et transmission électronique des déclarations T2 annuelles avec toutes les annexes requises.",
      snippets: [
        [
          "Quand la déclaration de revenus T2 d'une société est-elle exigible?",
          "La déclaration T2 est due six mois après la fin de l'exercice de la société. L'impôt à payer est généralement exigible plus tôt, deux mois après la fin de l'exercice, ou trois mois pour les sociétés privées sous contrôle canadien admissibles. Un retard entraîne pénalités et intérêts quotidiens.",
        ],
      ],
      sections: [
        {
          h: "Ce que comprend notre service T2",
          ul: [
            "Examen de vos états financiers et des ajustements fiscaux",
            "Préparation des annexes IFGI, de la déduction pour amortissement et autres",
            "Analyse de la déduction pour petite entreprise et des crédits d'impôt",
            "Déclaration des prêts aux actionnaires et des dividendes",
            "Transmission électronique et confirmation auprès de l'ARC",
          ],
        },
        {
          h: "Pourquoi une déclaration exacte est essentielle",
          p: ["Les erreurs dans une déclaration de société peuvent entraîner des nouvelles cotisations, des déductions perdues et des pénalités. Nous rapprochons vos dossiers avant la production pour que votre déclaration soit défendable si l'ARC pose des questions."],
        },
      ],
    },
  },

  {
    path: '/business-tax-accounting/bookkeeping-accounting/',
    type: 'service',
    en: {
      nav: 'Bookkeeping & Accounting',
      title: 'Bookkeeping and Accounting Services in Scarborough',
      desc: 'Monthly bookkeeping, bank reconciliations and accounting support for small businesses and corporations in Scarborough and the GTA.',
      h1: 'Bookkeeping and Accounting',
      kicker: 'Business Services',
      lead: 'Clean books are the foundation of every tax filing. We keep your records current, reconciled and ready for year-end.',
      card: 'Accurate monthly or quarterly bookkeeping, reconciliations and management reports.',
      snippets: [
        [
          'How often should a small business do its bookkeeping?',
          'Small businesses should record transactions and reconcile bank accounts at least monthly. Regular bookkeeping keeps GST/HST and payroll remittances accurate, gives you a current view of profit and cash flow, and prevents a stressful year-end scramble for missing receipts.',
        ],
      ],
      sections: [
        {
          h: 'Bookkeeping services',
          ul: [
            'Income and expense recording and categorization',
            'Bank and credit card reconciliations',
            'Accounts receivable and payable tracking',
            'Monthly or quarterly management reports',
            'Year-end adjustments and working papers',
          ],
        },
        {
          h: 'Systems and records',
          p: ['We can work with your existing accounting software or set up a simple system suited to your business. Records are organized to meet the CRA requirement to keep supporting documents for six years.'],
        },
      ],
    },
    fr: {
      nav: 'Tenue de livres et comptabilité',
      title: 'Tenue de livres et comptabilité à Scarborough',
      desc: "Tenue de livres mensuelle, rapprochements bancaires et soutien comptable pour petites entreprises et sociétés de Scarborough et de la région du Grand Toronto.",
      h1: 'Tenue de livres et comptabilité',
      kicker: 'Services aux entreprises',
      lead: "Des livres propres sont la base de toute déclaration fiscale. Nous tenons vos dossiers à jour, rapprochés et prêts pour la fin d'exercice.",
      card: "Tenue de livres mensuelle ou trimestrielle exacte, rapprochements et rapports de gestion.",
      snippets: [
        [
          "À quelle fréquence une petite entreprise devrait-elle tenir ses livres?",
          "Une petite entreprise devrait inscrire ses opérations et rapprocher ses comptes bancaires au moins une fois par mois. Une tenue de livres régulière assure l'exactitude des remises de TPS/TVH et de paie, offre une vue à jour des profits et évite la course aux reçus manquants en fin d'année.",
        ],
      ],
      sections: [
        {
          h: 'Services de tenue de livres',
          ul: [
            "Enregistrement et classement des revenus et des dépenses",
            "Rapprochements des comptes bancaires et des cartes de crédit",
            "Suivi des comptes clients et fournisseurs",
            "Rapports de gestion mensuels ou trimestriels",
            "Ajustements de fin d'exercice et dossiers de travail",
          ],
        },
        {
          h: 'Systèmes et dossiers',
          p: ["Nous pouvons utiliser votre logiciel comptable actuel ou mettre en place un système simple adapté à votre entreprise. Les dossiers sont organisés pour respecter l'obligation de l'ARC de conserver les pièces justificatives pendant six ans."],
        },
      ],
    },
  },

  {
    path: '/business-tax-accounting/payroll-services/',
    type: 'service',
    en: {
      nav: 'Payroll Services, T4A & T5',
      title: 'Payroll Services, T4A and T5 Filing in Scarborough',
      desc: 'Payroll processing, CRA remittances, and T4, T4A and T5 slip preparation for Ontario employers. Avoid late-remittance penalties.',
      h1: 'Payroll Services, T4A and T5',
      kicker: 'Business Services',
      lead: 'Paying your team correctly and remitting on time protects your business from some of the CRA’s steepest penalties.',
      card: 'Payroll calculations, remittances and year-end T4, T4A and T5 filing.',
      snippets: [
        [
          'When must employers file T4 and T4A slips?',
          'Employers must file T4 and T4A information returns and give copies to recipients by the last day of February following the calendar year. T5 slips reporting investment income, such as dividends, follow the same deadline. Late filing penalties can apply based on the number of slips.',
        ],
      ],
      sections: [
        {
          h: 'What payroll support includes',
          ul: [
            'Payroll account set-up guidance with the CRA',
            'Pay calculations with CPP, EI and income tax deductions',
            'Management of your remittance schedule',
            'T4, T4A and T5 preparation and filing',
            'Year-end reconciliation of payroll accounts',
          ],
        },
        {
          h: 'Avoiding payroll penalties',
          p: ['Source deductions are held in trust for the Crown. Late or insufficient remittances attract penalties and interest, so we track your remitter category and due dates for you.'],
        },
      ],
    },
    fr: {
      nav: 'Services de paie, T4A et T5',
      title: 'Services de paie, T4A et T5 à Scarborough',
      desc: "Traitement de la paie, remises à l'ARC et préparation des feuillets T4, T4A et T5 pour employeurs ontariens. Évitez les pénalités pour remise tardive.",
      h1: 'Services de paie, T4A et T5',
      kicker: 'Services aux entreprises',
      lead: "Payer votre équipe correctement et remettre à temps protège votre entreprise de certaines des pénalités les plus lourdes de l'ARC.",
      card: "Calculs de paie, remises et production des feuillets T4, T4A et T5.",
      snippets: [
        [
          "Quand les employeurs doivent-ils produire les feuillets T4 et T4A?",
          "Les employeurs doivent produire les déclarations de renseignements T4 et T4A et remettre les copies aux bénéficiaires d'ici le dernier jour de février suivant l'année civile. Les feuillets T5 déclarant des revenus de placement, comme les dividendes, suivent la même échéance. Des pénalités peuvent s'appliquer selon le nombre de feuillets.",
        ],
      ],
      sections: [
        {
          h: 'Ce que comprend le soutien à la paie',
          ul: [
            "Aide à l'ouverture du compte de retenues sur la paie auprès de l'ARC",
            "Calculs de paie avec retenues du RPC, de l'AE et de l'impôt",
            "Gestion de votre calendrier de remises",
            "Préparation et production des feuillets T4, T4A et T5",
            "Rapprochement annuel des comptes de paie",
          ],
        },
        {
          h: 'Éviter les pénalités liées à la paie',
          p: ["Les retenues à la source sont détenues en fiducie pour la Couronne. Les remises tardives ou insuffisantes entraînent pénalités et intérêts; nous suivons donc votre catégorie de déclarant et vos échéances."],
        },
      ],
    },
  },

  {
    path: '/business-tax-accounting/gst-hst-filing/',
    type: 'service',
    en: {
      nav: 'GST/HST Filing',
      title: 'GST/HST Registration and Filing in Scarborough',
      desc: 'GST/HST registration, input tax credit review and timely return filing for Ontario businesses. Reduce errors, penalties and CRA notices.',
      h1: 'GST/HST Filing',
      kicker: 'Business Services',
      lead: 'Collecting and remitting HST correctly is a core compliance duty. We handle registration, calculations and filing so you recover every credit you are entitled to.',
      card: 'GST/HST registration, input tax credit review and return filing.',
      snippets: [
        [
          'How often must a business file its GST/HST return?',
          'The CRA assigns a reporting period, monthly, quarterly or annual, based on your taxable revenue. Monthly and quarterly returns, with any balance owing, are due one month after the period ends, while annual filers generally have three months after their fiscal year-end.',
        ],
      ],
      sections: [
        {
          h: 'GST/HST services',
          ul: [
            'Registration and reporting-period guidance',
            'Input tax credit review to recover HST paid on expenses',
            'Preparation and filing of GST/HST returns',
            'Quick Method eligibility review for small businesses',
            'Responding to CRA notices and correcting prior returns',
          ],
        },
        {
          h: 'HST in Ontario',
          p: ['Ontario businesses charge 13 percent HST, made up of the 5 percent federal GST and an 8 percent provincial portion. Correct invoicing and record keeping make each return faster and safer to file.'],
        },
      ],
    },
    fr: {
      nav: 'Production de la TPS/TVH',
      title: 'Inscription et déclarations de TPS/TVH à Scarborough',
      desc: "Inscription à la TPS/TVH, examen des crédits de taxe sur les intrants et production à temps des déclarations pour entreprises ontariennes.",
      h1: 'Production de la TPS/TVH',
      kicker: 'Services aux entreprises',
      lead: "Percevoir et remettre correctement la TVH est une obligation fondamentale. Nous gérons l'inscription, les calculs et la production pour que vous récupériez tous vos crédits.",
      card: "Inscription à la TPS/TVH, examen des crédits de taxe sur les intrants et production des déclarations.",
      snippets: [
        [
          "À quelle fréquence une entreprise doit-elle produire sa déclaration de TPS/TVH?",
          "L'ARC attribue une période de déclaration, mensuelle, trimestrielle ou annuelle, selon vos revenus taxables. Les déclarations mensuelles et trimestrielles, avec tout solde dû, sont exigibles un mois après la fin de la période; les déclarants annuels disposent généralement de trois mois après la fin de leur exercice.",
        ],
      ],
      sections: [
        {
          h: 'Services de TPS/TVH',
          ul: [
            "Aide à l'inscription et au choix de la période de déclaration",
            "Examen des crédits de taxe sur les intrants pour récupérer la TVH payée",
            "Préparation et production des déclarations de TPS/TVH",
            "Examen de l'admissibilité à la méthode rapide pour petites entreprises",
            "Réponse aux avis de l'ARC et correction de déclarations antérieures",
          ],
        },
        {
          h: 'La TVH en Ontario',
          p: ["Les entreprises ontariennes perçoivent une TVH de 13 pour cent, composée de la TPS fédérale de 5 pour cent et d'une portion provinciale de 8 pour cent. Une facturation et une tenue de dossiers rigoureuses rendent chaque déclaration plus rapide et plus sûre."],
        },
      ],
    },
  },

  {
    path: '/business-tax-accounting/financial-statements/',
    type: 'service',
    en: {
      nav: 'Financial Statements',
      title: 'Financial Statements Preparation in Scarborough',
      desc: 'Year-end financial statements including balance sheet and income statement for corporations, sole proprietors, lenders and CRA filings.',
      h1: 'Financial Statements',
      kicker: 'Business Services',
      lead: 'Clear financial statements tell the story of your business for owners, lenders and the CRA. We prepare them from your books, accurately and on schedule.',
      card: 'Balance sheets, income statements and supporting schedules for year-end and lenders.',
      snippets: [
        [
          'What are financial statements used for?',
          "Financial statements, including the balance sheet, income statement and statement of retained earnings, summarize your business's performance and position. Lenders, investors, shareholders and the CRA rely on them, and they form the basis of your corporate tax return.",
        ],
      ],
      sections: [
        {
          h: 'Statements we prepare',
          ul: [
            'Balance sheet',
            'Income statement',
            'Statement of retained earnings',
            'Supporting notes and schedules for tax filing',
            'Interim statements for lenders or partners',
          ],
        },
        {
          h: 'Ready for lenders and investors',
          p: ['Banks and funding programs often ask for two or three years of statements. We organize yours so the financial picture is clear, consistent and easy to review.'],
        },
      ],
    },
    fr: {
      nav: 'États financiers',
      title: "Préparation d'états financiers à Scarborough",
      desc: "États financiers de fin d'exercice, y compris bilan et état des résultats, pour sociétés, travailleurs autonomes, prêteurs et déclarations à l'ARC.",
      h1: 'États financiers',
      kicker: 'Services aux entreprises',
      lead: "Des états financiers clairs racontent l'histoire de votre entreprise aux propriétaires, aux prêteurs et à l'ARC. Nous les préparons à partir de vos livres, avec exactitude et dans les délais.",
      card: "Bilans, états des résultats et annexes pour la fin d'exercice et les prêteurs.",
      snippets: [
        [
          "À quoi servent les états financiers?",
          "Les états financiers, dont le bilan, l'état des résultats et l'état des bénéfices non répartis, résument la performance et la situation de votre entreprise. Les prêteurs, investisseurs, actionnaires et l'ARC s'y fient, et ils servent de base à votre déclaration de revenus de société.",
        ],
      ],
      sections: [
        {
          h: 'États que nous préparons',
          ul: [
            'Bilan',
            'État des résultats',
            'État des bénéfices non répartis',
            "Notes et annexes à l'appui de la déclaration fiscale",
            "États intermédiaires pour prêteurs ou associés",
          ],
        },
        {
          h: 'Prêts pour les prêteurs et les investisseurs',
          p: ["Les banques et les programmes de financement demandent souvent deux ou trois années d'états. Nous organisons les vôtres pour que le portrait financier soit clair, cohérent et facile à examiner."],
        },
      ],
    },
  },

  {
    path: '/business-tax-accounting/business-plans-forecast/',
    type: 'service',
    en: {
      nav: 'Business Plans & Forecasts',
      title: 'Business Plans and Financial Forecasts in Scarborough',
      desc: 'Professional business plans and three-year financial forecasts for bank loans, grants, investors and new ventures in Ontario.',
      h1: 'Business Plans and Forecasts',
      kicker: 'Business Services',
      lead: 'A credible plan, supported by realistic numbers, is often what separates a funded business from a stalled idea. We help you build both.',
      card: 'Business plans and multi-year financial forecasts for lenders, grants and investors.',
      snippets: [
        [
          'What should a business plan include?',
          'A solid business plan describes your products or services, target market, competition, operations and management, along with a financial forecast covering start-up costs, revenue, expenses, profit and cash flow for at least three years. Lenders and investors look first at the numbers.',
        ],
      ],
      sections: [
        {
          h: 'What we prepare',
          ul: [
            'Market and competitor overview',
            'Start-up costs and funding requirement schedule',
            'Three-year revenue, expense and profit forecasts',
            'Cash flow projections and break-even analysis',
            'Plans formatted for banks, lenders and grant applications',
          ],
        },
        {
          h: 'Numbers you can defend',
          p: ['Forecasts are built from your assumptions and tested against realistic scenarios, so you can answer a lender’s questions with confidence.'],
        },
      ],
    },
    fr: {
      nav: "Plans d'affaires et prévisions",
      title: "Plans d'affaires et prévisions financières",
      desc: "Plans d'affaires professionnels et prévisions financières sur trois ans pour prêts bancaires, subventions, investisseurs et nouvelles entreprises en Ontario.",
      h1: "Plans d'affaires et prévisions",
      kicker: 'Services aux entreprises',
      lead: "Un plan crédible, appuyé par des chiffres réalistes, distingue souvent une entreprise financée d'une idée en panne. Nous vous aidons à bâtir les deux.",
      card: "Plans d'affaires et prévisions financières pluriannuelles pour prêteurs, subventions et investisseurs.",
      snippets: [
        [
          "Que doit contenir un plan d'affaires?",
          "Un bon plan d'affaires décrit vos produits ou services, votre marché cible, la concurrence, les activités et la direction, ainsi que des prévisions financières couvrant coûts de démarrage, revenus, dépenses, profits et flux de trésorerie sur au moins trois ans. Les prêteurs examinent d'abord les chiffres.",
        ],
      ],
      sections: [
        {
          h: 'Ce que nous préparons',
          ul: [
            "Aperçu du marché et des concurrents",
            "Tableau des coûts de démarrage et des besoins de financement",
            "Prévisions de revenus, de dépenses et de profits sur trois ans",
            "Projections de trésorerie et analyse du seuil de rentabilité",
            "Plans présentés pour banques, prêteurs et demandes de subvention",
          ],
        },
        {
          h: 'Des chiffres que vous pouvez défendre',
          p: ["Les prévisions sont fondées sur vos hypothèses et testées selon des scénarios réalistes, afin que vous répondiez aux questions d'un prêteur en toute confiance."],
        },
      ],
    },
  },

  {
    path: '/business-tax-accounting/business-startup-consultation/',
    type: 'service',
    en: {
      nav: 'Business Start-Up Consultation',
      title: 'Business Start-Up Consultation in Scarborough',
      desc: 'Start-up advice on business structure, registrations, GST/HST, payroll and first-year tax planning for new Ontario businesses.',
      h1: 'Business Start-Up Consultation',
      kicker: 'Business Services',
      lead: 'The decisions you make in the first months shape your taxes for years. A start-up consultation helps you choose the right structure and set up compliant systems from day one.',
      card: 'Structure, registration and first-year tax planning for new businesses.',
      snippets: [
        [
          'Should I incorporate or operate as a sole proprietor?',
          'A sole proprietorship is simple and inexpensive to start, but you are personally liable for business debts. Incorporating limits liability and may offer tax-deferral opportunities once profits exceed your personal needs, though it adds annual filing and compliance costs.',
        ],
      ],
      sections: [
        {
          h: 'Topics we cover',
          ul: [
            'Choosing between a sole proprietorship, partnership and corporation',
            'Business name and registration requirements',
            'GST/HST and payroll account set-up',
            'Bookkeeping systems and record-keeping habits',
            'Tax planning for your first year of operation',
          ],
        },
        {
          h: 'Start with the right foundation',
          p: ['Fixing a poor structure later can be costly. A short meeting before you register can save time, fees and tax.'],
        },
      ],
    },
    fr: {
      nav: "Consultation de démarrage d'entreprise",
      title: "Consultation de démarrage d'entreprise à Scarborough",
      desc: "Conseils de démarrage sur la structure de l'entreprise, les inscriptions, la TPS/TVH, la paie et la planification fiscale de la première année en Ontario.",
      h1: "Consultation de démarrage d'entreprise",
      kicker: 'Services aux entreprises',
      lead: "Les décisions des premiers mois façonnent vos impôts pour des années. Une consultation de démarrage vous aide à choisir la bonne structure et à mettre en place des systèmes conformes dès le premier jour.",
      card: "Structure, inscriptions et planification fiscale de la première année pour nouvelles entreprises.",
      snippets: [
        [
          "Dois-je me constituer en société ou être travailleur autonome?",
          "Une entreprise individuelle est simple et peu coûteuse à démarrer, mais vous êtes personnellement responsable des dettes. La constitution en société limite la responsabilité et peut permettre de reporter l'impôt lorsque les profits dépassent vos besoins personnels, mais elle ajoute des frais annuels de production et de conformité.",
        ],
      ],
      sections: [
        {
          h: 'Sujets abordés',
          ul: [
            "Choix entre entreprise individuelle, société de personnes et société par actions",
            "Exigences relatives au nom et à l'inscription de l'entreprise",
            "Ouverture des comptes de TPS/TVH et de paie",
            "Systèmes de tenue de livres et habitudes de conservation des dossiers",
            "Planification fiscale de votre première année d'exploitation",
          ],
        },
        {
          h: 'Partir sur de bonnes bases',
          p: ["Corriger une mauvaise structure plus tard peut coûter cher. Une courte rencontre avant l'inscription peut vous faire économiser temps, frais et impôt."],
        },
      ],
    },
  },

  {
    path: '/business-tax-accounting/cra-audits-reviews/',
    type: 'service',
    en: {
      nav: 'CRA Audits & Reviews',
      title: 'CRA Audit and Review Support in Scarborough',
      desc: 'Experienced support for CRA audits, reviews and information requests. Organized responses, authorized representation and objection filing.',
      h1: 'CRA Audits and Reviews',
      kicker: 'Business Services',
      lead: 'A letter from the CRA does not have to become a crisis. With organized records and a clear response strategy, most reviews are resolved quickly.',
      card: 'Support and representation for CRA audits, reviews and information requests.',
      snippets: [
        [
          'What should I do if the CRA selects me for an audit?',
          "Respond by the deadline in the CRA's letter, gather the requested records, and avoid guessing or volunteering unrelated information. Contact a tax professional early, as a representative can communicate with the auditor for you once you provide proper authorization.",
        ],
      ],
      sections: [
        {
          h: 'How we support you',
          ul: [
            'Review of the CRA letter and deadlines',
            'Preparation of records and supporting schedules',
            'Authorized communication with the CRA auditor',
            'Negotiation of proposed adjustments',
            'Notice of objection if you disagree with the assessment',
          ],
        },
        {
          h: 'Common review requests',
          p: ['The CRA often asks for receipts to verify deductions, supporting records for GST/HST input tax credits, or payroll account details. Prompt, well-organized responses usually shorten the process.'],
        },
      ],
    },
    fr: {
      nav: "Vérifications et examens de l'ARC",
      title: "Soutien lors des vérifications de l'ARC à Scarborough",
      desc: "Soutien expérimenté pour les vérifications, examens et demandes de renseignements de l'ARC. Réponses organisées, représentation autorisée et avis d'opposition.",
      h1: "Vérifications et examens de l'ARC",
      kicker: 'Services aux entreprises',
      lead: "Une lettre de l'ARC n'a pas à devenir une crise. Avec des dossiers organisés et une stratégie de réponse claire, la plupart des examens se règlent rapidement.",
      card: "Soutien et représentation lors des vérifications, examens et demandes de renseignements de l'ARC.",
      snippets: [
        [
          "Que faire si l'ARC me choisit pour une vérification?",
          "Répondez avant la date limite indiquée dans la lettre de l'ARC, rassemblez les documents demandés et évitez de deviner ou de fournir des renseignements non pertinents. Communiquez tôt avec un professionnel de l'impôt : un représentant peut échanger avec le vérificateur pour vous une fois l'autorisation appropriée donnée.",
        ],
      ],
      sections: [
        {
          h: 'Comment nous vous soutenons',
          ul: [
            "Examen de la lettre de l'ARC et des échéances",
            "Préparation des dossiers et des annexes justificatives",
            "Communication autorisée avec le vérificateur de l'ARC",
            "Négociation des redressements proposés",
            "Avis d'opposition si vous contestez la cotisation",
          ],
        },
        {
          h: "Demandes d'examen courantes",
          p: ["L'ARC demande souvent des reçus pour valider des déductions, des pièces justificatives pour les crédits de taxe sur les intrants de la TPS/TVH ou des détails sur le compte de paie. Des réponses rapides et bien organisées raccourcissent généralement le processus."],
        },
      ],
    },
  },
];
