import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    const phoneNumber = "923217262415"; // country code required

    const message = `
New Portfolio Message 🚀

Name: ${form.name}
Email: ${form.email}

Message:
${form.message}
    `;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");

    setForm({ name: "", email: "", message: "" });
    setSending(false);
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white"
    >
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12">

        {/* LEFT INFO */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-extrabold">
            Get in{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <p className="text-gray-400 text-lg">
            Have a project or idea? Let’s talk on WhatsApp.
          </p>

          <div className="space-y-4 text-gray-300">
            <InfoItem icon={<Mail />} text="irsakanwal5522@gmail.com" />
            <InfoItem icon={<Phone />} text="+92 321 7262415" />
            <InfoItem icon={<MapPin />} text="Lahore, Pakistan" />
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900 p-8 rounded-2xl shadow-xl space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-black border border-gray-700 focus:border-blue-500 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-black border border-gray-700 focus:border-blue-500 outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full p-3 rounded-xl bg-black border border-gray-700 focus:border-blue-500 outline-none resize-none"
          />

          <button
            type="submit"
            disabled={sending}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition font-medium"
          >
            {sending ? "Opening WhatsApp..." : "Send via WhatsApp"}
            <Send size={18} />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

const InfoItem = ({ icon, text }) => (
  <div className="flex items-center gap-4">
    <div className="p-3 bg-gray-800 rounded-full text-blue-500">
      {icon}
    </div>
    <span>{text}</span>
  </div>
);

export default Contact;
