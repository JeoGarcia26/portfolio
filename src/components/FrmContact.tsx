import React, { useState } from "react";

const FrmContact: React.FC = () => {
    const [form, setForm] = useState({
        nome: "",
        email: "",
        whatsapp: "",
        mensagem: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Mensagem enviada com sucesso!");
        setForm({ nome: "", email: "", whatsapp: "", mensagem: "" });
    };

    return (
        <section className="max-w-full mx-auto py-20 px-8 bg-black">
            <section className="max-w-lg mx-auto p-8 bg-[#1b1b1b] rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold mb-2 text-white">Get in Touch</h2>
                <p className="mb-6 text-gray-400 text-justify">
                    Tem uma proposta, ideia ou projeto? Fique à vontade para me contactar! Estou sempre aberto a novas oportunidades e colaborações.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={form.nome}
                            onChange={handleChange}
                            autoComplete="off"
                            placeholder="Digite o seu nome"
                            required
                            className="mt-1 block w-full rounded-lg bg-[#2a2a2a] border border-gray-600 text-white px-3 py-2
                                       focus:outline-none focus-visible:outline-none 
                                       focus:ring-0 focus:border-green-500 transition"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            autoComplete="off"
                            placeholder="Digite o seu email"
                            required
                            className="mt-1 block w-full rounded-lg bg-[#2a2a2a] border border-gray-600 text-white px-3 py-2
                                       focus:outline-none focus-visible:outline-none 
                                       focus:ring-0 focus:border-green-500 transition"
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            id="whatsapp"
                            name="whatsapp"
                            value={form.whatsapp}
                            onChange={handleChange}
                            autoComplete="off"
                            required
                            placeholder="Digite o seu WhatsApp"
                            className="mt-1 block w-full rounded-lg bg-[#2a2a2a] border border-gray-600 text-white px-3 py-2
                                       focus:outline-none focus-visible:outline-none 
                                       focus:ring-0 focus:border-green-500 transition"
                        />
                    </div>
                    <div>
                        <textarea
                            id="mensagem"
                            name="mensagem"
                            value={form.mensagem}
                            onChange={handleChange}
                            autoComplete="off"
                            required
                            placeholder="Digite a sua mensagem"
                            rows={4}
                            className="mt-1 block resize-none w-full rounded-lg bg-[#2a2a2a] border border-gray-600 text-white px-3 py-2
                                       focus:outline-none focus-visible:outline-none 
                                       focus:ring-0 focus:border-green-500 transition"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-green-700 text-white font-semibold rounded-lg shadow
                                   hover:bg-gradient-to-r hover:from-green-400 hover:to-green-600
                                   hover:text-white hover:shadow-lg hover:shadow-green-800 transition duration-300"
                    >
                        Enviar mensagem
                    </button>
                </form>
            </section>
        </section>
    );
};

export default FrmContact;
