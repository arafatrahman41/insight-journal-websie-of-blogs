import PropTypes from 'prop-types';
import placeHolderImage from '../assets/404.jpg'
import { Link } from 'react-router-dom';

const Blog = ({blog}) => {
    const {cover_image, title, description, published_at, id} = blog;
    return (
       <div className='border border-warning hover:scale-105 transition'>
            <Link to = {`/blog/${id}`}
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src={cover_image || placeHolderImage}
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                {title}
              </h3>
              <span className="text-sm dark:text-gray-600">
                {new Date(published_at).toLocaleDateString()}
              </span>
              <p>
              {description}
              </p>
            </div>
          </Link>
       </div>
    );
}

Blog.propTypes = {
    blog: PropTypes.object
};

export default Blog;