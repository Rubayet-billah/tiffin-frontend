/* eslint-disable react/no-unescaped-entities */
import { useForm, Controller } from "react-hook-form";
import loginImage from "../../assets/login.png";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/thunkApi/thunkApi";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";

const Login = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };

  useEffect(() => {
    if (user?.email) {
      toast.success("Logged in successful");
      navigate("/");
    }
  }, [user?.email, navigate]);

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
