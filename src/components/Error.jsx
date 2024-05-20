import { Link } from 'react-router-dom';
import error from '../assets/404.jpg'
const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <img className='w-96' src={error} alt="" />
            <h2 className='text-4xl mb-4'>Oops!!!</h2>
            <Link to='/'><button className='btn btn-warning text-lg'>Go to Home</button></Link>
        </div>
    );
};

export default Error;