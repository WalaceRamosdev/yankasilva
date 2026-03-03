import { motion } from "motion/react";
import { Search, PenTool, Layout, CheckCircle2 } from "lucide-react";

const Process = () => {
    const steps = [
        {
            title: "Diagnóstico",
            desc: "Análise profunda da marca e estudo de mercado para encontrar oportunidades de diferenciação.",
            icon: <Search className="w-6 h-6" />
        },
        {
            title: "Estratégia",
            desc: "Definição do posicionamento, essência e tom de voz que guiarão toda a criação visual.",
            icon: <Layout className="w-6 h-6" />
        },
        {
            title: "Criação",
            desc: "Desenvolvimento técnico das soluções visuais com foco em alto impacto e funcionalidade.",
            icon: <PenTool className="w-6 h-6" />
        },
        {
            title: "Entrega",
            desc: "Apresentação e entrega dos ativos da marca com guias completos para implementação.",
            icon: <CheckCircle2 className="w-6 h-6" />
        }
    ];

    return (
        <section id="processo" className="py-24 md:py-32 bg-[#050505] overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
                            <img
                                src="/yankasilva-acao.png"
                                alt="Yanka Silva em processo criativo"
                                className="w-full h-auto aspect-[4/5] object-cover transition-all duration-1000 grayscale hover:grayscale-0 group-hover:scale-105"
                            />
                        </div>
                        {/* Subtle decorative glow */}
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/10 rounded-full blur-[80px] -z-10" />
                    </motion.div>

                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-16"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tighter">
                                Método <span className="text-primary">Estratégico</span>
                            </h2>
                            <p className="text-white/40 text-lg font-light leading-relaxed">
                                Um processo estruturado para garantir que sua marca seja não apenas bonita, mas funcionalmente poderosa e lucrativa.
                            </p>
                        </motion.div>

                        <div className="space-y-12 relative">
                            {/* Vertical Line */}
                            <div className="absolute left-7 top-2 bottom-2 w-px bg-gradient-to-b from-primary/50 via-primary/10 to-transparent" />

                            {steps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative pl-20"
                                >
                                    <div className="absolute left-0 top-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary transition-all duration-500">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-white/40 font-light leading-relaxed">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;


