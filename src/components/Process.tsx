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
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Imagem em Ação */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="rounded-[2.5rem] overflow-hidden border border-white/10 shadow-3xl bg-white/5">
                            <img
                                src="/yankasilva-acao.png"
                                alt="Yanka Silva em ação"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        {/* Overlay decorativo */}
                        <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
                    </motion.div>

                    {/* Passos do Processo */}
                    <div className="lg:col-span-7 space-y-8 relative">
                        {/* Linha vertical decorativa lateral */}
                        <div className="absolute left-6 top-8 bottom-8 w-[2px] bg-gradient-to-b from-primary via-secondary to-transparent hidden sm:block" />

                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-start gap-6 group relative pl-4 sm:pl-12"
                            >
                                <div className="flex-shrink-0 w-12 h-12 bg-neutral-dark border border-white/10 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg group-hover:bg-primary group-hover:border-primary transition-all duration-500 z-10">
                                    {i + 1}
                                </div>
                                <div className="pt-1">
                                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">{step.title}</h3>
                                    <p className="text-white/50 text-base leading-relaxed max-w-md">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
