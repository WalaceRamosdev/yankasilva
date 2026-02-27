import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Serviços", href: "#servicos" },
        { name: "Sobre", href: "#sobre" },
        { name: "Portfólio", href: "#portfolio" },
        { name: "Contato", href: "#contato" },
    ];

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? "glass py-3 shadow-sm" : "bg-transparent py-5"}`}>
            <div className="container mx-auto px-6 flex justify-between items-center relative z-50">
                <div className="flex items-center gap-2">
                    <img src="/logo.jpeg" alt="Yanka Silva" className="h-10 md:h-12 w-auto object-contain mix-blend-screen" />
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="font-medium text-white/70 hover:text-white transition-colors">
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <button className="btn-secondary text-sm md:text-base hidden sm:block">
                        Fale com Yanka
                    </button>
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-neutral-dark/95 backdrop-blur-xl z-40 transition-all duration-300 md:hidden ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <nav className="h-full flex flex-col items-center justify-center gap-8 text-2xl font-bold">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-white/70 hover:text-white"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="btn-secondary mt-4">
                        Fale com Yanka
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
