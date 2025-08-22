import React, { useState } from "react";
import { motion, AnimatePresence} from "framer-motion";
import {
    FaReact,
    FaNodeJs,
    FaCss3,
    FaHtml5,
    FaGithub,
    FaUikit,
    FaPython
} from "react-icons/fa";

const tagsProgramming = [
    "JavaScript",
    "Frontend",
    "Backend",
    "Fullstack",
    "Web Development",
];
const tagsSystemAdministration = [
    "Linux",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Monitoring",
];

const topicsProgramming = [
    { name: "React", image: <FaReact size={40} />, tag: tagsProgramming[0], color: "#61DAFB" },
    { name: "Python", image: <FaPython size={40} />, tag: tagsProgramming[1], color: "#306998" },
    { name: "Node.js", image: <FaNodeJs size={40} />, tag: tagsProgramming[2], color: "#8CC84B" },
    { name: "CSS", image: <FaCss3 size={40} />, tag: tagsProgramming[3], color: "#1572B6" },
    { name: "HTML", image: <FaHtml5 size={40} />, tag: tagsProgramming[4], color: "#E34F26" },
    { name: "Git", image: <FaGithub size={40} />, tag: tagsProgramming[0], color: "#181717" },
    { name: "REST APIs", image: <FaNodeJs size={40} />, tag: tagsProgramming[1], color: "#8CC84B" },
    { name: "UI/UX", image: <FaUikit size={40} />, tag: tagsProgramming[2], color: "#8CC84B" },
];
const topicsSystemAdministration = [
    { name: "Linux", image: <FaReact size={40} />, tag: tagsSystemAdministration[0], color: "#61DAFB" },
    { name: "Docker", image: <FaPython size={40} />, tag: tagsSystemAdministration[1], color: "#306998" },
    { name: "Kubernetes", image: <FaNodeJs size={40} />, tag: tagsSystemAdministration[2], color: "#8CC84B" },
    { name: "CI/CD", image: <FaCss3 size={40} />, tag: tagsSystemAdministration[3], color: "#1572B6" },
    { name: "Monitoring", image: <FaHtml5 size={40} />, tag: tagsSystemAdministration[4], color: "#E34F26" },
];

const Topics: React.FC = () => {
    const [highlight, setHighlight] = useState(topicsProgramming[0]);
    const [highlightSystem, setHighlightSystem] = useState(topicsSystemAdministration[0]);

    return (
        <section className="p-8 bg-gray-200 text-gray-800 flex gap-6">
            <article className="p-10 w-full flex md:flex-row gap-6">
                {/* Lado esquerdo (destaque) */}
                <div className="flex-1 flex items-center justify-center bg-white rounded-2xl shadow-xl p-6">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={highlight.name}
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 100, opacity: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <div className="mb-4 flex justify-center" style={{ color: highlight.color }}>{highlight.image}</div>
                            <h2 className="text-3xl font-bold">{highlight.name}</h2>
                            <p className="text-gray-600 mt-2">{highlight.tag}</p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Lado direito (lista) */}
                <div className="w-1/3 flex flex-col gap-3">
                    {topicsProgramming
                        .filter((t) => t.name !== highlight.name)
                        .map((t) => (
                            <motion.button
                                key={t.name}
                                onClick={() => setHighlight(t)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-md hover:bg-gray-100 transition"
                            >
                                {t.image}
                                <span className="font-semibold">{t.name}</span>
                            </motion.button>
                        ))}
                </div>
            </article>
            <article className="w-full flex md:flex-row gap-6 p-10">
                {/* Lado esquerdo (destaque) */}
                <div className="flex-1 flex items-center justify-center  bg-white rounded-2xl shadow-xl p-6">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={highlightSystem.name}
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 100, opacity: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <div className="mb-4 flex justify-center " style={{ color: highlightSystem.color }}>{highlightSystem.image}</div>
                            <h2 className="text-3xl font-bold">{highlightSystem.name}</h2>
                            <p className="text-gray-600 mt-2">{highlightSystem.tag}</p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Lado direito (lista) */}
                <div className="w-1/3 flex flex-col gap-3">
                    {topicsSystemAdministration
                        .filter((t) => t.name !== highlightSystem.name)
                        .map((t) => (
                            <motion.button
                                key={t.name}
                                onClick={() => setHighlightSystem(t)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-md hover:bg-gray-100 transition"
                            >
                                {t.image}
                                <span className="font-semibold">{t.name}</span>
                            </motion.button>
                        ))}
                </div>
            </article>
        </section>
    );
};

export default Topics;
