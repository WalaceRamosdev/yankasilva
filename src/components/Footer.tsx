import { Instagram, Linkedin, Send } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#050505] border-t border-white/5 pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
                    <div className="md:col-span-5">
                        <a href="#inicio" className="inline-block mb-8">
                            <span className="text-3xl font-bold text-white tracking-tighter">
                                Yanka<span className="text-primary">Silva</span>
                            </span>
                        </a>
                        <p className="text-white/40 text-lg font-light leading-relaxed max-w-sm mb-10">
                            Estrategista em Identidade Visual. Elevando marcas através de design com propósito e posicionamento de mercado.
                        </p>
                        <div className="flex gap-6">
                            <a href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/40 hover:bg-primary hover:text-white hover:border-primary transition-all duration-500">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/40 hover:bg-primary hover:text-white hover:border-primary transition-all duration-500">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="md:col-span-3">
                        <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-10">Explorar</h4>
                        <ul className="space-y-4">
                            <li><a href="#inicio" className="text-white/40 hover:text-white transition-colors">Início</a></li>
                            <li><a href="#sobre" className="text-white/40 hover:text-white transition-colors">Sobre</a></li>
                            <li><a href="#servicos" className="text-white/40 hover:text-white transition-colors">Serviços</a></li>
                            <li><a href="#portfolio" className="text-white/40 hover:text-white transition-colors">Portfólio</a></li>
                            <li><a href="#processo" className="text-white/40 hover:text-white transition-colors">Método</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-4">
                        <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-10">Contato</h4>
                        <ul className="space-y-6">
                            <li>
                                <p className="text-xs text-white/20 uppercase tracking-widest mb-1">E-mail</p>
                                <a href="mailto:contato@yankasilva.com" className="text-xl text-white hover:text-primary transition-colors">contato@yankasilva.com</a>
                            </li>
                            <li>
                                <p className="text-xs text-white/20 uppercase tracking-widest mb-1">Localização</p>
                                <p className="text-xl text-white">São Paulo, Brasil — Global</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-white/20 font-light">
                        © {new Date().getFullYear()} Yanka Silva. Desenvolvido com foco em estratégia.
                    </p>
                    <div className="flex gap-10">
                        <a href="#" className="text-xs text-white/20 uppercase tracking-widest hover:text-white transition-colors">Privacidade</a>
                        <a href="#" className="text-xs text-white/20 uppercase tracking-widest hover:text-white transition-colors">Termos</a>
                    </div>
                </div>
            </div>

            {/* WhatsApp Floating Button - More subtle and professional */}
            <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 right-8 w-16 h-16 bg-white text-black rounded-full flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(255,255,255,0.5)] hover:bg-primary hover:text-white hover:scale-110 active:scale-95 transition-all duration-500 z-50 group"
            >
                <Send className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            </a>
        </footer>
    );
};

export default Footer;
