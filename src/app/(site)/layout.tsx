import React from "react";
import { MainSideBar as SideBar } from "../../components/dashboard/main-sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex w-screen h-screen p-xl relative justify-between divide-x-2 border-2 box-border">
      <SideBar />
      {children}
    </main>
  );
};

export default DashboardLayout;
