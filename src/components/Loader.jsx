import { ScaleLoader } from "react-spinners";
const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-122px)]">
          <ScaleLoader size={100} color="orange" />  
        </div>
    );
};

export default Loader;