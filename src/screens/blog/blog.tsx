import React from "react";

const blogs = [
  {
    title: "Building real-time systems with WebSockets",
    date: "Apr 2024",
    readTime: "10 mins",
    excerpt: "Lessons learned building live collaboration features at scale.",
  },
  {
    title: "Designing systems that scale",
    date: "Mar 2024",
    readTime: "14 mins",
    excerpt: "From monolith to microservices — mistakes we made and what we learned.",
  },
  {
    title: "Why I switched from TypeScript strict mode",
    date: "Feb 2024",
    readTime: "8 mins",
    excerpt: "Sometimes the strictest rules aren't always the best for productivity.",
  },
];

function Blogs() {
  return (
    <section>
      {blogs.map((blog, index) => (
        <div key={index} className="py-8 border-b border-gray-200 dark:border-gray-800 last:border-b-0">
          <h2 className="text-lg font-medium text-foreground mb-2 hover:text-gray-600 dark:hover:text-gray-400 transition-colors cursor-pointer">
            {blog.title}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{blog.date} — {blog.readTime}</p>
          <p className="text-base text-gray-700 dark:text-gray-300">{blog.excerpt}</p>
        </div>
      ))}
    </section>
  );
}

export default Blogs;
