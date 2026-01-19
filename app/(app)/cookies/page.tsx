"use client";

import { motion } from "framer-motion";
import { Cookie, Settings, CheckCircle, XCircle } from "lucide-react";
import "../../../styles/Legal.css";

export default function Cookies() {
  return (
    <div className="legal-page">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="legal-header"
      >
        <Cookie size={48} className="legal-icon" />
        <h1>Cookiebeleid</h1>
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
          <h2>1. Wat zijn cookies?</h2>
          <p>
            Cookies zijn kleine tekstbestanden die op uw computer of mobiel
            apparaat worden opgeslagen wanneer u een website bezoekt. Ze worden
            veel gebruikt om websites te laten werken, efficiënter te maken en
            om informatie te verstrekken aan de eigenaren van de website.
          </p>
          <p>
            Op devriesesoftware.be gebruiken we cookies om uw gebruikservaring
            te verbeteren en om onze website goed te laten functioneren.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Welke cookies gebruiken wij?</h2>

          <h3>
            <CheckCircle size={20} className="inline-icon-title" />
            2.1 Noodzakelijke cookies (Functioneel)
          </h3>
          <p>
            Deze cookies zijn essentieel voor het functioneren van onze website.
            Zonder deze cookies kan de website niet correct werken.
          </p>
          <div className="cookie-table">
            <table>
              <thead>
                <tr>
                  <th>Cookie naam</th>
                  <th>Doel</th>
                  <th>Looptijd</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>cookie_consent</code>
                  </td>
                  <td>Slaat uw cookie voorkeuren op</td>
                  <td>1 jaar</td>
                </tr>
                <tr>
                  <td>
                    <code>session_id</code>
                  </td>
                  <td>Houdt uw sessie bij tijdens het bezoek</td>
                  <td>Sessie</td>
                </tr>
                <tr>
                  <td>
                    <code>csrf_token</code>
                  </td>
                  <td>Beveiligt formulieren tegen misbruik</td>
                  <td>Sessie</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="cookie-note">
            <strong>Rechtsgrond:</strong> Gerechtvaardigd belang - noodzakelijk
            voor het functioneren van de website
          </p>

          <h3>
            <Settings size={20} className="inline-icon-title" />
            2.2 Analytische cookies (Optioneel)
          </h3>
          <p>
            Deze cookies helpen ons begrijpen hoe bezoekers onze website
            gebruiken, zodat we deze kunnen verbeteren. We verzamelen geen
            persoonlijk identificeerbare informatie.
          </p>
          <div className="cookie-table">
            <table>
              <thead>
                <tr>
                  <th>Cookie naam</th>
                  <th>Doel</th>
                  <th>Looptijd</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>_ga</code>
                  </td>
                  <td>Google Analytics - Onderscheidt gebruikers</td>
                  <td>2 jaar</td>
                </tr>
                <tr>
                  <td>
                    <code>_gid</code>
                  </td>
                  <td>Google Analytics - Onderscheidt gebruikers</td>
                  <td>24 uur</td>
                </tr>
                <tr>
                  <td>
                    <code>_gat</code>
                  </td>
                  <td>Google Analytics - Beperkt verzoeken</td>
                  <td>1 minuut</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="cookie-note">
            <strong>Rechtsgrond:</strong> Toestemming - alleen geplaatst met uw
            expliciete toestemming
          </p>

          <h3>
            <XCircle size={20} className="inline-icon-title" />
            2.3 Marketing cookies
          </h3>
          <p>
            <strong>We gebruiken momenteel geen marketing cookies.</strong> We
            volgen uw surfgedrag niet voor advertentiedoeleinden en delen geen
            gegevens met advertentienetwerken.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. Cookies van derden</h2>
          <p>
            Naast onze eigen cookies kunnen sommige externe partijen cookies
            plaatsen wanneer u onze website bezoekt:
          </p>

          <h3>Google Analytics (optioneel)</h3>
          <p>
            We gebruiken Google Analytics om inzicht te krijgen in hoe bezoekers
            onze website gebruiken. Google kan deze informatie aan derden
            verschaffen indien Google hiertoe wettelijk wordt verplicht, of voor
            zover derden de informatie namens Google verwerken.
          </p>
          <p>We hebben Google Analytics privacy-vriendelijk ingesteld:</p>
          <ul>
            <li>IP-anonimisering is geactiveerd</li>
            <li>Gegevens delen met Google is uitgeschakeld</li>
            <li>Geen gebruik van andere Google diensten</li>
          </ul>

          <h3>Formspree (contactformulier)</h3>
          <p>
            Voor ons contactformulier gebruiken we Formspree. Formspree kan
            cookies plaatsen om het formulier te laten werken en spam te
            voorkomen. Zie het{" "}
            <a
              href="https://formspree.io/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              privacybeleid van Formspree
            </a>{" "}
            voor meer informatie.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Uw cookie voorkeuren beheren</h2>

          <h3>Via uw browser</h3>
          <p>
            U kunt cookies te allen tijde beheren via uw browserinstellingen.
            Hieronder vindt u instructies voor de meest gebruikte browsers:
          </p>
          <ul>
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Google Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/nl/kb/cookies-verwijderen-gegevens-wissen-websites-opgeslagen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/nl-be/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Safari
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/nl-nl/microsoft-edge/cookies-in-microsoft-edge-verwijderen-63947406-40ac-c3b8-57b9-2a946a29ae09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Microsoft Edge
              </a>
            </li>
          </ul>

          <h3>Via onze cookie banner</h3>
          <p>
            Bij uw eerste bezoek aan onze website ziet u een cookie banner
            waarin u kunt kiezen welke cookies u wilt accepteren. U kunt uw
            voorkeuren later aanpassen door op de cookie-instellingen knop te
            klikken (onderaan elke pagina).
          </p>

          <div className="info-box">
            <strong>Let op:</strong> Als u alle cookies weigert of verwijdert,
            kan dit invloed hebben op de functionaliteit van onze website.
            Noodzakelijke cookies worden altijd geplaatst.
          </div>
        </section>

        <section className="legal-section">
          <h2>5. Do Not Track</h2>
          <p>
            Sommige browsers hebben een "Do Not Track" (DNT) functie. Wanneer u
            deze functie activeert, respecteren wij dit signaal en plaatsen we
            geen analytische of tracking cookies op uw apparaat.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Updates van dit cookiebeleid</h2>
          <p>
            We kunnen dit cookiebeleid van tijd tot tijd bijwerken, bijvoorbeeld
            wanneer we nieuwe cookies gebruiken of onze website aanpassen. De
            meest recente versie is altijd beschikbaar op deze pagina.
          </p>
          <p>
            <strong>Laatste update:</strong>{" "}
            {new Date().toLocaleDateString("nl-BE")}
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Meer informatie</h2>
          <p>Voor meer algemene informatie over cookies kunt u terecht bij:</p>
          <ul>
            <li>
              <a
                href="https://www.allaboutcookies.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                AllAboutCookies.org
              </a>
            </li>
            <li>
              <a
                href="https://www.youronlinechoices.com/be-nl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                YourOnlineChoices.com
              </a>
            </li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>8. Contact</h2>
          <p>
            Heeft u vragen over ons gebruik van cookies? Neem gerust contact met
            ons op:
          </p>
          <div className="contact-box">
            <p>
              <strong>Devriese Software</strong>
            </p>
            <p>E-mail: info@devriesesoftware.be</p>
            <p>Tel: +32 498 52 54 82</p>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
