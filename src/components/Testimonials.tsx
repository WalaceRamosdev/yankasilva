import { Quote } from "lucide-react";

const Testimonials = () => {
    const reviews = [
        { name: "Ana Paula", business: "Lumina Estética", text: "A Yanka não apenas redesenhou minha marca, ela deu uma alma ao meu negócio. A percepção de valor dos meus clientes mudou completamente." },
        { name: "Marcos Lima", business: "Arcane Studio", text: "Profissionalismo raro. O método dela é extremamente estratégico e os resultados visuais superaram todas as minhas expectativas." },
        { name: "Juliana Costa", business: "Concept Store", text: "Minha marca agora transmite a autoridade que eu sempre quis. O investimento se pagou na primeira semana pós-lançamento." }
    ];

    return (
        <section className="py-24 md:py-32 bg-[#050505]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-center">Depoimentos</h2>
                    <p className="text-white/40 text-lg font-light text-center">O que dizem as marcas que passaram pela nossa transformação.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {reviews.map((review, i) => (
                        <div key={i} className="flex flex-col group">
                            <Quote className="w-10 h-10 text-primary/20 mb-8 group-hover:text-primary/40 transition-colors" />
                            <p className="text-xl text-white/70 font-light leading-relaxed mb-10 min-h-[120px]">
                                "{review.text}"
                            </p>
                            <div className="flex items-center gap-5 mt-auto">
                                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/20 font-bold">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-white text-lg">{review.name}</p>
                                    <p className="text-sm text-primary uppercase tracking-widest">{review.business}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

