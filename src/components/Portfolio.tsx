import { motion } from "motion/react";
import { useState } from "react";

const Portfolio = () => {
    const [filter, setFilter] = useState("todos");
    const projects = [
        { id: 1, category: "feed", img: "https://picsum.photos/seed/p1/600/600", title: "Estética Avançada" },
        { id: 2, category: "stories", img: "https://picsum.photos/seed/p2/600/800", title: "Lançamento Infoproduto" },
        { id: 3, category: "feed", img: "https://picsum.photos/seed/p3/600/600", title: "Moda Feminina" },
        { id: 4, category: "resultados", img: "https://picsum.photos/seed/p4/600/400", title: "Case de Sucesso +300%" }
    ];

    const filtered = filter === "todos" ? projects : projects.filter(p => p.category === filter);

    return (
        <section id="portfolio" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="section-title">Portfólio & Resultados</h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {["todos", "feed", "stories", "resultados"].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-6 py-2 rounded-full font-medium transition-all ${filter === f ? "bg-primary text-white" : "bg-white/5 text-white/60 hover:bg-white/10"}`}
                        >
                            {f.charAt(0).toUpperCase() + f.slice(1)}
                        </button>
                    ))}
                </div>

                <motion.div
                    layout
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {filtered.map((project) => (
                        <motion.div
                            layout
                            key={project.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="group relative overflow-hidden rounded-3xl aspect-square sm:aspect-auto"
                        >
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 text-white">
                                <p className="text-xs font-bold uppercase tracking-widest mb-1">{project.category}</p>
                                <h4 className="text-xl font-bold">{project.title}</h4>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;
