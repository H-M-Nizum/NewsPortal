import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const RegisterPage = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const handelRegisterForm = (e) => {
    e.preventDefault();
    // Get form data
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    const ckeckbox = e.target.ckeckbox.checked;
    const user = { name, email, password, photo, ckeckbox };
    console.log(user);

    // Call createUser function from AuthProvider
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.error("Error creating user:", error.code, " : ", error.message);
      });
  };
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
          <form onSubmit={handelRegisterForm} className="fieldset">
            <label className="label text-black font-bold">Your Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
            />
            <label className="label  text-black font-bold pt-3">
              Photo URL
            </label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo-url"
            />
            <label className="label  text-black font-bold pt-3">
              Email Address
            </label>
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
            <div className="flex justify-between items-center pt-3 gap-2">
              <input
                name="ckeckbox"
                type="checkbox"
                className="checkbox checkbox-sm"
              />
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
