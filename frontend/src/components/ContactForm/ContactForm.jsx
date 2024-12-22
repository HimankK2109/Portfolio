import React, { useState, useEffect } from "react";
import SendEmail from "../../assets/send-email.png";
import axios from "axios";
import { motion } from "framer-motion";

function ContactForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [cooldown, setCooldown] = useState(false);

  // Check if all fields are filled to enable the send button
  useEffect(() => {
    const { name, email, message } = data;
    setIsDisabled(!(name && email && message) || cooldown); // Disable the button if any field is empty
  }, [data, cooldown]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    setCooldown(true);
    setIsDisabled(true);

    try {
      const response = await axios.post(
        "http://localhost:4000/send-email",
        data
      );
      setStatus("Message sent successfully!");
      setData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("Failed to send message. Please try again later.");
    } finally {
        // Reset status to empty string after the email has been sent or failed
        setTimeout(() => {
          setStatus(""); // Clear status after a brief moment
        }, 3000);
    }

    // Start the cooldown for 60 seconds
    const timeout = setTimeout(() => {
        setCooldown(false); // Reset cooldown
        setIsDisabled(false); // Re-enable the button after cooldown
      }, 60000); // 60 seconds
  
      // Cleanup timeout on component unmount
      return () => clearTimeout(timeout);
  };

  return (
    <div className="text-white py-12 px-6 sm:py-16 lg:py-24 lg:px-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-center">
        {/* form section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center items-center w-full"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-gray-600 p-6 sm:p-8 rounded-xl w-full max-w-md lg:max-w-lg"
          >
            <h2 className="text-2xl mb-4">Get in Touch</h2>
            <div className="mb-4">
              <label className="block text-yellow-200">Name</label>
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-opacity-50 ring-red-600 bg-black text-white"
              />
            </div>
            <div className="mb-4">
              <label className="block text-yellow-200">Email</label>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-opacity-50 ring-red-600 bg-black text-white"
              />
            </div>
            <div className="mb-4">
              <label className="block text-yellow-200">Message</label>
              <textarea
                name="message"
                value={data.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-opacity-50 ring-red-600 bg-black text-white"
              />
            </div>

            <button
              type="submit"
              disabled={isDisabled || cooldown}
              className={`mt-4 px-8 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-2 rounded duration-300 ${
                isDisabled || cooldown ? "opacity-50 cursor-not-allowed " : "hover:shadow-[0_0_20px_#f50b0a]"
              }`}
            >
              Send Email
            </button>
            <p className="mt-4 text-sm text-center text-white/80">{status}</p>
            {cooldown && (
              <p className="text-sm text-center text-white/80">Please wait 60 seconds before sending another message.</p>
            )}
          </form>
        </motion.div>

        {/* Image Section */}
        <div className="hidden md:flex justify-center items-center">
          <img src={SendEmail} alt="" className="w-[300px] animate-rocket" />
        </div>
      </div>
    </div>
  );
}

export default ContactForm;