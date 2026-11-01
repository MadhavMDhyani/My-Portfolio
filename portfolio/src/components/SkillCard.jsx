const SkillCard = ({ icon, skillName, description, progress }) => {
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
              <p className="text-xs text-indigo-300 font-semibold ml-2">
                {progress}%
              </p>
            </div>

            {/* Progress track */}
            <div className="w-full bg-indigo-950/60 rounded-full h-1.5 mt-2 overflow-hidden border border-ghost/10">
              <div
                className="h-full bg-gradient-to-r from-indigo-brand via-indigo-400 to-ghost rounded-full transition-all duration-700 ease-out shadow-[0_0_8px_rgba(122,104,224,0.6)]"
                style={{ width: `${progress}%` }}
              />
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