const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding React State Management",
      date: "Dec 28, 2024",
      summary:
        "An in-depth guide on how to effectively manage state in React applications using useState, Context API, and third-party libraries like Redux.",
    },
    {
      id: 2,
      title: "Getting Started with Docker for Web Development",
      date: "Dec 15, 2024",
      summary:
        "Learn the basics of Docker and how it can streamline the development and deployment process for web applications.",
    },
    {
      id: 3,
      title: "Exploring AWS Services for MERN Developers",
      date: "Nov 30, 2024",
      summary:
        "A beginner-friendly guide to using AWS services like S3, ECS, and Lambda to enhance your MERN stack projects.",
    },
  ];

  return (
    <div className="p-6 scrollbar-hide  text-white rounded-xl space-y-8 max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-semibold">My Blog</h1>
        <p className="text-gray-400">
          Sharing knowledge and experiences in web development.
        </p>
      </div>

      <div className="space-y-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="p-6 bg-[#272729]   rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-500 text-sm">{post.date}</p>
            <p className="mt-2 text-gray-300">{post.summary}</p>
            <button className="mt-4 p-2 px-7 font-medium bg-white text-black  rounded-lg  ">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
