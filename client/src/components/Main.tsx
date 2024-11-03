import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import MyButton from "./MyButton";

const socialLinks = [
  {
    icon: <FaGithub size={25} />,
    url: "https://github.com/BibekKoirala07",
    name: "GitHub",
  },
  {
    icon: <FaLinkedin size={25} />,
    url: "https://www.linkedin.com/in/bibek-koirala-513957205/",
    name: "LinkedIn",
  },
  {
    icon: <FaFacebook size={25} />,
    url: "https://www.facebook.com/bibek.koirala.35728/",
    name: "Facebook",
  },
];

const Main = () => {
  const frontendUrl =
    import.meta.env.VITE_NODE_ENV == "production"
      ? import.meta.env.VITE_PROD_FRONTEND_URL
      : import.meta.env.VITE_DEV_FRONTEND_URL;

  return (
    <main className="flex-1 flex gap-7 md:gap-7 md:flex-row flex-col">
      {/* Social Links Section */}
      <div className="absolute bg-componentBackground-dark left-1 top-1/2 transform -translate-y-1/2 p-3 bg-black/30 rounded-lg backdrop-blur-sm">
        <div className="flex flex-col space-y-5">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 flex justify-center md:justify-end items-center">
        <img
          src={`${frontendUrl}/my-photo.jpg`}
          className="rounded-full w-[200px] md:w-[300px] md:h-[300px] mt-auto md:mt-0 h-[200px] object-cover"
          alt="real"
        />
      </div>

      <div className="flex-1 flex flex-col mt-5 md:justify-center space-y-2 text-center">
        <div className="md:w-fit h-fit space-y-2 md:space-y-4 md:ml-6">
          <h1
            className="text-xl text-tertiaryText-light-light dark:text-secondaryText-dark"
            style={{ lineHeight: "1" }}
          >
            Hello, I'm
          </h1>
          <h2
            className="text-4xl dark:text-primaryText-dark font-medium"
            style={{ letterSpacing: "2px" }}
          >
            Bibek Koirala
          </h2>
          <h3 className="text-3xl text-secondaryText-light dark:text-secondaryText-dark">
            Full-Stack Developer
          </h3>
          <div className="flex mt-4 pt-3 md:pt-2 justify-center gap-4">
            <MyButton
              href={`${frontendUrl}/my_resume.pdf`}
              newPage={true}
              className="rounded-full flex justify-center flex-col"
            >
              Preview CV
            </MyButton>
            <MyButton
              href="#contact-me"
              className="flex justify-center rounded-full flex-col"
            >
              Contact Me
            </MyButton>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
