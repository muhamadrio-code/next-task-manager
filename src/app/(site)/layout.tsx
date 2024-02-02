import React from "react";
import { MainSideBar as SideBar } from "../../components/dashboard/main-sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex w-screen h-screen p-[44px] relative justify-between gap-8">
      <SideBar />
      <section className=" w-full h-full bg-card border-border border-2 flex flex-col p-4 rounded-2xl">
        {children}
      </section>
    </main>
  );
};

export default DashboardLayout;
