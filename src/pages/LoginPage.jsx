import { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const LoginPage = () => {
  const { signUser } = useContext(AuthContext);
  // Show error message
  const [errorMessage, setErrorMessage] = useState("");

  // navigate to previous page or home page after login
  const navigate = useNavigate();

  const location = useLocation();
  console.log(location);
  const handelLoginForm = (e) => {
    e.preventDefault();
    // Get form data
    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = { email, password };
    console.log(user);

    // Call signUser function from AuthProvider
    signUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(location?.state || "/"); // Navigate to the previous page or home page
      })
      .catch((error) => {
        console.error("Error signing in:", error.code, " : ", error.message);
        setErrorMessage(error.message);
      });
  };
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
          <form onSubmit={handelLoginForm} className="fieldset">
            <label className="label  text-black font-bold">Email Address</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />
            <label className="label  text-black font-bold pt-3">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <div className="error-message text-red-600">{errorMessage}</div>
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
