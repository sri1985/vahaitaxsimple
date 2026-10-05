/**
 * Core pages: Home, About, Principal, Why Choose Us, Contact (EN / FR).
 * cards: [{ h, p }] rendered as a 3-column grid on desktop, stacked on mobile.
 */
module.exports = [
  {
    path: '/',
    type: 'home',
    en: {
      nav: 'Home',
      fullTitle: 'VAHAI TAX - Accountants and Consultants | Scarborough, ON',
      desc: 'Personal tax, business accounting and corporate services in Scarborough, Ontario. Over 20 years of income tax and accounting experience. Call 416-439-2688.',
      h1: 'Tax and Accounting Counsel for Scarborough Families and Businesses',
      kicker: 'Over 20 Years of Experience in Income Tax and Accounting',
      lead: 'VAHAI TAX provides personal tax, business accounting and corporate filing services from our Progress Avenue office. Every return is prepared with precision, filed on time and explained in plain language.',
      snippets: [
        [
          'When is the personal income tax filing deadline in Canada?',
          'Most Canadians must file their T1 personal income tax return by April 30 of the following year. Self-employed individuals and their spouses or common-law partners have until June 15 to file, but any balance owing is still due April 30 to avoid interest.',
        ],
        [
          'Who must register for GST/HST?',
          'A business must register for GST/HST once its worldwide taxable revenue exceeds 30,000 dollars over four consecutive calendar quarters. Businesses below that small-supplier threshold may register voluntarily, which allows them to claim input tax credits on eligible business expenses.',
        ],
        [
          'How long should I keep tax records in Canada?',
          'The Canada Revenue Agency generally requires you to keep tax records and supporting documents for six years from the end of the last tax year they relate to. Organized receipts, invoices and statements make it far easier to support your return during a review.',
        ],
      ],
      cards: [
        { h: 'Two decades of experience', p: 'More than 20 years in income tax and accounting means we have seen your situation before and know how the CRA reviews it.' },
        { h: 'One office, every need', p: 'Personal returns, business accounting and corporate filings are handled together, so your records and tax positions stay consistent.' },
        { h: 'Support when the CRA writes', p: 'We review notices, prepare responses and communicate with the CRA on your behalf when you authorize us to do so.' },
      ],
    },
    fr: {
      nav: 'Accueil',
      fullTitle: 'VAHAI TAX - Comptables et consultants | Scarborough (Ontario)',
      desc: "Services fiscaux, comptables et aux sociétés à Scarborough, en Ontario. Plus de 20 ans d'expérience en impôt et en comptabilité. Appelez le 416-439-2688.",
      h1: "Conseils fiscaux et comptables pour les familles et les entreprises de Scarborough",
      kicker: "Plus de 20 ans d'expérience en impôt et en comptabilité",
      lead: "VAHAI TAX offre des services fiscaux pour particuliers, de la comptabilité d'entreprise et des dépôts pour sociétés depuis son bureau de l'avenue Progress. Chaque déclaration est préparée avec précision, produite à temps et expliquée simplement.",
      snippets: [
        [
          "Quelle est la date limite de production de la déclaration de revenus des particuliers au Canada?",
          "La plupart des Canadiens doivent produire leur déclaration de revenus T1 au plus tard le 30 avril de l'année suivante. Les travailleurs autonomes et leur conjoint ou conjoint de fait ont jusqu'au 15 juin, mais tout solde dû reste exigible le 30 avril pour éviter les intérêts.",
        ],
        [
          "Qui doit s'inscrire à la TPS/TVH?",
          "Une entreprise doit s'inscrire à la TPS/TVH lorsque ses revenus taxables mondiaux dépassent 30 000 dollars sur quatre trimestres civils consécutifs. Les entreprises sous ce seuil de petit fournisseur peuvent s'inscrire volontairement, ce qui leur permet de demander des crédits de taxe sur les intrants pour leurs dépenses admissibles.",
        ],
        [
          "Combien de temps faut-il conserver ses documents fiscaux au Canada?",
          "L'Agence du revenu du Canada exige généralement de conserver les registres et pièces justificatives pendant six ans à compter de la fin de la dernière année d'imposition à laquelle ils se rapportent. Des reçus, factures et relevés bien classés facilitent grandement la justification de votre déclaration lors d'un examen.",
        ],
      ],
      cards: [
        { h: "Deux décennies d'expérience", p: "Plus de 20 ans en impôt et en comptabilité : nous avons déjà vu votre situation et savons comment l'ARC l'examine." },
        { h: 'Un bureau, tous les besoins', p: "Déclarations personnelles, comptabilité d'entreprise et dépôts de société sont traités ensemble, pour que vos dossiers et vos positions fiscales restent cohérents." },
        { h: "Du soutien quand l'ARC écrit", p: "Nous examinons les avis, préparons les réponses et communiquons avec l'ARC en votre nom lorsque vous nous y autorisez." },
      ],
    },
  },

  {
    path: '/about/',
    type: 'about',
    en: {
      nav: 'About',
      title: 'About VAHAI TAX | Scarborough Tax & Accounting',
      desc: 'VAHAI TAX is a Scarborough tax and accounting practice led by Vasugi Selvaelango, with over 20 years of experience in income tax and accounting.',
      h1: 'About VAHAI TAX',
      kicker: 'Our Firm',
      lead: 'VAHAI TAX - Accountants and Consultants is a tax and accounting practice at 885 Progress Ave. in Scarborough, Ontario, serving individuals, families, self-employed professionals and owner-managed corporations.',
      card: 'Our firm, our principal and what sets our service apart.',
      snippets: [
        [
          'What does VAHAI TAX do?',
          'VAHAI TAX is a Scarborough, Ontario tax and accounting practice offering personal income tax returns, business bookkeeping and filings, corporate registrations and CRA audit support. The firm is led by Vasugi Selvaelango, a tax consultant with over 20 years of experience in income tax and accounting.',
        ],
      ],
      cards: [
        { h: 'Accurate', p: 'Every return and filing is checked against your records before it is submitted.' },
        { h: 'Clear', p: 'We explain what we file, why it matters and what to expect, without jargon.' },
        { h: 'Confidential', p: 'Your financial information is handled with discretion and used only to serve you.' },
      ],
      sections: [
        {
          h: 'Our practice',
          p: [
            'We work in three areas: personal tax, business tax and accounting, and corporate services. Keeping these under one roof means your personal and business filings are prepared with the full picture in view.',
            'Our office is located on Progress Avenue in Scarborough, and we welcome clients from across the Greater Toronto Area.',
          ],
        },
      ],
    },
    fr: {
      nav: 'À propos',
      title: 'À propos de VAHAI TAX | Fiscalité et comptabilité',
      desc: "VAHAI TAX est un cabinet fiscal et comptable de Scarborough dirigé par Vasugi Selvaelango, forte de plus de 20 ans d'expérience en impôt et en comptabilité.",
      h1: 'À propos de VAHAI TAX',
      kicker: 'Notre cabinet',
      lead: "VAHAI TAX - Comptables et consultants est un cabinet fiscal et comptable situé au 885, avenue Progress à Scarborough, en Ontario, au service des particuliers, des familles, des travailleurs autonomes et des sociétés dirigées par leurs propriétaires.",
      card: "Notre cabinet, notre dirigeante et ce qui distingue notre service.",
      snippets: [
        [
          "Que fait VAHAI TAX?",
          "VAHAI TAX est un cabinet fiscal et comptable de Scarborough, en Ontario. Il offre des déclarations de revenus pour particuliers, la tenue de livres, l'inscription de sociétés et le soutien lors des vérifications de l'ARC, sous la direction de Vasugi Selvaelango, consultante fiscale de plus de 20 ans d'expérience.",
        ],
      ],
      cards: [
        { h: 'Exactitude', p: "Chaque déclaration et chaque dépôt sont vérifiés à partir de vos dossiers avant d'être transmis." },
        { h: 'Clarté', p: "Nous expliquons ce que nous produisons, pourquoi c'est important et à quoi s'attendre, sans jargon." },
        { h: 'Confidentialité', p: "Vos renseignements financiers sont traités avec discrétion et servent uniquement à vous servir." },
      ],
      sections: [
        {
          h: 'Notre pratique',
          p: [
            "Nous travaillons dans trois domaines : fiscalité des particuliers, fiscalité et comptabilité des entreprises, et services aux sociétés. Les réunir sous un même toit signifie que vos déclarations personnelles et d'entreprise sont préparées avec une vue d'ensemble.",
            "Notre bureau est situé sur l'avenue Progress à Scarborough, et nous accueillons des clients de toute la région du Grand Toronto.",
          ],
        },
      ],
    },
  },

  {
    path: '/about/vasugi-selvaelango/',
    type: 'principal',
    en: {
      nav: 'Vasugi Selvaelango',
      title: 'Vasugi Selvaelango | Tax Consultant, Scarborough',
      desc: 'Vasugi Selvaelango is a Scarborough tax consultant with over 20 years of experience in income tax and accounting, and principal of VAHAI TAX.',
      h1: 'Vasugi Selvaelango',
      kicker: 'Principal and Tax Consultant',
      lead: 'Vasugi Selvaelango is the principal of VAHAI TAX and a tax consultant with more than 20 years of experience in income tax and accounting.',
      card: 'Principal and tax consultant with over 20 years of experience.',
      snippets: [
        [
          'Who is Vasugi Selvaelango?',
          'Vasugi Selvaelango is the principal of VAHAI TAX in Scarborough, Ontario. She is a tax consultant with more than 20 years of experience in income tax and accounting, serving individuals, families, self-employed professionals and incorporated businesses across the Greater Toronto Area.',
        ],
      ],
      sections: [
        {
          h: 'Experience and focus',
          p: ['Over two decades, Vasugi has prepared returns and managed accounts for employees, families, landlords, self-employed professionals and owner-managed corporations. That breadth lets her see how personal and business decisions affect each other.'],
          ul: [
            'Personal and family income tax planning',
            'Rental property and capital gains reporting',
            'Small-business accounting, payroll and GST/HST',
            'Incorporation and corporate record maintenance',
            'CRA reviews, audits and appeals',
          ],
        },
        {
          h: 'Working with Vasugi',
          p: ['Clients can expect direct access to an experienced professional, careful preparation and straightforward explanations. Call or email to arrange a consultation at our Scarborough office.'],
        },
      ],
    },
    fr: {
      nav: 'Vasugi Selvaelango',
      title: 'Vasugi Selvaelango | Consultante fiscale, Scarborough',
      desc: "Vasugi Selvaelango, consultante fiscale à Scarborough forte de plus de 20 ans d'expérience en impôt et en comptabilité, est la dirigeante de VAHAI TAX.",
      h1: 'Vasugi Selvaelango',
      kicker: 'Dirigeante et consultante fiscale',
      lead: "Vasugi Selvaelango est la dirigeante de VAHAI TAX et une consultante fiscale forte de plus de 20 ans d'expérience en impôt et en comptabilité.",
      card: "Dirigeante et consultante fiscale forte de plus de 20 ans d'expérience.",
      snippets: [
        [
          "Qui est Vasugi Selvaelango?",
          "Vasugi Selvaelango est la dirigeante de VAHAI TAX à Scarborough, en Ontario. Consultante fiscale forte de plus de 20 ans d'expérience en impôt et en comptabilité, elle sert des particuliers, des familles, des travailleurs autonomes et des entreprises constituées en société dans la région du Grand Toronto.",
        ],
      ],
      sections: [
        {
          h: 'Expérience et domaines de pratique',
          p: ["Depuis plus de vingt ans, Vasugi prépare des déclarations et gère des comptes pour des salariés, des familles, des propriétaires d'immeubles locatifs, des travailleurs autonomes et des sociétés dirigées par leurs propriétaires. Cette étendue lui permet de voir comment les décisions personnelles et d'affaires s'influencent."],
          ul: [
            "Planification fiscale personnelle et familiale",
            "Déclaration des immeubles locatifs et des gains en capital",
            "Comptabilité de petite entreprise, paie et TPS/TVH",
            "Constitution en société et tenue des registres corporatifs",
            "Examens, vérifications et appels de l'ARC",
          ],
        },
        {
          h: 'Travailler avec Vasugi',
          p: ["Les clients peuvent compter sur un accès direct à une professionnelle expérimentée, une préparation minutieuse et des explications simples. Appelez ou écrivez-nous pour fixer un rendez-vous à notre bureau de Scarborough."],
        },
      ],
    },
  },

  {
    path: '/about/why-choose-us/',
    type: 'whyus',
    en: {
      nav: 'Why Choose Us',
      title: 'Why Choose VAHAI TAX | Scarborough Tax Consultants',
      desc: 'Experience, one-office convenience, plain-language advice and CRA support. See why Scarborough clients choose VAHAI TAX for tax and accounting.',
      h1: 'Why Choose VAHAI TAX',
      kicker: 'Our Approach',
      lead: 'Choosing a tax professional is a decision about trust. These are the principles that guide how we work with every client.',
      card: 'Experience, convenience and dependable CRA support.',
      snippets: [
        [
          'Why choose a local tax consultant?',
          'A local tax consultant understands Ontario-specific rules such as HST, provincial credits and Ontario corporate filings, and can meet you in person to review documents. Face-to-face service also simplifies signing, authorization and follow-up when the CRA writes to you.',
        ],
      ],
      cards: [
        { h: 'Over 20 years of experience', p: 'Two decades in income tax and accounting bring practical judgment to both routine returns and complicated files.' },
        { h: 'Personal, business and corporate under one roof', p: 'One practice handles your T1, your business bookkeeping and your corporate filings, so nothing is prepared in isolation.' },
        { h: 'Plain-language advice', p: 'You will understand what is being filed, what it means for your tax, and what comes next.' },
        { h: 'Support when the CRA calls', p: 'We help you respond to reviews, audits and reassessments, and we protect your appeal deadlines.' },
        { h: 'Accuracy before filing', p: 'Figures are reconciled to your records before submission, which reduces the risk of notices and reassessments.' },
        { h: 'A local Scarborough office', p: 'Meet at 885 Progress Ave. to review documents, sign forms and ask questions face to face.' },
      ],
    },
    fr: {
      nav: 'Pourquoi nous choisir',
      title: 'Pourquoi choisir VAHAI TAX | Consultants fiscaux',
      desc: "Expérience, commodité d'un seul bureau, conseils clairs et soutien face à l'ARC. Découvrez pourquoi les clients de Scarborough choisissent VAHAI TAX.",
      h1: 'Pourquoi choisir VAHAI TAX',
      kicker: 'Notre approche',
      lead: "Choisir un professionnel de l'impôt est une question de confiance. Voici les principes qui guident notre travail auprès de chaque client.",
      card: "Expérience, commodité et soutien fiable face à l'ARC.",
      snippets: [
        [
          "Pourquoi choisir un consultant fiscal local?",
          "Un consultant fiscal local connaît les règles propres à l'Ontario, comme la TVH, les crédits provinciaux et les dépôts de sociétés ontariennes, et peut vous rencontrer en personne pour examiner vos documents. Le service en personne simplifie aussi les signatures, les autorisations et le suivi lorsque l'ARC vous écrit.",
        ],
      ],
      cards: [
        { h: "Plus de 20 ans d'expérience", p: "Deux décennies en impôt et en comptabilité apportent un jugement pratique tant aux déclarations courantes qu'aux dossiers complexes." },
        { h: 'Particuliers, entreprises et sociétés sous un même toit', p: "Un seul cabinet s'occupe de votre T1, de la tenue de livres de votre entreprise et de vos dépôts de société; rien n'est préparé isolément." },
        { h: 'Des conseils clairs', p: "Vous comprenez ce qui est produit, ce que cela signifie pour votre impôt et la suite des choses." },
        { h: "Du soutien quand l'ARC appelle", p: "Nous vous aidons à répondre aux examens, vérifications et nouvelles cotisations, et nous protégeons vos délais d'appel." },
        { h: "L'exactitude avant la production", p: "Les chiffres sont rapprochés de vos dossiers avant la transmission, ce qui réduit le risque d'avis et de nouvelles cotisations." },
        { h: 'Un bureau local à Scarborough', p: "Rencontrez-nous au 885, avenue Progress pour examiner vos documents, signer des formulaires et poser vos questions en personne." },
      ],
    },
  },

  {
    path: '/contact/',
    type: 'contact',
    en: {
      nav: 'Contact',
      title: 'Contact VAHAI TAX | Scarborough, Ontario',
      desc: 'Contact VAHAI TAX at 885 Progress Ave., Unit 102, Scarborough, ON M1H 3G3. Call 416-439-2688 or 647-221-6262 to book a consultation.',
      h1: 'Contact VAHAI TAX',
      kicker: 'Get in Touch',
      lead: 'Call, email or visit our Scarborough office to discuss your tax, accounting or corporate needs.',
      card: 'Address, phone numbers and email for VAHAI TAX.',
      snippets: [
        [
          'How do I book a consultation with VAHAI TAX?',
          'Call 416-439-2688 or 647-221-6262, or send an email, to request a consultation at our office at 885 Progress Ave., Unit 102, Scarborough. Let us know whether your needs are personal, business or corporate so we can tell you what to bring.',
        ],
      ],
      sections: [
        {
          h: 'What to bring to your first meeting',
          p: ['Bringing the right documents lets us give you useful advice at the first visit.'],
          ul: [
            'Last year’s notice of assessment and tax return',
            'Current-year slips such as T4, T5 and receipts for deductions',
            'For businesses: financial records, bank statements and GST/HST and payroll account details',
            'Any letters received from the CRA',
            'Government-issued photo identification',
          ],
        },
      ],
    },
    fr: {
      nav: 'Contact',
      title: 'Nous joindre | VAHAI TAX, Scarborough (Ontario)',
      desc: "Joignez VAHAI TAX au 885, avenue Progress, bureau 102, Scarborough (Ontario) M1H 3G3. Appelez le 416-439-2688 ou le 647-221-6262 pour prendre rendez-vous.",
      h1: 'Nous joindre',
      kicker: 'Communiquez avec nous',
      lead: "Appelez, écrivez-nous ou visitez notre bureau de Scarborough pour discuter de vos besoins fiscaux, comptables ou corporatifs.",
      card: "Adresse, numéros de téléphone et courriel de VAHAI TAX.",
      snippets: [
        [
          "Comment prendre rendez-vous avec VAHAI TAX?",
          "Appelez le 416-439-2688 ou le 647-221-6262, ou envoyez un courriel, pour demander un rendez-vous à notre bureau du 885, avenue Progress, bureau 102, à Scarborough. Indiquez si vos besoins sont personnels, d'entreprise ou de société afin que nous vous disions quoi apporter.",
        ],
      ],
      sections: [
        {
          h: 'Quoi apporter à votre première rencontre',
          p: ["Apporter les bons documents nous permet de vous donner des conseils utiles dès la première visite."],
          ul: [
            "L'avis de cotisation et la déclaration de l'an dernier",
            "Les feuillets de l'année en cours, comme T4 et T5, et les reçus pour déductions",
            "Pour les entreprises : dossiers financiers, relevés bancaires et détails des comptes de TPS/TVH et de paie",
            "Toute lettre reçue de l'ARC",
            "Une pièce d'identité avec photo délivrée par le gouvernement",
          ],
        },
      ],
    },
  },
];
