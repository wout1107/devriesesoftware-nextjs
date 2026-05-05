export type Faq = { q: string; a: string }
export type ProcessStep = { title: string; description: string }
export type Testimonial = { quote: string; author: string }

export type ServiceTemplates = {
    metaTitles: string[]
    metaDescriptions: string[]
    h1s: string[]
    intros: string[]
    expertise: string[]
    faqs: Faq[]
    processSteps: ProcessStep[]
    testimonials: Testimonial[]
    ctas: string[]
}

// Placeholders: {city} {province} {distance} {neighbor1} {neighbor2} {neighbor3}

export const localAdvantageTemplates: string[] = [
    `Vanuit Kanegem (deelgemeente van Tielt) bedienen wij klanten in {city} en omgeving al sinds de start van Devriese Software. De afstand bedraagt slechts {distance} kilometer, wat betekent dat een persoonlijk gesprek bij u op kantoor zo geregeld is. Geen ticketsystemen, geen tussenpersonen — gewoon direct contact met de developer die uw project bouwt.

Wij kennen de ondernemerscultuur in {province} en weten wat KMO's en zelfstandigen in {city} verwachten van een digitale partner: kwaliteit, transparantie en eerlijke prijzen. Ook bedrijven uit buurgemeenten als {neighbor1}, {neighbor2} en {neighbor3} kloppen regelmatig bij ons aan voor gelijkaardige projecten.

Onze West-Vlaamse no-nonsense aanpak betekent: heldere afspraken, vaste prijzen waar mogelijk, en deadlines die we nakomen. We praten in mensentaal, niet in marketing-jargon.`,

    `Een lokale partner kiezen voor uw digitaal project levert concrete voordelen op. Onze basis in Kanegem (Tielt) ligt op {distance} km van {city}, dichtbij genoeg voor regelmatig persoonlijk overleg. Mailen en bellen kan altijd, maar voor strategische gesprekken is samenzitten op kantoor onverslaanbaar.

Wij werken al voor ondernemers verspreid over {province}, met een sterke aanwezigheid in {city}, {neighbor1} en {neighbor2}. Dat betekent dat wij de regionale markt grondig kennen — uw concurrenten, uw doelgroep, uw lokale zoektrends.

Wat ons onderscheidt van grote bureaus: u krijgt geen account-manager als tussenpersoon. U spreekt rechtstreeks met de developer die de code schrijft. Korte communicatielijnen, snelle iteraties, geen e-mail die in een ticketsysteem verdwijnt.`,

    `Werken met een ontwikkelaar uit de eigen regio scheelt tijd, miscommunicatie en uiteindelijk geld. Vanaf onze locatie in Kanegem zitten we in {distance} minuten rijden in {city}. Dat klinkt logisch, maar het maakt een wereld van verschil bij complexe projecten waar regelmatig overleg nodig is.

Onze klantenkring strekt zich uit over heel {province}. Bedrijven in {city} kiezen voor ons omwille van dezelfde redenen als ondernemers in {neighbor1} en {neighbor2}: vakkennis op niveau, een gezicht achter het werk, en de zekerheid dat we ook na oplevering bereikbaar blijven voor onderhoud.

Wij begrijpen ook wat lokaal ondernemen in {province} inhoudt: hard werken, eerlijk verdienen, en geen geld verspillen aan dingen die geen waarde toevoegen. Onze aanpak weerspiegelt dat.`,

    `Devriese Software werd opgericht door Wout Devriese in Kanegem, op {distance} km van {city}. Die nabijheid is bewust: lokale bedrijven verdienen lokale partners die hun markt kennen en bereikbaar zijn. We werken voor klanten verspreid over {province}, met name in {city}, {neighbor1}, {neighbor2} en {neighbor3}.

Een fysiek bezoek bij u op kantoor of bij ons in Kanegem regelen we vlot. Voor de meeste contactmomenten volstaat een videocall, maar bij grote projecten verkiezen we minstens één live sessie. Zo voelen we de sfeer van uw bedrijf en vertalen we die naar het ontwerp.

In {province} weten ondernemers wat ze willen: oplossingen die werken, geen luchtkastelen. Daar sluiten we naadloos op aan met concrete deliverables, vaste prijzen en transparante timing.`,

    `Voor bedrijven in {city} is het kiezen van een digitale partner geen kleine beslissing. Een lokale ontwikkelaar in {province} biedt voordelen die nationale bureaus moeilijk evenaren. Vanuit Kanegem rijden we in {distance} km bij u langs voor strategie-gesprekken, design-reviews of trainings.

Wij hebben in de loop der jaren projecten opgeleverd in {city}, {neighbor1}, {neighbor2} en {neighbor3}. Die ervaring helpt ons om snel de juiste vragen te stellen en valkuilen te vermijden die typerend zijn voor uw markt.

Onze prijzen zijn West-Vlaams: scherp, eerlijk, zonder verborgen kosten. U weet vooraf wat u betaalt en wat u krijgt. Dat schept duidelijkheid voor beide partijen en voorkomt onaangename verrassingen onderweg.`,
]

export const fallbackTestimonials: Testimonial[] = [
    { quote: 'Vlotte communicatie, snelle oplevering en een eindresultaat dat onze verwachtingen overtreft. Wout denkt mee als ondernemer, niet alleen als developer.', author: 'Lokale ondernemer uit {city}' },
    { quote: 'Zoveel deadlines gehaald, zo weinig stress. Devriese Software begrijpt KMO\'s en levert telkens werk dat technisch én commercieel klopt.', author: 'KMO-zaakvoerder, {city}' },
]

