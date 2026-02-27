import { useState, useEffect } from "react";
import { Menu, X, Instagram, Linkedin, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen]);

    const navLinks = [
        { name: "Início", href: "#inicio" },
        { name: "Serviços", href: "#servicos" },
        { name: "Sobre", href: "#sobre" },
        { name: "Portfólio", href: "#portfolio" },
        { name: "Contato", href: "#contato" },
    ];

    const socialLinks = [
        { icon: <Instagram className="w-5 h-5" />, href: "#" },
        { icon: <Linkedin className="w-5 h-5" />, href: "#" },
        { icon: <Send className="w-5 h-5" />, href: "#" },
    ];

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass py-3 shadow-sm" : "bg-transparent py-5"}`}>
            <div className="container mx-auto px-6 flex justify-between items-center relative z-50">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2"
                >
                    <img src="/logo.jpeg" alt="Yanka Silva" className="h-10 md:h-12 w-auto object-contain mix-blend-screen" />
                </motion.div>

                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="font-medium text-white/70 hover:text-white transition-colors relative group">
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <button className="btn-secondary text-sm md:text-base hidden sm:block">
                        Fale com Yanka
                    </button>
                    <button
                        className={`md:hidden p-2 rounded-xl transition-all ${isMenuOpen ? "bg-white/10" : "bg-white/5"}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "circOut" }}
                        className="fixed inset-0 bg-neutral-dark/98 backdrop-blur-2xl z-40 md:hidden flex flex-col"
                    >
                        {/* Decorative background element */}
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-20">
                            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full"></div>
                            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary/20 blur-[120px] rounded-full"></div>
                        </div>

                        <nav className="flex-1 flex flex-col items-center justify-center gap-6 px-6 pt-20">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-3xl font-bold text-white/90 hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </motion.a>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                                className="mt-8 w-full max-w-xs"
                            >
                                <button className="btn-primary w-full py-4 shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                                    Fale com Yanka
                                </button>
                            </motion.div>
                        </nav>

                        <div className="p-10 flex flex-col items-center gap-6 border-t border-white/10 bg-white/5">
                            <p className="text-white/40 text-sm font-medium uppercase tracking-[0.2em]">Siga meu trabalho</p>
                            <div className="flex gap-8">
                                {socialLinks.map((social, i) => (
                                    <motion.a
                                        key={i}
                                        href={social.href}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.4 + (i * 0.1) }}
                                        className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-primary transition-all hover:-translate-y-1"
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
