import { motion } from "motion/react";
import { Rocket, TrendingUp, Target } from "lucide-react";

const About = () => {
    const stats = [
        { icon: <Rocket className="w-6 h-6" />, label: "+50 contas gerenciadas" },
        { icon: <TrendingUp className="w-6 h-6" />, label: "+200% crescimento médio" },
        { icon: <Target className="w-6 h-6" />, label: "Estratégia data-driven" }
    ];

    return (
        <section id="sobre" className="py-20 overflow-hidden">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="rounded-[3rem] overflow-hidden shadow-2xl rotate-3">
                        <img
                            src="https://picsum.photos/seed/lifestyle/800/800"
                            alt="Yanka Lifestyle"
                            className="w-full h-auto"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                    <div className="absolute -bottom-8 -right-8 bg-accent p-8 rounded-3xl shadow-xl -rotate-6 hidden sm:block">
                        <p className="font-display font-bold text-2xl">Especialista em <br />Conexões Reais</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold mb-6">Quem vai cuidar da sua marca</h2>
                    <div className="space-y-4 text-lg text-white/70 mb-8">
                        <p>
                            Olá! Sou a <strong className="text-white">Yanka Silva</strong>, apaixonada por transformar perfis comuns em comunidades vibrantes e lucrativas.
                        </p>
                        <p>
                            Com anos de experiência no mercado digital, entendi que redes sociais não são apenas sobre "postar fotos bonitas", mas sim sobre criar narrativas que conectam e convertem.
                        </p>
                        <p>
                            Minha missão é tirar o peso da gestão digital dos seus ombros para que você foque no que realmente importa: o seu negócio.
                        </p>
                    </div>

                    <div className="grid gap-4">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl"
                            >
                                <div className="bg-white p-2 rounded-xl shadow-sm text-primary">
                                    {stat.icon}
                                </div>
                                <span className="font-bold">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
