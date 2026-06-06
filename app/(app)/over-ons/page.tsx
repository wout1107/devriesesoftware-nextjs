import AboutClient from "./AboutClient";

export const metadata = {
  title: "Over ons | Devriese Software",
  description:
    "Maak kennis met Wout Devriese, de developer achter Devriese Software. Bachelor Toegepaste Informatica (Software Development, VIVES Kortrijk), persoonlijke aanpak en websites & webapplicaties op maat uit West-Vlaanderen.",
  alternates: {
    canonical: "https://devriesesoftware.be/over-ons",
  },
  openGraph: {
    title: "Over ons | Devriese Software",
    description:
      "Maak kennis met Wout Devriese, de developer achter Devriese Software. Persoonlijke aanpak en moderne technologie voor jouw digitale project.",
    url: "https://devriesesoftware.be/over-ons",
    type: "profile",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
