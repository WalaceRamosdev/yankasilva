import { CheckCircle2 } from "lucide-react";

const CTA = () => {
    return (
        <section id="contato" className="py-16 md:py-24">
            <div className="container mx-auto px-6">
                <div className="bg-gradient-to-br from-primary to-secondary rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

                    <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                        <div className="text-center lg:text-left">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Pronta para decolar nas redes?</h2>
                            <p className="text-lg md:text-xl text-white/80 mb-8">
                                Garanta <strong>20% de desconto</strong> no primeiro mês de contrato. Vamos transformar sua presença digital hoje!
                            </p>
                            <div className="flex items-center justify-center lg:justify-start gap-4">
                                <div className="bg-white/20 p-4 rounded-2xl flex items-center gap-3">
                                    <CheckCircle2 className="text-accent" />
                                    <span className="text-sm font-medium">Atendimento 100% Personalizado</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-neutral-dark/80 backdrop-blur-xl p-6 md:p-8 rounded-3xl text-neutral-light shadow-xl border border-white/10">
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="text-sm font-bold mb-1 block text-white/90">Nome Completo</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:ring-2 focus:ring-primary transition-all outline-none" placeholder="Seu nome" />
                                </div>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm font-bold mb-1 block text-white/90">E-mail</label>
                                        <input type="email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:ring-2 focus:ring-primary transition-all outline-none" placeholder="seu@email.com" />
                                    </div>
                                    <div>
                                        <label className="text-sm font-bold mb-1 block text-white/90">WhatsApp</label>
                                        <input type="tel" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:ring-2 focus:ring-primary transition-all outline-none" placeholder="(00) 00000-0000" />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm font-bold mb-1 block text-white/90">Segmento do Negócio</label>
                                    <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-primary transition-all outline-none appearance-none cursor-pointer">
                                        <option className="bg-neutral-dark text-white">Estética / Saúde</option>
                                        <option className="bg-neutral-dark text-white">Moda / Varejo</option>
                                        <option className="bg-neutral-dark text-white">Infoprodutos</option>
                                        <option className="bg-neutral-dark text-white">Outros</option>
                                    </select>
                                </div>
                                <button className="btn-secondary w-full py-4 text-lg">
                                    Quero minha estratégia gratuita
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
