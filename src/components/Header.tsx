import { useState, useEffect } from "react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass py-3 shadow-sm" : "bg-transparent py-5"}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img src="/logo.jpeg" alt="Yanka Silva" className="h-10 md:h-12 w-auto object-contain mix-blend-screen" />
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    <a href="#servicos" className="font-medium text-white/70 hover:text-white transition-colors">Serviços</a>
                    <a href="#sobre" className="font-medium text-white/70 hover:text-white transition-colors">Sobre</a>
                    <a href="#portfolio" className="font-medium text-white/70 hover:text-white transition-colors">Portfólio</a>
                    <a href="#contato" className="font-medium text-white/70 hover:text-white transition-colors">Contato</a>
                </nav>

                <button className="btn-secondary text-sm md:text-base">
                    Fale com Yanka
                </button>
            </div>
        </header>
    );
};

export default Header;
