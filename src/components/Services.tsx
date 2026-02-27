import { motion } from "motion/react";
import { Layout, PenTool, TrendingUp, BarChart3, Users } from "lucide-react";

const Services = () => {
    const services = [
        { title: "Gestão de Conteúdo", desc: "Criação de calendário e posts estratégicos", icon: <Layout /> },
        { title: "Copywriting", desc: "Textos que vendem sem ser invasivos", icon: <PenTool /> },
        { title: "Design", desc: "Identidade visual para redes", icon: <PenTool /> },
        { title: "Tráfego Pago", desc: "Anúncios otimizados", icon: <TrendingUp /> },
        { title: "Análise de Dados", desc: "Relatórios e insights", icon: <BarChart3 /> },
        { title: "Consultoria", desc: "Mentoria para marcas", icon: <Users /> }
    ];

    return (
        <section id="servicos" className="py-20 bg-neutral-dark text-white">
            <div className="container mx-auto px-6">
                <h2 className="section-title text-white">Serviços que impulsionam</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05, rotateY: 10 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all cursor-default"
                        >
                            <div className="text-secondary mb-6 w-12 h-12">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-white/60">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