export const serviceTemplates: Record<string, ServiceTemplates> = {
    'website-laten-maken': {
        metaTitles: [
            'Website laten maken in {city} | Devriese Software',
            '{city}: professionele website op maat | Devriese',
            'Website bouwen voor bedrijven in {city}',
            'Web developer {city} — Devriese Software',
        ],
        metaDescriptions: [
            'Professionele website laten maken in {city}? Maatwerk Next.js sites met Lighthouse 95+, SEO-klaar en mobile-first. Lokaal contact, vaste prijzen.',
            'Web developer in {city} voor websites die scoren in Google. Snelle laadtijden, modern design, eigen CMS. Vrijblijvend gesprek mogelijk.',
            'Bedrijf in {city}? Wij bouwen razendsnelle websites op maat met React en Next.js. Geen templates, geen verborgen kosten.',
        ],
        h1s: [
            'Website laten maken in {city}',
            'Professionele website voor uw bedrijf in {city}',
            'Web developer {city}: websites die werken',
        ],
        intros: [
            `Een sterke website is voor ondernemers in {city} geen luxe meer maar een noodzaak. Bezoekers oordelen binnen drie seconden of uw site vertrouwen wekt of niet. Wij bouwen voor bedrijven in {city} websites die snel laden, professioneel ogen en vooral converteren — geen template-werk, maar maatwerk dat past bij uw merk en uw markt in {province}.`,
            `Op zoek naar een ontwikkelaar die uw website in {city} grondig aanpakt? Wij combineren technische diepgang met oog voor design. Het resultaat: een website die scoort in Google, perfect werkt op mobiel én vol vertrouwen wordt voorgelegd aan uw klanten in {city}, {neighbor1} en omstreken.`,
            `Een eigen website in {city} is een investering in zichtbaarheid, geloofwaardigheid en groei. Wij maken websites die die investering snel terugverdienen: vindbaar in Google, conversiegericht en gebouwd op een moderne stack die jaren meegaat. Vanuit Kanegem (op {distance} km van {city}) verzorgen we het hele traject.`,
        ],
        expertise: [
            `Onze websites worden ontwikkeld met Next.js en React — dezelfde technologie die platformen als Netflix en TikTok gebruiken. Voor het CMS kiezen we tussen Payload, Strapi of WordPress, afhankelijk van uw noden. Elke pagina laadt binnen één seconde, ook bij trager mobiel internet. We optimaliseren afbeeldingen automatisch, gebruiken moderne formaten zoals WebP en zorgen dat Core Web Vitals consequent groen blijven.

SEO bouwen we vanaf dag één in: schone HTML-structuur, schema.org markup, sitemap, robots.txt en perfect ingestelde metadata. We meten niet alleen Google-rankings maar ook conversie: hoeveel bezoekers nemen uiteindelijk contact op? Dat is wat telt voor ondernemers in {city}.

Hosting verzorgen we via betrouwbare partners (DigitalOcean, Hetzner of Vercel) inclusief SSL, automatische backups en monitoring. U hoeft zich nergens zorgen over te maken: wij houden alles draaiende, zodat u zich kunt focussen op ondernemen.`,
            `Wij ontwerpen websites op maat van het Vlaamse KMO-landschap. Dat betekent: pragmatisch, snel inzetbaar, eenvoudig zelf te onderhouden. We werken met een component-gedreven aanpak: elke sectie is een herbruikbaar bouwblok, wat latere uitbreidingen goedkoop en snel maakt.

Voor bedrijven in {city} en {province} kiezen we vaak voor een hybride aanpak: het kerngedeelte wordt statisch gerenderd voor maximale snelheid en SEO, dynamische delen (zoals een nieuwsbrief, contactformulier of klantenportaal) draaien op een lichte API-laag. Dat geeft het beste van beide werelden: razendsnel én flexibel.

Onze code is tot in detail leesbaar gedocumenteerd. Mocht u later met een andere developer willen werken — wat we natuurlijk niet hopen — dan kan die zonder herwerk verder. Geen vendor-lock-in, geen geheime kunstgrepen.`,
            `Wij bouwen websites die meegroeien met uw bedrijf in {city}. Begin met een eenvoudige bedrijfssite van vijf pagina's; voeg later een blog, klantenportaal of webshop toe zonder de fundering te moeten herwerken. Dat is mogelijk dankzij een modulaire architectuur die we vanaf de eerste lijn code in gedachten houden.

Toegankelijkheid (WCAG-conform) is geen afterthought maar een basisvereiste. Mensen met visuele beperkingen of die met een toetsenbord navigeren moeten net zo vlot uw website kunnen gebruiken als anderen. Het is wettelijk steeds belangrijker en het is gewoon de juiste manier van werken.

We koppelen uw website aan tools die u al gebruikt: Google Analytics 4, Mailchimp, Teamleader, Exact, Mollie, noem maar op. Integraties die werken zoals het hoort, getest in productie, gedocumenteerd voor de toekomst.`,
        ],
        faqs: [
            { q: 'Wat kost een website laten maken in {city}?', a: 'Een eenvoudige bedrijfssite start bij €1.500, een uitgebreid platform met CMS en integraties ligt tussen €4.000 en €10.000. Wij geven altijd een transparante offerte op maat na een eerste gesprek, zonder verborgen kosten.' },
            { q: 'Hoe lang duurt het om een website te bouwen?', a: 'Een eenvoudige website is gemiddeld klaar in 3 tot 5 weken vanaf goedkeuring van het design. Complexere projecten duren 8 tot 12 weken. We communiceren wekelijks over de voortgang zodat u nooit voor verrassingen komt te staan.' },
            { q: 'Welke technologie gebruiken jullie?', a: 'Wij werken voornamelijk met Next.js, React en TypeScript voor de frontend. Voor het CMS gebruiken we Payload, Strapi of WordPress, afhankelijk van uw voorkeur. Hosting via Hetzner, Vercel of DigitalOcean.' },
            { q: 'Kan ik zelf de inhoud van mijn website beheren?', a: 'Ja, elke website komt met een gebruiksvriendelijk CMS. U kunt teksten aanpassen, foto\'s vervangen, blogposts schrijven en nieuwe pagina\'s toevoegen zonder ook maar één regel code te raken. We voorzien een korte training bij oplevering.' },
            { q: 'Doen jullie ook hosting en onderhoud?', a: 'Ja, wij bieden hosting met SSL, dagelijkse backups en monitoring vanaf €25 per maand. Onderhoudscontracten met updates en security patches starten bij €60 per maand. U bent uiteraard niet verplicht hosting bij ons af te nemen.' },
            { q: 'Wordt mijn website gevonden in Google?', a: 'SEO-fundamenten zijn standaard inbegrepen: schone HTML, snelle laadtijden, sitemap, schema.org markup en mobile-first design. Voor actieve SEO-optimalisatie en linkbuilding bieden we aanvullende pakketten aan.' },
            { q: 'Kan ik zelf later uitbreidingen laten bouwen?', a: 'Absoluut. We documenteren onze code grondig en zetten alles op een Git-repository waar u toegang tot heeft. Een andere developer kan zonder problemen verder bouwen op ons werk — geen vendor-lock-in.' },
            { q: 'Komen jullie op locatie in {city}?', a: 'Voor strategische gesprekken komen we graag bij u langs in {city}. De afstand vanaf onze basis in Kanegem bedraagt slechts {distance} km. Voor reguliere updates volstaat een videocall of telefoongesprek.' },
        ],
        processSteps: [
            { title: 'Intake & strategie', description: 'We bespreken uw doelen, doelgroep en concurrentie tijdens een vrijblijvend gesprek.' },
            { title: 'Design & wireframes', description: 'U krijgt een mockup waarin u de volledige look-and-feel ziet voor we beginnen coderen.' },
            { title: 'Development', description: 'We bouwen de website in iteraties zodat u onderweg feedback kunt geven en bijsturen.' },
            { title: 'Lancering & nazorg', description: 'We zetten alles live, voorzien een training en blijven beschikbaar voor support.' },
        ],
        testimonials: [
            { quote: 'Onze nieuwe website laadt sneller dan ooit en we worden eindelijk gevonden in Google voor onze regio. Wout heeft echt geluisterd naar wat wij nodig hadden.', author: 'Klant uit {city}' },
            { quote: 'Wat ons opviel: de timing klopte tot op de dag. Geen smoesjes, geen meerwerk-verrassingen achteraf. Een aanrader voor elke ondernemer.', author: 'Zaakvoerder uit {city}' },
        ],
        ctas: [
            'Klaar voor een nieuwe website in {city}?',
            'Investeer in een website die werkt — start vandaag.',
            'Vraag een vrijblijvende offerte aan voor uw {city}-project.',
        ],
    },

    'webshop-laten-maken': {
        metaTitles: [
            'Webshop laten maken in {city} | Devriese Software',
            '{city}: professionele webshop op maat | Devriese',
            'E-commerce ontwikkelaar {city} — Devriese Software',
            'Webshop bouwen voor bedrijven in {city}',
        ],
        metaDescriptions: [
            'Webshop laten maken in {city}? Bancontact, Mollie, voorraadbeheer en razendsnelle check-out. Verkoop online vanaf dag één. Lokaal contact.',
            'Professionele e-commerce voor ondernemers in {city}. Shopify of maatwerk Next.js, met integraties die uw orderproces automatiseren.',
            'Online verkopen vanuit {city}? Wij bouwen webshops die converteren, koppelen aan uw boekhouding en draaien zonder zorgen.',
        ],
        h1s: [
            'Webshop laten maken in {city}',
            'E-commerce platform voor uw zaak in {city}',
            'Online verkopen in {city}? Wij bouwen uw webshop',
        ],
        intros: [
            `Een professionele webshop is voor ondernemers in {city} dé manier om 24/7 omzet te genereren. Bezoekers verwachten een vlotte check-out, vertrouwde betaalmethodes en razendsnelle laadtijden — anders haken ze af binnen seconden. Wij bouwen webshops die de Belgische klant begrijpt: Bancontact als standaard, Payconiq voor mobiel, en een check-out die gewoon werkt.`,
            `E-commerce in {province} groeit, maar standaard webshop-templates volstaan niet meer om op te vallen. Voor bedrijven in {city} bouwen wij webshops die net dat tikkeltje sneller laden, mooier ogen en hoger scoren in Google dan de concurrentie. Of u nu vijftig producten verkoopt of vijfduizend.`,
            `Wilt u uw fysieke zaak in {city} aanvullen met online verkoop, of volledig digitaal gaan? Wij ontwikkelen webshops gekoppeld aan uw kassasysteem, voorraadbeheer en boekhouding. Eén platform, één werklijst, en u verkoopt 24/7 zonder extra personeel.`,
        ],
        expertise: [
            `Wij bouwen webshops in twee smaken: hoogwaardig op Shopify of volledig op maat met Next.js en Medusa.js (open source e-commerce). Voor de meeste KMO\'s in {city} is Shopify ideaal: snel live, eenvoudig beheer, sterke ecosysteem van apps. Voor bedrijven die unieke flows nodig hebben (B2B-prijzen, complexe configuratoren, abonnementen) bouwen we maatwerk.

Betalingen integreren we via Mollie, Stripe of direct via Bancontact en Payconiq. Geen klant haakt af omdat zijn favoriete betaalmethode ontbreekt. Voor verzending koppelen we met DPD, bpost, GLS — automatisch labels printen, track-and-trace mailen, alles geregeld.

Boekhouding is vaak het zwakke punt bij webshops. Wij integreren rechtstreeks met Teamleader, Exact, Yuki of Octopus zodat elke bestelling automatisch een factuur genereert. Geen handmatig overtypen, geen fouten, geen achterstanden.`,
            `Snelheid is conversie. Een webshop die één seconde trager laadt, verliest 7% van zijn omzet — zo simpel is het. Wij optimaliseren elke pixel: afbeeldingen worden automatisch geconverteerd naar moderne formaten, JavaScript laadt enkel wat nodig is, en kritische CSS wordt inline gerenderd. Resultaat: Lighthouse-scores van 95+ ook met honderden producten.

Voor klanten in {city} zorgen we voor een check-out die maximum drie stappen telt. Geen verplichte registratie, geen overbodige velden, geen verrassingen. Gast-check-out staat altijd voorop, want elke extra klik is een kans om de klant te verliezen.

SEO voor webshops is een vak apart. Productpagina\'s krijgen rich snippets met prijs, voorraad en reviews. Categoriepagina\'s hebben unieke teksten en goede interne links. We zorgen ervoor dat u in {city} en {province} bovenaan staat voor uw belangrijkste zoektermen.`,
            `Voorraadbeheer is voor veel ondernemers in {city} de belangrijkste reden om over te stappen naar een professionele webshop. Synchroniseren met uw bestaande systeem (vaak Excel, een kassasysteem of een ERP) gebeurt automatisch via API of regelmatige imports. Geen oververkoop meer omdat de webshop niet weet dat het laatste exemplaar net in de winkel verkocht is.

Voor B2B-webshops bouwen we klantspecifieke prijzen, kortingsregels per groep, prijslijsten met BTW-toggle en bestelbonnen-functies. Voor B2C focussen we op upsells, cross-sells, reviews en abandoned cart recovery — kleine optimalisaties die samen tientallen procenten extra omzet opleveren.

Mobiele check-out krijgt extra aandacht: 70% van uw bezoekers in {city} komt via smartphone. We testen de hele flow op echte toestellen, niet enkel op een desktop-simulatie.`,
        ],
        faqs: [
            { q: 'Wat kost een webshop laten maken in {city}?', a: 'Een Shopify webshop met aangepast design start rond €2.500. Een volledig op maat gebouwde webshop met integraties ligt tussen €6.000 en €15.000. We adviseren altijd het meest kostenefficiënte platform voor uw schaal en doelen.' },
            { q: 'Welke betaalmethodes zijn standaard inbegrepen?', a: 'Bancontact, Payconiq, Mastercard, Visa, Apple Pay en Google Pay zijn standaard. Via Mollie of Stripe komen daar nog tientallen opties bij zoals iDEAL, Klarna of overschrijving — afhankelijk van uw doelgroep.' },
            { q: 'Kan ik mijn voorraad synchroniseren met mijn winkel?', a: 'Ja. We koppelen met de meeste kassasystemen zoals Lightspeed, Vend, Zettle en met ERP-pakketten zoals Exact en Teamleader. Voorraad blijft realtime gesynchroniseerd zodat u nooit oververkoopt.' },
            { q: 'Hoe lang duurt de bouw van een webshop?', a: 'Een Shopify shop is meestal klaar in 4 tot 6 weken, een maatwerk webshop in 10 tot 16 weken. Hangt af van complexiteit en aantal integraties. We werken in sprints met wekelijkse demo\'s.' },
            { q: 'Doen jullie ook productfotografie?', a: 'Wij specialiseren ons in development. Voor productfotografie werken we samen met betrouwbare fotografen in {province}, waaronder partners in {neighbor1} en {neighbor2}. Op aanvraag introduceren we u graag.' },
            { q: 'Kan ik mijn webshop koppelen aan mijn boekhouding?', a: 'Ja, dat is bijna altijd onze aanbeveling. We integreren met Teamleader, Exact, Yuki, Octopus en andere pakketten. Elke verkoop wordt automatisch een factuur — bespaart uren administratie per week.' },
            { q: 'Wat met BTW voor verkoop binnen Europa?', a: 'OSS (One Stop Shop) regelingen ondersteunen we volledig. De webshop berekent automatisch het juiste BTW-tarief per land. Voor Belgische ondernemers in {city} is dat conform de EU-regelgeving sinds 2021.' },
            { q: 'Kan ik later van Shopify naar maatwerk migreren?', a: 'Zeker. We zorgen ervoor dat productdata, klantgegevens en orders exporteerbaar blijven. Beginnen met Shopify en later upgraden is een legitiem groeipad. We adviseren u eerlijk wanneer dat zinvol wordt.' },
        ],
        processSteps: [
            { title: 'Strategie & platform-keuze', description: 'We analyseren uw producten, doelgroep en groeiplannen om het juiste platform te kiezen.' },
            { title: 'Design & UX', description: 'Productpagina\'s, check-out en categoriepagina\'s worden ontworpen met focus op conversie.' },
            { title: 'Development & integraties', description: 'Bouw, koppeling met betalingen, voorraad en boekhouding. Wekelijkse demo\'s.' },
            { title: 'Lancering & groei', description: 'Migratie van data, training en advies over marketing en optimalisatie na lancering.' },
        ],
        testimonials: [
            { quote: 'Onze omzet online is verdrievoudigd in zes maanden. De integratie met onze boekhouding bespaart me persoonlijk tien uur per week.', author: 'Webshop-eigenaar uit {city}' },
            { quote: 'Eindelijk een webshop die mobiel even snel laadt als op desktop. Onze check-out conversie is met 35% gestegen.', author: 'E-commerce manager, {city}' },
        ],
        ctas: [
            'Klaar om online te verkopen in {city}?',
            'Start uw webshop-project in {city} vandaag.',
            'Vraag een vrijblijvende offerte voor uw e-commerce platform.',
        ],
    },

    'webapplicatie-laten-maken': {
        metaTitles: [
            'Webapplicatie laten maken in {city} | Devriese',
            'Custom webapp ontwikkelaar {city} | Devriese Software',
            'SaaS bouwen in {city} — maatwerk webapps',
            'Webapplicatie op maat voor bedrijven in {city}',
        ],
        metaDescriptions: [
            'Webapplicatie laten maken in {city}? Maatwerk dashboards, klantportalen en SaaS-platformen. Schaalbaar gebouwd met Next.js en Node.js.',
            'Custom webapps voor ondernemers in {city}. Van interne tools tot publieke SaaS-platformen, met authenticatie, rolbeheer en API-integraties.',
            'Bedrijfsprocessen digitaliseren in {city}? Wij bouwen webapplicaties die uw werk automatiseren en uren besparen per week.',
        ],
        h1s: [
            'Webapplicatie laten maken in {city}',
            'Custom webapp ontwikkelaar voor {city}',
            'Bouw een webapplicatie op maat in {city}',
        ],
        intros: [
            `Wanneer Excel niet meer volstaat en kant-en-klare SaaS te beperkend wordt, is het tijd voor een webapplicatie op maat. Voor bedrijven in {city} bouwen wij dashboards, klantenportalen, interne tools en SaaS-platformen die exact passen bij hoe u werkt — niet andersom. Schaalbaar gebouwd, eigendom van uzelf, klaar voor groei.`,
            `Een webapplicatie kan een gamechanger zijn voor uw bedrijf in {city}. Of het nu gaat om een offerte-tool, een planningssysteem, een klantenportaal of een volledig SaaS-product: wij vertalen uw processen naar software die uren manueel werk wegneemt. Vanuit Kanegem ({distance} km van {city}) bedienen we KMO\'s en scale-ups in heel {province}.`,
            `Bestaande softwarepakketten doen vaak 80% van wat u nodig heeft, maar nooit die laatste cruciale 20%. Voor ondernemers in {city} bouwen wij webapplicaties die net wel die laatste mijl afleggen. Geen workarounds, geen Excel-kopieën meer, geen frustratie — gewoon software die werkt zoals u werkt.`,
        ],
        expertise: [
            `Onze technologie-stack voor webapplicaties: Next.js (React) voor de frontend, Node.js of Python voor de backend, PostgreSQL of MongoDB als database. We hosten op Hetzner of DigitalOcean met automatische scaling indien nodig. Voor authenticatie kiezen we tussen Auth.js, Clerk of een eigen implementatie — afhankelijk van complexiteit en compliance-eisen.

Voor bedrijven in {city} en {province} integreren we vaak met bestaande systemen: SAP, Teamleader, Exact, Salesforce, of REST/SOAP API\'s van leveranciers. Single sign-on (SSO), rolbeheer en audit-logs zijn standaard inbegrepen voor B2B-toepassingen waar security telt.

We werken volgens een API-first aanpak: alle businesslogica zit in een herbruikbare API-laag. Dat betekent dat een latere mobiele app of integratie met andere systemen geen herbouw vraagt — gewoon een nieuwe interface op dezelfde API.`,
            `De grootste valkuil bij webapplicaties is over-engineering: bouwen voor scenario\'s die misschien ooit gebeuren. Wij doen het anders. We starten met een minimum viable product (MVP) dat uw kernproces digitaliseert, en breiden uit op basis van echt gebruik, niet op basis van veronderstellingen.

Voor opdrachtgevers in {city} en omliggende gemeenten als {neighbor1} en {neighbor2} betekent dat een snellere time-to-market en een lagere initiële investering. Een eerste werkende versie staat live in 6 tot 10 weken, daarna fine-tunen we op basis van echte feedback.

Code-kwaliteit is geen optie maar een vereiste. We schrijven unit-tests voor kritieke flows, gebruiken TypeScript voor type-veiligheid en houden ons aan industriestandaarden zoals SOLID en DRY. Het resultaat: software die jaren mee gaat zonder herwerk.`,
            `Wij begrijpen dat een webapplicatie meer is dan code. Het is een verandertraject voor uw team in {city}. Daarom besteden we extra zorg aan onboarding: gebruikersdocumentatie, video-tutorials, eventueel ter plaatse training. Een tool die niemand gebruikt, is geen tool maar een kostenpost.

Voor de hosting kiezen we infrastructuur die past bij uw schaal. Een interne tool voor 20 medewerkers heeft andere noden dan een SaaS-platform voor duizenden gebruikers. We schalen mee, maar betalen niet voor capaciteit die u niet gebruikt.

Onderhoud is een gedeelde verantwoordelijkheid. Met een maandcontract houden wij de systemen up-to-date, monitoren we performance en pakken we issues proactief aan. Updates aan dependencies, security patches, performance-tuning — alles inbegrepen.`,
        ],
        faqs: [
            { q: 'Wat kost een webapplicatie laten maken?', a: 'Een eenvoudige interne tool start rond €5.000. Een volledig SaaS-platform met meerdere gebruikersrollen, betalingen en geavanceerde features kost typisch €15.000 tot €50.000. We adviseren altijd een gefaseerde aanpak om risico te beperken.' },
            { q: 'Wordt mijn webapp eigendom van mijn bedrijf?', a: 'Ja, volledig. Bij oplevering ontvangt u alle source code, een Git-repository, technische documentatie en infrastructuurtoegang. U bent niet afhankelijk van ons voor verdere ontwikkeling.' },
            { q: 'Hoe gaat het met onderhoud na oplevering?', a: 'We bieden onderhoudscontracten vanaf €150 per maand met security-updates, bug-fixes en performance-monitoring. Grotere wijzigingen factureren we apart op basis van uurtarief of vaste prijs.' },
            { q: 'Kan ik integreren met mijn bestaande software?', a: 'In de meeste gevallen wel. We hebben ervaring met Teamleader, Exact, SAP, Salesforce, HubSpot, Mailchimp en tientallen andere systemen. Wat geen API heeft, kunnen we vaak via webhooks of scheduled imports koppelen.' },
            { q: 'Wat als mijn webapp populair wordt en moet schalen?', a: 'Wij bouwen vanaf dag één met schaalbaarheid in gedachten. Database-keuzes, caching-strategieën en infrastructuur worden afgestemd op uw groeiprognose. Schalen van 100 naar 10.000 gebruikers vraagt typisch geen herbouw.' },
            { q: 'Hoeveel gebruikers kan de applicatie aan?', a: 'Onze standaard-architectuur ondersteunt vlot duizenden actieve gebruikers. Voor zwaardere belastingen voorzien we horizontaal schalen, load-balancers en database-clustering. Tot tienduizenden concurrent users zonder herwerk.' },
            { q: 'Is mijn data veilig en GDPR-conform?', a: 'Ja. Encryption-at-rest en in-transit, role-based access control, audit-logs en GDPR-conforme dataverwerking zijn standaard. Voor klanten met specifieke compliance-eisen (ISO 27001, NIS2) leveren we extra documentatie.' },
            { q: 'Doen jullie ook mobiele apps voor de webapp?', a: 'Ja. Onze API-first architectuur maakt dat een React Native app vlot bovenop dezelfde backend kan worden gebouwd. Vraag bij intake naar de mogelijkheden voor uw specifieke use-case in {city}.' },
        ],
        processSteps: [
            { title: 'Discovery & scope', description: 'We bepalen samen de kernfunctionaliteit en stellen een MVP-roadmap op.' },
            { title: 'Architectuur & UX', description: 'Technische blueprint en gebruikersflows worden uitgewerkt voor we coderen.' },
            { title: 'Iteratieve ontwikkeling', description: 'Tweewekelijkse sprints met demo\'s, zodat u feedback geeft op werkende functionaliteit.' },
            { title: 'Lancering & schaling', description: 'Live-gang, training en doorlopende ondersteuning naarmate uw gebruik groeit.' },
        ],
        testimonials: [
            { quote: 'Onze offerte-tool bespaart elke verkoper twee uur per dag. De ROI was er al na drie maanden. Aanrader voor elk bedrijf met repetitieve processen.', author: 'Operationeel directeur, {city}' },
            { quote: 'We hebben drie SaaS-leveranciers vergeleken voor we kozen voor maatwerk. Beste beslissing ooit — het past nu perfect bij hoe wij werken.', author: 'Zaakvoerder uit {city}' },
        ],
        ctas: [
            'Digitaliseer uw bedrijfsproces in {city} vandaag.',
            'Klaar voor een webapplicatie op maat in {city}?',
            'Vraag een vrijblijvend strategiegesprek aan.',
        ],
    },

    'app-ontwikkeling': {
        metaTitles: [
            'App ontwikkeling in {city} | Devriese Software',
            'Mobile app laten maken {city} | iOS & Android',
            'App developer {city} — React Native specialist',
            'iOS & Android apps voor bedrijven in {city}',
        ],
        metaDescriptions: [
            'Mobile app laten maken in {city}? Cross-platform iOS en Android met React Native. Push notifications, offline modus, App Store publicatie inbegrepen.',
            'App ontwikkelaar in {city}: native ervaring, één codebase voor iPhone en Android. Lokaal contact, eerlijke prijzen, geen verborgen kosten.',
            'Eigen app voor uw bedrijf in {city}? Wij bouwen mobiele apps die snel zijn, intuïtief werken en perfect integreren met uw bestaande systemen.',
        ],
        h1s: [
            'App ontwikkeling in {city}',
            'Mobile app laten maken voor uw bedrijf in {city}',
            'iOS & Android app developer {city}',
        ],
        intros: [
            `Een eigen app brengt uw bedrijf in {city} letterlijk in de broekzak van uw klanten. Wij ontwikkelen mobiele apps voor iOS en Android met React Native: één codebase, twee platforms, native gevoel. Push notifications, offline modus, integratie met camera en GPS — alles wat een moderne app nodig heeft, zonder dubbele ontwikkelingskosten.`,
            `Voor ondernemers in {city} en {province} is een app vandaag bereikbaar geworden. Door slim gebruik van cross-platform technologie ontwikkelen wij apps voor de helft van de prijs van traditionele native apps, zonder concessies aan gebruikservaring. Vanuit Kanegem ({distance} km verderop) verzorgen we het hele traject van concept tot publicatie in App Store en Play Store.`,
            `Een app maken is meer dan een mobiele versie van uw website. Het is een nieuwe manier om met klanten in {city} te interageren: meldingen versturen, offline werken, biometrische login, integratie met betaalterminals. Wij denken mee over wat een app voor úw bedrijf waardevol maakt en bouwen exact dat.`,
        ],
        expertise: [
            `Wij ontwikkelen apps met React Native — dezelfde technologie achter apps van Microsoft, Discord en Shopify. Eén codebase wordt gecompileerd voor zowel iOS als Android, met native performance en uitstraling. Voor specifieke platformfeatures (Apple Pay, FaceID, Android Auto) schrijven we waar nodig native modules.

App-store publicatie verzorgen we volledig: developer-accounts opzetten, app-icons, screenshots, App Store Optimization (ASO) teksten, en de review-procedures van Apple en Google. Apps voor klanten in {city} hebben we doorgaans binnen 7 dagen na submission live in de stores.

Backend-integratie loopt via dezelfde API\'s die uw webplatform of webshop gebruikt. Eén consistente data-laag, één plek waar businesslogica leeft. Push notifications versturen we via Firebase Cloud Messaging of OneSignal, met segmentatie en automatisering.`,
            `Native performance zonder native ontwikkelkosten — dat is de belofte van React Native, en die maken wij waar. Animaties draaien op de native thread, scrollen is butter-smooth, en touch-responstijd is identiek aan een gewone iOS- of Android-app. Voor 95% van use-cases is React Native de juiste keuze; voor extreme prestaties (zware games, AR) adviseren we transparant native ontwikkeling.

Voor klanten in {city} bouwen we vaak apps met offline-first architectuur. De app blijft volledig functioneel zonder internet, synchroniseert wanneer er weer connectie is. Dat is essentieel voor field-workers, leveringen of toepassingen op locaties met onbetrouwbare verbinding.

Beveiliging is een non-issue: certificate pinning, biometric authentication, secure storage voor tokens, en encryptie van lokale data. Voor apps die met betalingen of medische gegevens werken voldoen we aan de relevante normen (PSD2, GDPR-medisch).`,
            `App-onderhoud is structureel anders dan website-onderhoud. iOS en Android brengen jaarlijks grote updates uit die compatibility-issues kunnen veroorzaken. Met een onderhoudscontract zorgen wij dat uw app altijd up-to-date blijft met de nieuwste OS-versies, zonder dat u zich er zorgen om hoeft te maken.

Voor B2B-apps in {city} bouwen we vaak features die in publieke apps zelden voorkomen: bulk-operaties, exporteren naar Excel, koppelen met barcode-scanners, integratie met magazijnsystemen. Wij hebben de ervaring om die complexiteit netjes weg te werken achter een eenvoudige interface.

App-analytics bouwen we standaard in via Firebase Analytics of Mixpanel. U ziet welke schermen het meest gebruikt worden, waar gebruikers afhaken, en hoe ze door uw app navigeren — onmisbaar om de app te blijven verbeteren.`,
        ],
        faqs: [
            { q: 'Wat kost een app laten maken in {city}?', a: 'Een eenvoudige app start rond €8.000. Een uitgebreide app met backend, gebruikersaccounts en betalingen kost €15.000 tot €40.000. Inclusief publicatie in beide app-stores en eerste maand support.' },
            { q: 'Werkt de app op iPhone én Android?', a: 'Ja, standaard. Onze React Native aanpak maakt dat één codebase werkt op beide platforms. Het scheelt aanzienlijk in ontwikkelingskosten zonder concessies aan gebruikservaring.' },
            { q: 'Hoe lang duurt het om een app te bouwen?', a: 'Een eenvoudige app is meestal klaar in 8 tot 12 weken. Complexere apps duren 16 tot 24 weken. Daarna komt nog de review-tijd van Apple en Google, typisch 3 tot 7 dagen.' },
            { q: 'Wat met de developer-accounts in App Store en Play Store?', a: 'Apple Developer kost €99/jaar, Google Play eenmalig $25. We adviseren u om die accounts op uw bedrijf te zetten zodat u eigenaar blijft van de app. Wij krijgen tijdelijke toegang om te publiceren.' },
            { q: 'Werkt de app ook offline?', a: 'Dat hangt af van uw use-case. Voor field-werk en B2B-toepassingen bouwen we vaak offline-first apps die data synchroniseren wanneer er internet is. Voor consumentenapps is online-only meestal voldoende.' },
            { q: 'Kan ik later features toevoegen?', a: 'Absoluut. Apps groeien typisch met hun gebruikers. We bouwen modulair en documenteren grondig zodat uitbreidingen kostenefficiënt blijven. Een nieuwe feature kost meestal 30-50% van een initiële module.' },
            { q: 'Doen jullie ook iOS-only of Android-only apps?', a: 'Liever niet. De extra investering om beide platforms te ondersteunen is met React Native minimaal (15-25%) en u bereikt 100% van uw doelpubliek in plaats van 50-70%. Tenzij er een goede reden is, raden we beide aan.' },
            { q: 'Komen jullie ter plaatse in {city} voor app-design overleg?', a: 'Voor strategische overleggen komen we graag langs in {city}. Vanuit Kanegem rijden we ongeveer {distance} km. Voor reguliere check-ins werken we via videocall — efficiënter en even effectief.' },
        ],
        processSteps: [
            { title: 'Concept & wireframes', description: 'We werken samen aan het concept en valideren met klikbare prototypes voor we coderen.' },
            { title: 'Visueel design', description: 'App-screens worden ontworpen volgens iOS en Android design-guidelines, met uw merkidentiteit.' },
            { title: 'Development & testing', description: 'React Native build, getest op echte iPhones en Android-toestellen — geen simulator-illusies.' },
            { title: 'Publicatie & marketing', description: 'App Store en Play Store submission, ASO-optimalisatie en lancering met meetbare KPI\'s.' },
        ],
        testimonials: [
            { quote: 'Onze klanten gebruiken de app dagelijks. De push notifications hebben onze klantretentie merkbaar verhoogd. Strakke samenwerking van A tot Z.', author: 'Marketing manager, {city}' },
            { quote: 'Eén codebase voor iOS en Android scheelde ons vermoedelijk dertig procent op de offerte. Geen verschil in eindresultaat — onze gebruikers zijn enthousiast.', author: 'Productverantwoordelijke, {city}' },
        ],
        ctas: [
            'Klaar voor uw eigen app in {city}?',
            'Bouw uw mobiele app — start in {city}.',
            'Vraag een vrijblijvend app-concept gesprek aan.',
        ],
    },

    'seo-optimalisatie': {
        metaTitles: [
            'SEO specialist in {city} | Devriese Software',
            'SEO optimalisatie {city} — Google rankings verhogen',
            'Lokale SEO voor {city} | Beter gevonden worden',
            'SEO bureau {city} — meetbare resultaten',
        ],
        metaDescriptions: [
            'SEO specialist in {city}: technische audits, lokale optimalisatie en content strategie. Bovenaan in Google voor uw belangrijkste zoektermen.',
            'Beter gevonden worden in {city}? Wij optimaliseren Core Web Vitals, schema markup en lokale aanwezigheid. Maandelijkse meetbare rapportage.',
            'SEO voor bedrijven in {city}: van Google Mijn Bedrijf tot technische SEO. Geen vage rapporten — concrete acties met meetbaar resultaat.',
        ],
        h1s: [
            'SEO optimalisatie in {city}',
            'SEO specialist voor uw bedrijf in {city}',
            'Lokale SEO voor {city} en omstreken',
        ],
        intros: [
            `Bovenaan in Google staan voor uw kernzoektermen — daar draait alles om voor lokale ondernemers in {city}. Wij voeren grondige SEO-optimalisatie uit met focus op meetbare resultaten: meer organische bezoekers, meer aanvragen, meer omzet. Geen vage SEO-praat over linkbuilding zonder onderbouwing, maar concrete acties die werken.`,
            `Vindbaarheid in Google is niet langer optioneel. Voor bedrijven in {city} en {province} zorgen wij voor een SEO-strategie die zowel technisch (Core Web Vitals, schema markup, sitemap-architectuur) als inhoudelijk (zoekwoord-onderzoek, content-creatie, lokale signalen) waterdicht is. Resultaten meten we maandelijks, transparant.`,
            `SEO werkt cumulatief: de inspanning van vandaag levert pas zichtbaar resultaat op na 3 tot 6 maanden. Maar als het werkt, blijft het werken — vaak jarenlang. Voor ondernemers in {city} bouwen wij die SEO-fundering grondig op zodat u in {province} consequent gevonden wordt.`,
        ],
        expertise: [
            `Onze SEO-aanpak start met een grondige audit. We controleren technische SEO-fundamenten: site-architectuur, interne linkstructuur, Core Web Vitals (LCP, INP, CLS), mobiele weergave, schema.org markup, robots.txt, sitemap, canonicalisatie, hreflang waar relevant. Een typische audit levert 30 tot 60 concrete actiepunten op.

Voor klanten in {city} doen we vervolgens uitgebreid zoekwoord-onderzoek: welke termen brengen écht klanten op? Long-tail combinaties met lokale intent ("loodgieter spoed {city}", "{city} thaise massage"), commerciële zoektermen vs informatieve, search-volumes per maand, intent-classificatie. Dat alles in een document waar uw inhoudelijk plan op gebouwd wordt.

Lokale SEO krijgt extra aandacht: Google Mijn Bedrijf optimalisatie, lokale citations (Foursquare, Apple Maps, Yelp, Bing Places), reviews-strategie, en lokale schema markup. Voor bedrijven in {city} en omliggende gemeenten als {neighbor1} en {neighbor2} zijn dit vaak de quick wins.`,
            `Technische SEO is waar veel agencies tekortschieten. Wij hebben de development-achtergrond om écht in de code te kunnen ingrijpen waar nodig. Server-response-tijden van 200ms terugbrengen naar 50ms, JavaScript-rendering optimaliseren voor Googlebot, schema markup foutloos implementeren — dat zijn details die het verschil maken in concurrentiële markten.

Voor opdrachtgevers in {city} herzien we vaak de site-architectuur: silo-structuur per dienst en regio, breadcrumbs, interne links die SEO-juice doorgeven aan de juiste pagina\'s. Een goed georganiseerde site rangschikt fundamenteel beter dan een chaotische — los van content-kwaliteit.

Content-strategie ondersteunen we met briefings voor copywriters of leveren we zelf aan via partners. Pillar-content rond uw kerndiensten, ondersteund door cluster-artikelen rond gerelateerde onderwerpen, vormt een topic-autoriteit die Google steeds zwaarder weegt.`,
            `SEO-rapportering verschilt enorm in kwaliteit. Veel bureaus sturen elke maand dezelfde charts uit Google Analytics zonder concrete inzichten. Bij ons krijgt u maandelijks een rapport met: rankings-evolutie voor uw top-zoektermen, concurrent-vergelijking, technische gezondheid, content-performance en concrete acties voor de volgende maand.

Wij koppelen SEO aan uw business-doelen, niet aan vanity-metrics. Een verdubbeling van organisch verkeer is alleen waardevol als het ook leidt tot meer aanvragen, leads of verkopen. Daarom configureren we conversie-tracking grondig in Google Analytics 4 en koppelen we waar mogelijk met uw CRM.

Voor klanten in {city} gebruiken we tools zoals Ahrefs, SEMrush, Screaming Frog en Google Search Console. Inzicht in wat werkt en wat niet — gedreven door data, niet door buikgevoel.`,
        ],
        faqs: [
            { q: 'Wat kost SEO voor mijn bedrijf in {city}?', a: 'Een eenmalige technische audit kost €750-€1.500. Doorlopende SEO-trajecten starten vanaf €500/maand voor lokale KMO\'s en lopen op tot €3.000+/maand voor competitieve markten met content-creatie inbegrepen.' },
            { q: 'Hoe lang duurt het voor SEO resultaat oplevert?', a: 'Eerste positieverbeteringen zien we typisch na 6 tot 12 weken. Significante groei in organisch verkeer komt na 3 tot 6 maanden. Echte top-rankings voor competitieve termen vragen 6 tot 18 maanden consequente inspanning.' },
            { q: 'Kunnen jullie mij bovenaan zetten in Google?', a: 'Niemand kan top-1 garanderen — wie dat wel doet, vertrouw je beter niet. Wat we wel kunnen: realistische progressie tonen op basis van data, en uw belangrijkste zoektermen significant laten klimmen. Resultaten zijn meetbaar en transparant.' },
            { q: 'Wat is het verschil tussen SEO en SEA?', a: 'SEO (Search Engine Optimization) is gratis verkeer via natuurlijke rankings — een lange-termijn investering. SEA (Search Ads) is betaald verkeer via Google Ads — direct resultaat, maar stopt zodra u stopt betalen. Beste resultaat: combineren.' },
            { q: 'Doen jullie ook Google Ads campagnes?', a: 'Onze focus ligt op SEO en development. Voor Google Ads en Facebook Ads werken we samen met gespecialiseerde partners in {province}. We coördineren graag tussen alle marketingkanalen voor klanten in {city}.' },
            { q: 'Hoe meten jullie het succes van SEO?', a: 'We rapporteren maandelijks over: rankings van uw top-50 zoektermen, organisch verkeer, conversies (aanvragen, verkopen), domain authority en technische gezondheidsscores. Alles transparant gepresenteerd in een dashboard waar u 24/7 toegang toe heeft.' },
            { q: 'Wat is lokale SEO en heeft mijn bedrijf in {city} dat nodig?', a: 'Lokale SEO zorgt dat u verschijnt voor zoekopdrachten met lokale intent ("loodgieter {city}", "tandarts in {city}") en in de lokale 3-pack van Google Maps. Voor B2C-bedrijven in {city} is dit cruciaal; voor B2B vaak ook nuttig.' },
            { q: 'Kunnen jullie mijn website ook bouwen?', a: 'Ja. We zijn in eerste plaats web developers. SEO-vriendelijke websites bouwen zit in ons DNA. Voor klanten in {city} doen we vaak development én SEO-optimalisatie als geïntegreerd traject — efficiënter en goedkoper dan apart.' },
        ],
        processSteps: [
            { title: 'SEO audit', description: 'Diepgaande analyse van uw huidige technische en inhoudelijke SEO-status.' },
            { title: 'Strategie & roadmap', description: 'Prioritering van actiepunten op basis van impact en effort, met duidelijke timeline.' },
            { title: 'Implementatie', description: 'Technische optimalisaties, content-aanpassingen en lokale SEO-acties uitvoeren.' },
            { title: 'Meten & optimaliseren', description: 'Maandelijkse rapportage, bijsturen op basis van data, voortdurende verbetering.' },
        ],
        testimonials: [
            { quote: 'Na zes maanden SEO werk staan we top-3 voor onze belangrijkste zoektermen in heel onze regio. Aantal aanvragen is verdrievoudigd.', author: 'Zaakvoerder uit {city}' },
            { quote: 'Eerlijk en concreet. Geen vage SEO-praat, maar maandelijks meetbare progressie en duidelijke uitleg waar we staan.', author: 'Marketingmanager uit {city}' },
        ],
        ctas: [
            'Beter gevonden worden in {city}? Start vandaag.',
            'Vraag een vrijblijvende SEO-audit aan voor uw {city}-website.',
            'Klaar om bovenaan te staan in {city}?',
        ],
    },

    'webdesign-bureau': {
        metaTitles: [
            'Webdesign bureau {city} | Devriese Software',
            'UX/UI designer voor {city} — strak design op maat',
            'Webdesigner inhuren in {city}',
            'Premium webdesign voor bedrijven in {city}',
        ],
        metaDescriptions: [
            'Webdesign bureau in {city}: strakke UX/UI, conversie-gericht en toegankelijk. Geen templates — uniek design dat uw merk versterkt.',
            'Op zoek naar een webdesigner in {city}? Wij combineren visueel design met development-expertise voor websites die ogen én converteren.',
            'Premium webdesign voor ondernemers in {city}. Wireframes, mockups, prototypes en pixel-perfect uitvoering. Lokaal contact, modern resultaat.',
        ],
        h1s: [
            'Webdesign bureau in {city}',
            'UX/UI designer voor uw bedrijf in {city}',
            'Premium webdesigner {city}',
        ],
        intros: [
            `Een sterke eerste indruk online maakt u binnen drie seconden. Voor bedrijven in {city} is professioneel webdesign vandaag de hygiëne-norm — geen luxe meer. Wij ontwerpen websites die er strak uitzien, intuïtief werken en duidelijk converteren. Geen template-look, geen "we hebben al iets gelijkaardig", maar uniek design dat uw merk reflecteert.`,
            `Webdesign is meer dan plaatjes en lettertypes kiezen. Het is de kunst om bezoekers in {city} feilloos door uw verhaal te leiden — van eerste indruk tot conversie. Wij vertalen uw merkidentiteit, uw doelpubliek en uw doelen naar een ontwerp dat werkt. Vanuit Kanegem ({distance} km van {city}) bedienen we KMO\'s in heel {province}.`,
            `Een goede webdesigner combineert artistieke smaak met technisch begrip. Voor opdrachtgevers in {city} brengen wij beide: jaren design-ervaring met React-development-kennis. Het resultaat? Designs die niet alleen mooi zijn op papier maar ook elegant geïmplementeerd worden in code, op elk schermformaat.`,
        ],
        expertise: [
            `Onze designprocess begint met onderzoek: wie is uw doelpubliek in {city}, wat zoeken ze, hoe gedragen ze zich online? Daarna brengen we de visuele identiteit in kaart: kleuren, typografie, fotostijl, iconografie. Voor bedrijven die nog geen sterke huisstijl hebben, ontwikkelen we die mee.

Wireframes en prototypes maken we in Figma — interactief, klikbaar, zodat u de gebruikersflow al ervaart voor er één regel code geschreven is. Iteraties gebeuren snel: in één tot twee revisierondes komen we typisch tot een definitieve mockup. Voor klanten in {city} en {neighbor1} regelen we graag een fysieke design-review op locatie.

Toegankelijkheid (WCAG 2.1 AA) bouwen we standaard in: voldoende contrast, leesbaarheid op kleine schermen, navigeerbaar met toetsenbord, screenreader-compatibel. Het is een groeiende wettelijke vereiste, maar vooral gewoon de juiste manier van werken.`,
            `Wij werken met een mobile-first design-aanpak: eerst ontwerpen we voor smartphone, daarna schalen we op naar tablet en desktop. 70% van uw bezoekers in {city} komt via een mobiel toestel, dus dat is waar het ontwerp eerst moet werken. Klassieke desktop-first aanpak leidt tot mobile experiences die voelen als afterthought.

Voor branding-projecten leveren we ook design-systemen op: een gestructureerde set herbruikbare componenten, kleurenpalet, typografische hiërarchie, spacing-grid. Dat zorgt voor consistentie nu en bij latere uitbreidingen — een pagina die in jaar 3 wordt toegevoegd voelt aan als deel van hetzelfde geheel.

Met onze development-achtergrond denken we al tijdens design na over implementeerbaarheid. Geen ontwerpen die in de browser nooit kunnen werken, geen design-developer-conflicten. Eén team, één visie, één eindresultaat.`,
            `Designkwaliteit is moeilijk objectief te meten, maar de impact ervan op conversie is wel meetbaar. Voor klanten in {city} optimaliseren we typisch: vertrouwenssignalen (testimonials, reviews, certificaten), call-to-actions (positie, kleur, tekst), formulieren (zo kort mogelijk), navigatie (intuïtief, niet creatief), en visuele hiërarchie (oog leiden naar wat telt).

Voor B2B-websites werken we vaak met een meer terughoudend, professioneel design: rustige kleuren, veel witruimte, zakelijke typografie. Voor B2C of creatieve branches durven we het tegenovergestelde: opvallende kleuren, expressieve animaties, sterke fotografie. Het ontwerp moet passen bij uw merk én uw doelpubliek in {city}.

Animaties gebruiken we doelbewust, niet decoratief. Een micro-interactie die feedback geeft op een klik werkt; een spinning-3D-element bij elke pagina-load irriteert. Less is meer — vooral op mobiel waar performance telt.`,
        ],
        faqs: [
            { q: 'Wat kost webdesign in {city}?', a: 'Een mockup voor een eenvoudige bedrijfssite kost €1.000-€2.000. Een uitgebreid design-systeem voor een groter platform kost €3.000-€8.000. Bij combinatie met development geven we een totaalprijs.' },
            { q: 'Doen jullie alleen design of ook implementatie?', a: 'Beide. Wij design én ontwikkelen. Voor klanten die enkel design willen (om door eigen developers te laten implementeren) leveren we Figma-bestanden met design-system documentatie. Voor full-service trajecten zorgen wij voor pixel-perfect implementatie.' },
            { q: 'Hoe lang duurt een webdesign-traject?', a: 'Van eerste briefing tot definitieve mockup typisch 3-5 weken. Inclusief implementatie 8-12 weken voor een gemiddelde bedrijfswebsite. We werken in iteraties met tussentijdse reviews.' },
            { q: 'Krijg ik wireframes voor het uiteindelijke design?', a: 'Ja. We starten met low-fidelity wireframes om de structuur en flow vast te leggen, daarna komen high-fidelity mockups en interactieve prototypes. Iteratie kost minder tijd in wireframe-stadium dan in eindfase.' },
            { q: 'Werken jullie met een vast design-stijl of pas je aan per klant?', a: 'Elk design wordt op maat van de klant gemaakt. We hebben geen "house style" die we opdringen. Voor bedrijven in {city} betekent dat: uw merk, uw kleuren, uw typografische voorkeuren — niet onze.' },
            { q: 'Kunnen jullie ook merkidentiteit / huisstijl ontwikkelen?', a: 'Voor logo-design en uitgebreide huisstijl-trajecten werken we samen met grafisch designers in {province}. Wij focussen op web/app-design. Op vraag introduceren we u aan onze branding-partners in {neighbor1} of {neighbor2}.' },
            { q: 'Is webdesign hetzelfde als webdevelopment?', a: 'Nee. Webdesign is het visuele en interactieve ontwerp — kleuren, typografie, layout, gebruikersflows. Webdevelopment is het bouwen van die designs in werkende code. Wij doen beide en dat is een groot voordeel: geen vertaalverlies tussen beide disciplines.' },
            { q: 'Komen jullie in {city} voor design-reviews?', a: 'Voor strategisch design-overleg komen we graag bij u langs. {city} ligt op {distance} km van Kanegem — een prima rit voor productieve sessies. Voor revisierondes volstaat een videocall meestal.' },
        ],
        processSteps: [
            { title: 'Briefing & onderzoek', description: 'Doelpubliek, merk-DNA, concurrentie en design-voorkeuren brengen we grondig in kaart.' },
            { title: 'Wireframes & flows', description: 'Eerst de structuur vastleggen — pas daarna komen kleuren en visuele afwerking.' },
            { title: 'Visueel design', description: 'High-fidelity mockups in Figma, met interactieve prototypes voor key-flows.' },
            { title: 'Implementatie', description: 'Design wordt pixel-perfect in code omgezet, getest op alle apparaten en browsers.' },
        ],
        testimonials: [
            { quote: 'Het design vangt ons merk perfect, en past bovendien op alle schermformaten naadloos. Onze klanten geven ongevraagd complimenten over het uiterlijk.', author: 'Communicatieverantwoordelijke uit {city}' },
            { quote: 'Heel doordacht ontwerp, niet zomaar mooi maar functioneel. De conversie op ons contactformulier is bijna verdubbeld na de redesign.', author: 'Online marketing manager, {city}' },
        ],
        ctas: [
            'Klaar voor een strak nieuw webdesign in {city}?',
            'Vraag een design-consult aan voor uw {city}-project.',
            'Bouw uw merk online met premium webdesign.',
        ],
    },

    'software-op-maat': {
        metaTitles: [
            'Software op maat in {city} | Devriese Software',
            'Maatwerk software ontwikkelaar {city}',
            'Custom software voor bedrijven in {city}',
            'Bespoke software-oplossingen {city} | Devriese',
        ],
        metaDescriptions: [
            'Software op maat in {city} voor bedrijfsprocessen die geen standaard pakket aankan. Schaalbaar, eigen, eigendom van uw bedrijf.',
            'Custom software ontwikkelaar in {city}: van automatiseringstools tot interne SaaS-platformen. Eerlijke prijzen, transparante aanpak.',
            'Maatwerk software voor ondernemers in {city}. Wij bouwen wat geen standaard tool kan: efficiënt, schaalbaar en met persoonlijk contact.',
        ],
        h1s: [
            'Software op maat in {city}',
            'Maatwerk software ontwikkelaar voor {city}',
            'Custom software voor uw bedrijf in {city}',
        ],
        intros: [
            `Wanneer Excel barst en SaaS-pakketten te beperkend worden, is het tijd voor maatwerk software. Voor bedrijven in {city} bouwen wij oplossingen die exact passen bij hoe uw team werkt — geen workarounds, geen "het kan bijna". Software die uren administratie wegneemt, fouten reduceert en uw groeitempo ondersteunt.`,
            `Standaard software dwingt uw bedrijf in {city} vaak in een keurslijf dat niet past. Maatwerk werkt andersom: wij vertalen uw werkelijke processen naar code. Het resultaat is een tool die voelt alsof ze altijd al bestaan heeft — omdat ze gebouwd is voor exact uw context. Vanuit Kanegem bedienen we klanten in heel {province}.`,
            `Maatwerk software is geen luxe meer. Met moderne ontwikkelmethoden (component-based, low-code waar relevant, hergebruik van bibliotheken) leveren we voor KMO\'s in {city} oplossingen aan een fractie van wat het tien jaar geleden zou kosten. Investering meestal terugverdiend binnen 12 tot 24 maanden.`,
        ],
        expertise: [
            `Onze maatwerk-projecten variëren van eenvoudige automatiseringstools tot complexe SaaS-platformen. Voor bedrijven in {city} hebben we onder andere gebouwd: planning-tools voor field-services, CRM\'s op maat met sectorspecifieke workflows, productieplanning-systemen, klantenportalen voor B2B, en interne dashboards die data uit meerdere bronnen consolideren.

Tech-stack stemmen we af op de behoefte. Voor weblayer kiezen we typisch Next.js (React, TypeScript). Backends draaien op Node.js of Python. Databases: PostgreSQL voor structurele data, MongoDB voor document-gebaseerde flows. Hosting flexibel: Hetzner, DigitalOcean, of bij voorkeur on-premise als compliance dat vraagt.

Integraties bouwen we vaak: koppelen met ERP (Exact, Teamleader, SAP), boekhoudpakketten (Yuki, Octopus), externe API\'s, scheduled imports/exports, webhook-flows. Klanten in {province} hebben vaak legacy-systemen waar we elegant rond werken zonder ze te vervangen.`,
            `Het verschil tussen goed en uitmuntend maatwerk zit in de details: hoe gaat de software om met uitzonderingen? Hoe makkelijk traint u nieuwe medewerkers erop? Wat gebeurt er bij een internet-uitval? Wij denken die scenario\'s door tijdens design, niet pas tijdens productie.

Voor klanten in {city} starten we vaak met een MVP-aanpak: een werkende eerste versie van het kernproces in 8 tot 12 weken. Daarna breidt u uit op basis van échte gebruik en feedback. Dat is goedkoper én levert een tool op die daadwerkelijk gebruikt wordt — niet één die voldoet aan een voorgestelde spec maar in de praktijk niemand wil openen.

Code-eigendom is helder: bij oplevering krijgt u de volledige source code, een Git-repository, technische documentatie en infrastructuur-toegang. U bent niet vendor-gelocked. Wij hopen dat u verder met ons werkt voor onderhoud en uitbreidingen, maar u bent nooit verplicht.`,
            `Onderhoud en doorontwikkeling zijn structureel: software die niet onderhouden wordt, vervalt. Onze maatwerk-klanten in {city} kiezen meestal voor een maandcontract met inbegrepen onderhoud, security-updates, monitoring en een aantal uren development per maand voor kleine aanpassingen.

Voor grote uitbreidingen werken we project-based of via een fixed-price quotation. Een nieuwe module ontwikkelen na een jaar productie kost typisch 30-60% van de oorspronkelijke investering — afhankelijk van complexiteit en hergebruikbaarheid van bestaande componenten.

Wij hebben ervaring in diverse sectoren: bouw, productie, retail, professional services, gezondheidszorg. Voor {city}-klanten in deze sectoren hebben we vaak relevante referenties die we vrijblijvend tonen op afspraak.`,
        ],
        faqs: [
            { q: 'Wat kost software op maat laten ontwikkelen in {city}?', a: 'Een eenvoudige interne tool start rond €5.000. Een uitgebreide bedrijfsapplicatie kost €15.000 tot €60.000+. We werken vaak in fases: MVP eerst, daarna uitbreiden op basis van werkelijke noden — beheerst risico voor u.' },
            { q: 'Hoe weet ik of maatwerk goedkoper is dan een SaaS-pakket?', a: 'Vaak is SaaS goedkoper voor de eerste 1-3 jaar, daarna kantelt het. Reken: SaaS van €100/maand × 5 gebruikers × 5 jaar = €30.000. Eenmalige maatwerk van €15.000-€25.000 + €100/maand onderhoud blijft vaak voordeliger op middellange termijn.' },
            { q: 'Wat als mijn behoeftes onderweg veranderen?', a: 'Dat is normaal en we anticiperen erop. We werken in tweewekelijkse sprints zodat u onderweg kunt bijsturen. Grote scope-changes bespreken we transparant: wat is impact op tijd en budget? U beslist altijd zelf.' },
            { q: 'Krijg ik de source code?', a: 'Ja, volledig en zonder restricties. Bij oplevering ontvangt u een Git-repository met alle code, infrastructuur-as-code, documentatie en deployment-instructies. U bent eigenaar.' },
            { q: 'Hoe gaat het met onderhoud na livegang?', a: 'Standaard onderhoudscontracten starten bij €200/maand: security-updates, monitoring, backups, en 2 uur development voor kleine aanpassingen. Grotere wijzigingen op uurtarief of fixed-price.' },
            { q: 'Wat als ik later naar een andere developer wil?', a: 'Geen probleem. Onze code is leesbaar, gedocumenteerd en gebruikt industriestandaarden. Een andere developer kan zonder herwerk verder. We zijn er natuurlijk graag voor u, maar u bent niet vastgekluisterd.' },
            { q: 'Kan ik een MVP eerst testen voor ik voluit ga?', a: 'Absoluut, dat is vaak onze aanbeveling. Een MVP voor de kernfunctionaliteit in 8-12 weken, daarna 4-8 weken intensief gebruik door uw team, en pas dan beslissen over uitbreiding. Beheerst risico, betere uiteindelijke product.' },
            { q: 'Werken jullie ook met legacy-systemen die mijn bedrijf in {city} al gebruikt?', a: 'Ja. Wij integreren met legacy-databases, AS400, oude WSDL/SOAP services, batch-bestanden via SFTP — alles wat we nodig hebben om uw nieuwe maatwerk netjes te laten samenwerken met wat er al draait.' },
        ],
        processSteps: [
            { title: 'Discovery workshop', description: 'We documenteren uw processen, identificeren pijnpunten en bepalen scope.' },
            { title: 'MVP definitie', description: 'Welke kernfunctionaliteit eerst opleveren? Helder afgebakend, vaste prijs.' },
            { title: 'Sprint-development', description: 'Tweewekelijkse iteraties met demos en feedback. Werkende software vanaf sprint één.' },
            { title: 'Productie & uitbreiding', description: 'Live-gang, training en doorlopende uitbreidingen op basis van werkelijke noden.' },
        ],
        testimonials: [
            { quote: 'Onze nieuwe planningstool bespaart elke werkdag minstens drie uur administratie. Investering verdient zichzelf terug binnen het eerste jaar — gewoon ongelofelijk.', author: 'Operations director, {city}' },
            { quote: 'Wat ons overtuigde: ze hebben echt geluisterd naar hoe wij werken voor ze begonnen te coderen. Het resultaat past als een handschoen.', author: 'Zaakvoerder uit {city}' },
        ],
        ctas: [
            'Bouw maatwerk software voor uw bedrijf in {city}.',
            'Klaar voor software die echt past bij {city}?',
            'Vraag een vrijblijvende discovery-sessie aan.',
        ],
    },

    'online-boeking-systeem': {
        metaTitles: [
            'Online boekingssysteem in {city} | Devriese Software',
            'Reservatiesysteem laten maken {city}',
            'Online afsprakenboeking voor bedrijven in {city}',
            'Boekingssoftware op maat {city} | Devriese',
        ],
        metaDescriptions: [
            'Online boekingssysteem in {city}: 24/7 reserveren door uw klanten. Sync met Google Calendar, automatische herinneringen, online betaling.',
            'Reservatiesysteem laten maken in {city}? Voor kappers, therapeuten, B&B\'s en consultants. Synchronisatie met agenda, reminder-mails inbegrepen.',
            'Boekingsmodule op maat voor uw zaak in {city}. Geen no-shows meer dankzij automatische bevestiging en herinneringen.',
        ],
        h1s: [
            'Online boekingssysteem in {city}',
            'Reservatiesysteem voor uw zaak in {city}',
            'Online afsprakenboeking {city}',
        ],
        intros: [
            `Verlies uw kostbare tijd niet meer aan telefonisch inplannen. Voor zelfstandigen in {city} bouwen wij online boekingssystemen die 24/7 reservaties accepteren — terwijl u slaapt, in vergadering zit of een klant bedient. Synchronisatie met uw agenda voorkomt dubbele boekingen, automatische bevestigings- en herinneringsmails verminderen no-shows aanzienlijk.`,
            `Een professioneel online boekingssysteem is voor diensteverleners in {city} een gamechanger. Klanten willen direct kunnen reserveren — niet wachten op kantooruren of teruggebeld worden. Wij bouwen boekingsmodules die naadloos integreren in uw bestaande website en uw werkdag fundamenteel verlichten.`,
            `Of u nu kapper, therapeut, consultant, B&B-uitbater of trainer bent in {city}: een eigen online boekingssysteem is vandaag binnen handbereik. We bouwen modulair, met betaalintegratie indien gewenst en altijd met respect voor uw specifieke werkflow.`,
        ],
        expertise: [
            `Wij ontwikkelen boekingssystemen op maat in plaats van off-the-shelf SaaS te configureren. Het verschil? Onze systemen passen exact bij hoe ú werkt: meerdere medewerkers met verschillende kalenders, sectorspecifieke regels (buffers tussen afspraken, dubbele tijdslots voor bepaalde behandelingen, deelbare resources), en branding die helemaal van u is.

Voor klanten in {city} integreren we standaard met Google Calendar en Outlook. Een afspraak gemaakt via uw website verschijnt automatisch in uw agenda; een evenement geblokkeerd in Google Calendar maakt automatisch slots ontoegankelijk online. Bidirectionele sync, geen handmatig overtypen.

Notificaties versturen we via e-mail én SMS. Bevestigingsmail direct bij boeking, herinnering 24 uur ervoor, eventueel een review-vraag een dag erna. Voor sectoren waar no-shows pijn doen (kappers, therapeuten, restaurants in {province}) is dit vaak de belangrijkste ROI van een boekingssysteem.`,
            `Online betaling is optioneel maar krachtig. Vooral voor zaken in {city} die last hebben van no-shows, blijkt aanbetaling bij boeking de no-show ratio drastisch te verlagen. We integreren met Mollie, Stripe of direct Bancontact — uw klanten betalen vooraf met de methode die ze gewend zijn.

Voor multi-locatie zaken (kappers met meerdere salons, fitness-clubs, klinieken met vestigingen in {city} en {neighbor1}) bouwen we centrale beheerinterfaces met locatie-specifieke instellingen. Eén login, alles overzichtelijk in één dashboard.

Annulatie- en herboekingsbeleid configureren we per klanttype. Sommige klanten verdienen flexibiliteit, anderen moeten gehouden worden aan strenge voorwaarden. Boekingssystemen waar je deze nuance níét kunt instellen, zijn voor veel sectoren onbruikbaar — daarom maatwerk.`,
            `Statistieken en rapportage geven u inzicht: welke uren zijn drukst? Welke diensten worden meest geboekt? Wie zijn uw trouwste klanten? Voor zaakvoerders in {city} zijn dit cruciale data om personeelsplanning te optimaliseren en marketing-budget gericht in te zetten.

Voor B2C-toepassingen integreren we vaak ook klantenkaarten of loyalty-programma\'s: na X bezoeken automatische korting, geboorte-coupon, gepersonaliseerde aanbiedingen. Allemaal native in het boekingssysteem, geen extra tools nodig.

Veiligheid en GDPR-conformiteit: gebruikersdata wordt versleuteld opgeslagen, klanten kunnen hun data inzien en wissen, bewaartermijnen zijn configureerbaar. Voor klanten in medische of welness-sector zijn dit non-negotiables.`,
        ],
        faqs: [
            { q: 'Wat kost een online boekingssysteem in {city}?', a: 'Een standaard boekingsmodule integreren in uw website kost €1.200-€3.000. Een volledig maatwerk-systeem met meerdere medewerkers, betaalflow en CRM-koppeling kost €4.000-€10.000.' },
            { q: 'Werkt het met mijn bestaande Google Calendar?', a: 'Ja, perfecte bidirectionele sync. Boekingen verschijnen direct in uw agenda; gepersonaliseerde events in uw kalender blokkeren automatisch tijdsloten online. Werkt ook met Outlook en iCal.' },
            { q: 'Kan ik klanten online laten betalen bij boeking?', a: 'Absoluut. Volledige betaling, aanbetaling of geen betaling — u bepaalt. Integraties met Mollie, Stripe, Bancontact, Payconiq. Voor sectoren met veel no-shows (kappers, therapeuten) verlaagt aanbetaling de no-show ratio sterk.' },
            { q: 'Stuurt het systeem automatisch herinneringen?', a: 'Ja. Standaard: bevestigingsmail bij boeking, herinneringsmail 24 uur ervoor, eventueel SMS-herinnering 1-2 uur ervoor (extra kost per SMS). Allemaal configureerbaar, met uw eigen tekst en branding.' },
            { q: 'Hoe lang duurt het om dit te bouwen?', a: 'Een standaard boekingsmodule voor één behandelaar/dienst is meestal klaar in 3-4 weken. Een complex multi-medewerker, multi-locatie systeem duurt 8-12 weken.' },
            { q: 'Werkt het ook voor mijn meerdere medewerkers in {city}?', a: 'Ja. Elke medewerker heeft eigen kalender, eigen beschikbaarheden, eigen diensten die ze aanbieden. Klanten kiezen bij voorkeur of laten de drukte bepalen wie het krijgt.' },
            { q: 'Kunnen klanten zelf annuleren of verplaatsen?', a: 'Standaard ja, met door u ingestelde voorwaarden (bv. minstens 24 uur op voorhand). Bij latere annulatie kunnen aanbetalingen automatisch behouden worden of contact gemaakt worden met uw klantenservice.' },
            { q: 'Hosten jullie het systeem voor mij?', a: 'Optioneel ja. Hosting, backups en updates voor €25-€60/maand afhankelijk van schaal. Of we leveren het op uw eigen server. Beide opties zijn mogelijk voor klanten in {city}.' },
        ],
        processSteps: [
            { title: 'Workflow-analyse', description: 'We brengen uw bestaande boekingsproces, regels en uitzonderingen in kaart.' },
            { title: 'Design & flows', description: 'Klantflow uitwerken: welke stappen? Welke info verzamelen? Hoe oogt het op mobiel?' },
            { title: 'Bouw & integraties', description: 'Boekingsmodule, agenda-sync, betalingen en notificaties worden ontwikkeld en getest.' },
            { title: 'Live & training', description: 'Migratie van eventuele bestaande boekingen, training van uw team, doorlopend support.' },
        ],
        testimonials: [
            { quote: 'Geen telefoongerinkel meer voor afspraken — onze klanten boeken zelf, zelfs midden in de nacht. Het scheelt mij persoonlijk acht uur per week aan telefoon-administratie.', author: 'Zelfstandig ondernemer, {city}' },
            { quote: 'No-shows zijn met 70% gedaald sinds we automatische herinneringen en aanbetaling implementeerden. Pure winst.', author: 'Praktijkmanager, {city}' },
        ],
        ctas: [
            'Digitaliseer uw agenda in {city} vandaag.',
            'Klaar voor 24/7 online boekingen in {city}?',
            'Vraag een vrijblijvende demo aan.',
        ],
    },

    'website-onderhoud': {
        metaTitles: [
            'Website onderhoud in {city} | Devriese Software',
            'Onderhoudscontract website {city}',
            'Website beveiliging & updates voor {city}',
            'WordPress en Next.js onderhoud in {city}',
        ],
        metaDescriptions: [
            'Website onderhoud in {city}: maandelijkse updates, beveiliging, backups en performance-monitoring. Geen zorgen, gewoon werkende website.',
            'Onderhoudscontract voor uw website in {city}: dagelijkse backups, security-patches en proactieve monitoring. Vanaf €60/maand.',
            'Houdt uw website in {city} altijd up-to-date, snel en veilig. Wij verzorgen onderhoud, support en kleine aanpassingen — maandelijks vast.',
        ],
        h1s: [
            'Website onderhoud in {city}',
            'Onderhoudscontract voor uw website in {city}',
            'Website beveiliging & updates {city}',
        ],
        intros: [
            `Een website is nooit af. Plugins krijgen updates, security-lekken worden ontdekt, browsers veranderen, content moet ververst worden. Voor bedrijven in {city} bieden wij maandelijkse onderhoudscontracten die dit allemaal voor u regelen — zodat u zich kunt focussen op ondernemen, niet op technische sores.`,
            `Heeft uw website in {city} de laatste maanden updates gemist? Dat is een tikkende tijdbom. Verouderde plugins zijn de #1 oorzaak van gehackte websites. Met een professioneel onderhoudscontract pakken wij security-updates, performance-monitoring, backups en kleine aanpassingen aan — vast bedrag per maand, geen verrassingen.`,
            `Voor ondernemers in {city} is een goed onderhouden website cruciaal: bezoekers verwachten dat alles werkt, Google rankt verouderde sites lager, en een hack kan dagen omzet kosten. Vanuit Kanegem ({distance} km) verzorgen we onderhoud voor klanten in heel {province} — proactief, transparant, betrouwbaar.`,
        ],
        expertise: [
            `Onze onderhoudscontracten dekken alle technische aspecten van websitebeheer. Maandelijks: WordPress core, thema, plugins en alle dependencies bijwerken naar laatste stabiele versies. Voor klanten in {city} doen we dit op een staging-omgeving eerst, daarna live, met visuele regression-tests om er zeker van te zijn dat niets brak.

Backups draaien automatisch dagelijks: volledige site-backup en database-snapshot worden offsite opgeslagen (apart van uw productie-server) met retentie van 30 dagen. Restore-procedures testen we kwartaalsgewijs zodat ze in een echte noodgeval ook werken.

Security-monitoring draait 24/7. We krijgen alert bij verdachte logins, brute-force pogingen, malware-sigantures, en bij wijzigingen aan kritieke bestanden. Voor klanten in {province} hebben we dit jaar nog geen succesvolle hack meegemaakt — preventie werkt.`,
            `Performance-monitoring is een vaak vergeten aspect van onderhoud. Een trage website verliest bezoekers en SEO-rankings. We monitoren laadtijden, server-response, Core Web Vitals en database-performance maandelijks. Bij degradatie pakken we de oorzaak proactief aan voor uw bezoekers er last van krijgen.

Voor opdrachtgevers in {city} verzorgen we ook content-onderhoud op verzoek: tekstaanpassingen, fotowijzigingen, nieuwe pagina\'s, blog-publicatie. In de meeste contracten zit 1-2 uur per maand support inbegrepen voor dit soort kleine taken — goed voor 90% van uw maandelijkse veranderingen.

SSL-certificaten, domeinverlengingen, DNS-aanpassingen: ook dit beheren we voor u zodat niets ooit per ongeluk afloopt. Eén partner voor alle technische sores rond uw online aanwezigheid.`,
            `Maandelijkse rapportage geeft u inzicht: wat hebben we gedaan? Welke updates uitgevoerd? Welke security-events afgehandeld? Welke performance-metrics? Een transparant rapport in plaats van vage "alles draait" mededelingen. Voor klanten in {city} en {neighbor1} sturen we dit op de eerste werkdag van elke nieuwe maand.

Voor groeiende websites bieden we groeicontracten: meer support-uren per maand, hogere prioriteit bij issues, kleine doorontwikkelingen inbegrepen. Schalen wanneer uw business schaalt, niet vooraf overdimensioneren.

Communicatie is direct: bij urgente issues bellen we u, niet email. Bij niet-urgente vragen reageren we binnen één werkdag. Voor klanten in {city} verkiezen veel ondernemers een vast aanspreekpunt — dat krijgt u bij ons standaard.`,
        ],
        faqs: [
            { q: 'Wat kost website onderhoud in {city}?', a: 'Onze pakketten starten bij €60/maand voor een eenvoudige bedrijfswebsite (updates, backups, monitoring) en lopen op tot €250/maand voor uitgebreide platformen met meer support-uren. Geen verrassingen, vaste maandprijs.' },
            { q: 'Wat zit er allemaal in een onderhoudscontract?', a: 'Standaard: maandelijkse software-updates, dagelijkse backups (offsite), 24/7 security-monitoring, SSL-vernieuwing, performance-monitoring, en 1-2 uur support per maand voor kleine aanpassingen. Maandelijkse rapportage inbegrepen.' },
            { q: 'Wat als er buiten kantooruren een probleem opduikt?', a: 'Voor onze onderhouds-klanten in {city} bieden we kantooruur-support. Voor 24/7 emergency-support is een premium upgrade beschikbaar. Bij security-incidents grijpen we sowieso onmiddellijk in, ook \'s nachts of in het weekend.' },
            { q: 'Doen jullie ook onderhoud van WordPress en andere CMS-en?', a: 'Ja. Wij onderhouden WordPress, Next.js + Payload, Strapi, en custom builds. Voor klanten met legacy-CMS (Drupal, Joomla, oudere versies) doen we eerst een audit en stellen migratie of behoud voor.' },
            { q: 'Kunnen jullie mijn bestaande website overnemen voor onderhoud?', a: 'Absoluut. We doen eerst een audit (security-status, code-kwaliteit, performance, plugin-bloat) en stellen een verbeterplan voor. Daarna over op maandelijks onderhoud, met initiële opwaardering apart gefactureerd.' },
            { q: 'Wat als mijn website gehackt wordt?', a: 'Voor onderhouds-klanten: we restoren binnen uren naar laatste schone backup, identificeren de aanvalsvector en sluiten ze. Geen extra kosten voor hack-recovery binnen onderhoudscontract. Onze preventie maakt dit zeldzaam.' },
            { q: 'Wat is het verschil tussen hosting en onderhoud?', a: 'Hosting = de server waar uw website op draait. Onderhoud = het bijwerken, beveiligen en optimaliseren van de software. Veel onderhouds-klanten kiezen ook voor onze hosting (€25/maand extra), wat alles in één oogopslag houdt.' },
            { q: 'Kan ik op elk moment opzeggen?', a: 'Ja. Onze contracten zijn maandelijks opzegbaar met één maand opzegtermijn. Geen langetermijn-bindingen, geen exit-fees. We willen u behouden door kwaliteit, niet door kleine lettertjes.' },
        ],
        processSteps: [
            { title: 'Audit & overname', description: 'We brengen uw huidige site-status in kaart, identificeren verbeterpunten en lossen quick-wins op.' },
            { title: 'Onderhoudsplan', description: 'Maandelijkse routine wordt afgestemd op uw site: updates, backups, monitoring, support-uren.' },
            { title: 'Doorlopend onderhoud', description: 'Maandelijkse uitvoering, transparante rapportage, snelle hulp bij vragen of issues.' },
            { title: 'Doorontwikkeling', description: 'Op vraag breiden we de site uit met nieuwe features — voorrang voor onderhouds-klanten.' },
        ],
        testimonials: [
            { quote: 'Sinds we onze site bij Devriese in onderhoud hebben, geen enkele crash meer en geen security-issues. Slapen rustig, zelfs op zondagnacht.', author: 'Zaakvoerder uit {city}' },
            { quote: 'Maandelijks rapport is zo helder dat zelfs ik als niet-techneut snap wat er gedaan is. Eerlijk, transparant en betrouwbaar.', author: 'Communicatieverantwoordelijke, {city}' },
        ],
        ctas: [
            'Houd uw website in {city} altijd top-conditie.',
            'Onbezorgde website? Start uw onderhoudscontract.',
            'Vraag een gratis website-audit aan.',
        ],
    },
}
