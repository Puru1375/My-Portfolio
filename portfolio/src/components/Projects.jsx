import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, CheckCircle, Monitor, Loader, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";

// Import images from assets
import stockMaster1 from "../assets/StockMastar_1.png";
import stockMaster2 from "../assets/StockMastar_2.png";
import stockMaster3 from "../assets/StockMastar_3.png";
import attendance1 from "../assets/attendance_1.png";

// DATA
const projects = [
  {
    id: 1,
    title: "PM Internship Allocation",
    category: "Full-Stack Development",
    image: "", 
    images: [], // Single image for live preview
    shortDesc: "Automated platform for allocating internships to students.",
    fullDesc: "SkillBridge is an AI-powered national platform designed to automate and optimize internship allocation using NLP-based semantic matching and a Fair Allocation Algorithm (Gale-Shapley). It ensures bias-free, quota-compliant placements at scale while providing real-time analytics for students, industries, and government administrators.",
    challenges: ["Students often upload resumes but leave their skill profile empty, leading to zero match scores","Processing AI scores for thousands of concurrent applicants would crash a standard server.","Ensuring high-performing students get placed while strictly adhering to Government Quotas (SC/ST/Women)."],
    stack: ["React", "Node.js", "PostgreSQL", "Express", "Vercel"],
    links: { 
      demo: "https://pminternshipallocation.vercel.app", 
      code: "https://github.com/Puru1375/pm_internship_allocation_website" 
    },
    useLiveThumbnail: true 
  },
  {
    id: 2,
    title: "StockMaster – Inventory Management System",
    category: "Inventory Management System",
    image: stockMaster1,
    images: [
      stockMaster1,
      stockMaster2,
      stockMaster3
    ],
    shortDesc: "Real-time Double-Entry Inventory System designed for Managers and Warehouse Staff.",
    fullDesc: "StockMaster streamlines warehouse operations by replacing manual tracking with a centralized, digital ledger. It features a sophisticated Double-Entry inventory system where every move (Receipt, Delivery, Internal Transfer) is tracked and audited. The application offers a real-time dashboard for KPIs, visual stock charts, and a validation-based workflow (Draft → Ready → Done) to ensure total accuracy in stock levels across multiple locations.",
    challenges: ["Implementing the Double-Entry Ledger Logic", "Real-Time Stock Availability Validation", "Multi-Location Inventory Aggregation"],
    stack: ["React", "Node.js", "MongoDB", "Express"],
    links: { demo: "", code: "https://github.com/Puru1375/Odoo_x_SPIT_Online" },
    useLiveThumbnail: false
  },
  {
    id: 3,
    title: "QuickDesk – Support Ticket Management System ",
    category: "Support Ticket Management System",
    image: attendance1,
    images: [attendance1],
    shortDesc: "An ESP32-based attendance system that receives and identifies device MAC addresses via Bluetooth.",
    fullDesc: "This project uses an ESP32 as a Bluetooth receiver for an attendance tracking system. The ESP32 advertises itself with the name ESP32_Attendance and waits for a Bluetooth-enabled device, such as a smartphone, to connect. Once a device connects, it sends its MAC address to the ESP32. The ESP32 receives this MAC address and prints it on the Serial Monitor. The printed MAC address is treated as the attendance record of that particular device, allowing the system to log attendance in a simple and wireless way.",
    challenges: ["Scalability and Concurrency", "Data Persistence"],
    stack: ["Node.js", "SQLite", "C++ (ESP32)"],
    links: { demo: "", code: "https://github.com/Puru1375/Attendance_system" },
    useLiveThumbnail: false
  }
];

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [showLivePreview, setShowLivePreview] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (selectedId) {
      const timer = setTimeout(() => setShowLivePreview(true), 250);
      return () => clearTimeout(timer);
    }
    setShowLivePreview(false);
    setCurrentImageIndex(0); // Reset image index when modal closes
  }, [selectedId]);

  return (
    <section id="projects" className="py-24 px-6 bg-light relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-gray-900 rounded-full border border-gray-700 mb-4">
                <span className="text-green-400 font-mono text-xs">ls ./projects/production</span>
            </div>
            <h2 className="text-4xl font-extrabold text-dark">
                My <span className="text-primary">Work</span>
            </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`card-${project.id}`}
              onClick={() => setSelectedId(project.id)}
              className="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group"
            >
              {/* THUMBNAIL AREA */}
              <div className="h-56 overflow-hidden relative bg-gray-100">
                {project.useLiveThumbnail ? (
                    <div className="w-full h-full relative">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                            <Loader className="animate-spin" />
                        </div>
                        {/* Scaled Down Live Preview for Thumbnail */}
                        <iframe 
                            src={project.links.demo} 
                            title={project.title}
                            scrolling="no"
                            className="absolute top-0 left-0 border-0 pointer-events-none" 
                            style={{ 
                                width: "400%", height: "400%", 
                                transform: "scale(0.25)", transformOrigin: "top left"
                            }}
                        />
                        <div className="absolute inset-0 bg-transparent z-10"></div>
                    </div>
                ) : (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                )}

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                    <span className="text-white font-mono text-sm border border-green-400 bg-black/80 px-3 py-1 rounded backdrop-blur-sm">
                        open_terminal()
                    </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-primary font-mono bg-green-50 px-2 py-1 rounded">{project.category}</span>
                    {project.useLiveThumbnail && (
                        <span className="flex items-center gap-1 text-[10px] text-red-500 font-bold border border-red-200 bg-red-50 px-2 py-0.5 rounded animate-pulse">
                            <span className="w-2 h-2 rounded-full bg-red-500"></span> LIVE
                        </span>
                    )}
                </div>
                <h3 className="text-xl font-bold mt-2 text-dark group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-500 text-sm mt-2 line-clamp-2">{project.shortDesc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Overlay */}
        <AnimatePresence>
          {selectedId && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />
              
              <motion.div 
                layoutId={`card-${selectedId}`}
                className="bg-[#1e1e1e] w-full max-w-5xl rounded-xl overflow-hidden shadow-2xl relative z-50 max-h-[95vh] flex flex-col border border-gray-700"
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedId);
                  return (
                    <>
                      {/* Window Header */}
                      <div className="bg-[#2d2d2d] px-4 py-3 flex items-center justify-between border-b border-black shrink-0">
                        <div className="flex gap-2">
                           <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer hover:scale-125 transition-transform" onClick={() => setSelectedId(null)}></div>
                           <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                           <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-gray-400 text-xs font-mono flex items-center gap-2">
                            <Monitor size={12} /> {project.links.demo}
                        </span>
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <Maximize2 size={14} />
                        </a>
                      </div>

                      {/* SCROLLABLE CONTENT AREA */}
                      <div className="overflow-y-auto custom-scrollbar flex-1">
                        
                        {/* ======================================================== */}
                        {/*  LIVE WEBSITE IN MODAL HEADER (The Requested Feature)    */}
                        {/* ======================================================== */}
                        <div className="h-[400px] md:h-[500px] w-full relative bg-black border-b border-gray-800">
                            {project.useLiveThumbnail ? (
                              showLivePreview ? (
                               <iframe 
                                  src={project.links.demo} 
                                  title="Live View"
                                  className="w-full h-full border-0"
                                  loading="lazy"
                                  // Note: Iframes capture mouse scroll. 
                                  // If you want to scroll PAST it, users need to use the scrollbar 
                                  // or mouse over the description area.
                               />
                              ) : (
                               <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-90" />
                              )
                            ) : (
                              // Image Gallery for non-live projects
                              <div className="relative w-full h-full group">
                                <img 
                                  src={project.images[currentImageIndex]} 
                                  alt={`${project.title} - Image ${currentImageIndex + 1}`} 
                                  className="w-full h-full object-cover opacity-90" 
                                />
                                
                                {/* Image Counter */}
                                {project.images.length > 1 && (
                                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-mono">
                                    {currentImageIndex + 1} / {project.images.length}
                                  </div>
                                )}

                                {/* Navigation Buttons - Only show if multiple images */}
                                {project.images.length > 1 && (
                                  <>
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setCurrentImageIndex((prev) => 
                                          prev === 0 ? project.images.length - 1 : prev - 1
                                        );
                                      }}
                                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 backdrop-blur-sm text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                      <ChevronLeft size={24} />
                                    </button>
                                    
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setCurrentImageIndex((prev) => 
                                          prev === project.images.length - 1 ? 0 : prev + 1
                                        );
                                      }}
                                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 backdrop-blur-sm text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                      <ChevronRight size={24} />
                                    </button>
                                  </>
                                )}

                                {/* Image Dots Navigation */}
                                {project.images.length > 1 && (
                                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                    {project.images.map((_, index) => (
                                      <button
                                        key={index}
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setCurrentImageIndex(index);
                                        }}
                                        className={`w-2 h-2 rounded-full transition-all ${
                                          index === currentImageIndex 
                                            ? 'bg-green-400 w-6' 
                                            : 'bg-white/50 hover:bg-white/80'
                                        }`}
                                      />
                                    ))}
                                  </div>
                                )}
                              </div>
                            )}
                        </div>

                        {/* Project Details Below */}
                        <div className="p-8 text-gray-300">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-3xl font-bold text-white font-mono">{project.title}</h2>
                                <span className="bg-green-900/30 text-green-400 border border-green-900 px-3 py-1 rounded text-xs font-mono">
                                    v1.0.0
                                </span>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 mb-8">
                               {project.stack.map(tech => (
                                 <span key={tech} className="px-3 py-1 bg-[#2d2d2d] text-green-400 border border-gray-600 rounded font-mono text-xs">
                                   {`{${tech}}`}
                                 </span>
                               ))}
                            </div>

                            <p className="text-gray-400 leading-relaxed mb-8 text-sm border-l-2 border-gray-700 pl-4">
                                {project.fullDesc}
                            </p>

                            <div className="grid md:grid-cols-1 gap-8 mb-8">
                              <div className="w-full">
                                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Challenges</h3>
                                <ul className="space-y-2 w-full">
                                        {project.challenges.map((c, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-400 text-sm font-mono w-full">
                                            <span className="text-red-400">!</span> {c}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {/* <div>
                                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Solutions</h3>
                                    <div className="text-sm text-gray-400 font-mono">
                                        <p className="mb-2"><span className="text-green-500">✔</span> Implemented efficient database indexing.</p>
                                        <p><span className="text-green-500">✔</span> Used Redis for caching heavy API responses.</p>
                                    </div>
                                </div> */}
                            </div>

                            <div className="flex gap-4 pt-6 border-t border-gray-700">
                               {project.links.demo && (
                                 <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex-1 border border-gray-600 text-white py-3 rounded-lg font-bold font-mono flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
                                   <ExternalLink size={20} /> LIVE DEMO
                                 </a>
                               )}
                               <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="flex-1 border border-gray-600 text-white py-3 rounded-lg font-bold font-mono flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
                                 <Github size={20} /> REPO
                               </a>
                            </div>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;