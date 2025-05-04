import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";

const Findus = () => {
  return (
    <div>
      <h2 className="pt-5 pb-3">Find Us On</h2>
      <div className="join join-vertical text-left w-full ">
        <button className="btn join-item justify-start">
          <FaFacebook /> Facebook
        </button>
        <button className="btn join-item justify-start ">
          <FaTwitter />
          Twitter
        </button>
        <button className="btn join-item justify-start">
          <FaInstagramSquare />
          Instagram
        </button>
      </div>
    </div>
  );
};

export default Findus;
