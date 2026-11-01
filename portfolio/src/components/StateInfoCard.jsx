const StateInfoCard = ({ count, label }) => {
  return (
    <div className="glass rounded-3xl p-6 flex items-center gap-5 border border-ghost/15 hover:border-ghost/30 transition-all duration-300">
      <h4 className="font-display-title text-4xl sm:text-5xl text-ghost tracking-wide leading-none">
        {count}
      </h4>
      <p className="text-xs sm:text-sm font-medium text-indigo-200 leading-snug whitespace-pre-line">
        {label}
      </p>
    </div>
  );
};

export default StateInfoCard;