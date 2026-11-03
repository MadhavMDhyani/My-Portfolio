const SkillCard = ({ icon, skillName, description, level = "Core" }) => {
  return (
    <div className="glass rounded-2xl p-5 border border-ghost/15 hover:border-ghost/35 transition-all duration-300 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center gap-3.5 mb-3">
          <div className="w-11 h-11 rounded-xl glass flex items-center justify-center text-indigo-300 text-xl border border-ghost/20 shadow-inner">
            {icon}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <p className="text-ghost font-semibold text-sm sm:text-base truncate">
                {skillName}
              </p>
              <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-ghost/25 text-indigo-200">
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