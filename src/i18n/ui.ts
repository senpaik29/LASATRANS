export const languages = {
  cs: "Čeština",
  en: "English",
} as const;

export const defaultLang = "cs";

export const ui = {
  cs: {
    "site.title": "Lasa Trans — Mezinárodní přeprava nákladu po ČR a EU",
    "site.description":
      "Lasa Trans s.r.o. — mezinárodní přeprava nákladu po České republice a Evropě. FTL, LTL, expresní doručení, zasilatelství. Spolehlivě, rychle, transparentně.",
    "site.keywords":
      "přeprava nákladu, logistika, Česká republika, Evropa, FTL, LTL, zasilatelství, doprava, Lasa Trans",
    "site.ogTitle": "Lasa Trans — Mezinárodní přeprava nákladu po ČR a EU",
    "site.ogDescription":
      "Váš spolehlivý partner ve světě logistiky. Bezpečnost, rychlost a transparentnost v každé fázi doručení.",

    "nav.services": "Služby",
    "nav.regions": "Regiony",
    "nav.whyUs": "Proč my",
    "nav.quote": "Vyžádat cenu",
    "nav.closeMenu": "Zavřít menu",

    "hero.badge": "Mezinárodní logistika",
    "hero.imageAlt": "Kamion na dálnici",
    "hero.title1": "Přeprava nákladu",
    "hero.title2": "po ČR a EU",
    "hero.subtitle":
      "Váš spolehlivý partner ve světě logistiky. Bezpečnost, rychlost a transparentnost v každé fázi doručení.",
    "hero.ctaQuote": "Vyžádat cenu",
    "hero.ctaServices": "Naše služby",
    "hero.stat1.label": "Podpora",
    "hero.stat2.label": "Zemí EU",
    "hero.stat3.label": "Záruka",

    "about.title": "Profesionální logistika bez hranic",
    "about.p1":
      "Lasa Trans s.r.o. — tým odborníků na mezinárodní přepravu nákladu. Kompletní spektrum licencovaných služeb pro potřeby vašeho podnikání.",
    "about.p2":
      "Vozový park odpovídá evropským standardům a zajišťuje nepřetržité doručování v České republice a po celé Evropě.",
    "about.bullet1": "Licencovaný mezinárodní dopravce",
    "about.bullet2": "Moderní vozový park (Euro 6)",
    "about.bullet3": "Přímé smlouvy bez prostředníků",
    "about.card1.title": "Bezpečnost",
    "about.card1.text": "Kompletní pojištění nákladu",
    "about.card2.title": "Transparentnost",
    "about.card2.text": "Sledování v reálném čase",
    "about.card3.title": "Spolehlivost",
    "about.card3.text": "99 % dodávek včas",

    "whyUs.title": "Proč si vybírají nás",
    "whyUs.f1.title": "Rychlé doručení",
    "whyUs.f1.text":
      "Optimalizované trasy a expresní řešení pro naléhavé zásilky po celé Evropě.",
    "whyUs.f2.title": "Přesnost",
    "whyUs.f2.text": "Doručení minutu na minutu — náš zlatý standard.",
    "whyUs.f3.title": "Pojištění",
    "whyUs.f3.text": "Všechny zásilky jsou pojištěny v souladu s úmluvou CMR.",
    "whyUs.f4.title": "Flexibilní tarify",
    "whyUs.f4.text":
      "Individuální ceny v závislosti na objemu a pravidelnosti dodávek.",

    "stats.s1.label": "Provedených zakázek",
    "stats.s2.label": "Doručení včas",
    "stats.s3.label": "Stálých klientů",
    "stats.s4.label": "Let na trhu",

    "dest.title": "Geografie přeprav",
    "dest.subtitle": "Pravidelné linky po žádaných evropských destinacích",
    "dest.networkLabel": "Síť EU",

    "services.title": "Naše služby",
    "services.s1.title": "FTL / LTL přeprava",
    "services.s1.text":
      "Celovozové a sběrné zásilky s optimálním využitím prostoru.",
    "services.s1.alt": "Nakládka nákladu",
    "services.s2.title": "Zasilatelství",
    "services.s2.text":
      "Doprovod nákladu, dokumentace a výběr optimální trasy.",
    "services.s2.alt": "Logistická kancelář",
    "services.s3.title": "Expresní doručení",
    "services.s3.text":
      "Naléhavé jízdy a prioritní zpracování pro kritické dodávky.",
    "services.s3.alt": "Expresní doručení",

    "test.title": "Hodnocení klientů",
    "test.q1.text":
      "„Nejlepší přepravní služba v Česku. Vždy včas a v kontaktu.“",
    "test.q1.author": "Aleksej Kovalev — TechStore s.r.o.",
    "test.q2.text":
      "„Zasilatelství druhý rok. Žádné zpoždění, dokumenty v pořádku.“",
    "test.q2.author": "Marie Vasiljevová — EuroParts",
    "test.q3.text":
      "„Pomohli s nadrozměrným nákladem z Německa bez zbytečných starostí.“",
    "test.q3.author": "Jan Dvořák — CZ Log",

    "quote.title": "Vyžádejte si cenovou nabídku",
    "quote.subtitle":
      "Vyplňte formulář — specialista vás bude kontaktovat do 15 minut.",
    "quote.phoneLabel": "Telefon",
    "quote.emailLabel": "Email",
    "quote.form.name": "Jméno",
    "quote.form.namePlaceholder": "Jan Novák",
    "quote.form.emailPlaceholder": "example@mail.com",
    "quote.form.phone": "Telefon",
    "quote.form.phonePlaceholder": "+420 000 000 000",
    "quote.form.cargo": "Typ nákladu",
    "quote.form.cargoOpt1": "Běžný náklad",
    "quote.form.cargoOpt2": "Sběrná zásilka (LTL)",
    "quote.form.cargoOpt3": "Celovozová zásilka (FTL)",
    "quote.form.cargoOpt4": "Nebezpečný náklad (ADR)",
    "quote.form.cargoOpt5": "Mražený náklad (FRC)",
    "quote.form.pickupFrom": "Vyzvednutí od",
    "quote.form.pickupTo": "Vyzvednutí do",
    "quote.form.route": "Trasa",
    "quote.form.routePlaceholder": "Praha — Berlín",
    "quote.form.notes": "Doplňující informace",
    "quote.form.notesPlaceholder": "Rozměry, hmotnost, datum...",
    "quote.form.submit": "Odeslat poptávku",
    "quote.form.privacy":
      "Kliknutím na tlačítko souhlasíte se zásadami ochrany osobních údajů.",
    "quote.form.success": "Děkujeme! Vaše poptávka byla přijata.",
    "quote.form.error": "Něco se pokazilo. Zkuste to prosím znovu.",
    "quote.form.subject": "Nová poptávka — Lasa Trans",

    "footer.tagline": "Oficiální dopravní partner v Evropě.",
    "footer.legalTitle": "Právní informace",
    "footer.legalIco": "IČO",
    "footer.legalJednatel": "Jednatel",
    "footer.addressTitle": "Adresa kanceláře",
    "footer.address": "Braunerova 563/7, Libeň, 180 00 Praha 8",
    "footer.addressShort": "Braunerova 563/7, 180 00 Praha 8",
    "footer.slogan": "Spolehlivost na každém kilometru.",
    "footer.servicesTitle": "Služby",
    "footer.services1": "FTL přeprava",
    "footer.services2": "Sběrné zásilky",
    "footer.services3": "Expresní doručení",
    "footer.infoTitle": "Informace",
    "footer.info1": "O společnosti",
    "footer.info2": "Geografie",
    "footer.info3": "Proč my",
    "footer.contactsTitle": "Kontakty",
    "footer.copyright": "Lasa Trans Logistics",

    "lang.switchLabel": "EN",
    "lang.switchTitle": "Switch to English",

    "thanks.pageTitle": "Děkujeme — Lasa Trans",
    "thanks.title": "Děkujeme za Vaši poptávku!",
    "thanks.body": "Náš zaměstnanec Vás brzy bude kontaktovat.",
    "thanks.backHome": "Zpět na hlavní stránku",
  },
  en: {
    "site.title": "Lasa Trans — International freight transport across CZ and EU",
    "site.description":
      "Lasa Trans s.r.o. — international freight transport across the Czech Republic and Europe. FTL, LTL, express delivery, forwarding. Reliable, fast, transparent.",
    "site.keywords":
      "freight transport, logistics, Czech Republic, Europe, FTL, LTL, forwarding, transport, Lasa Trans",
    "site.ogTitle":
      "Lasa Trans — International freight transport across CZ and EU",
    "site.ogDescription":
      "Your reliable partner in the world of logistics. Safety, speed and transparency at every stage of delivery.",

    "nav.services": "Services",
    "nav.regions": "Regions",
    "nav.whyUs": "Why us",
    "nav.quote": "Request a quote",
    "nav.closeMenu": "Close menu",

    "hero.badge": "International logistics",
    "hero.imageAlt": "Truck on the highway",
    "hero.title1": "Freight transport",
    "hero.title2": "across CZ & EU",
    "hero.subtitle":
      "Your reliable partner in the world of logistics. Safety, speed and transparency at every stage of delivery.",
    "hero.ctaQuote": "Request a quote",
    "hero.ctaServices": "Our services",
    "hero.stat1.label": "Support",
    "hero.stat2.label": "EU countries",
    "hero.stat3.label": "Guarantee",

    "about.title": "Professional logistics without borders",
    "about.p1":
      "Lasa Trans s.r.o. — a team of experts in international freight transport. A full range of licensed services tailored to your business needs.",
    "about.p2":
      "Our fleet meets European standards and ensures uninterrupted delivery in the Czech Republic and across Europe.",
    "about.bullet1": "Licensed international carrier",
    "about.bullet2": "Modern fleet (Euro 6)",
    "about.bullet3": "Direct contracts, no intermediaries",
    "about.card1.title": "Safety",
    "about.card1.text": "Full cargo insurance",
    "about.card2.title": "Transparency",
    "about.card2.text": "Real-time tracking",
    "about.card3.title": "Reliability",
    "about.card3.text": "99% on-time deliveries",

    "whyUs.title": "Why choose us",
    "whyUs.f1.title": "Fast delivery",
    "whyUs.f1.text":
      "Optimised routes and express solutions for urgent shipments across Europe.",
    "whyUs.f2.title": "Punctuality",
    "whyUs.f2.text": "Delivery to the minute — our gold standard.",
    "whyUs.f3.title": "Insurance",
    "whyUs.f3.text": "All shipments are insured under the CMR convention.",
    "whyUs.f4.title": "Flexible pricing",
    "whyUs.f4.text":
      "Custom rates depending on volume and shipment frequency.",

    "stats.s1.label": "Orders completed",
    "stats.s2.label": "On-time deliveries",
    "stats.s3.label": "Regular clients",
    "stats.s4.label": "Years on the market",

    "dest.title": "Geography of shipments",
    "dest.subtitle":
      "Regular routes to popular destinations across Europe",
    "dest.networkLabel": "EU network",

    "services.title": "Our services",
    "services.s1.title": "FTL / LTL transport",
    "services.s1.text":
      "Full-load and groupage shipments with optimal space utilisation.",
    "services.s1.alt": "Cargo loading",
    "services.s2.title": "Forwarding",
    "services.s2.text":
      "Cargo supervision, documentation and optimal route selection.",
    "services.s2.alt": "Logistics office",
    "services.s3.title": "Express delivery",
    "services.s3.text":
      "Urgent runs and priority handling for critical shipments.",
    "services.s3.alt": "Express delivery",

    "test.title": "Client testimonials",
    "test.q1.text":
      "“The best transport service in the Czech Republic. Always on time and in touch.”",
    "test.q1.author": "Alexey Kovalev — TechStore s.r.o.",
    "test.q2.text":
      "“Forwarding for two years now. Not a single delay, paperwork in order.”",
    "test.q2.author": "Maria Vasilieva — EuroParts",
    "test.q3.text":
      "“They helped us with an oversized shipment from Germany without any hassle.”",
    "test.q3.author": "Jan Dvořák — CZ Log",

    "quote.title": "Request a commercial offer",
    "quote.subtitle":
      "Fill in the form — a specialist will contact you within 15 minutes.",
    "quote.phoneLabel": "Phone",
    "quote.emailLabel": "Email",
    "quote.form.name": "Name",
    "quote.form.namePlaceholder": "John Smith",
    "quote.form.emailPlaceholder": "example@mail.com",
    "quote.form.phone": "Phone",
    "quote.form.phonePlaceholder": "+420 000 000 000",
    "quote.form.cargo": "Cargo type",
    "quote.form.cargoOpt1": "Regular cargo",
    "quote.form.cargoOpt2": "Groupage (LTL)",
    "quote.form.cargoOpt3": "Full truckload (FTL)",
    "quote.form.cargoOpt4": "Dangerous goods (ADR)",
    "quote.form.cargoOpt5": "Frozen cargo (FRC)",
    "quote.form.pickupFrom": "Pickup from",
    "quote.form.pickupTo": "Pickup to",
    "quote.form.route": "Route",
    "quote.form.routePlaceholder": "Prague — Berlin",
    "quote.form.notes": "Additional details",
    "quote.form.notesPlaceholder": "Dimensions, weight, date...",
    "quote.form.submit": "Send request",
    "quote.form.privacy":
      "By clicking the button you agree with the privacy policy.",
    "quote.form.success": "Thank you! Your request has been received.",
    "quote.form.error": "Something went wrong. Please try again.",
    "quote.form.subject": "New enquiry — Lasa Trans",

    "footer.tagline": "Official transport partner in Europe.",
    "footer.legalTitle": "Legal information",
    "footer.legalIco": "IČO",
    "footer.legalJednatel": "Director",
    "footer.addressTitle": "Office address",
    "footer.address": "Braunerova 563/7, Libeň, 180 00 Praha 8",
    "footer.addressShort": "Braunerova 563/7, 180 00 Praha 8",
    "footer.slogan": "Reliability on every mile.",
    "footer.servicesTitle": "Services",
    "footer.services1": "FTL transport",
    "footer.services2": "Groupage",
    "footer.services3": "Express delivery",
    "footer.infoTitle": "Information",
    "footer.info1": "About us",
    "footer.info2": "Regions",
    "footer.info3": "Why us",
    "footer.contactsTitle": "Contacts",
    "footer.copyright": "Lasa Trans Logistics",

    "lang.switchLabel": "CS",
    "lang.switchTitle": "Přepnout do češtiny",

    "thanks.pageTitle": "Thank you — Lasa Trans",
    "thanks.title": "Thank you for your enquiry!",
    "thanks.body": "Our specialist will contact you shortly.",
    "thanks.backHome": "Return to the homepage",
  },
} as const;

export type TranslationKey = keyof (typeof ui)[typeof defaultLang];
