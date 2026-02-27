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
        <header className={`fixed top-0 w-full z-[100] transition-all duration-300 ${isScrolled || isMenuOpen ? "glass py-3 shadow-lg" : "bg-transparent py-5"}`}>
            <div className="container mx-auto px-6 flex justify-between items-center relative z-[101]">
                <div className="flex items-center gap-2">
                    <img src="/logo.jpeg" alt="Yanka Silva" className="h-10 md:h-12 w-auto object-contain mix-blend-screen" />
                </div>

                <nav className="hidden md:flex items-center gap-8 text-white">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="font-medium text-white/70 hover:text-white transition-colors relative group">
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <button className="btn-secondary text-base hidden sm:block px-6 py-2.5">
                        Fale com Yanka
                    </button>
                    <button
                        className={`md:hidden p-2.5 rounded-xl transition-all relative z-[110] ${isMenuOpen ? "bg-white/20" : "bg-white/10"}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <X className="w-7 h-7 text-white" /> : <Menu className="w-7 h-7 text-white" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence mode="wait">
                {isMenuOpen && (
                    <motion.div
                        key="mobile-menu-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-neutral-dark z-[105] md:hidden flex flex-col"
                    >
                        {/* Decorative background element */}
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30">
                            <div className="absolute top-[-5%] right-[-5%] w-[60%] h-[60%] bg-primary/40 blur-[100px] rounded-full"></div>
                            <div className="absolute bottom-[-5%] left-[-5%] w-[60%] h-[60%] bg-secondary/40 blur-[100px] rounded-full"></div>
                        </div>

                        <nav className="flex-1 flex flex-col items-center justify-center gap-6 px-6 pt-24 pb-8">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 + 0.1 }}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-4xl font-bold text-white hover:text-primary transition-colors py-2 tracking-tight"
                                >
                                    {link.name}
                                </motion.a>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="mt-8 w-full max-w-[280px]"
                            >
                                <button className="btn-primary w-full py-4 text-lg">
                                    Fale com Yanka
                                </button>
                            </motion.div>
                        </nav>

                        <div className="p-8 pb-12 flex flex-col items-center gap-6 border-t border-white/10 bg-white/5">
                            <p className="text-white/40 text-xs font-black uppercase tracking-[0.3em]">Siga meu trabalho</p>
                            <div className="flex gap-6">
                                {socialLinks.map((social, i) => (
                                    <motion.a
                                        key={i}
                                        href={social.href}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.5 + (i * 0.1) }}
                                        className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-primary transition-all text-white"
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
