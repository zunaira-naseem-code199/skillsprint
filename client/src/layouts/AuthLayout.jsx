import Logo from "../components/auth/Logo";

function AuthLayout({ children }) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-slate-100">

      {/* Left Side */}

      <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-violet-700 via-purple-700 to-indigo-800 text-white p-12">

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4">

    <Logo />

</div>

        <div className="mt-20 text-center max-w-md">

          <h1 className="text-6xl font-bold leading-[1.25]">

            <span className="text-white">
        Learn.
    </span>

    <br />

    <span className="text-violet-200">
        Build.
    </span>

    <br />

    <span className="text-white">
        Grow.
    </span>

          </h1>

          <p className="mt-6 text-lg text-violet-100">

            Transform your learning journey into measurable progress with SkillSprint.

          </p>

        </div>

        {/* Decorative Card */}

        <div className="mt-24 bg-white/10 backdrop-blur-md rounded-3xl p-6 w-full max-w-sm">

          <h3 className="font-semibold text-xl">

            🚀 Track your growth

          </h3>

          <p className="mt-3 text-violet-100">

            Goals • Tasks • Journal • Certificates • Analytics

          </p>

        </div>

      </div>

      {/* Right Side */}

      <div className="flex justify-center items-center p-8">

        {children}

      </div>

    </div>
  );
}

export default AuthLayout;