import { motion } from "motion/react";
import { ShieldCheck, Target, Zap } from "lucide-react";

const About = () => {
    const pillars = [
        { icon: <ShieldCheck className="w-8 h-8 text-primary" />, title: "Estratégia", desc: "Design fundamentado em objetivos de negócio." },
        { icon: <Zap className="w-8 h-8 text-primary" />, title: "Posicionamento", desc: "Destaque sua marca em um mercado saturado." },
        { icon: <Target className="w-8 h-8 text-primary" />, title: "Identidade", desc: "Visual único que comunica sua essência." }
    ];

    return (
        <section id="sobre" className="py-24 md:py-32 bg-neutral-dark overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
                            <img
                                src="/yankasilva-sobre.png"
                                alt="Yanka Silva - Especialista em Design"
                                className="w-full h-auto object-cover aspect-square md:aspect-[4/5] lg:aspect-square"
                            />
                        </div>
                        {/* Elemento de design decorativo */}
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
                        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-secondary/10 rounded-full blur-[80px] -z-10" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                            Design com <span className="text-primary italic">Propósito</span> e Autoridade
                        </h2>

                        <div className="space-y-6 text-white/60 text-lg font-light leading-relaxed mb-12">
                            <p>
                                Acredito que uma marca forte não nasce apenas de "estética bonitinha", mas de um <strong className="text-white">posicionamento estratégico</strong> que comunica valor instantaneamente.
                            </p>
                            <p>
                                Meu método une a precisão do design gráfico com a psicologia do consumo, garantindo que sua identidade visual seja sua maior ferramenta de vendas.
                            </p>
                        </div>

                        <div className="grid gap-8">
                            {pillars.map((pillar, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-6 group"
                                >
                                    <div className="flex-shrink-0 p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-primary/30 transition-colors">
                                        {pillar.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
                                        <p className="text-white/40 text-base leading-relaxed">{pillar.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
