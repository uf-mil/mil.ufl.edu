import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import matter from "gray-matter";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const context = require.context("../blogs", false, /\.md$/);
    const blogFiles = context.keys().map((fileName) => {
      const fileContent = context(fileName).default;
      const { content, data } = matter(fileContent);
      // make unique slug for each post
      const slug = fileName.replace("./", "").replace(".md", "");
      // ensure all images are require'd in
      const processedContent = content.replace(
        /!\[([^\]]*)\]\((\.\/[^)]+)\)/g,
        (match, altText, relativePath) => {
          try {
            const resolvedPath = require(
              `../assets/${relativePath.replace("../assets/", "")}`,
            );
            return `![${altText}](${resolvedPath})`;
          } catch {
            console.error(`Error resolving image path: ${relativePath}`);
            return match;
          }
        },
      );
      const authors = data.authors.map((author) => ({
        ...author,
        profilePic: require("../assets/people/" + author.profilePic),
      }));
      return { ...data, authors, content: String(processedContent), slug };
    });

    setBlogs(blogFiles);
  }, []);

  return (
    <section className="py-12 min-h-screen bg-gradient-to-br from-blue-800 to-blue-500 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center mb-12 tracking-wide">
          Our Blogs
        </h2>
        {blogs.length === 0 ? (
          <p className="text-center text-lg text-gray-100">
            There are no blogs right now, check back later!
          </p>
        ) : (
          <div className="space-y-8">
            {blogs.map((blog, index) => (
              <Link
                to={`/blog/${blog.slug}`}
                key={index}
                className="text-blue-500 font-medium mt-4 inline-block"
              >
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg shadow-lg p-6 bg-white hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
                >
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">
                    {blog.title}
                  </h3>
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
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {blog.content.slice(0, 400)}...
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
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
