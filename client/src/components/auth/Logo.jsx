import { Rocket } from "lucide-react";

function Logo() {
  return (
    <div className="flex items-center gap-3">

      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg">

        <Rocket className="bg-white/20" size={24} />

      </div>

      <div>

        <h1 className="text-3xl font-bold text-white">

          SkillSprint

        </h1>

        <p className="text-violet-100 text-sm">

          Learn • Build • Grow

        </p>

      </div>

    </div>
  );
}

export default Logo;