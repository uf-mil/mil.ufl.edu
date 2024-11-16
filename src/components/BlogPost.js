import React from "react";
import ReactMarkdown from "react-markdown";

const BlogPost = ({ title, authors, date, content, onBack }) => {
  return (
    <div className="py-8 bg-white max-w-6xl mx-auto px-4">
      <button
        onClick={onBack}
        className="text-blue-600 underline mb-4 hover:text-blue-800"
      >
        ← Back to Blogs
      </button>
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-gray-600 mb-4">{date}</p>
      <div className="flex items-center space-x-4 mb-6">
        {authors.map((author, index) => (
          <div key={index} className="flex items-center space-x-2">
            <img
              src={author.profilePic}
              alt={`${author.name}'s profile`}
              className="w-10 h-10 rounded-full"
            />
            <span className="text-gray-800 font-medium">{author.name}</span>
          </div>
        ))}
      </div>
      <div className="prose">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogPost;
