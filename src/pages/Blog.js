import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import BlogPost from "../components/BlogPost";

// Blog List Component
const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    // Use Webpack's require.context to dynamically import markdown files
    const context = require.context("../blogs", false, /\.md$/);
    const blogFiles = context.keys().map((fileName) => {
      const fileContent = context(fileName).default; // Markdown content
      const { content, data } = matter(fileContent); // Parse metadata and content
      // Resolve profile picture paths
      const authors = data.authors.map((author) => ({
        ...author,
        profilePic: require("../assets/people/" + author.profilePic), // Resolve image path dynamically
      }));
      return { ...data, authors, content: String(content) }; // Ensure content is a string
    });

    setBlogs(blogFiles);
  }, []);

  // Show the full blog post when a blog is clicked
  if (selectedBlog) {
    return (
      <BlogPost
        title={selectedBlog.title}
        authors={selectedBlog.authors}
        date={selectedBlog.date}
        content={selectedBlog.content}
        onBack={() => setSelectedBlog(null)}
      />
    );
  }

  return (
    <section className="py-12 min-h-screen bg-gradient-to-br from-blue-800 to-blue-500 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section title */}
        <h2 className="text-5xl font-extrabold text-center mb-12 tracking-wide">
          Our Blogs
        </h2>

        {/* Blog list */}
        <div className="space-y-8">
          {blogs.map((blog, index) => {
            // Extract the first paragraph
            const firstParagraph = blog.content.split("\n\n")[0];
            const hasMoreContent = blog.content.split("\n\n").length > 1;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-lg shadow-lg p-6 bg-white cursor-pointer hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
                onClick={() => setSelectedBlog(blog)}
              >
                {/* Blog title */}
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  {blog.title}
                </h3>

                {/* Blog date */}
                <p className="text-sm text-gray-500 mb-4">
                  Published on{" "}
                  {new Date(blog.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>

                {/* Author list */}
                <div className="flex space-x-4 mb-4">
                  {blog.authors.map((author, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      {/* Profile picture */}
                      <img
                        src={author.profilePic}
                        alt={`${author.name}'s profile`}
                        className="w-12 h-12 rounded-full shadow-md border-2 border-gray-300"
                      />
                      {/* Author name */}
                      <span className="text-gray-600 font-medium">
                        {author.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Blog content preview */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {firstParagraph}
                  {hasMoreContent && "..."}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const BlogPage = () => {
  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <Navbar />
      <div className="relative">
        <BlogList />
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
