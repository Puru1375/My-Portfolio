import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Terminal, Loader2, CheckCircle, AlertCircle } from "lucide-react";


const Contact = () => {
  // 1. Web App URL from Google Apps Script (PASTE YOURS HERE)
  const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

  // 2. Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("idle"); // "idle" | "submitting" | "success" | "error"

  // 3. Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 4. Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        // 'no-cors' is ESSENTIAL for Google Scripts to work from a browser
        mode: "no-cors", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Since 'no-cors' is opaque, we assume success if no error was thrown
      setStatus("success");
      setFormData({ name: "", email: "", message: "" }); // Clear form

      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);

    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-20 bg-light">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text */}
        <div>
          <h2 className="text-4xl font-extrabold text-dark mb-4">
            Initialize <span className="text-primary">Connection.</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8 font-mono">
            $ Purvanshu Machhi-portfolio <br/>
            {">"} Response: 200 OK. Ready to collaborate.
          </p>
          
          <div className="flex items-center gap-4 text-dark font-bold text-xl">
             <div className="bg-primary/20 p-3 rounded-full text-primary">
                <Mail size={24} />
             </div>
             <span className="hover:text-primary transition">
                purvanshu1375@gmail.com
             </span>
          </div>
          
          <div className="flex items-center gap-4 text-dark font-bold text-xl mt-6">
             <div className="bg-primary/20 p-3 rounded-full text-primary">
                <Phone size={24} />
             </div>
             <span className="hover:text-primary transition">
                +91 7984667847
             </span>
          </div>
        </div>

        {/* Right: The Terminal Form */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-[#1e1e1e] rounded-xl shadow-2xl overflow-hidden border border-gray-700"
        >
          {/* Terminal Header */}
          <div className="bg-[#2d2d2d] px-4 py-3 flex items-center gap-2 border-b border-gray-700">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-2 text-gray-400 text-xs font-mono">bash -- contact.sh</span>
          </div>

          {/* Terminal Body */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4 font-mono text-sm">
            
            {/* Name Input */}
            <div>
              <label className="block text-green-400 mb-1">
                user@portfolio:~$ <span className="text-white">input --name</span>
              </label>
              <input 
                type="text" 
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-transparent border-b border-gray-600 text-white focus:outline-none focus:border-green-400 py-2 placeholder-gray-600"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-green-400 mb-1">
                user@portfolio:~$ <span className="text-white">input --email</span>
              </label>
              <input 
                type="email" 
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full bg-transparent border-b border-gray-600 text-white focus:outline-none focus:border-green-400 py-2 placeholder-gray-600"
              />
            </div>

            {/* Message Input */}
            <div>
              <label className="block text-green-400 mb-1">
                user@portfolio:~$ <span className="text-white">input --message</span>
              </label>
              <textarea 
                rows="3" 
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Let's build something..."
                className="w-full bg-transparent border-b border-gray-600 text-white focus:outline-none focus:border-green-400 py-2 placeholder-gray-600 resize-none"
              ></textarea>
            </div>

            {/* SUBMIT BUTTON WITH STATES */}
            <button 
                type="submit"
                disabled={status === "submitting"}
                className={`w-full mt-4 font-bold py-3 rounded transition-all flex items-center justify-center gap-2 
                  ${status === "success" ? "bg-green-600 text-white" : 
                    status === "error" ? "bg-red-600 text-white" : 
                    "bg-green-600 hover:bg-green-500 text-black"}`}
            >
              {status === "submitting" ? (
                <> <Loader2 size={16} className="animate-spin" /> Sending... </>
              ) : status === "success" ? (
                <> <CheckCircle size={16} /> Message Sent! </>
              ) : status === "error" ? (
                <> <AlertCircle size={16} /> Failed. Try again. </>
              ) : (
                <> <Terminal size={16} /> ./send_message.sh </>
              )}
            </button>

          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;