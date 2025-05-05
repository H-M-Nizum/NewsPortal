import { Link } from "react-router";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <div>
            <h2 className="text-2xl font-semibold text-center py-4 pt-6">
              Login Your Account
            </h2>
          </div>
          <hr className="border-t-2 border-gray-200 py-4" />
          <form className="fieldset">
            <label className="label  text-black font-bold">Email Address</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label  text-black font-bold pt-3">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
            <p className="text-center pt-2">
              Don't Have An Account?{" "}
              <Link to={"/auth/register"} className="text-red-600">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
