// Unieke, stadsspecifieke content voor de lokale SEO-pagina's.
// Doel: elke pagina krijgt echte lokale context i.p.v. getemplate boilerplate.
// Wordt rechtstreeks ingelezen in de service/city- en regio-templates.

export type CityContent = {
    /** 2-3 unieke zinnen met echte lokale kleur (ligging, sfeer, geschiedenis) */
    profile: string
    /** Korte beschrijving van het lokale ondernemersweefsel / sectoren */
    economy: string
    /** 3-4 kernkenmerken, getoond als chips */
    knownFor: string[]
}

export const cityContent: Record<string, CityContent> = {
    // ── West-Vlaanderen ──────────────────────────────────────────
    tielt: {
        profile:
            'Tielt ligt in het hart van het Tieltse, op een boogscheut van onze thuisbasis in Kanegem. Het is een gemoedelijke handelsstad met een sterke lokale middenstand rond de Markt en een bloeiend verenigingsleven.',
        economy:
            'Veel familiebedrijven, voeding- en textielnijverheid, zelfstandige handelaars en zorgondernemers.',
        knownFor: ['Lokale middenstand', 'Familiebedrijven', 'Europafeesten'],
    },
    brugge: {
        profile:
            'Brugge combineert een UNESCO-werelderfgoedcentrum met een verrassend dynamisch ondernemersklimaat. De miljoenen toeristen per jaar maken een sterke, meertalige online aanwezigheid voor horeca, retail en dienstverleners hier extra belangrijk.',
        economy:
            'Toerisme en horeca, retail, creatieve sector, haven van Zeebrugge en logistiek.',
        knownFor: ['Werelderfgoed', 'Toerisme', 'Zeebrugge haven'],
    },
    roeselare: {
        profile:
            'Roeselare is de commerciële motor van Midden-West-Vlaanderen, met één van de grootste winkelkernen van de provincie. Ondernemers hier zijn gewend aan stevige lokale concurrentie, waardoor online zichtbaarheid het verschil maakt.',
        economy:
            'Detailhandel, voedingsindustrie (o.a. diepvries), maakbedrijven en groothandel.',
        knownFor: ['Winkelstad', 'Voedingsindustrie', 'Rodenbach'],
    },
    kortrijk: {
        profile:
            'Kortrijk is uitgegroeid tot dé designstad en tech-hub van Zuid-West-Vlaanderen. Met Hangar K, de hogescholen en een levendige start-upscene is het een stad waar digitaal ondernemen vanzelfsprekend is.',
        economy:
            'Tech en start-ups, design, textiel-innovatie, kennisinstellingen en creatieve industrie.',
        knownFor: ['Designstad', 'Hangar K', 'Start-ups'],
    },
    oostende: {
        profile:
            'Oostende, "de Koningin der Badsteden", leeft op het ritme van zee en toerisme. Naast het seizoensgebonden bezoek is er een vaste kern van horeca, zorg en maritieme bedrijvigheid die online goed gevonden wil worden.',
        economy:
            'Toerisme en horeca, blue economy en offshore wind, visserij en zorg.',
        knownFor: ['Badstad', 'Offshore wind', 'Horeca'],
    },
    ieper: {
        profile:
            'Ieper is wereldwijd bekend door de herinnering aan de Eerste Wereldoorlog en de Last Post. Die internationale bezoekersstroom, gecombineerd met een trouwe lokale handel, vraagt om een verzorgde, vindbare website.',
        economy:
            'Herdenkingstoerisme, voedings- en maakindustrie op de regionale bedrijventerreinen, lokale handel.',
        knownFor: ['WO I-erfgoed', 'Last Post', 'Menenpoort'],
    },
    waregem: {
        profile:
            'Waregem staat bekend om ondernemerschap, paardensport (Waregem Koerse) en de beurshallen van Waregem Expo. Het is een welvarende stad waar bedrijven graag professioneel voor de dag komen.',
        economy:
            'Textiel en interieur, bouw, events en beurzen, dienstverlening en KMO’s.',
        knownFor: ['Waregem Koerse', 'Waregem Expo', 'Interieur'],
    },
    izegem: {
        profile:
            'Izegem heeft een rijke traditie in schoen- en borstelnijverheid en blijft een echte maak- en KMO-stad. Vlak bij Roeselare en Tielt is het centraal gelegen in het West-Vlaamse industriële weefsel.',
        economy:
            'Maakindustrie, schoen- en lederwaren-erfgoed, KMO’s en groothandel.',
        knownFor: ['Schoennijverheid', 'Maakbedrijven', 'Eperon d’Or'],
    },
    'knokke-heist': {
        profile:
            'Knokke-Heist is de meest exclusieve badplaats van de kust, met een kapitaalkrachtig en internationaal publiek. Galerijen, vastgoed, mode en horeca rekenen hier op een stijlvolle, premium uitstraling — ook online.',
        economy:
            'Luxe-toerisme, vastgoed, kunst en galerijen, hoogwaardige horeca en retail.',
        knownFor: ['Luxe badplaats', 'Kunstgalerijen', 'Zoute'],
    },
    wevelgem: {
        profile:
            'Wevelgem ligt in de Leiestreek tussen Kortrijk en Menen en heeft met de luchthaven Kortrijk-Wevelgem en grote bedrijventerreinen een uitgesproken economisch profiel. Bekend ook van de wielerklassieker Gent-Wevelgem.',
        economy:
            'Logistiek en luchtvaart, textiel en maakindustrie, transport en KMO’s.',
        knownFor: ['Gent-Wevelgem', 'Luchthaven', 'Leiestreek'],
    },

    // ── Oost-Vlaanderen ──────────────────────────────────────────
    gent: {
        profile:
            'Gent is een bruisende studenten- en kennisstad met de UGent, imec en een sterke biotech- en tech-cluster. De combinatie van jonge talenten, cultuur en een grote haven maakt het tot een van de meest innovatieve steden van Vlaanderen.',
        economy:
            'Tech en biotech, onderwijs en onderzoek, haven en logistiek, creatieve en culturele sector.',
        knownFor: ['Studentenstad', 'imec & UGent', 'Gentse Feesten'],
    },
    aalst: {
        profile:
            'Aalst is een levendige Denderstad, wereldwijd bekend om zijn carnaval (UNESCO). Met een stevige lokale handel en maakindustrie is het een commercieel knooppunt tussen Gent en Brussel.',
        economy:
            'Maakindustrie, detailhandel, voeding en logistiek, events.',
        knownFor: ['Aalst Carnaval', 'Denderstad', 'Lokale handel'],
    },
    'sint-niklaas': {
        profile:
            'Sint-Niklaas heeft de grootste marktplein van België en is het hart van het Waasland. Een sterke handelstraditie en de nabijheid van de haven van Antwerpen maken het een aantrekkelijke ondernemersstad.',
        economy:
            'Detailhandel, logistiek en distributie, maakindustrie, dienstverlening.',
        knownFor: ['Grote Markt', 'Waasland', 'Vredefeesten'],
    },
    dendermonde: {
        profile:
            'Dendermonde, gelegen waar de Dender in de Schelde vloeit, koppelt historisch erfgoed (Ros Beiaard) aan een gezond KMO-weefsel. Een stad met een trouw lokaal cliënteel en groeiende bedrijventerreinen.',
        economy:
            'KMO’s en maakindustrie, lokale handel, logistiek, zorg.',
        knownFor: ['Ros Beiaard', 'Dender & Schelde', 'KMO-stad'],
    },
    lokeren: {
        profile:
            'Lokeren ligt centraal in het Waasland langs de E17 en is van oudsher een nijverheidsstad. De vlotte verbinding tussen Gent en Antwerpen maakt het ideaal voor logistiek en productie.',
        economy:
            'Voedingsindustrie, logistiek, maakbedrijven en lokale handel.',
        knownFor: ['E17-knooppunt', 'Voedingsindustrie', 'Waasland'],
    },
    deinze: {
        profile:
            'Deinze is een snelgroeiende Leiestad vlak bij Gent, geliefd om zijn ligging aan de Leie en de kunst van de Latemse school. De stad trekt steeds meer jonge gezinnen en ondernemers aan.',
        economy:
            'Detailhandel, voeding, KMO’s en dienstverlening, kunst en toerisme aan de Leie.',
        knownFor: ['Leiestreek', 'Latemse school', 'Groeistad'],
    },
    eeklo: {
        profile:
            'Eeklo is de hoofdplaats van het Meetjesland, een streek tussen Gent en de kust met een uitgesproken eigen karakter. Een hechte gemeenschap met veel zelfstandigen en lokale handelaars.',
        economy:
            'Lokale handel, KMO’s, hernieuwbare energie en landbouwgerelateerde bedrijvigheid.',
        knownFor: ['Meetjesland', 'Windenergie', 'Lokale handel'],
    },
    oudenaarde: {
        profile:
            'Oudenaarde is de hoofdstad van de Vlaamse Ardennen en het kloppend hart van de wielerklassiekers (Ronde van Vlaanderen). Erfgoed, wandtapijten en wielertoerisme bepalen er het ondernemersklimaat.',
        economy:
            'Toerisme en wielererfgoed, brouwerijen, textiel en maakindustrie, horeca.',
        knownFor: ['Ronde van Vlaanderen', 'Vlaamse Ardennen', 'Wandtapijten'],
    },
    geraardsbergen: {
        profile:
            'Geraardsbergen, gekend van de Muur en de Mattentaart, ligt op de grens van Oost-Vlaanderen en de Vlaamse Ardennen. Een stad met sterke tradities en een trouwe lokale klantenkring.',
        economy:
            'Lokale handel, voeding (o.a. mattentaarten), maakindustrie en toerisme.',
        knownFor: ['De Muur', 'Mattentaart', 'Krakelingenfeest'],
    },
    ronse: {
        profile:
            'Ronse ligt geborgen in de heuvels van de Vlaamse Ardennen en heeft een rijk textielverleden. De tweetalige ligging en het bourgondische karakter (Bommelsfeesten) geven de stad een eigen identiteit.',
        economy:
            'Textielindustrie en -innovatie, lokale handel, toerisme in de Vlaamse Ardennen.',
        knownFor: ['Textielstad', 'Bommels', 'Vlaamse Ardennen'],
    },

    // ── Antwerpen ────────────────────────────────────────────────
    antwerpen: {
        profile:
            'Antwerpen is de economische metropool van Vlaanderen, met de op één na grootste haven van Europa, de mode- en diamantsector en een ongeëvenaarde dichtheid aan bedrijven. Online opvallen tussen zoveel concurrentie vraagt om scherpe techniek en SEO.',
        economy:
            'Haven en logistiek, diamant, mode en retail, chemie, tech en creatieve sector.',
        knownFor: ['Haven van Antwerpen', 'Modestad', 'Diamant'],
    },
    mechelen: {
        profile:
            'Mechelen geldt als één van de best bestuurde en aangenaamste steden van Vlaanderen, perfect gelegen tussen Antwerpen en Brussel. De vernieuwde binnenstad trekt veel jonge ondernemers en creatieve bedrijven aan.',
        economy:
            'Dienstverlening, retail en horeca, meubel- en designsector, KMO’s en tech.',
        knownFor: ['Sint-Romboutstoren', 'Centraal gelegen', 'Maneblussers'],
    },
    turnhout: {
        profile:
            'Turnhout is de hoofdstad van de Kempen en historisch het centrum van de papier- en speelkaartenindustrie. Een zelfbewuste regiostad met een sterk eigen verzorgingsgebied.',
        economy:
            'Grafische industrie en print, maakbedrijven, retail en zorg.',
        knownFor: ['Speelkaarten', 'Kempen', 'Grafische sector'],
    },
    mortsel: {
        profile:
            'Mortsel is een dichtbevolkte stadsrandgemeente tegen Antwerpen aan, met een sterke woon- en handelsfunctie. De nabijheid van de grootstad maakt lokale vindbaarheid voor buurtondernemers cruciaal.',
        economy:
            'Lokale handel en horeca, dienstverlening, high-tech (luchtvaart/optica-erfgoed).',
        knownFor: ['Antwerpse rand', 'Buurthandel', 'Fort 4'],
    },
    lier: {
        profile:
            'Lier, "de Pallieterstad", charmeert met zijn begijnhof, Zimmertoren en gemoedelijke sfeer. Een compacte stad met een trouwe lokale middenstand vlak bij Antwerpen.',
        economy:
            'Lokale handel en horeca, KMO’s, toerisme en ambacht.',
        knownFor: ['Zimmertoren', 'Lierse vlaaikes', 'Begijnhof'],
    },

    // ── Vlaams-Brabant ───────────────────────────────────────────
    leuven: {
        profile:
            'Leuven is de kennishoofdstad van Vlaanderen, met de oudste universiteit van de Lage Landen (KU Leuven) en wereldspelers als imec en AB InBev. Een jonge, internationale stad waar innovatie en ondernemerschap floreren.',
        economy:
            'Tech en R&D, biotech en health, onderwijs, brouwerij en start-ups.',
        knownFor: ['KU Leuven', 'imec', 'Stella Artois'],
    },
    vilvoorde: {
        profile:
            'Vilvoorde ligt strategisch tussen Brussel en de luchthaven van Zaventem, een logistiek en economisch knooppunt in volle transformatie (o.a. de site Watersite). Veel internationaal georiënteerde bedrijven.',
        economy:
            'Logistiek en distributie, maakindustrie, dienstverlening, stadsontwikkeling.',
        knownFor: ['Brusselse rand', 'Logistiek knooppunt', 'Watersite'],
    },
    halle: {
        profile:
            'Halle ligt aan de zuidrand van Brussel, op de taalgrens, en is bekend van de Sint-Martinusbasiliek en de bedevaart. Een commercieel centrum voor het Pajottenland met een tweetalig verzorgingsgebied.',
        economy:
            'Detailhandel, logistiek, voeding (o.a. chocolade) en dienstverlening.',
        knownFor: ['Pajottenland', 'Basiliek', 'Brusselse rand'],
    },

    // ── Limburg ──────────────────────────────────────────────────
    hasselt: {
        profile:
            'Hasselt is de hoofdstad van Limburg en geldt als dé winkel- en modestad van de provincie. Met een gastvrij imago ("hoofdstad van de smaak") en sterke retail is online aanwezigheid er commercieel doorslaggevend.',
        economy:
            'Retail en mode, horeca en events, zorg, dienstverlening en jenevernijverheid.',
        knownFor: ['Modestad', 'Jenever', 'Hoofdstad van de smaak'],
    },
    genk: {
        profile:
            'Genk is de meest multiculturele en industriële stad van Limburg, met een sterke reconversie van mijnbouw naar maakindustrie en innovatie (o.a. Thor Park). Een stad van doeners en ondernemers.',
        economy:
            'Maakindustrie en logistiek, energie en cleantech (Thor Park), retail en events.',
        knownFor: ['Thor Park', 'C-mine', 'Maakindustrie'],
    },
}

export function getCityContent(slug: string): CityContent | null {
    return cityContent[slug] ?? null
}
