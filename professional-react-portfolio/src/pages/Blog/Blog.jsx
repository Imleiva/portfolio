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
import IdeasInProgress from "./components/IdeasInProgress";
import "./Blog.css";

const Blog = () => {
  const { t } = useTranslation();
  useScrollToTop();

  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: t("categories.all") },
    { id: "debug", label: t("categories.debug") },
    { id: "art", label: t("categories.art") },
    { id: "books", label: t("categories.books") },
    { id: "psychology", label: t("categories.psychology") },
    { id: "projects", label: t("categories.projects") },
    { id: "past", label: t("categories.past") },
    { id: "inspiration", label: t("categories.inspiration") },
    { id: "ideas", label: t("categories.ideas") },
    { id: "easter-eggs", label: t("categories.easterEggs") },
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
            <span className="gradient-text">{t("title")}</span>
          </h1>
          <p className="blog-subtitle">{t("subtitle")}</p>
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

          {(selectedCategory === "all" || selectedCategory === "ideas") && (
            <motion.div variants={itemVariants}>
              <IdeasInProgress />
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
