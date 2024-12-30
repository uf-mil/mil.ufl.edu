import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BlogPost = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const context = require.context("../blogs", false, /\.md$/);
    const fileName = `./${slug}.md`;
    if (context.keys().includes(fileName)) {
      const fileContent = context(fileName).default;
      const { content, data } = matter(fileContent);
      const authors = data.authors.map((author) => ({
        ...author,
        profilePic: require("../assets/people/" + author.profilePic),
      }));
      setBlog({ ...data, authors, content: String(content) });
    } else {
      navigate("/blog");
    }
  }, [slug, navigate]);

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 text-gray-800 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <button
            onClick={() => navigate(-1)}
            className="mb-6 text-blue-500 hover:underline"
          >
            ← Back to all blogs
          </button>
          <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>
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
                <span className="text-gray-600 font-medium">{author.name}</span>
              </div>
            ))}
          </div>
          <div className="prose max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {blog.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;
