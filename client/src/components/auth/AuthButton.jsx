function AuthButton({ text, type = "submit", onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] hover:from-violet-700 hover:to-indigo-700 transition-all duration-300"
    >
      {text}
    </button>
  );
}

export default AuthButton;