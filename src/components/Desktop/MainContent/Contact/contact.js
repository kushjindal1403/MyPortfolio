import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
    from_name: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("Sending...");

    emailjs
      .sendForm(
        "service_h6g4w7h", // Replace with your service ID
        "template_9wfp72i", // Replace with your template ID
        e.target, // Form element
        "Of8Mqec7YZiCAefY4" // Replace with your user ID
      )
      .then(
        (result) => {
          setStatusMessage("Email sent successfully!");
          setIsSending(false);

          // Reset the form fields after email is sent
          setFormData({
            email: "",
            subject: "",
            message: "",
            from_name: "",
          });
        },
        (error) => {
          setStatusMessage("Error sending email, please try again.");
          setIsSending(false);
        }
      );
  };

  return (
    <section className="bg-gray-500 bg-opacity-0 dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2
          className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white dark:text-white"
          id="Contact"
        >
          Contact Me
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Let's Catch Over a Cup of Coffee?
        </p>

        <form onSubmit={sendEmail} className="space-y-8">
          <div>
            <label
              htmlFor="from_name"
              className="block mb-2 text-lg font-medium text-white dark:text-white"
            >
              Your Name
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-lg font-medium text-white dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-lg font-medium text-white dark:text-white"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let me know how can I help you?"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-lg font-medium text-white dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a message..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="py-3 px-5 text-xl font-medium text-center text-white hover:text-black rounded-lg border bg-primary-700 sm:w-fit hover:bg-white focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send message"}
          </button>
        </form>

        {statusMessage && (
          <p
            style={{
              color: statusMessage.includes("Error") ? "red" : "green",
            }}
            className="mt-4 text-center"
          >
            {statusMessage}
          </p>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
