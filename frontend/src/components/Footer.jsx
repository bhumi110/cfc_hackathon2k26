import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaDiscord,
  FaEnvelope,
} from "react-icons/fa";
import "../styles/footer.css";
import footertext from "../assets/st-text-navbar.png";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/CodeNEST-NSHM", label: "GitHub" },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/codenest_osdc?igsh=bm93ZXJwMDJ5ZjJu",
    label: "Instagram",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/company/codenest-osdc/",
    label: "LinkedIn",
  },
  { icon: FaDiscord, href: "#", label: "Discord" },
];

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Timeline", href: "#timeline" },
  { label: "Themes", href: "#themes" },
  { label: "Prizes", href: "#prizes" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "FAQ", href: "#faq" },
  { label: "Venue", href: "#venue" },


];

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const colVariant = (i) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.15,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
});

const socialVariant = (i) => ({
  hidden: { opacity: 0, scale: 0, rotate: -45 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.4,
      delay: 0.4 + i * 0.08,
      type: "spring",
      stiffness: 250,
      damping: 14,
    },
  },
});

const dividerVariant = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Footer() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <footer className="footer-section" ref={ref}>
      <motion.div
        className="st-divider"
        variants={dividerVariant}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{ transformOrigin: "center" }}
      />

      <motion.div
        className="st-container footer-content"
        variants={containerVariant}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Brand */}
        <motion.div
          className="footer-col footer-brand"
          variants={colVariant(0)}
        >
          <img src={footertext} alt="code for change 2.0" className="footer-logo" />
          <p className="footer-tagline">
            Venture into the Upside Down and build something extraordinary.
          </p>
          <div className="footer-socials">
            {socialLinks.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                className="footer-social-link"
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                variants={socialVariant(i)}
                whileHover={{
                  scale: 1.2,
                  rotate: 5,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <s.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div className="footer-col" variants={colVariant(1)}>
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-link-list">
            {quickLinks.map((link, i) => (
              <li key={i}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div className="footer-col" variants={colVariant(2)}>
          <h4 className="footer-col-title">Contact</h4>
          <ul className="footer-link-list">
            <li>
              <a href="mailto:codeforchange2.0@gmail.com">
                <FaEnvelope style={{ marginRight: 8 }} />
                codeforchange2.0@gmail.com
              </a>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <p>&copy; {new Date().getFullYear()} Hackathon. All rights reserved.</p>
      </motion.div>
    </footer>
  );
}
