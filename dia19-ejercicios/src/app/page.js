'use client';
import { useEffect, useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";

import NavBar from '../components/ej1';
import UserProfile from "../components/ej2";
import PostJson from "../components/ej4";
import ErrorComp from "../components/ej5";

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
        { path: "/about", element: <About /> },
        { path: "/user/:id", element: <UserProfile /> },
        {
          path: "/post/:id",
          element: <PostJson />,
          loader: async ({ params }) => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
            if (!res.ok) throw new Response("Post no encontrado", { status: 404 });
            return res.json();
          },
          errorElement: <ErrorComp />
        },
      ]
    }
  ]);

  return (<RouterProvider router={router} />);
}
