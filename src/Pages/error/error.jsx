import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="flex flex-col items-center">
            <img className="w-2/4 text-center" src="/src/assets/error.jpg" alt="" />
            <Link className="btn primary-btn" to='/'>Back to Home</Link>
        </div>
    );
};

export default Error;