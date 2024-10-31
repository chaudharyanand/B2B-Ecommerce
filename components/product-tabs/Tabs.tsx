// components/Tabs.tsx
import React, { useState } from "react";

type TabProps = {
  label: string;
  content: React.ReactNode;
};

const Tabs: React.FC<{ tabs: TabProps[] }> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="flex justify-center mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`${
              activeTab === index ? "underline" : ""
            } mx-4 text-xl font-semibold focus:outline-none`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
