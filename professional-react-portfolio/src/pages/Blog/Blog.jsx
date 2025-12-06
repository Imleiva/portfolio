import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import MicroDebug from "./components/MicroDebug";
import CodeAsArt from "./components/CodeAsArt";
import BookReviews from "./components/BookReviews";
import PsychologicalPatterns from "./components/PsychologicalPatterns";
import BeforeAfter from "./components/BeforeAfter";
import PastMeHatesThis from "./components/PastMeHatesThis";
import Inspirations from "./components/Inspirations";
import HiddenSurprises from "./components/HiddenSurprises";
import "./Blog.css";

const Blog = () => {
  const { t } = useTranslation();
  useScrollToTop();

  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "Todo" },
    { id: "debug", label: "Debug Personal" },
    { id: "art", label: "Código como Arte" },
    { id: "books", label: "Libros" },
    { id: "psychology", label: "Psicología" },
    { id: "projects", label: "Antes/Después" },
    { id: "past", label: "Mi Yo del Pasado" },
    { id: "inspiration", label: "Inspiración" },
    { id: "easter-eggs", label: "Easter Eggs" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="blog">
      <div className="container">
        {/* Header */}
        <motion.div
          className="blog-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="blog-title">
            <span className="gradient-text">Blog</span>
          </h1>
          <p className="blog-subtitle">
            Reflexiones, código, arte y todo lo que pasa entre commits
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="blog-categories"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${
                selectedCategory === category.id ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Blog Content */}
        <motion.div
          className="blog-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {(selectedCategory === "all" || selectedCategory === "debug") && (
            <motion.div variants={itemVariants}>
              <MicroDebug />
            </motion.div>
          )}

          {(selectedCategory === "all" || selectedCategory === "art") && (
            <motion.div variants={itemVariants}>
              <CodeAsArt />
            </motion.div>
          )}

          {(selectedCategory === "all" || selectedCategory === "books") && (
            <motion.div variants={itemVariants}>
              <BookReviews />
            </motion.div>
          )}

          {(selectedCategory === "all" ||
            selectedCategory === "psychology") && (
            <motion.div variants={itemVariants}>
              <PsychologicalPatterns />
            </motion.div>
          )}

          {(selectedCategory === "all" || selectedCategory === "projects") && (
            <motion.div variants={itemVariants}>
              <BeforeAfter />
            </motion.div>
          )}

          {(selectedCategory === "all" || selectedCategory === "past") && (
            <motion.div variants={itemVariants}>
              <PastMeHatesThis />
            </motion.div>
          )}

          {(selectedCategory === "all" ||
            selectedCategory === "inspiration") && (
            <motion.div variants={itemVariants}>
              <Inspirations />
            </motion.div>
          )}

          {(selectedCategory === "all" ||
            selectedCategory === "easter-eggs") && (
            <motion.div variants={itemVariants}>
              <HiddenSurprises />
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
