import { ArrowRight, CheckCircle2 } from "lucide-react";

const CTA = () => {
    return (
        <section id="contato" className="py-24 md:py-32 bg-neutral-dark">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center bg-[#0A0A0A] border border-white/5 rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
                    {/* Subtle decorative glow */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

                    <div className="relative z-10 w-full">
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
                            Pronta para <span className="text-primary">transformar</span> sua marca?
                        </h2>
                        <p className="text-xl text-white/40 mb-10 font-light leading-relaxed max-w-md">
                            Dê o primeiro passo para um posicionamento de alto nível. Vamos construir uma identidade que gera autoridade.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-white/60">
                                <CheckCircle2 className="text-primary w-5 h-5" />
                                <span className="text-base">Análise estratégica inclusa</span>
                            </div>
                            <div className="flex items-center gap-3 text-white/60">
                                <CheckCircle2 className="text-primary w-5 h-5" />
                                <span className="text-base">Proposta 100% personalizada</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 w-full">
                        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-5">
                                <div>
                                    <label className="text-xs font-bold uppercase tracking-widest mb-2 block text-white/40">Nome</label>
                                    <input type="text" className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:border-primary/50 transition-all outline-none" placeholder="Seu nome" />
                                </div>
                                <div>
                                    <label className="text-xs font-bold uppercase tracking-widest mb-2 block text-white/40">WhatsApp</label>
                                    <input type="tel" className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:border-primary/50 transition-all outline-none" placeholder="(00) 00000-0000" />
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-bold uppercase tracking-widest mb-2 block text-white/40">E-mail</label>
                                <input type="email" className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:border-primary/50 transition-all outline-none" placeholder="seu@email.com" />
                            </div>
                            <div>
                                <label className="text-xs font-bold uppercase tracking-widest mb-2 block text-white/40">Objetivo</label>
                                <select className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-primary/50 transition-all outline-none appearance-none cursor-pointer">
                                    <option className="bg-neutral-dark">Nova Identidade Visual</option>
                                    <option className="bg-neutral-dark">Rebranding (Redesign)</option>
                                    <option className="bg-neutral-dark">Branding para Redes Sociais</option>
                                    <option className="bg-neutral-dark">Outros</option>
                                </select>
                            </div>
                            <button className="btn-primary w-full py-5 text-lg font-bold flex items-center justify-center gap-3 group">
                                Iniciar minha jornada
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
