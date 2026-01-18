import Link from "next/link";
import { Mail, Phone, MapPin, FileText, Shield, Cookie } from "lucide-react";
import "../styles/Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-col footer-contact-col">
            <h4 className="footer-subtitle">Contact</h4>
            <ul className="footer-contact">
              <li>
                <Mail size={18} />
                <a href="mailto:info@devriesesoftware.be">
                  info@devriesesoftware.be
                </a>
              </li>
              <li>
                <Phone size={18} />
                <a href="tel:+32498525482">+32 498 52 54 82</a>
              </li>
              <li className="footer-address">
                <MapPin size={18} />
                <span>
                  Vinktse Binnenweg 3<br />
                  8700 Kanegem (Tielt), België
                </span>
              </li>
            </ul>
          </div>

          <div className="footer-col footer-legal-col">
            <h4 className="footer-subtitle">Juridisch</h4>
            <ul className="footer-links">
              <li>
                <Link href="/privacy">
                  <Shield size={16} />
                  <span>Privacybeleid</span>
                </Link>
              </li>
              <li>
                <Link href="/cookies">
                  <Cookie size={16} />
                  <span>Cookiebeleid</span>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <FileText size={16} />
                  <span>Algemene Voorwaarden</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-col footer-company-col">
            <h4 className="footer-subtitle">Devriese Software</h4>
            <div className="footer-company-info">
              <p className="footer-copyright">
                {year} Devriese Software&trade;
              </p>
              <p className="footer-vat">BTW: BE 1017.993.323</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Powered by{" "}
            <a
              href="https://devriesesoftware.be"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Devriese Software
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
