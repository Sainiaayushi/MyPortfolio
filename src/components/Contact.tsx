import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react';
import emailjs from 'emailjs-com';
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_305ilf1",     // Your EmailJS Service ID
        "template_eu5w3a7",    // Your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email
        },
        "f67oP7dzmYwfuHLJR"    // Your real EmailJS Public Key
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      })
      .catch((error) => {
        console.error("❌ Email send failed:", error);
        alert("Something went wrong. Please try again.");
      });
  };


  const contactInfo = [
    {
      icon: <Mail className="text-purple-400" size={20} />,
      title: 'Email',
      value: 'sainiaayushi348@gmail.com',
      link: 'mailto:sainiaayushi348@gmail.com'
    },

    {
      icon: <MapPin className="text-pink-400" size={20} />,
      title: 'Location',
      value: 'Roorkee,Uttarakhand',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      name: 'GitHub',
      url: 'https://github.com/Sainiaayushi',
      color: 'hover:text-gray-400'
    },
    {
      icon: <Linkedin size={20} />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aayushi-saini-214259250/',
      color: 'hover:text-blue-400'
    },
    {
      icon: <MessageCircle size={20} />,
      name: 'WhatsApp',
      url: 'https://wa.me/919528056890',
      color: 'hover:text-green-400'
    }
  ];

  return (
    <section id="contact" className="py-10 bg-gray-900/50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-sm text-gray-300 mt-2 max-w-xl mx-auto">
            Open to new opportunities, collaboration, or a friendly tech chat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white mb-2">Connect With Me</h3>
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-9 h-9 bg-gray-800 rounded flex items-center justify-center">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-sm text-white">{info.title}</h4>
                  <a href={info.link} className="text-xs text-gray-400 hover:text-purple-400 transition">
                    {info.value}
                  </a>
                </div>
              </div>
            ))}
            <div className="pt-4">
              <h4 className="text-sm text-white mb-2">Follow Me</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 bg-gray-800 rounded text-gray-400 ${social.color} hover:scale-110 transition`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/40 p-6 rounded-xl border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">Message Me</h3>
            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Name"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20 focus:outline-none"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Email"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20 focus:outline-none"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone || ""}
                  onChange={handleInputChange}
                  required
                  placeholder="Contact Number"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20 focus:outline-none"
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                placeholder="Subject"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20 focus:outline-none"
              />
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder="Message"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20 focus:outline-none resize-none"
              />
              <button
                type="submit"
                className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded transition"
              >
                <div className="flex justify-center items-center gap-2">
                  <Send size={16} /> Send
                </div>
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-10 text-xs text-gray-400 border-t border-gray-700 pt-4">
          © 2025 Aayushi Saini. All rights reserved.
          Designed & developed by Aayushi Saini .
        </div>

      </div>
    </section>
  );
};

export default Contact;
