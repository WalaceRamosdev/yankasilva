import { Instagram, Linkedin, Twitter, MessageSquare } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-neutral-dark/50 border-t border-white/5 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16 text-center md:text-left">
                    <div className="md:col-span-2">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
                            <img src="/logo.jpeg" alt="Yanka Silva" className="h-10 md:h-12 w-auto object-contain mix-blend-screen" />
                        </div>
                        <p className="text-white/60 max-w-sm mb-6 mx-auto md:mx-0">
                            Transformando marcas através de estratégias digitais autênticas e focadas em resultados reais.
                        </p>
                        <div className="flex justify-center md:justify-start gap-4">
                            {[
                                { icon: <Instagram className="w-5 h-5" />, link: "#", label: "Instagram" },
                                { icon: <Linkedin className="w-5 h-5" />, link: "#", label: "Linkedin" },
                                { icon: <Twitter className="w-5 h-5" />, link: "#", label: "Twitter" }
                            ].map((social, i) => (
                                <a key={i} href={social.link} aria-label={social.label} className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Links Rápidos</h4>
                        <ul className="space-y-3 text-white/60">
                            <li><a href="#inicio" className="hover:text-primary transition-colors">Início</a></li>
                            <li><a href="#servicos" className="hover:text-primary transition-colors">Serviços</a></li>
                            <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre</a></li>
                            <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfólio</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6 text-white text-center md:text-left">Contato</h4>
                        <ul className="space-y-3 text-white/60">
                            <li>contato@yankasilva.com</li>
                            <li>+55 (11) 99999-9999</li>
                            <li>São Paulo, Brasil</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
                    <p>© 2026 Yanka Silva. Todos os direitos reservados.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
                        <a href="#" className="hover:text-primary transition-colors">Termos</a>
                    </div>
                </div>
            </div>

            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all z-50 animate-bounce"
            >
                <MessageSquare className="w-7 h-7 md:w-8 md:h-8" />
            </a>
        </footer>
    );
};

export default Footer;
