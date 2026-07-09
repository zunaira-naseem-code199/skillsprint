import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import AuthInput from "./AuthInput";
import AuthButton from "./AuthButton";
import SocialLogin from "./SocialLogin";

import { loginUser } from "../../services/authService";

function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    try {
      setLoading(true);

      const response = await loginUser({
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem("token", response.data.token);

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      alert("Login Successful 🎉");

      navigate("/");

    } catch (err) {
      setError(
        err.response?.data?.message || "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md"
    >
      <h2 className="text-3xl font-bold text-slate-800">
        Welcome Back 👋
      </h2>

      <p className="text-slate-500 mt-2 mb-8">
        Login to continue your learning journey.
      </p>

      <div className="space-y-5">

        <AuthInput
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          name="email"
          icon={<Mail size={18} />}
        />

        <div>

          <label className="text-sm font-semibold text-slate-700">
            Password
          </label>

          <div className="mt-2 flex items-center gap-3 border border-slate-300 rounded-xl px-4 py-3 focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-200 transition-all">

            <Lock size={18} className="text-slate-400" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="flex-1 outline-none"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>

          </div>

        </div>

      </div>

      {error && (
        <p className="text-red-500 text-sm mt-4">
          {error}
        </p>
      )}

      <div className="flex justify-between items-center mt-5">

        <label className="flex items-center gap-2 text-sm">

          <input
            type="checkbox"
            name="remember"
            checked={formData.remember}
            onChange={handleChange}
          />

          Remember me

        </label>

        <button
          type="button"
          className="text-violet-600 text-sm hover:underline"
        >
          Forgot Password?
        </button>

      </div>

      <div className="mt-6">

        <AuthButton
          text={loading ? "Logging in..." : "Login"}
        />

      </div>

      <div className="mt-6">

        <SocialLogin />

      </div>

      <p className="text-center text-sm mt-8">

        Don't have an account?{" "}

        <Link
          to="/register"
          className="text-violet-600 font-semibold hover:underline"
        >
          Register
        </Link>

      </p>

    </form>
  );
}

export default LoginForm;