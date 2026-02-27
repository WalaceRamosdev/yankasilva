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
            document.documentElement.style.overflow = "hidden";
        } else {
            document.documentElement.style.overflow = "unset";
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
        { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com" },
        { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com" },
        { icon: <Send className="w-5 h-5" />, href: "https://wa.me/5500000000000" },
    ];

    return (
        <>
            <header className={`fixed top-0 w-full z-[1000] transition-all duration-300 ${isScrolled || isMenuOpen ? "bg-[#020617] py-3 shadow-lg border-b border-white/5" : "bg-transparent py-5"}`}>
                <div className="container mx-auto px-6 flex justify-between items-center relative z-[1001]">
                    <div className="flex items-center gap-2">
                        <img src="/logo.jpeg" alt="Yanka Silva" className="h-10 md:h-12 w-auto object-contain mix-blend-screen" />
                    </div>

                    <nav className="hidden md:flex items-center gap-8 text-white font-sans">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="font-medium text-white/70 hover:text-white transition-colors relative group">
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2563EB] transition-all group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <button className="bg-[#7C3AED] text-white px-6 py-2.5 rounded-full font-bold transition-all hover:scale-105 active:scale-95 hidden sm:block">
                            Fale com Yanka
                        </button>
                        <button
                            className="md:hidden p-3 rounded-xl transition-all relative z-[1100] bg-white/10 hover:bg-white/20"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label={isMenuOpen ? "Fechar Menu" : "Abrir Menu"}
                        >
                            {isMenuOpen ? <X className="w-7 h-7 text-white" /> : <Menu className="w-7 h-7 text-white" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay - Moved OUTSIDE the header for cleaner stacking */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        key="mobile-menu-overlay"
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 bg-[#020617] z-[999] md:hidden flex flex-col pt-24"
                    >
                        {/* Static opaque background to prevent transparency issues */}
                        <div className="absolute inset-0 bg-[#020617] -z-20"></div>

                        {/* Decorative background element */}
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-40 pointer-events-none">
                            <div className="absolute top-[-5%] right-[-5%] w-[70%] h-[70%] bg-[#2563EB]/40 blur-[100px] rounded-full"></div>
                            <div className="absolute bottom-[-5%] left-[-5%] w-[70%] h-[70%] bg-[#7C3AED]/40 blur-[100px] rounded-full"></div>
                        </div>

                        <nav className="relative z-10 flex-1 flex flex-col items-center justify-center gap-8 px-6 pb-8">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 + 0.1 }}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-4xl font-bold text-white hover:text-[#2563EB] transition-colors py-2 tracking-tight font-display"
                                >
                                    {link.name}
                                </motion.a>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="mt-8 w-full max-w-[280px]"
                            >
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="w-full bg-[#2563EB] text-white py-4 rounded-full font-bold text-lg shadow-2xl active:scale-95 transition-transform"
                                >
                                    Fale com Yanka
                                </button>
                            </motion.div>
                        </nav>

                        <div className="relative z-10 p-10 pb-16 flex flex-col items-center gap-6 border-t border-white/10 bg-white/5">
                            <p className="text-white/40 text-xs font-black uppercase tracking-[0.3em]">Siga meu trabalho</p>
                            <div className="flex gap-8">
                                {socialLinks.map((social, i) => (
                                    <motion.a
                                        key={i}
                                        href={social.href}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.5 + (i * 0.1) }}
                                        className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-[#2563EB] transition-all text-white"
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
