import Header from "@/src/components/header/Header";
import Sidebar from "@/src/components/Sidebar/Sidebar";

import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-full w-full">
        {/* Sidebar */}
        <aside className=" flex-1 sm:block hidden bg-white shadow-md p-4">
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">Logo</h1>
            <ul className="space-y-2">
              <li className="hover:text-blue-500 cursor-pointer">Home</li>
              <li className="hover:text-blue-500 cursor-pointer">Explore</li>
              <li className="hover:text-blue-500 cursor-pointer">
                Notifications
              </li>
              <li className="hover:text-blue-500 cursor-pointer">Messages</li>
              <li className="hover:text-blue-500 cursor-pointer">Bookmarks</li>
            </ul>
          </div>
        </aside>
      

      {children}
      {/* Right Panel */}
      <aside className="flex-1 bg-white shadow-md p-4 hidden lg:block">
        <h3 className="text-lg font-bold mb-4">Trending</h3>
        <ul className="space-y-2">
          <li className="text-gray-600">#Nextjs</li>
          <li className="text-gray-600">#React</li>
          <li className="text-gray-600">#TailwindCSS</li>
        </ul>
      </aside>
    </div>
  );
};

export default layout;
