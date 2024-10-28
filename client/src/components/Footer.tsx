import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const socialLinks = [
  {
    icon: <FaGithub size={28} />,
    url: "https://github.com/BibekKoirala07",
    name: "GitHub",
  },
  {
    icon: <FaLinkedin size={28} />,
    url: "https://www.linkedin.com/in/bibek-koirala-513957205/",
    name: "LinkedIn",
  },
  {
    icon: <FaFacebook size={28} />,
    url: "https://www.facebook.com/bibek.koirala.35728/",
    name: "Facebook",
  },
];

const Footer: React.FC = () => {
  const currentYear = 2024;

  const location = useLocation();
  if (location.pathname.toString().includes("my_resume")) {
    return null;
  }

  return (
    <footer className="dark:bg-componentBackground-dark  text-white p-8 pt-14">
      <div className="flex flex-col justify-start md:flex-row gap-7    px-4">
        <div className="flex-1  space-y-3 order-2 md:order-1">
          <h2 className="text-2xl font-semibold">Bibek Koirala</h2>
          <p className="text-sm">
            Passionate about creating beautiful and functional user experiences.
            Let's build something amazing together!
          </p>
        </div>
        <div className="flex-1  text-left md:text-right order-1 md:order-2">
          <h3 className="text-xl font-semibold">Socials</h3>
          <div className="flex justify-start md:justify-end gap-5 mt-2">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
        © {currentYear}. Made by Bibek Koirala
      </div>
    </footer>
  );
};

export default Footer;
