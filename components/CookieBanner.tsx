"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X, Check, Settings } from "lucide-react";
import "../styles/CookieBanner.css";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookieConsent", JSON.stringify(allAccepted));
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookieConsent", JSON.stringify(necessaryOnly));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    const savedPreferences = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookieConsent", JSON.stringify(savedPreferences));
    setIsVisible(false);
  };

  const togglePreference = (key: string) => {
    if (key === "necessary") return;
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner-overlay">
      <div className={`cookie-banner ${showSettings ? "expanded" : ""}`}>
        <div className="cookie-banner-main">
          <div className="cookie-banner-icon">
            <Cookie size={28} />
          </div>

          <div className="cookie-banner-content">
            <h3>🍪 Wij gebruiken cookies</h3>
            <p>
              Wij gebruiken cookies om je de beste ervaring op onze website te
              bieden. Je kunt je voorkeuren aanpassen of alle cookies
              accepteren.{" "}
              <Link href="/cookies" className="cookie-link">
                Meer informatie
              </Link>
            </p>
          </div>

          <button
            className="cookie-close-btn"
            onClick={handleAcceptNecessary}
            aria-label="Sluit banner"
          >
            <X size={20} />
          </button>
        </div>

        {showSettings && (
          <div className="cookie-settings-panel">
            <div className="cookie-setting-item">
              <div className="cookie-setting-info">
                <h4>Noodzakelijke cookies</h4>
                <p>
                  Deze cookies zijn essentieel voor de werking van de website.
                </p>
              </div>
              <div className="cookie-toggle disabled">
                <input type="checkbox" checked={true} disabled readOnly />
                <span className="toggle-slider"></span>
              </div>
            </div>

            <div className="cookie-setting-item">
              <div className="cookie-setting-info">
                <h4>Analytische cookies</h4>
                <p>
                  Helpen ons te begrijpen hoe bezoekers onze website gebruiken.
                </p>
              </div>
              <div className="cookie-toggle">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={() => togglePreference("analytics")}
                />
                <span className="toggle-slider"></span>
              </div>
            </div>

            <div className="cookie-setting-item">
              <div className="cookie-setting-info">
                <h4>Marketing cookies</h4>
                <p>
                  Worden gebruikt om gepersonaliseerde advertenties te tonen.
                </p>
              </div>
              <div className="cookie-toggle">
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={() => togglePreference("marketing")}
                />
                <span className="toggle-slider"></span>
              </div>
            </div>
          </div>
        )}

        <div className="cookie-banner-actions">
          <button
            className="cookie-btn cookie-btn-settings"
            onClick={() => setShowSettings(!showSettings)}
          >
            <Settings size={18} />
            {showSettings ? "Verberg instellingen" : "Instellingen"}
          </button>

          {showSettings ? (
            <button
              className="cookie-btn cookie-btn-save"
              onClick={handleSavePreferences}
            >
              <Check size={18} />
              Opslaan
            </button>
          ) : (
            <button
              className="cookie-btn cookie-btn-necessary"
              onClick={handleAcceptNecessary}
            >
              Alleen noodzakelijk
            </button>
          )}

          <button
            className="cookie-btn cookie-btn-accept"
            onClick={handleAcceptAll}
          >
            <Check size={18} />
            Alles accepteren
          </button>
        </div>
      </div>
    </div>
  );
}
