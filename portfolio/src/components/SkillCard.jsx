const SkillCard = ({ icon, skillName, description, level = "Core" }) => {
  return (
    <div className="bg-[#151515] rounded-2xl p-5 border border-white/[0.08] hover:border-white/[0.2] transition-colors duration-300 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center gap-3.5 mb-3">
          <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#FF5A1F] text-xl">
            {icon}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <p className="text-white font-semibold text-sm sm:text-base truncate">
                {skillName}
              </p>
              <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-white/[0.12] text-[#8A8A8A]">
                {level}
              </span>
            </div>
          </div>
        </div>

        <p className="text-xs text-[#8A8A8A] leading-relaxed mt-2 line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
