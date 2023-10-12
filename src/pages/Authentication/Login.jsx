/* eslint-disable react/no-unescaped-entities */
import { useForm, Controller } from "react-hook-form";
import loginImage from "../../assets/login.png";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/thunkApi/thunkApi";
import { Link } from "react-router-dom";

const Login = () => {
  const { control, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(loginUser(data));
    console.log(data);
  };

  return (
    <div>
      <div className="hero min-h-[70vh]">
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-24">
          <div className="text-center lg:text-left">
            <img src={loginImage} className="w-full max-w-md" alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                      {...field}
                      required
                    />
                  )}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      type="password"
                      placeholder="password"
                      className="input input-bordered"
                      {...field}
                      required
                    />
                  )}
                />
                <p className="text-sm text-gray-400 mt-2">
                  Haven't an account?{" "}
                  <Link to="/register" className="text-blue-600 font-bold">
                    Sign Up
                  </Link>
                </p>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-warning">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
