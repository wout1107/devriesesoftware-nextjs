"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader,
  User,
  Clock,
  MessageCircle,
  Zap,
  CheckCircle,
  Calendar,
} from "lucide-react";
import "../../styles/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
    newsletter: false,
    privacy: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const { scrollYProgress } = useScroll();
  const formY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const infoY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/mrblnzqn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _replyto: formData.email,
          _subject: "Nieuw contactformulier via website",
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          projectType: "",
          budget: "",
          timeline: "",
          message: "",
          newsletter: false,
          privacy: false,
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const benefits = [
    {
      icon: Zap,
      title: "Snelle Reactie",
      description: "Antwoord binnen 24 uur",
    },
    {
      icon: MessageCircle,
      title: "Persoonlijk Contact",
      description: "Direct contact met de developer",
    },
    {
      icon: CheckCircle,
      title: "Vrijblijvend",
      description: "Geen verplichtingen, gratis advies",
    },
  ];

  return (
    <div className="contact-page">
      {/* Animated Background */}
      <div className="contact-bg">
        <div className="contact-orb orb-1"></div>
        <div className="contact-orb orb-2"></div>
        <div className="contact-orb orb-3"></div>
      </div>

      {/* Header with animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="contact-header"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="header-icon-wrapper"
        >
          <Mail size={48} className="header-icon" />
        </motion.div>
        <h1>Laten we uw project bespreken</h1>
        <p>
          Of u nu een eenvoudige website nodig heeft of een complexe
          webapplicatie wilt ontwikkelen, ik help u graag verder. Neem contact
          op voor een vrijblijvend gesprek over uw wensen en mogelijkheden.
        </p>
      </motion.div>

      {/* Benefits Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="contact-benefits"
      >
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="benefit-card"
            >
              <div className="benefit-icon">
                <Icon size={24} />
              </div>
              <h4>{benefit.title}</h4>
              <p>{benefit.description}</p>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="contact-container">
        {/* Contact Info with parallax */}
        <motion.div
          style={{ y: infoY }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="contact-info"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6 }}
            className="contact-person"
          >
            <div className="person-icon">
              <User size={40} />
            </div>
            <div className="person-details">
              <h3>Wout Devriese</h3>
              <p className="person-title">Founder & Lead Developer</p>
            </div>
          </motion.div>

          <div className="info-items">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ x: 5 }}
              className="info-item"
            >
              <Mail size={24} />
              <div>
                <h4>Email</h4>
                <a href="mailto:info@devriesesoftware.be">
                  info@devriesesoftware.be
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ x: 5 }}
              className="info-item"
            >
              <Phone size={24} />
              <div>
                <h4>Telefoon</h4>
                <a href="tel:+32498525482">+32 498 52 54 82</a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              whileHover={{ x: 5 }}
              className="info-item"
            >
              <MapPin size={24} />
              <div>
                <h4>Adres</h4>
                <p>Vinktse Binnenweg 3</p>
                <p>8700 Kanegem [Tielt]</p>
                <p>België</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0 }}
              whileHover={{ x: 5 }}
              className="info-item availability"
            >
              <Clock size={24} />
              <div>
                <h4>Beschikbaarheid</h4>
                <div className="availability-details">
                  <div className="availability-row">
                    <Calendar size={16} />
                    <span className="day">Maandag - Vrijdag</span>
                    <span className="time">09:00 - 18:00</span>
                  </div>
                  <div className="availability-row">
                    <Calendar size={16} />
                    <span className="day">Weekend</span>
                    <span className="time">Op afspraak</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Form with parallax */}
        <motion.form
          style={{ y: formY }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          onSubmit={handleSubmit}
          className="contact-form"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <h3>Vertel ons over uw project</h3>
            <p className="form-intro">
              Vul onderstaand formulier in en ik neem zo snel mogelijk contact
              met u op om uw project te bespreken.
            </p>
          </motion.div>

          <div className="form-row-two">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="form-group"
            >
              <label htmlFor="firstName">Voornaam *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="Jouw voornaam"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="form-group"
            >
              <label htmlFor="lastName">Achternaam *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Jouw achternaam"
              />
            </motion.div>
          </div>

          <div className="form-row-two">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="form-group"
            >
              <label htmlFor="email">Email adres *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="jouw@email.be"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95 }}
              className="form-group"
            >
              <label htmlFor="phone">Telefoonnummer</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+32 498 52 54 82"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="form-group"
          >
            <label htmlFor="company">Bedrijfsnaam</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Jouw bedrijf (optioneel)"
            />
          </motion.div>

          <div className="form-row-two">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05 }}
              className="form-group"
            >
              <label htmlFor="projectType">Type project *</label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
              >
                <option value="">Selecteer een optie</option>
                <option value="website">Website</option>
                <option value="webapp">Web Applicatie</option>
                <option value="mobile">Mobile App</option>
                <option value="ecommerce">E-commerce</option>
                <option value="redesign">Website Redesign</option>
                <option value="maintenance">Onderhoud</option>
                <option value="other">Anders</option>
              </select>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="form-group"
            >
              <label htmlFor="budget">Indicatief budget</label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
              >
                <option value="">Selecteer budget range</option>
                <option value="500-1000">€500 - €1.000</option>
                <option value="1000-2500">€1.000 - €2.500</option>
                <option value="2500-5000">€2.500 - €5.000</option>
                <option value="5000-10000">€5.000 - €10.000</option>
                <option value="10000+">€10.000+</option>
                <option value="unknown">Weet ik nog niet</option>
              </select>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15 }}
            className="form-group"
          >
            <label htmlFor="timeline">Gewenste opleverdatum</label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
            >
              <option value="">Selecteer tijdlijn</option>
              <option value="asap">Zo snel mogelijk</option>
              <option value="1month">Binnen 1 maand</option>
              <option value="3months">Binnen 3 maanden</option>
              <option value="6months">Binnen 6 maanden</option>
              <option value="flexible">Flexibel</option>
            </select>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="form-group"
          >
            <label htmlFor="message">Projectomschrijving *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="Vertel ons meer over uw project, doelstellingen en specifieke wensen..."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25 }}
            className="form-group checkbox-group"
          >
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
            />
            <label htmlFor="newsletter">
              Ik wil graag updates ontvangen over nieuwe services en tips
            </label>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="form-group checkbox-group"
          >
            <input
              type="checkbox"
              id="privacy"
              name="privacy"
              checked={formData.privacy}
              onChange={handleChange}
              required
            />
            <label htmlFor="privacy">
              Ik ga akkoord met de verwerking van mijn gegevens volgens het
              privacybeleid *
            </label>
          </motion.div>

          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="form-feedback success"
            >
              <CheckCircle size={20} />
              Bedankt voor je bericht! Ik neem zo snel mogelijk contact met je
              op.
            </motion.div>
          )}

          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="form-feedback error"
            >
              ✗ Er ging iets mis. Probeer het later opnieuw of neem direct
              contact met me op.
            </motion.div>
          )}

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="submit-btn"
            disabled={isSubmitting}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.35 }}
          >
            {isSubmitting ? (
              <>
                <Loader size={18} className="spinner" />
                Versturen...
              </>
            ) : (
              <>
                Verstuur Bericht
                <Send size={18} />
              </>
            )}
          </motion.button>

          <input type="text" name="_gotcha" style={{ display: "none" }} />
        </motion.form>
      </div>
    </div>
  );
}
