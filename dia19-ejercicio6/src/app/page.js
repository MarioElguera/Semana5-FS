'use client';
import { useEffect, useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import NavBar from "../components/navBar";

import Home from "../components/home";
import News from "../components/news";
import NewsDetail from "../components/newsDetail";

import ErrorPage from "../components/error";


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
        <NavBar />
        <main>
          <Outlet />
        </main>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/news", element: <News /> },
        { path: "/news/:id", element: <NewsDetail /> },
      ]
    }
  ]);

  return (<RouterProvider router={router} />);
}
