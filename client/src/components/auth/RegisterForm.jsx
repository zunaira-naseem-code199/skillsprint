import { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import AuthInput from "./AuthInput";
import AuthButton from "./AuthButton";
import SocialLogin from "./SocialLogin";

import { registerUser } from "../../services/authService";

function RegisterForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      setLoading(true);

      await registerUser({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      });

      alert("Registration Successful 🎉");

      navigate("/login");
    } catch (err) {
      setError(
        err.response?.data?.message || "Registration Failed"
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
        Create Account 🚀
      </h2>

      <p className="text-slate-500 mt-2 mb-8">
        Start your learning journey with SkillSprint.
      </p>

      <div className="space-y-5">
        <AuthInput
          label="Full Name"
          name="fullName"
          type="text"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleChange}
          icon={<User size={18} />}
        />

        <AuthInput
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          icon={<Mail size={18} />}
        />

        <div>
          <label className="text-sm font-semibold text-slate-700">
            Password
          </label>

          <div className="mt-2 flex items-center gap-3 border border-slate-300 rounded-xl px-4 py-3 focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-200">
            <Lock size={18} className="text-slate-400" />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter password"
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

        <div>
          <label className="text-sm font-semibold text-slate-700">
            Confirm Password
          </label>

          <div className="mt-2 flex items-center gap-3 border border-slate-300 rounded-xl px-4 py-3 focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-200">
            <Lock size={18} className="text-slate-400" />

            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="flex-1 outline-none"
            />

            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? (
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

      <div className="mt-6">
        <AuthButton
          text={loading ? "Creating..." : "Create Account"}
        />
      </div>

      <div className="mt-6">
        <SocialLogin />
      </div>

      <p className="text-center text-sm mt-8">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-violet-600 font-semibold hover:underline"
        >
          Login
        </Link>
      </p>
    </form>
  );
}

export default RegisterForm;