// import { useState } from "react";
// import { categories, posts } from "../utils/blogs";
// import CollectionOfButton from "../components/CollectionOfButton";

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm6.293-6.293l4 4a1 1 0 11-1.414 1.414l-4-4a1 1 0 011.414-1.414z"
    />
  </svg>
);

// const BlogPost = ({ title, date, readTime, category, excerpt, tags }) => (
//   <div className="bg-zinc-900 rounded-lg p-4 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-800/50">
//     <div className="flex items-center gap-2 mb-2">
//       <span className="bg-zinc-800 text-white text-xs px-3 py-1 rounded-full">
//         {category}
//       </span>
//     </div>
//     <h2 className="text-lg sm:text-xl font-bold text-white mb-2">{title}</h2>
//     <div className="flex items-center gap-4 text-zinc-400 text-xs sm:text-sm mb-4">
//       <div className="flex items-center gap-1">
//         {/* <CalendarIcon /> */}
//         {date}
//       </div>
//       <div className="flex items-center gap-1">
//         {/* <ClockIcon /> */}
//         {readTime} min read
//       </div>
//     </div>
//     <p className="text-zinc-300 text-sm sm:text-base mb-4 line-clamp-3">
//       {excerpt}
//     </p>
//     <div className="flex flex-wrap gap-2 mb-4">
//       {tags.map((tag, index) => (
//         <span
//           key={index}
//           className="bg-zinc-800 text-zinc-300 text-xs px-3 py-1 rounded-full"
//         >
//           #{tag}
//         </span>
//       ))}
//     </div>
//     <button className="flex items-center gap-2 text-white hover:text-zinc-300 transition-colors text-sm">
//       {/* Read More <ChevronRightIcon /> */}
//     </button>
//   </div>
// );

// const Blogs = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   return (
//     <div className="min-h-screen text-white p-4 max-w-6xl mx-auto">
//       <div className="text-center mb-8 sm:mb-12">
//         <h1 className="text-2xl sm:text-3xl text-nowrap font-bold mb-3 sm:mb-4">
//           My Blog
//         </h1>
//         <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
//           Sharing my thoughts and experiences about web development, programming
//           best practices, and the latest tech trends.
//         </p>
//       </div>

//       <div className="mb-6 sm:mb-8 space-y-4">
//         <div className="relative px-4">
//           <span className="absolute left-7 top-1/2 transform -translate-y-1/2 text-zinc-400">
//             {/* <SearchIcon /> */}
//           </span>
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             placeholder="Search articles..."
//             className="w-full bg-zinc-900 rounded-lg pl-12 pr-4 py-3 text-white placeholder-zinc-500 outline-none focus:ring-1 focus:ring-zinc-700 transition-shadow text-sm sm:text-base"
//           />
//         </div>

//         {/* <div className="flex justify-center gap-2 overflow-x-auto pb-2 px-4 scrollbar-hide">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={`px-5 py-2 rounded-lg whitespace-nowrap transition-colors text-sm ${
//                 selectedCategory === category
//                   ? "bg-white text-black"
//                   : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div> */}

//         <CollectionOfButton buttons={categories} />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 px-4">
//         {posts.map((post, index) => (
//           <BlogPost key={index} {...post} />
//         ))}
//       </div>

//       <div className="flex justify-center mt-8">
//         <button className="bg-white text-black font-medium px-6 py-2 rounded-lg  text-sm sm:text-base">
//           Load More Posts
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Blogs;

import { useState } from "react";
import { categories, posts } from "../utils/blogs";
import CollectionOfButton from "../components/CollectionOfButton";
import ComponentBox from "../components/ComponentBox";
import TrailingButton from "../components/TrailingButton";

const BlogPost = ({ title, date, readTime, category, excerpt, tags }) => (
  <div>
    <div>
      <span>{category}</span>
    </div>
    <h2>{title}</h2>
    <div>
      <div>{date}</div>
      <div>{readTime} min read</div>
    </div>
    <p>{excerpt}</p>
    <div>
      {tags.map((tag, index) => (
        <span key={index}>#{tag}</span>
      ))}
    </div>
    <button>{/* Read More */}</button>
  </div>
);

const Blogs = () => {
  return (
    <div className="flex min-h-72 align-bottom rounded-lg justify-center font-normal italic  h-full">
      <p className=" flex flex-col justify-center text-3xl">
        Under Maintainence.
      </p>
    </div>
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSelectedCategory = (selected: string) => {
    setSelectedCategory(selected);
  };

  if (true) {
    return (
      <ComponentBox
        header="My Blogs"
        description=" Sharing my thoughts and experiences about web development, programming
          best practices, and the latest tech trends."
      >
        <div className="relative px-4">
          <span className="absolute left-7 top-1/2 transform -translate-y-1/2 text-zinc-400">
            <SearchIcon />
          </span>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search articles..."
            className="w-full bg-zinc-900 rounded-lg pl-12 pr-4 py-3 text-white placeholder-zinc-500 outline-none focus:ring-1 focus:ring-zinc-700 transition-shadow text-sm sm:text-base"
          />
        </div>

        <div className="my-6">
          <CollectionOfButton
            buttons={categories}
            onClick={handleSelectedCategory}
            selected={selectedCategory}
          />
        </div>

        <div>
          {posts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>

        <TrailingButton onClick={() => {}} text="Show More..." />
      </ComponentBox>
    );
  }
};

export default Blogs;
