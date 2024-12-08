import React from "react";
import { motion } from "framer-motion";
import { Clock, User, Calendar, Share2, ArrowRight } from "lucide-react";

const BlogPostPage = () => {
  const postData = {
    title: "The Evolving Landscape of Artificial Intelligence",
    author: "Elena Novak",
    date: "December 15, 2024",
    readTime: "6 min read",
    category: "Technology",
    heroImage: "https://picsum.photos/1200/600",
    content: [
      {
        type: "paragraph",
        text: "Artificial Intelligence stands at the crossroads of technological innovation and ethical consideration. As we venture deeper into this transformative era, the boundaries between human intelligence and machine learning continue to blur, presenting both unprecedented opportunities and complex challenges.",
      },
      {
        type: "heading",
        text: "The Current State of AI",
      },
      {
        type: "paragraph",
        text: "Modern AI systems have transcended simple computational tasks, emerging as sophisticated tools capable of complex reasoning, creative problem-solving, and nuanced decision-making. Machine learning models now demonstrate capabilities that were once considered exclusively human domains.",
      },
      {
        type: "quote",
        text: "AI is not about replacing human intelligence, but about augmenting and expanding our collective potential.",
      },
      {
        type: "paragraph",
        text: "The ethical implications of AI development remain a critical area of discussion. As these technologies become more integrated into our daily lives, questions of privacy, bias, and societal impact become increasingly important.",
      },
    ],
    tags: ["AI", "Technology", "Ethics", "Future"],
  };

  const relatedPosts = [
    {
      id: 1,
      title: "Machine Learning Ethics",
      excerpt: "Navigating the moral landscape of AI development",
      author: "Marcus Lee",
      date: "Dec 10, 2024",
      imageUrl: "https://picsum.photos/400/250",
    },
    {
      id: 2,
      title: "Future of Technological Innovation",
      excerpt: "Exploring emerging trends in tech",
      author: "Sophia Chen",
      date: "Nov 25, 2024",
      imageUrl: "https://picsum.photos/400/250",
    },
    {
      id: 3,
      title: "Human-AI Collaboration",
      excerpt:
        "Bridging the gap between human creativity and machine intelligence",
      author: "Elena Novak",
      date: "Nov 15, 2024",
      imageUrl: "https://picsum.photos/400/250",
    },
  ];

  return (
    <div className="bg-gray-100 text-slate-900 min-h-screen">
      {/* Hero Section */}
      <header className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-black opacity-70"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto px-4 py-16 text-center"
        >
          <div className="bg-white/10 rounded-full inline-block px-4 py-1 mb-4 text-sm">
            {postData.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {postData.title}
          </h1>

          <div className="flex justify-center items-center space-x-4 text-gray-300 text-sm">
            <div className="flex items-center space-x-2">
              <User size={16} />
              <span>{postData.author}</span>
            </div>
            <div className="h-4 w-px bg-gray-600"></div>
            <div className="flex items-center space-x-2">
              <Calendar size={16} />
              <span>{postData.date}</span>
            </div>
            <div className="h-4 w-px bg-gray-600"></div>
            <div className="flex items-center space-x-2">
              <Clock size={16} />
              <span>{postData.readTime}</span>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Main Content with Sidebar */}
      <div className="wrapper mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="md:col-span-2 bg-white p-8 rounded-2xl">
          {/* Hero Image */}
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            src={postData.heroImage}
            alt={postData.title}
            className="w-full h-96 object-cover rounded-2xl mb-12 shadow-lg"
          />

          {/* Content */}
          <div className="prose prose-slate max-w-none">
            {postData.content.map((block, index) => {
              switch (block.type) {
                case "paragraph":
                  return (
                    <p key={index} className="mb-6 text-slate-700">
                      {block.text}
                    </p>
                  );
                case "heading":
                  return (
                    <h2
                      key={index}
                      className="text-3xl font-bold mt-8 mb-4 text-slate-900"
                    >
                      {block.text}
                    </h2>
                  );
                case "quote":
                  return (
                    <blockquote
                      key={index}
                      className="border-l-4 border-slate-900 pl-6 py-4 my-8 italic text-xl text-slate-600"
                    >
                      {block.text}
                    </blockquote>
                  );
                default:
                  return null;
              }
            })}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-6 border-t border-gray-200">
            <div className="flex items-center space-x-3">
              <span className="font-medium text-slate-700">Tags:</span>
              {postData.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-slate-700 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share */}
          <div className="mt-8 flex justify-center space-x-4">
            <button className="bg-slate-900 text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-slate-800 transition-colors">
              <Share2 size={20} />
              <span>Share Article</span>
            </button>
          </div>
        </div>

        {/* Related Posts Sidebar */}
        <div className="md:col-span-1 bg-white p-6 rounded-2xl sticky top-8 self-start">
          <h3 className="text-2xl font-bold mb-6 text-slate-900">
            Related Posts
          </h3>
          <div className="space-y-6">
            {relatedPosts.map((post) => (
              <div
                key={post.id}
                className="group flex items-center space-x-4 hover:bg-gray-100 p-4 -mx-4 rounded-lg transition-colors"
              >
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-20 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900 group-hover:text-slate-700 transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-sm text-slate-600 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-slate-500">
                      {post.author}
                    </span>
                    <ArrowRight
                      size={16}
                      className="text-slate-500 group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
