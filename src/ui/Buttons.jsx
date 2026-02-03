const Button = ({ title = "Button", to, icon, primary, ...rest }) => {
  return (
    <button
    to={to}
      className={`px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1
      ${
        primary
          ? "bg-amber-500 text-black font-bold hover:bg-amber-400 hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
          : "bg-linear-to-br from-cyan-400 to-blue-600 text-white hover:from-cyan-500 hover:to-blue-700"
      }`}
      {...rest}
    >
      <span className="flex items-center gap-2">
        {title}
        {icon && icon}
      </span>
    </button>
  );
};

export default Button;
