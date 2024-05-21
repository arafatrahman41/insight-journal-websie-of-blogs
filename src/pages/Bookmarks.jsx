import { useEffect, useState } from "react";
import Blog from "./Blog";
import { deleteBlog, getBlogs } from "../utils";
import EmptyState from "../components/EmptyState";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);

  const handleDelete = (id) => {
    deleteBlog(id);
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  };

  if(blogs.length < 1) return <EmptyState message={'No Bookmarks Available'} address={'/blogs'} label={'Go To Blogs'} ></EmptyState>

  return (
    <div className="grid px-4 sm:px-8 lg:px-12 py-8 justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <Blog
        deletable={true}
        handleDelete={handleDelete}
          key={blog.id}
          blog={blog}
        ></Blog>
      ))}
    </div>
  );
};

export default Bookmarks;
