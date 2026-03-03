import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const Portfolio = () => {
    const [filter, setFilter] = useState("todos");

    const categories = [
        { id: "todos", label: "Todos" },
        { id: "branding", label: "Branding" },
        { id: "logotipo", label: "Logotipo" },
        { id: "digital", label: "Digital" }
    ];

    const projects = [
        { id: 1, category: "branding", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800", title: "Lumina Estética", desc: "Identidade Visual Completa" },
        { id: 2, category: "logotipo", img: "https://images.unsplash.com/photo-1572044162444-ad60f128bde2?auto=format&fit=crop&q=80&w=800", title: "Arcane Studio", desc: "Design de Símbolo" },
        { id: 3, category: "digital", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800", title: "Concept Store", desc: "Social Media Design" },
        { id: 4, category: "branding", img: "https://images.unsplash.com/photo-1635405074683-96d6921a2a2c?auto=format&fit=crop&q=80&w=800", title: "Naturae", desc: "Rebranding Estratégico" },
        { id: 5, category: "logotipo", img: "https://images.unsplash.com/photo-1560155827-0ec61962309f?auto=format&fit=crop&q=80&w=800", title: "Minimalist", desc: "Logo Concept" },
        { id: 6, category: "digital", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800", title: "Tech Growth", desc: "Apresentação Digital" }
    ];

    const filtered = filter === "todos" ? projects : projects.filter(p => p.category === filter);

    return (
        <section id="portfolio" className="py-24 md:py-32 bg-neutral-dark">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Portfólio Selecionado</h2>
                    <p className="text-white/40 text-lg font-light">Uma amostra de projetos desenvolvidos com foco em estratégia e estética.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setFilter(cat.id)}
                            className={`relative py-2 text-sm font-medium tracking-[0.2em] uppercase transition-colors ${filter === cat.id ? "text-primary" : "text-white/40 hover:text-white"}`}
                        >
                            {cat.label}
                            {filter === cat.id && (
                                <motion.div
                                    layoutId="activeFilter"
                                    className="absolute -bottom-1 left-0 right-0 h-[1px] bg-primary"
                                />
                            )}
                        </button>
                    ))}
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filtered.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                className="group relative aspect-[4/5] bg-[#0A0A0A] rounded-[2rem] overflow-hidden cursor-pointer"
                            >
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />

                                <div className="absolute inset-0 bg-neutral-dark/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10 backdrop-blur-sm">
                                    <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        {project.category}
                                    </p>
                                    <h4 className="text-2xl font-bold text-white mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                        {project.title}
                                    </h4>
                                    <p className="text-white/50 text-base font-light translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                                        {project.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;
