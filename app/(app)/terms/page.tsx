"use client";

import { motion } from "framer-motion";
import { FileText, AlertCircle } from "lucide-react";
import Link from "next/link";
import "../../../styles/Legal.css";

export default function Terms() {
  return (
    <div className="legal-page">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="legal-header"
      >
        <FileText size={48} className="legal-icon" />
        <h1>Algemene Voorwaarden</h1>
        <p className="legal-subtitle">
          Laatst bijgewerkt: {new Date().toLocaleDateString("nl-BE")}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="legal-content"
      >
        <section className="legal-section">
          <h2>1. Toepassingsgebied</h2>
          <p>
            Deze algemene voorwaarden zijn van toepassing op alle diensten die
            worden geleverd door Devriese Software, gevestigd te Vinktse
            Binnenweg 3, 8700 Kanegem (Tielt), België, met ondernemingsnummer BE
            1017.993.323.
          </p>
          <p>
            Door gebruik te maken van onze diensten, gaat u akkoord met deze
            voorwaarden. Afwijkende voorwaarden van de klant zijn alleen geldig
            indien deze schriftelijk door ons zijn bevestigd.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Diensten</h2>
          <p>Devriese Software biedt de volgende diensten aan:</p>
          <ul>
            <li>Ontwikkeling van websites en webapplicaties</li>
            <li>Ontwikkeling van e-commerce platforms</li>
            <li>Ontwikkeling van mobile applicaties</li>
            <li>Maatwerk softwareontwikkeling</li>
            <li>Webhosting en onderhoud</li>
            <li>Technische support en consultancy</li>
            <li>API ontwikkeling en integraties</li>
          </ul>
          <p>
            De precieze specificaties van de te leveren diensten worden
            vastgelegd in een apart projectvoorstel of offerte.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. Offertes en Overeenkomsten</h2>
          <h3>3.1 Offertes</h3>
          <p>
            Alle offertes zijn vrijblijvend en geldig voor 30 dagen, tenzij
            anders vermeld. Prijzen zijn exclusief BTW, tenzij anders vermeld.
          </p>

          <h3>3.2 Totstandkoming overeenkomst</h3>
          <p>Een overeenkomst komt tot stand wanneer:</p>
          <ul>
            <li>
              De klant de offerte schriftelijk (ook per e-mail) heeft
              geaccepteerd, of
            </li>
            <li>De klant een voorschot heeft betaald, of</li>
            <li>We zijn begonnen met de uitvoering van de opdracht</li>
          </ul>

          <h3>3.3 Wijzigingen</h3>
          <p>
            Wijzigingen in de opdracht kunnen leiden tot aanpassing van de prijs
            en levertijd. Meerwerk wordt apart gefactureerd volgens ons geldende
            uurtarief (€65/uur, excl. BTW).
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Prijzen en Betaling</h2>
          <h3>4.1 Prijzen</h3>
          <p>
            Alle genoemde prijzen zijn in euro's, exclusief BTW en exclusief
            eventuele kosten van derden (zoals hostingkosten, licenties,
            domeinnamen), tenzij expliciet anders vermeld.
          </p>

          <h3>4.2 Betalingstermijnen</h3>
          <p>Voor projecten geldt de volgende betalingsregeling:</p>
          <ul>
            <li>
              <strong>Voorschot:</strong> 50% bij aanvang van het project
            </li>
            <li>
              <strong>Eindafrekening:</strong> 50% bij oplevering
            </li>
          </ul>
          <p>
            Voor onderhoudspakketten geldt maandelijkse of jaarlijkse
            facturering vooraf.
          </p>

          <h3>4.3 Betaaltermijn</h3>
          <p>
            Betalingen dienen te geschieden binnen 14 dagen na factuurdatum,
            tenzij anders overeengekomen. Bij niet-tijdige betaling zijn we
            gerechtigd wettelijke rente en incassokosten in rekening te brengen.
          </p>

          <h3>4.4 Opschorting bij niet-betaling</h3>
          <p>
            Bij niet-tijdige betaling behouden we ons het recht voor om de
            werkzaamheden op te schorten tot volledige betaling is ontvangen.
            Ook kunnen we de toegang tot geleverde diensten (zoals hosting)
            tijdelijk blokkeren.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Uitvoering en Levertijd</h2>
          <h3>5.1 Levertijden</h3>
          <p>
            Opgegeven levertijden zijn indicatief en geen fatale termijnen,
            tenzij expliciet anders overeengekomen. Vertraging geeft de klant
            geen recht op schadevergoeding of ontbinding van de overeenkomst.
          </p>

          <h3>5.2 Medewerking klant</h3>
          <p>
            De klant verplicht zich om tijdig alle benodigde informatie,
            materialen en medewerking te verstrekken. Vertraging als gevolg van
            het niet of te laat aanleveren hiervan, komt voor rekening van de
            klant.
          </p>

          <h3>5.3 Testfase</h3>
          <p>
            Bij oplevering krijgt de klant de gelegenheid om het eindresultaat
            te testen. Feedback dient binnen 7 werkdagen te worden gegeven.
            Kleine aanpassingen zijn inbegrepen, grote wijzigingen worden
            beschouwd als meerwerk.
          </p>

          <h3>5.4 Acceptatie</h3>
          <p>
            Het werk wordt geacht te zijn geaccepteerd indien de klant niet
            binnen 7 werkdagen na oplevering gemotiveerd bezwaar maakt. Na
            acceptatie vervalt het recht op aanpassingen binnen het
            oorspronkelijke budget.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Intellectueel Eigendom</h2>
          <h3>6.1 Auteursrechten</h3>
          <p>
            Alle intellectuele eigendomsrechten op de door ons ontwikkelde
            werken (inclusief broncode, ontwerpen, teksten) berusten bij
            Devriese Software, tenzij schriftelijk anders overeengekomen.
          </p>

          <h3>6.2 Gebruiksrecht</h3>
          <p>
            Na volledige betaling verkrijgt de klant een niet-exclusief,
            niet-overdraagbaar gebruiksrecht op het eindresultaat voor eigen
            gebruik. Dit omvat:
          </p>
          <ul>
            <li>Het recht om de website/applicatie te gebruiken</li>
            <li>Het recht om content aan te passen</li>
            <li>Het recht om het werk online beschikbaar te stellen</li>
          </ul>

          <h3>6.3 Broncode</h3>
          <p>
            Overdracht van volledige eigendom van de broncode kan worden
            overeengekomen tegen een meerprijs. Dit dient expliciet te worden
            vermeld in de offerte.
          </p>

          <h3>6.4 Portfolio</h3>
          <p>
            We behouden ons het recht voor om gerealiseerde projecten op te
            nemen in ons portfolio, tenzij de klant hier bezwaar tegen maakt.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Hosting en Onderhoud</h2>
          <h3>7.1 Hosting</h3>
          <p>
            Indien hosting door ons wordt verzorgd, is deze inbegrepen in het
            maandelijkse onderhoudspakket. We garanderen een uptime van minimaal
            99% (gemiddeld per jaar).
          </p>

          <h3>7.2 Onderhoud</h3>
          <p>Onderhoudspakketten omvatten:</p>
          <ul>
            <li>Beveiligingsupdates en patches</li>
            <li>Technische support per e-mail</li>
            <li>Regelmatige backups</li>
            <li>Monitoring en proactief beheer</li>
            <li>Kleine aanpassingen (aantal afhankelijk van gekozen pakket)</li>
          </ul>

          <h3>7.3 Opzegging</h3>
          <p>
            Onderhoudspakketten hebben een minimale looptijd van 1 jaar en
            kunnen daarna maandelijks worden opgezegd met een opzegtermijn van 1
            maand.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Garantie en Aansprakelijkheid</h2>
          <h3>8.1 Garantie</h3>
          <p>
            We garanderen dat de geleverde diensten vakkundig en professioneel
            worden uitgevoerd. Gebreken die binnen 3 maanden na oplevering
            worden gemeld en aantoonbaar aan ons te wijten zijn, worden
            kosteloos hersteld.
          </p>

          <h3>8.2 Uitgesloten garantie</h3>
          <p>De garantie is niet van toepassing op:</p>
          <ul>
            <li>
              Problemen veroorzaakt door verkeerd gebruik of handelingen van
              derden
            </li>
            <li>Normale slijtage of veroudering</li>
            <li>
              Problemen ontstaan door updates/wijzigingen door de klant of
              derden
            </li>
            <li>Niet of niet-tijdig uitgevoerd onderhoud</li>
          </ul>

          <h3>8.3 Beperking aansprakelijkheid</h3>
          <p>
            Onze aansprakelijkheid is beperkt tot het bedrag dat in het
            desbetreffende geval onder onze beroepsaansprakelijkheidsverzekering
            wordt uitbetaald, vermeerderd met het eigen risico. In geen geval
            zijn we aansprakelijk voor indirecte schade, gevolgschade, gederfde
            winst of schade aan derden.
          </p>

          <h3>8.4 Maximale aansprakelijkheid</h3>
          <p>
            Onze totale aansprakelijkheid is in ieder geval beperkt tot het
            factuurbedrag van de opdracht, met een maximum van €5.000.
          </p>
        </section>

        <section className="legal-section">
          <h2>9. Overmacht</h2>
          <p>
            In geval van overmacht zijn we niet gehouden tot nakoming van enige
            verplichting. Onder overmacht verstaan we onder meer: ziekte,
            storingen in elektriciteit of internet, overheidsmaatregelen,
            natuurrampen en problemen bij toeleveranciers.
          </p>
          <p>
            Bij overmacht langer dan 3 maanden kunnen beide partijen de
            overeenkomst schriftelijk ontbinden zonder schadevergoeding.
          </p>
        </section>

        <section className="legal-section">
          <h2>10. Geheimhouding</h2>
          <p>
            Beide partijen verplichten zich tot geheimhouding van alle
            vertrouwelijke informatie die zij in het kader van de overeenkomst
            van elkaar hebben verkregen. Deze verplichting geldt ook na
            beëindiging van de overeenkomst.
          </p>
        </section>

        <section className="legal-section">
          <h2>11. Ontbinding</h2>
          <h3>11.1 Door Devriese Software</h3>
          <p>
            We kunnen de overeenkomst met onmiddellijke ingang ontbinden indien
            de klant:
          </p>
          <ul>
            <li>In gebreke blijft met de betaling</li>
            <li>
              Failliet wordt verklaard of surseance van betaling aanvraagt
            </li>
            <li>Zijn verplichtingen niet nakomt</li>
          </ul>

          <h3>11.2 Door de klant</h3>
          <p>
            De klant kan de overeenkomst tussentijds opzeggen tegen betaling van
            alle tot dan toe verrichte werkzaamheden, plus 30% van het
            resterende bedrag ter compensatie van gemaakte kosten en gederfde
            inkomsten.
          </p>
        </section>

        <section className="legal-section">
          <h2>12. Privacy en Gegevensverwerking</h2>
          <p>
            Voor de verwerking van persoonsgegevens verwijzen we naar ons apart{" "}
            <Link href="/privacy" className="text-link">
              privacybeleid
            </Link>
            . We houden ons aan de AVG/GDPR wetgeving.
          </p>
        </section>

        <section className="legal-section">
          <h2>13. Geschillen</h2>
          <h3>13.1 Toepasselijk recht</h3>
          <p>
            Op alle overeenkomsten is uitsluitend Belgisch recht van toepassing.
          </p>

          <h3>13.2 Bevoegde rechter</h3>
          <p>
            Alle geschillen zullen worden voorgelegd aan de bevoegde rechter in
            het arrondissement West-Vlaanderen, tenzij de wet dwingend anders
            voorschrijft.
          </p>

          <h3>13.3 Overleg</h3>
          <p>
            Beide partijen zullen zich inspannen om geschillen in onderling
            overleg op te lossen alvorens een beroep te doen op de rechter.
          </p>
        </section>

        <section className="legal-section">
          <h2>14. Wijziging Voorwaarden</h2>
          <p>
            We behouden ons het recht voor deze algemene voorwaarden te
            wijzigen. Wijzigingen worden van kracht 30 dagen na publicatie op
            onze website. Bestaande overeenkomsten blijven onderworpen aan de
            voorwaarden die golden bij het aangaan van de overeenkomst.
          </p>
        </section>

        <section className="legal-section">
          <h2>15. Slotbepalingen</h2>
          <p>
            Indien een bepaling van deze voorwaarden nietig is of vernietigd
            wordt, blijven de overige bepalingen onverminderd van kracht. De
            nietige bepaling zal worden vervangen door een geldige bepaling die
            de bedoeling van de oorspronkelijke bepaling zo dicht mogelijk
            benadert.
          </p>
        </section>

        <div className="info-box">
          <AlertCircle size={20} className="inline-icon" />
          <strong>Vragen over deze voorwaarden?</strong>
          <p>
            Neem gerust contact met ons op via info@devriesesoftware.be of bel
            +32 498 52 54 82
          </p>
        </div>
      </motion.div>
    </div>
  );
}
