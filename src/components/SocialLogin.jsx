import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Login With</h2>
      <div className="flex flex-col  gap-3">
        <button className="btn border-radius-3 hover:bg-blue-600 hover:text-white transition duration-300 ">
          <FcGoogle /> Login With Google
        </button>
        <button className="btn border-radius-3 hover:bg-gray-600 hover:text-white transition duration-300">
          <FaGithub /> Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
