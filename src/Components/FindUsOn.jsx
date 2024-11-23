import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUsOn = () => {
    return (
        <div className="text-left space-y-3">
            <h2 className="font-semibold mt-3">FIND US ON</h2>
            <div className="join flex join-vertical *:bg-base-100">
                <button className="btn join-item justify-start">
                    <FaFacebook></FaFacebook>
                    Facebook
                    </button>
                <button className="btn join-item justify-start">
                    <FaTwitter></FaTwitter>
                Twitter

                    </button>
                <button className="btn join-item justify-start">
                    <FaInstagram></FaInstagram>
                    Instagram
                    </button>
            </div>
        </div>
    );
};

export default FindUsOn;