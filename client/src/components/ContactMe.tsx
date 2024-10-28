import React, { FormEvent, useState } from "react";
import WithComponentHeader from "./WithComponentHeader";
import { AiFillEnvironment, AiFillMail, AiFillPhone } from "react-icons/ai";
import Toast from "./Toast";
import { IconBaseProps } from "react-icons";
import MyButton from "./MyButton";

interface ContactDetail {
  icon: React.ReactNode;
  text: string;
}

// Create custom icon props interface that extends IconBaseProps
interface CustomIconProps extends IconBaseProps {
  className?: string;
}

const contactDetails: ContactDetail[] = [
  {
    icon: (
      <AiFillMail
        {...({ size: 30, className: "text-gray-500" } as CustomIconProps)}
      />
    ),
    text: "www.koiralabibek2058@gmail.com",
  },
  {
    icon: (
      <AiFillPhone
        {...({ size: 30, className: "text-gray-500" } as CustomIconProps)}
      />
    ),
    text: "+9779841158113",
  },
  {
    icon: (
      <AiFillEnvironment
        {...({ size: 30, className: "text-gray-500" } as CustomIconProps)}
      />
    ),
    text: "Begnastal, Kaski-31, Nepal",
  },
];

const ContactMe: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastVisible, setToastVisible] = useState<boolean>(false);

  const url =
    import.meta.env.VITE_NODE_ENV == "production"
      ? import.meta.env.VITE_PROD_BACKEND_URL
      : import.meta.env.VITE_DEV_BACKEND_URL;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${url}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message, username: name }),
      });
      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        setToastMessage(data.message || "Message sent successfully!"); // Set success toast message
      } else if (!response.ok) {
        setToastMessage(
          data.message || "Failed to send message. Please try again."
        );
      }
      setToastVisible(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error: any) {
      setLoading(false);
      setToastMessage(error.message || "Failed to send message");
    }
  };

  const handleToastClose = () => {
    setTimeout(() => {
      setToastVisible(false); // Hide toast
    }, 5000);
  };

  return (
    <WithComponentHeader id="contact-me" header="Let's get in Touch">
      {toastVisible && toastMessage && (
        <Toast message={toastMessage} onClose={handleToastClose} />
      )}
      <div className="flex gap-3 flex-col md:flex-row">
        <div className="flex-1 space-y-3">
          <h1 className="text-4xl text-primaryText-light dark:text-primaryText-dark ">
            Let's talk
          </h1>
          <p className=" text-xl text-secondaryText-light dark:text-secondaryText-dark">
            I'm currently available to take on new projects, so feel free to
            send me a meesage about anything that you want me to work on. Feel
            free to Contact me by submitting the form below and I will get back
            to you as soon as possible
          </p>
          <div className="text-xl dark:text-secondaryText-dark ">
            {contactDetails.map((detail, index) => (
              <section
                key={index}
                className="flex items-center overflow-hidden whitespace-nowrap"
              >
                <span>{detail.icon}</span>
                <h1
                  className="flex items-center p-2"
                  title={index == 0 ? "Yes it has www" : ""}
                >
                  : {detail.text}
                </h1>
              </section>
            ))}
          </div>
        </div>
        <div className="flex-1 p-4 ">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-primaryText-light dark:text-primaryText-dark"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)} // Update state for name
                className="w-full dark:text-primaryText-dark focus:bg-componentBackground-dark placeholder:dark:text-secondaryText-dark focus:outline-none border-none mt-1 px-3 py-2 border rounded-md shadow-sm dark:bg-componentBackground-dark"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm  font-medium text-primaryText-light dark:text-primaryText-dark"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update state for email
                className="dark:text-primaryText-dark dark:bg-componentBackground-dark dark:focus:bg-componentBackground-dark placeholder:dark:text-secondaryText-dark  border-none w-full mt-1 px-3 py-2 border rounded-md shadow-sm   focus:outline-none"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-primaryText-light dark:text-primaryText-dark"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={9}
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)} // Update state for message
                className="w-full dark:text-primaryText-dark placeholder:dark:text-secondaryText-dark mt-1 px-3 py-2 border rounded-md shadow-sm dark:bg-componentBackground-dark focus:outline-none border-none"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={
                  loading || !message.length || !email.length || !name.length
                }
                className=" w-full dark:bg-[#ecedef] dark:text-black text-  font-semibold py-2 rounded-md"
              >
                {loading
                  ? "Sending..."
                  : loading || !message.length || !email.length || !name.length
                  ? "Type your details"
                  : "Submit Now"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </WithComponentHeader>
  );
};

export default ContactMe;
