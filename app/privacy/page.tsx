"use client";

import { motion } from "framer-motion";
import { Shield, Mail, Phone, Calendar } from "lucide-react";
import Link from "next/link";
import "../../styles/Legal.css";

export default function Privacy() {
  return (
    <div className="legal-page">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="legal-header"
      >
        <Shield size={48} className="legal-icon" />
        <h1>Privacybeleid</h1>
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
          <h2>1. Inleiding</h2>
          <p>
            Devriese Software (BTW BE 1017.993.323) hecht veel waarde aan de
            bescherming van uw persoonsgegevens. In dit privacybeleid leggen we
            uit welke persoonsgegevens we verzamelen en hoe we deze gebruiken,
            opslaan en beveiligen.
          </p>
          <p>
            Dit privacybeleid is van toepassing op alle diensten die worden
            aangeboden door Devriese Software via de website
            devriesesoftware.be.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Verantwoordelijke voor gegevensverwerking</h2>
          <div className="contact-box">
            <p>
              <strong>Devriese Software</strong>
            </p>
            <p>Vinktse Binnenweg 3</p>
            <p>8700 Kanegem (Tielt), België</p>
            <p>BTW: BE 1017.993.323</p>
            <p>
              <Mail size={16} className="inline-icon" />
              <a href="mailto:info@devriesesoftware.be">
                info@devriesesoftware.be
              </a>
            </p>
            <p>
              <Phone size={16} className="inline-icon" />
              <a href="tel:+32498525482">+32 498 52 54 82</a>
            </p>
          </div>
        </section>

        <section className="legal-section">
          <h2>3. Welke gegevens verzamelen we?</h2>
          <h3>3.1 Contactformulier</h3>
          <p>Wanneer u ons contactformulier invult, verzamelen we:</p>
          <ul>
            <li>Voor- en achternaam</li>
            <li>E-mailadres</li>
            <li>Telefoonnummer (optioneel)</li>
            <li>Bedrijfsnaam (optioneel)</li>
            <li>Projectinformatie en bericht</li>
          </ul>

          <h3>3.2 Automatisch verzamelde gegevens</h3>
          <p>
            Wanneer u onze website bezoekt, verzamelen we automatisch bepaalde
            technische informatie:
          </p>
          <ul>
            <li>IP-adres</li>
            <li>Browsertype en versie</li>
            <li>Besturingssysteem</li>
            <li>Bezochte pagina's en tijdstip van bezoek</li>
            <li>Verwijzende website</li>
          </ul>

          <h3>3.3 Cookies</h3>
          <p>
            We maken gebruik van cookies om uw gebruikservaring te verbeteren.
            Zie ons{" "}
            <Link href="/cookies" className="text-link">
              cookiebeleid
            </Link>{" "}
            voor meer informatie.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Waarvoor gebruiken we uw gegevens?</h2>
          <p>We verwerken uw persoonsgegevens voor de volgende doeleinden:</p>
          <ul>
            <li>
              <strong>Communicatie:</strong> Om uw vragen te beantwoorden en
              offertes op te stellen
            </li>
            <li>
              <strong>Dienstverlening:</strong> Om onze diensten uit te voeren
              en projecten te realiseren
            </li>
            <li>
              <strong>Verbetering:</strong> Om onze website en diensten te
              optimaliseren
            </li>
            <li>
              <strong>Marketing:</strong> Om u op de hoogte te houden van onze
              diensten (alleen met uw toestemming)
            </li>
            <li>
              <strong>Wettelijke verplichtingen:</strong> Om te voldoen aan
              wettelijke en fiscale verplichtingen
            </li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>5. Rechtsgrond voor verwerking</h2>
          <p>We verwerken uw persoonsgegevens op basis van:</p>
          <ul>
            <li>
              <strong>Toestemming:</strong> U heeft expliciet toestemming
              gegeven (bijv. nieuwsbrief)
            </li>
            <li>
              <strong>Contractuele noodzaak:</strong> Voor het uitvoeren van een
              overeenkomst
            </li>
            <li>
              <strong>Gerechtvaardigd belang:</strong> Voor het verbeteren van
              onze diensten
            </li>
            <li>
              <strong>Wettelijke verplichting:</strong> Voor het naleven van
              wet- en regelgeving
            </li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>6. Bewaartermijn</h2>
          <p>
            We bewaren uw persoonsgegevens niet langer dan noodzakelijk voor de
            doeleinden waarvoor ze zijn verzameld:
          </p>
          <ul>
            <li>
              <strong>Contactaanvragen:</strong> Maximaal 2 jaar na laatste
              contact
            </li>
            <li>
              <strong>Klantgegevens:</strong> Duur van de overeenkomst + 7 jaar
              (boekhoudkundige verplichting)
            </li>
            <li>
              <strong>Nieuwsbriefinschrijvingen:</strong> Tot uitschrijving
            </li>
            <li>
              <strong>Website analytics:</strong> Maximaal 26 maanden
            </li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>7. Delen van gegevens met derden</h2>
          <p>
            We verkopen uw gegevens nooit. We delen uw persoonsgegevens alleen
            met derden wanneer dit noodzakelijk is:
          </p>
          <ul>
            <li>
              <strong>Hosting providers:</strong> Voor het hosten van onze
              website en systemen
            </li>
            <li>
              <strong>E-mail diensten:</strong> Voor het verzenden van
              communicatie (bijv. Formspree)
            </li>
            <li>
              <strong>Betaaldiensten:</strong> Voor het verwerken van betalingen
            </li>
            <li>
              <strong>Wettelijke verplichting:</strong> Wanneer we hiertoe
              wettelijk verplicht zijn
            </li>
          </ul>
          <p>
            Al onze partners zijn contractueel gebonden om uw gegevens veilig te
            behandelen volgens de AVG/GDPR.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Beveiliging</h2>
          <p>
            We nemen passende technische en organisatorische maatregelen om uw
            persoonsgegevens te beschermen tegen verlies, misbruik en
            ongeautoriseerde toegang:
          </p>
          <ul>
            <li>SSL/TLS encryptie voor alle data-overdracht</li>
            <li>Beveiligde hosting infrastructuur</li>
            <li>Regelmatige beveiligingsupdates</li>
            <li>Toegangscontrole tot systemen</li>
            <li>Regelmatige backups</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>9. Uw rechten</h2>
          <p>
            Volgens de AVG/GDPR heeft u de volgende rechten met betrekking tot
            uw persoonsgegevens:
          </p>
          <ul>
            <li>
              <strong>Recht op inzage:</strong> U kunt opvragen welke gegevens
              we van u verwerken
            </li>
            <li>
              <strong>Recht op rectificatie:</strong> U kunt onjuiste gegevens
              laten corrigeren
            </li>
            <li>
              <strong>Recht op verwijdering:</strong> U kunt verwijdering van uw
              gegevens verzoeken
            </li>
            <li>
              <strong>Recht op beperking:</strong> U kunt verzoeken de
              verwerking te beperken
            </li>
            <li>
              <strong>Recht op dataportabiliteit:</strong> U kunt uw gegevens in
              een digitaal formaat opvragen
            </li>
            <li>
              <strong>Recht van bezwaar:</strong> U kunt bezwaar maken tegen
              verwerking
            </li>
            <li>
              <strong>Recht op intrekking toestemming:</strong> U kunt
              toestemming te allen tijde intrekken
            </li>
          </ul>
          <p>
            Om gebruik te maken van uw rechten, kunt u contact met ons opnemen
            via{" "}
            <a href="mailto:info@devriesesoftware.be" className="text-link">
              info@devriesesoftware.be
            </a>
            . We reageren binnen 30 dagen op uw verzoek.
          </p>
        </section>

        <section className="legal-section">
          <h2>10. Klachten</h2>
          <p>
            Indien u niet tevreden bent over de manier waarop we met uw
            persoonsgegevens omgaan, kunt u een klacht indienen bij de Belgische
            toezichthouder:
          </p>
          <div className="contact-box">
            <p>
              <strong>Gegevensbeschermingsautoriteit (GBA)</strong>
            </p>
            <p>Drukpersstraat 35, 1000 Brussel</p>
            <p>
              Tel: <a href="tel:+3222744800">+32 2 274 48 00</a>
            </p>
            <p>
              Website:{" "}
              <a
                href="https://www.gegevensbeschermingsautoriteit.be"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                www.gegevensbeschermingsautoriteit.be
              </a>
            </p>
          </div>
        </section>

        <section className="legal-section">
          <h2>11. Wijzigingen privacybeleid</h2>
          <p>
            We kunnen dit privacybeleid van tijd tot tijd aanpassen. De meest
            recente versie is altijd beschikbaar op onze website. Belangrijke
            wijzigingen zullen we duidelijk communiceren.
          </p>
        </section>

        <section className="legal-section">
          <h2>12. Contact</h2>
          <p>
            Voor vragen over dit privacybeleid of onze gegevensverwerkingen kunt
            u contact met ons opnemen:
          </p>
          <div className="contact-box">
            <p>
              <Mail size={16} className="inline-icon" />
              <a href="mailto:info@devriesesoftware.be">
                info@devriesesoftware.be
              </a>
            </p>
            <p>
              <Phone size={16} className="inline-icon" />
              <a href="tel:+32498525482">+32 498 52 54 82</a>
            </p>
            <p>
              <Calendar size={16} className="inline-icon" />
              Maandag - Vrijdag: 09:00 - 18:00
            </p>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
