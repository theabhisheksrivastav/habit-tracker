import React from "react";
import { Outlet } from "react-router-dom";
import MenuAppBar from "./layout/MenuAppBar";


export default function AppLayout() {
  return (
    <>
      <MenuAppBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
