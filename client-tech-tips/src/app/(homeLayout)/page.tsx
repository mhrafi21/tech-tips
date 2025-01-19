"use client";
import { useState } from "react";

type TTabs = {
  name: string;
  content: string;
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("Posts");

  const tabs: TTabs[] = [
    { name: "Posts", content: "Post for all users" },
    { name: "Following", content: "Following posts" },
  ];

  const handleReferesh = (tab: TTabs) => {
    setActiveTab(tab.name);
  };

  return (
    <main className="flex-auto bg-white p-4 border-x border-gray-300">
      <header className="sticky top-0 bg-white py-4 z-10 border-gray-300">
        <div className="flex justify-between">
          {tabs &&
            tabs?.map((tab: TTabs, index) => (
              <button
                className={` ${tab.name === activeTab ? "bg-gray-200" : ""}  flex-1 py-2`}
                key={index}
                onClick={() => handleReferesh(tab as TTabs)}
              >
                {tab?.content}
              </button>
            ))}
        </div>
      </header>
      <section className="mt-4 space-y-6">
        <div>
          <p className="text-gray-700">
            {tabs && tabs.find((tab) => tab.name === activeTab)?.content}
          </p>
        </div>
      </section>
    </main>
  );
}
