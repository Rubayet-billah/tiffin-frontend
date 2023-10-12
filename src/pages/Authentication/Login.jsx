/* eslint-disable react/no-unescaped-entities */
import loginImage from "../../assets/login.png";
const Login = () => {
  return (
    <div>
      <div className="hero min-h-[70vh]">
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-24 ">
          <div className="text-center lg:text-left">
            <img src={loginImage} className="w-full max-w-md" alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <p className="text-sm text-gray-400 mt-2">
                  Haven't an account?{" "}
                  <a href="" className="text-blue-600 font-bold">
                    Sign Up
                  </a>
                </p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-warning">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
