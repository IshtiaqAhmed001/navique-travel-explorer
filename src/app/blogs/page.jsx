import React from "react";
import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: "1",
    title: "Top 10 Tropical Destinations for 2026",
    excerpt:
      "Discover the most beautiful tropical destinations you should visit in 2026 for relaxation and adventure.",
    image: "https://i.ibb.co/4g15PhMc/image.png",
    date: "Jan 12, 2026",
  },
  {
    id: "2",
    title: "How to Plan a Budget-Friendly Vacation",
    excerpt:
      "Learn smart tips to plan an unforgettable trip without breaking your budget.",
    image: "https://i.ibb.co/Q34N6kFP/image.png",
    date: "Jan 05, 2026",
  },
  {
    id: "3",
    title: "Things to Know Before Booking Your First Trip",
    excerpt:
      "Important things every traveler should know before booking their first journey.",
    image: "https://i.ibb.co/4g15PhMc/image.png",
    date: "Dec 28, 2025",
  },
];

const BlogsPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">Travel Blogs</h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Travel tips, destination guides, and inspiration to help you plan your
          next adventure.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid gap-8 md:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="card bg-base-100 shadow-md hover:shadow-lg transition"
          >
            <figure className="relative h-48">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </figure>

            <div className="card-body">
              <p className="text-sm text-gray-400">{blog.date}</p>
              <h2 className="card-title text-lg">{blog.title}</h2>
              <p className="text-sm text-gray-500">{blog.excerpt}</p>

              <div className="card-actions mt-4">
                <Link
                  href={`/blogs/${blog.id}`}
                  className="btn btn-link btn-sm text-primary px-0"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
