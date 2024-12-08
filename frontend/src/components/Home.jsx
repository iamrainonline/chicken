import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Rss, Zap, ArrowRight } from "lucide-react";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Technology", "Design", "Culture", "Science"];

  const featuredPosts = [
    {
      id: 1,
      title: "The Evolving Landscape of AI",
      excerpt:
        "Navigating the complex intersection of technology, ethics, and human potential.",
      author: "Elena Novak",
      date: "Dec 15, 2024",
      category: "Technology",
      readTime: "6 min read",
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      title: "Designing for Human Experience",
      excerpt:
        "How empathy and understanding reshape the future of design thinking.",
      author: "Marcus Lee",
      date: "Dec 10, 2024",
      category: "Design",
      readTime: "5 min read",
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      title: "The Quantum Frontier",
      excerpt:
        "Exploring breakthrough discoveries at the edge of scientific understanding.",
      author: "Dr. Sophia Chen",
      date: "Dec 5, 2024",
      category: "Science",
      readTime: "8 min read",
      imageUrl: "https://picsum.photos/200/300",
    },
  ];

  return (
    <div className="bg-gray-100 text-slate-900 min-h-screen">
      {/* Hero Section */}
      <header className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-black opacity-80"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-extrabold tracking-tight mb-6"
          >
            Insight. Perspective. Understanding.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto mb-10 text-gray-300"
          >
            Dive deep into thought-provoking narratives that challenge
            perspectives and illuminate the complex tapestry of human knowledge.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center space-x-4"
          >
            <button className="px-8 py-3 bg-white text-slate-900 font-semibold rounded-full hover:bg-gray-100 transition-colors flex items-center group">
              Explore Articles
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </button>
          </motion.div>
        </div>
      </header>

      {/* Category Filter */}
      <div className="bg-white py-6 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-slate-900 text-white"
                    : "bg-gray-100 text-slate-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-medium text-slate-600 bg-gray-100 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-slate-500">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-slate-900 group-hover:text-slate-700 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center text-sm text-slate-500">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Curious</h2>
          <p className="text-xl text-gray-300 mb-8">
            Receive our latest insights, carefully curated to expand your
            perspective.
          </p>
          <div className="max-w-xl mx-auto flex rounded-full overflow-hidden shadow-lg">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-6 py-4 bg-white text-slate-900 focus:outline-none"
            />
            <button className="bg-slate-700 text-white px-8 py-4 hover:bg-slate-600 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
