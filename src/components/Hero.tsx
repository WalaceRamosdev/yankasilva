import { motion } from "motion/react";
import { ArrowRight, ChevronRight, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
    const [text, setText] = useState("");
    const words = ["vendas", "engajamento", "autoridade"];
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(currentWord.substring(0, text.length + 1));
                if (text === currentWord) {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                setText(currentWord.substring(0, text.length - 1));
                if (text === "") {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, isDeleting ? 100 : 150);
        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex]);

    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-10">
                <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                        Transforme suas redes sociais em uma máquina de <br />
                        <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent inline-block min-w-[200px]">{text}</span>
                        <span className="animate-pulse text-white">|</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/70 mb-8 max-w-lg">
                        Estratégias personalizadas que conectam sua marca ao público certo e geram resultados reais.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                        <button className="btn-primary flex items-center gap-2 group">
                            Quero crescer nas redes
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <a href="#portfolio" className="px-6 py-2 rounded-full font-medium transition-all bg-white/5 text-white/60 hover:bg-white/10 flex items-center gap-2">
                            Veja cases de sucesso
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/5">
                        <img
                            src="https://picsum.photos/seed/yanka/800/1000"
                            alt="Yanka Silva"
                            className="w-full h-auto opacity-90"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute top-10 right-10 w-24 h-24 bg-accent/20 rounded-full -z-10 animate-pulse" />
                    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full -z-10" />
                    <div className="absolute top-1/2 -left-12 -translate-y-1/2 glass p-4 rounded-2xl shadow-xl hidden lg:block z-30">
                        <div className="flex items-center gap-3">
                            <div className="bg-green-400/20 p-2 rounded-full">
                                <TrendingUp className="w-6 h-6 text-green-400" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-white/50">Crescimento</p>
                                <p className="text-lg font-bold text-green-400">+200%</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
