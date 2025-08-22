import React from "react";
import background from "../assets/background.png";
import perfil from "../assets/perfil.jpg";
const Hero: React.FC = () => {
    return (
        <section style={{ backgroundImage: `url(${background})` }} className="flex flex-row items-center  gap-10 justify-center h-screen bg-cover bg-center text-white px-4">
            <article className="flex flex-col items-start text-center ">
                <h1 className="text-5xl font-bold mb-4 text-center">
                    Jeovany Afonso
                </h1>
                <p className="text-xl mb-8 text-left max-w-xl">
                    I'm a passionate web developer building modern and responsive web applications.
                </p>
                <a
                    href="#projects"
                    className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-gradient-to-r hover:from-green-400 hover:to-green-600 hover:text-white hover:shadow-lg hover:shadow-green-800 transition duration-300"
                >
                    View My Work
                </a>
            </article>
            <article className="flex justify-center items-center max-w-2xl">
                <img
                    src={perfil}
                    alt="Jeovany Afonso"
                    className="mt-8 object-center shadow-lg rounded-2xl"
                    style={{ maxWidth: "90%", maxHeight: "90%",  filter: "brightness(0.9) drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.5))" }}
                />
            </article>
        </section>
    );
}

export default Hero;