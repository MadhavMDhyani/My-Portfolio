import { motion } from "framer-motion";

const Tabs = ({ tabList, activeTab, onChange }) => {
  return (
    <div className="flex items-center justify-center my-10 overflow-x-auto py-2 px-1">
      <div className="bg-[#151515] p-1.5 flex items-center gap-1 sm:gap-2 rounded-full border border-white/[0.08] shadow-md">
        {tabList.map((tab) => {
          const isActive = activeTab === tab.value;
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.value)}
              className={`relative px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 min-h-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[#FF5A1F] ${
                isActive ? "text-white font-semibold" : "text-[#8A8A8A] hover:text-white"
              }`}
            >
              <span className="relative z-10">{tab.label}</span>
              {isActive && (
                <motion.div
                  layoutId="activeSkillTab"
                  className="absolute inset-0 bg-[#FF5A1F] rounded-full z-0 shadow-sm"
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
