import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NavBar from "./ej1";
import UserProfile from "./ej2";
import PostJson from "./ej4";
import ErrorComp from "./ej5";

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

function Router() {
    return <RouterProvider router={router} />
}

export default Router;