import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero min-h-[calc(100vh-122px)]">
      <div className="hero-content text-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Welcome to <span className="text-5xl font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 text-transparent bg-clip-text animate-gradient bg-300%">InsightJournal</span></h1>
          <p className="py-6">
            Insight Journal is your go-to platform for in-depth technology
            insights and trends. Dive into expert analyses, innovative ideas,
            and the latest tech news. Join our community of tech enthusiasts and
            thought leaders, and stay ahead in the ever-evolving world of
            technology.
          </p>
          <div className="flex justify-center gap-3">
            <Link
              to='/blogs'
              className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-warning absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                Blogs
              </span>
            </Link>
            <Link
              to='/bookmarks'
              className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-warning absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                Bookmarks
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
