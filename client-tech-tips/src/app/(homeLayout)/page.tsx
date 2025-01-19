"use client";
import { useState } from "react";

type TTabs = {
  name: string;
  content: string;
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("posts");

  const tabs: TTabs[] = [
    { name: "Posts", content: "Post for all users" },
    { name: "Following", content: "Following posts" },
  ];

  return (
    <main className="flex-auto bg-white p-4 border-x border-gray-300">
      <header className="sticky top-0 bg-white py-4 z-10 border-b border-gray-300">
        <div className="flex justify-between">
          {tabs?.map((tab: TTabs, index) => (
            <button key={index} onClick={() => setActiveTab(tab?.name)}>
              {tab?.content}
            </button>
          ))}
        </div>
      </header>
      <section className="mt-4 space-y-6">
        <div>
          <p className="text-gray-700">
            {tabs.find((tab) => tab.name === activeTab)?.content}
          </p>
        </div>
      </section>
    </main>
  );
}
