import React from "react";
import { SideBar as SideBar } from "../../components/dashboard/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex w-screen h-screen relative justify-start items-stretch divide-x-2 border-2">
      <SideBar />
      {children}
    </main>
  );
};

export default DashboardLayout;
