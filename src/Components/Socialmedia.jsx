import { FaGoogle, FaGithub  } from "react-icons/fa";
const Socialmedia = () => {
    return (
        <div className="w-full  text-left space-y-3">
            <h2 className="font-semibold">Login With</h2>
            <button className="gap-2 border rounded-lg w-full flex justify-center items-center px-2 py-2">
                <FaGoogle></FaGoogle>
                Login in with Google
            </button>
            <button className="gap-2 border rounded-lg w-full flex justify-center items-center px-2 py-2">
                <FaGithub></FaGithub>
                Login in with Github
            </button>
        </div>
    );
};

export default Socialmedia;