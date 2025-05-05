import { Link } from "react-router";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <div>
            <h2 className="text-2xl font-semibold text-center py-4 pt-6">
              Register Your Account
            </h2>
          </div>
          <hr className="border-t-2 border-gray-200 py-4" />
          <form className="fieldset">
            <label className="label text-black font-bold">Your Name</label>
            <input type="text" className="input" placeholder="Name" />
            <label className="label  text-black font-bold pt-3">
              Photo URL
            </label>
            <input type="text" className="input" placeholder="Photo-url" />
            <label className="label  text-black font-bold pt-3">
              Email Address
            </label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label  text-black font-bold pt-3">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div className="flex justify-between items-center pt-3 gap-2">
              <input type="checkbox" className="checkbox checkbox-sm" />
              <p>Accept Trems & Conditions</p>
            </div>

            <button className="btn btn-neutral mt-4">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
