import { useState } from "react";

type status = {
  success: boolean | null;
  message: string;
};

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<status>({ success: null, message: "" });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("https://your-api-endpoint.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });

      if (response.ok) {
        setStatus({ success: true, message: "Message sent successfully!" });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        throw new Error("Failed to send message. Please try again later.");
      }
    } catch (error: any) {
      setStatus({
        success: false,
        message: error.message || "Something error occured",
      });
    }
  };

  return (
    <div className="p-6 scrollbar-hide text-white rounded-xl space-y-8 mx-auto">
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Contact Me</h2>
        <p>I'd love to hear from you! Feel free to reach out.</p>
      </div>

      <form
        className="space-y-4"
        autoCorrect="off"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <div>
          <label
            className="block text-sm font-medium text-gray-300 mb-1"
            htmlFor="name"
          >
            Name
          </label>
          <input
            autoCorrect="off"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="false"
            placeholder={"Type your name here..."}
            className="w-full p-3 font-medium placeholder:font-medium bg-[#272729] text-white rounded-lg border border-none focus:outline-none"
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-300 mb-1"
            htmlFor="email"
          >
            Email
          </label>
          <input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            placeholder={"Type your email here..."}
            className="w-full p-3 font-medium placeholder:font-medium bg-[#272729] text-white rounded-lg border border-none focus:outline-none"
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-300 mb-1"
            htmlFor="message"
          >
            Message
          </label>

          <textarea
            name="message"
            id="message"
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={"Type your message here..."}
            className="w-full font-medium p-3 placeholder:font-medium bg-[#272729] text-white rounded-lg border border-none focus:outline-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-3 rounded-lg font-semibold bg-white text-black transition"
        >
          Send Message
        </button>
      </form>

      {status.message && (
        <div
          className={`mt-4 p-3 rounded-lg ${
            status.success ? "bg-green-500" : "bg-red-300"
          }`}
        >
          {status.message}
        </div>
      )}

      <div className="text-center space-y-1">
        <p>Or reach out directly at:</p>
        <p className="font-semibold">www.koiralabibek2058@gmail.com</p>
        <p>+977-9841158113</p>
      </div>
    </div>
  );
};

export default Contact;
