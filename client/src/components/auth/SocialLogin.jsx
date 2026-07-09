import { FcGoogle } from "react-icons/fc";

function SocialLogin() {
  return (
    <div className="space-y-6">

      {/* Divider */}

      <div className="flex items-center">

        <div className="flex-1 h-px bg-slate-300"></div>

        <span className="px-4 text-sm text-slate-500">

          OR

        </span>

        <div className="flex-1 h-px bg-slate-300"></div>

      </div>

      {/* Google Button */}

      <button
        className="
          w-full
          flex
          items-center
          justify-center
          gap-3
          border
          border-slate-300
          rounded-xl
          py-3
          font-medium
          bg-white
          hover:bg-slate-50
          hover:shadow-md
          transition-all
          duration-300
        "
      >
        <FcGoogle size={24} />

        Continue with Google

      </button>

    </div>
  );
}

export default SocialLogin;