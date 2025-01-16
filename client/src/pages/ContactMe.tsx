import { useState } from "react";
import ComponentBox from "../components/ComponentBox";

const ContactMe = () => {
  const url =
    import.meta.env.VITE_NODE_ENV == "production"
      ? import.meta.env.VITE_PROD_BACKEND_URL
      : import.meta.env.VITE_DEV_BACKEND_URL;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const response = await fetch(url + "/contact", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ username: name, email, message }),
      });
      const data = await response.json();
      console.log("response", response);
      console.log("data", data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };
  return (
    <ComponentBox
      header="Contact Me"
      description="  I'm always open to hearing from you! Whether you have a question,
        feedback, or want to collaborate on a project, feel free to reach out.
        Your message is important to me, and I'll get back to you as soon as I
        can."
    >
      <form
        action="
      "
        id="form-123"
        autoComplete="new-password"
      >
        <div className="my-3 space-y-1">
          <label htmlFor="random-name-123" className="font-medium">
            Name:
          </label>
          <br />
          <input
            required
            form="form-123"
            type="text"
            autoComplete="new-password"
            name="random-name-123"
            value={name}
            onChange={(e: any) => setName(e.target.value)}
            id="random-name-123"
            placeholder="Type your name here..."
            className={`font-medium px-4 rounded-md w-full border-none outline-none p-2 bg-[#272729] text-lg`}
          />
        </div>

        <div className="my-3 space-y-1">
          <label htmlFor="random-email-123" className="font-medium">
            Email:{" "}
          </label>
          <br />
          <input
            required
            type="email"
            name="random-email-123"
            value={email}
            autocomplete="new-email"
            form="form-123"
            onChange={(e: any) => setEmail(e.target.value)}
            id="random-email-123"
            placeholder="Type your email here..."
            className={` rounded-md px-4 font-medium w-full border-none outline-none p-2 bg-[#272729] text-lg`}
          />
        </div>

        <div className="my-3 space-y-1">
          <label htmlFor="random-message-123" className="font-medium">
            Message:
          </label>{" "}
          <br />
          <textarea
            required
            name="random-message-123"
            value={message}
            rows={4}
            onChange={(e: any) => setMessage(e.target.value)}
            id="random-message-123"
            className="outline-none font-medium px-4 bg-[#272729] border-none resize p-2 text-lg w-full rounded-xl"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        <div className="my-6 flex justify-end">
          <button
            onClick={handleSubmit}
            className="px-9 p-2 rounded-lg text-black bg-white font-medium"
            disabled={
              loading ||
              name.length < 3 ||
              message.length < 3 ||
              email.length < 3
            }
          >
            {loading ? "Sending" : "Submit"}
          </button>
        </div>
      </form>

      <div className="text-center mt-4">
        <p>or contact directly at</p>
        <p>www.koiralabibek2058@gmail.com</p>
      </div>
    </ComponentBox>
  );
};

export default ContactMe;
