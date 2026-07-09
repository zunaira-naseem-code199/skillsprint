function AuthInput({
  label,
  type,
  placeholder,
  value,
  onChange,
  icon,
  name,
}) {
  return (
    <div className="space-y-2">

      <label className="text-sm font-semibold text-slate-700">

        {label}

      </label>

      <div className="flex items-center gap-3 border border-slate-300 rounded-xl px-4 py-3 bg-white focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-200 transition-all duration-300">

        <span className="text-slate-400">

          {icon}

        </span>

        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="flex-1 outline-none bg-transparent text-slate-700 placeholder:text-slate-400"
        />

      </div>

    </div>
  );
}

export default AuthInput;