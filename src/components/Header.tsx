import { useState, useEffect } from "react";
import { Menu, X, Instagram, Linkedin, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.documentElement.style.overflow = "hidden";
        } else {
            document.documentElement.style.overflow = "unset";
        }
    }, [isMenuOpen]);

    const navLinks = [
        { name: "Início", href: "#inicio" },
        { name: "Sobre", href: "#sobre" },
        { name: "Serviços", href: "#servicos" },
        { name: "Portfólio", href: "#portfolio" },
        { name: "Método", href: "#processo" },
        { name: "Contato", href: "#contato" },
    ];

    return (
        <>
            <header
                className={`fixed top-0 w-full z-[1000] transition-all duration-500 ${isScrolled
                    ? "bg-[#050505]/80 backdrop-blur-xl py-4 border-b border-white/5"
                    : "bg-transparent py-8"
                    }`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <a href="#inicio" className="flex items-center gap-2 group">
                        <span className="text-2xl font-bold text-white tracking-tighter transition-colors group-hover:text-primary">
                            Yanka<span className="text-primary group-hover:text-white transition-colors">Silva</span>
                        </span>
                    </a>

                    <nav className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-white/50 hover:text-white tracking-widest uppercase transition-all duration-300 relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-500 group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-6">
                        <a
                            href="#contato"
                            className="hidden md:block px-8 py-3 rounded-full bg-white text-black font-bold text-sm uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-500 active:scale-95 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_-5px_rgba(124,58,237,0.5)]"
                        >
                            Solicitar Orçamento
                        </a>

                        <button
                            className="md:hidden p-2 text-white relative z-[1100]"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
                        </button>
                    </div>
                </div>
            </header>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-[#050505] z-[999] flex flex-col items-center justify-center"
                    >
                        <nav className="flex flex-col items-center gap-8">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-4xl font-bold text-white hover:text-primary transition-colors tracking-tighter"
                                >
                                    {link.name}
                                </motion.a>
                            ))}

                            <motion.a
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                href="#contato"
                                onClick={() => setIsMenuOpen(false)}
                                className="mt-8 px-10 py-5 bg-primary text-white rounded-full font-bold text-lg uppercase tracking-widest shadow-2xl"
                            >
                                Solicitar Orçamento
                            </motion.a>
                        </nav>

                        <div className="absolute bottom-12 flex gap-8">
                            <Instagram className="text-white/20 hover:text-primary transition-colors cursor-pointer" />
                            <Linkedin className="text-white/20 hover:text-primary transition-colors cursor-pointer" />
                            <Send className="text-white/20 hover:text-primary transition-colors cursor-pointer" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
