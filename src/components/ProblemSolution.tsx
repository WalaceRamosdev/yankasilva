import { motion } from "motion/react";
import { Users, MessageSquare, Target } from "lucide-react";

const ProblemSolution = () => {
    const items = [
        {
            problem: "Baixo engajamento",
            solution: "Conteúdo que viraliza",
            icon: <Users className="w-8 h-8" />,
            color: "bg-primary"
        },
        {
            problem: "Sem tempo para criar",
            solution: "Gestão completa",
            icon: <MessageSquare className="w-8 h-8" />,
            color: "bg-secondary"
        },
        {
            problem: "Não converte",
            solution: "Estratégias de vendas",
            icon: <Target className="w-8 h-8" />,
            color: "bg-accent"
        }
    ];

    return (
        <section className="py-20 bg-neutral-dark">
            <div className="container mx-auto px-6">
                <h2 className="section-title text-white">Cansada de postar e não ver resultados?</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group"
                        >
                            <div className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:rotate-6 transition-transform`}>
                                {item.icon}
                            </div>
                            <p className="text-sm font-bold text-red-300 uppercase tracking-wider mb-2">O Problema</p>
                            <h3 className="text-xl font-bold mb-4 line-through text-white/40">{item.problem}</h3>
                            <div className="h-px w-full bg-white/10 my-4" />
                            <p className="text-sm font-bold text-green-300 uppercase tracking-wider mb-2">A Solução</p>
                            <h3 className="text-2xl font-bold text-sky-400">{item.solution}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;
