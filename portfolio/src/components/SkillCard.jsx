const SkillCard = ({ icon, skillName, description, level = "Core" }) => {
  const getBadgeStyle = (lvl) => {
    switch (lvl) {
      case "Core":
        return "bg-indigo-400/25 text-ghost border-indigo-200/40 shadow-[0_0_10px_rgba(122,104,224,0.35)]";
      case "Comfortable":
        return "bg-indigo-700/25 text-indigo-200 border-indigo-400/25";
      case "Learning":
        return "bg-ghost/10 text-indigo-300 border-ghost/15";
      default:
        return "bg-indigo-400/20 text-ghost border-ghost/20";
    }
  };

  return (
    <div className="glass rounded-2xl p-5 border border-ghost/15 hover:border-ghost/35 transition-all duration-300 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center gap-3.5 mb-3">
          <div className="w-11 h-11 rounded-xl glass flex items-center justify-center text-indigo-300 text-xl border border-ghost/20 shadow-inner">
            {icon}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <p className="text-ghost font-semibold text-sm sm:text-base truncate">
                {skillName}
              </p>
              <span
                className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${getBadgeStyle(
                  level
                )}`}
              >
                {level}
              </span>
            </div>
          </div>
        </div>

        <p className="text-xs text-indigo-200/85 leading-relaxed mt-2 line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SkillCard;