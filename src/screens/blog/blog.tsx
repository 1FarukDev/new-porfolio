import React from "react";

const blogs = [
  {
    title: "Understanding React Server Components",
    date: "Feb 2025",
    readTime: "8 mins read",
    excerpt:
      "A deep dive into how React Server Components work and when you should use them.",
  },
  {
    title: "Next.js App Router: The Future of Routing",
    date: "Jan 2025",
    readTime: "12 mins read",
    excerpt:
      "Exploring the new App Router in Next.js and how it simplifies building scalable apps.",
  },
  {
    title: "Tailwind CSS Best Practices",
    date: "Dec 2024",
    readTime: "6 mins read",
    excerpt:
      "Learn how to write clean, maintainable, and scalable styles with Tailwind CSS.",
  },
];

function Blogs() {
  return (
    <section>
      {blogs.map((blog, index) => (
        <div key={index} className="flex flex-col gap-1 md:flex-row mt-10">
          <div className="w-full md:w-[30%]">
            <p className="text-foreground">{blog.date}</p>
            <p className="text-gray-500 text-sm">{blog.readTime}</p>
          </div>

          <div className="w-full md:w-[70%]">
            <h1 className="text-base border-b w-max font-normal text-foreground">
              {blog.title}
            </h1>
            <p className="text-gray-500">{blog.excerpt}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Blogs;
