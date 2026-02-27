import { Star } from "lucide-react";

const Testimonials = () => {
    const reviews = [
        { name: "Ana Paula", business: "Clínica de Estética", text: "A Yanka mudou completamente a cara do meu Instagram. As vendas aumentaram muito!", stars: 5 },
        { name: "Marcos Lima", business: "Consultoria Financeira", text: "Estratégia impecável. Finalmente entendi o que é ter autoridade digital.", stars: 5 },
        { name: "Juliana Costa", business: "Loja Online", text: "O suporte é incrível e os resultados vieram logo no primeiro mês.", stars: 5 }
    ];

    return (
        <section className="py-16 md:py-24 bg-white/5 border-y border-white/5">
            <div className="container mx-auto px-6">
                <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-white">O que dizem os clientes</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, i) => (
                        <div key={i} className="bg-neutral-dark p-6 md:p-8 rounded-3xl shadow-sm border border-white/10 hover:border-primary/30 transition-colors">
                            <div className="flex gap-1 mb-4">
                                {[...Array(review.stars)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-300 text-amber-300" />)}
                            </div>
                            <p className="text-lg italic mb-6 text-white/80">"{review.text}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-full" />
                                <div>
                                    <p className="font-bold text-white">{review.name}</p>
                                    <p className="text-xs text-white/40">{review.business}</p>
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
