'use client';
import { useEffect, useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import NavBar from "@/components/navBar";
import News from "@/components/home";
import NewTask from "@/components/taskForm";
import DetalleTask from "@/components/taskDetail";


import { TaskProvider } from '../components/context';

export default function App() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  });

  if (!isClient) {
    return null;
  };

  function Layout() {
    return (
      <div>
        <TaskProvider>
          <NavBar />
          <main>
            <Outlet />
          </main>
        </TaskProvider>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <News /> },
        { path: "/new-task", element: <NewTask /> },
        { path: "/task/:id", element: <DetalleTask /> },
      ]
    }
  ]);

  return (<RouterProvider router={router} />);
}
