import React from "react";
import { Award, Trophy, Star } from "lucide-react";
import sihImage from "../assets/sih_1.jpeg";
import sih_participant from "../assets/sih_certificate.jpeg";
import odoo_cgc from "../assets/odooxcgc_2.jpeg";
import icreate from "../assets/icreate_1.jpeg";
import sih_final from "../assets/sih_3.jpeg";

// DATA: Replace URLs with your actual photos in src/assets
const achievements = [
  {
    id: 1,
    title: "Smart India Hackathon Participant",
    org: "SIH 2025",
    image: sihImage, // Replace with your group photo
    type: "finalist",
    icon: <Trophy size={16} />,
    color: "bg-yellow-100 text-yellow-700"
  },
  {
    id: 2,
    title: "SIH 2025 Participant Certificate ",
    org: "SIH 2025",
    image: sih_participant, // Replace with Certificate screenshot
    type: "Certificate",
    icon: <Award size={16} />,
    color: "bg-blue-100 text-blue-700"
  },
  {
    id: 3,
    title: "Odoo x CGC Hackathon Participant",
    org: "Odoo x CGC",
    image: odoo_cgc,
    type: "finalist",
    icon: <Star size={16} />,
    color: "bg-purple-100 text-purple-700"
  },
  {
    id: 4,
    title: "icreate hub visited",
    org: "Udemy / Coursera",
    image: icreate,
    type: "visited",
    icon: <Award size={16} />,
    color: "bg-green-100 text-green-700"
  },
  {
    id: 5,
    title: "SIH 2025 final round",
    org: "Hacktoberfest 2023",
    image: sih_final ,
    type: "final round",
    icon: <Star size={16} />,
    color: "bg-orange-100 text-orange-700"
  }
];

const Achievements = () => {
  return (
    <section className="py-20 bg-dark overflow-hidden relative">
      
      {/* Section Header */}
      <div className="text-center mb-12 relative z-10 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Moments of <span className="text-primary">Glory</span>
        </h2>
        <p className="text-gray-400">Hackathons, Certificates, and Milestones.</p>
      </div>

      {/* The Infinite Loop Container */}
      <div className="flex animate-scroll hover:pause">
        {/* We map twice to create the seamless infinite loop */}
        {[...achievements, ...achievements].map((item, index) => (
          <div 
            key={index} 
            className="w-[300px] md:w-[350px] mx-4 flex-shrink-0 bg-white rounded-xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            {/* Image Area */}
            <div className="h-48 overflow-hidden relative">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover" 
              />
              {/* Badge */}
              <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md ${item.color}`}>
                {item.icon} {item.type}
              </div>
            </div>

            {/* Content Area */}
            <div className="p-5">
              <h3 className="font-bold text-lg text-dark leading-tight mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 font-medium">
                Issued by {item.org}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Gradient Fades (to make it look like it fades in/out) */}
      <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />
      
    </section>
  );
};

export default Achievements;