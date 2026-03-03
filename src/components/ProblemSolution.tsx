import { motion } from "motion/react";
import { TrendingUp, ShieldCheck, Zap } from "lucide-react";

const ProblemSolution = () => {
    const pillars = [
        {
            title: "Posicionamento Frágil",
            elevation: "Autoridade Inquestionável",
            desc: "Deixe de ser 'apenas mais uma' para se tornar a escolha óbvia do seu mercado.",
            icon: <ShieldCheck className="w-8 h-8" />
        },
        {
            title: "Design sem Intenção",
            elevation: "Estética Estratégica",
            desc: "Beleza que vende. Cada elemento visual é projetado para converter e conectar.",
            icon: <Zap className="w-8 h-8" />
        },
        {
            title: "Comunicação Genérica",
            elevation: "Identidade de Poder",
            desc: "Uma marca que fala sozinha. Diferenciação real que atrai os clientes certos.",
            icon: <TrendingUp className="w-8 h-8" />
        }
    ];

    return (
        <section className="py-24 md:py-32 bg-[#050505] border-y border-white/5 relative overflow-hidden">
            {/* Subtle background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-primary/2 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">A Elevação da sua Marca</h2>
                    <p className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        Transformamos marcas estagnadas em identidades visuais de alto valor e desejo.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-8 rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 hover:border-primary/20 transition-all duration-500"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                {pillar.icon}
                            </div>

                            <p className="text-xs font-bold text-white/20 uppercase tracking-[0.2em] mb-4">De</p>
                            <h3 className="text-xl font-bold mb-4 line-through text-white/30 decoration-primary/30">{pillar.title}</h3>

                            <div className="h-px w-12 bg-primary/20 my-6 group-hover:w-full transition-all duration-700" />

                            <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4">Para</p>
                            <h3 className="text-2xl font-bold text-white mb-4">{pillar.elevation}</h3>
                            <p className="text-white/40 font-light leading-relaxed">
                                {pillar.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;

