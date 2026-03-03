import { motion } from "motion/react";
import { ArrowRight, Eye } from "lucide-react";

const Hero = () => {
    return (
        <section id="inicio" className="relative min-h-screen flex items-center pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-neutral-dark">
            {/* Background elements - very subtle */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block text-primary font-bold tracking-[0.3em] uppercase text-sm mb-6"
                    >
                        Design & Estratégia
                    </motion.span>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 text-white">
                        Identidade Visual <br />
                        <span className="text-primary">Estratégica</span> para Marcas que Querem se Posicionar
                    </h1>

                    <p className="text-lg md:text-xl text-white/50 mb-10 max-w-xl font-light leading-relaxed">
                        Transformamos a essência do seu negócio em uma marca memorável, unindo design de alto nível com posicionamento estratégico de mercado.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 items-center">
                        <a
                            href="#contato"
                            className="btn-primary w-full sm:w-auto px-10 py-5 text-lg group flex items-center justify-center gap-3"
                        >
                            Solicitar Orçamento
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#portfolio"
                            className="w-full sm:w-auto px-10 py-5 text-lg font-medium text-white/70 hover:text-white transition-all flex items-center justify-center gap-3 border border-white/10 rounded-full hover:bg-white/5"
                        >
                            <Eye className="w-5 h-5" />
                            Ver Portfólio
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                    className="relative flex justify-center lg:justify-end"
                >
                    <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/5 bg-neutral-dark max-w-lg xl:max-w-xl">
                        <img
                            src="/yankasilva-hero.png"
                            alt="Yanka Silva - Especialista em Identidade Visual"
                            className="w-full h-auto object-cover aspect-[4/5] object-top"
                        />
                        {/* Overlay sutil para integração */}
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/40 to-transparent pointer-events-none" />
                    </div>

                    {/* Elemento flutuante de autoridade */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="absolute -bottom-6 -left-6 md:-left-12 glass p-6 rounded-3xl z-20 hidden md:block"
                    >
                        <p className="text-primary font-bold text-3xl mb-1">+50</p>
                        <p className="text-white/60 text-sm font-medium whitespace-nowrap uppercase tracking-wider">Marcas Transformadas</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
