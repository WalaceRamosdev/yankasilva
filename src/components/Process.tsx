import { motion } from "motion/react";

const Process = () => {
    const steps = [
        { title: "Diagnóstico", desc: "Análise profunda da sua marca" },
        { title: "Estratégia", desc: "Plano de ação personalizado" },
        { title: "Produção", desc: "Criação de conteúdo de alto nível" },
        { title: "Gestão", desc: "Publicação e interação constante" },
        { title: "Otimização", desc: "Análise de dados para escalar" }
    ];

    return (
        <section className="py-20 overflow-hidden">
            <div className="container mx-auto px-6">
                <h2 className="section-title">Como trabalhamos</h2>
                <div className="relative">
                    {/* Line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 hidden lg:block" />

                    <div className="grid lg:grid-cols-5 gap-8 relative z-10">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center group"
                            >
                                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-xl shadow-lg ring-8 ring-white/5 group-hover:scale-110 transition-transform">
                                    {i + 1}
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                                <p className="text-white/60 text-sm">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
