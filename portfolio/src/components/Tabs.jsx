import { motion } from "framer-motion";

const Tabs = ({ tabList, activeTab, onChange }) => {
  return (
    <div className="flex items-center justify-center my-10 overflow-x-auto py-2 px-1">
      <div className="glass-pill p-1.5 flex items-center gap-1 sm:gap-2 border border-ghost/20 shadow-glass">
        {tabList.map((tab) => {
          const isActive = activeTab === tab.value;
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.value)}
              className={`relative px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 min-h-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                isActive ? "text-ghost font-semibold" : "text-indigo-200 hover:text-ghost"
              }`}
            >
              {tab.label}
              {isActive && (
                <motion.div
                  layoutId="activeSkillTab"
                  className="absolute inset-0 bg-indigo-400/35 border border-indigo-200/40 rounded-full -z-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]"
                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;