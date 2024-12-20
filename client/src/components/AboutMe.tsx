import MyButton from "./MyButton";
import WithComponentHeader from "./WithComponentHeader";

const AboutMe = () => {
  const frontendUrl =
    import.meta.env.VITE_NODE_ENV == "production"
      ? import.meta.env.VITE_PROD_FRONTEND_URL
      : import.meta.env.VITE_DEV_FRONTEND_URL;
  return (
    <WithComponentHeader id="about-me" header="About Me">
      <div className="max-w-7xl mx-auto py-8 lg:p-8">
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-12 items-center">
          <div className="hidden lg:block">
            <div className="relative aspect-square w-full max-w-md mx-auto">
              <img
                src={`${frontendUrl}/my-photo.jpg`}
                alt="Professional headshot"
                className="rounded-2xl object-cover shadow-xl h-full"
              />
              {/* <div className="absolute -z-10 top-8 -left-8 w-full h-full bg-purple-100 rounded-2xl"></div> */}
              <div className="absolute -z-10 top-8 -left-8 w-full h-full bg-gray-100 rounded-2xl"></div>
              {/* <div className="absolute -z-20 -top-8 -right-8 w-full h-full bg-blue-50 rounded-2xl"></div> */}
              <div className="absolute -z-20 -top-8 -right-8 w-full h-full bg-gray-100 rounded-2xl"></div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl text-primaryText-light dark:text-primaryText-dark font-bold ">
                Full Stack Developer
              </h2>
            </div>

            <div className="text-secondaryText-light dark:text-secondaryText-dark space-y-4 ">
              <p className="" style={{ lineHeight: "1.5" }}>
                Hello! I'm a passionate MERN (MongoDB, Express.js, React.js,
                Node.js) stack developer with a keen eye for creating seamless
                web applications. With expertise in both frontend and backend
                development, I specialize in building full-stack solutions that
                solve real-world problems.
              </p>

              <p>
                My journey in web development began with a fascination for
                creating interactive user experiences. Today, I leverage the
                power of the MERN stack to build scalable, efficient, and modern
                web applications.
              </p>

              <p>
                Beyond coding, I'm passionate about staying up-to-date with the
                latest web technologies and best practices. I believe in writing
                clean, maintainable code and creating user-friendly interfaces
                that provide exceptional user experiences.
              </p>

              <div className="pt-4">
                <MyButton href="#contact-me" className="py-3">
                  Let's Work Together
                </MyButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WithComponentHeader>
  );
};

export default AboutMe;
