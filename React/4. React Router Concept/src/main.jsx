import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/Root/Root.jsx";
import Mobiles from "./components/Mobiles/Mobiles.jsx";
import Home from "./components/Home/Home.jsx";
import Laptops from "./components/Laptops/Laptops.jsx";
import User1 from "./components/User1/User1.jsx";
import User2 from "./components/User2/User2.jsx";
import Users from "./components/Users/Users.jsx";
import UserDetails from "./components/Users/UserDetails.jsx";
import PostDetail from "./components/Posts/PostDetail.jsx";
import Posts from "./components/Posts/Posts.jsx";


const userPromise = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobiles },
      { path: "laptops", Component: Laptops },
      {
        path: "user1",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: User1,
      },
      {
        path: "user2",
        element: (
          <Suspense fallback="...Loading">
            <User2 userPromise={userPromise}></User2>
          </Suspense>
        ),
      },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      {
        path: "users/:userId",
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`), //params refers to route parameters
        Component: UserDetails,
      },
      {
        path: "posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        Component: Posts,
      },
      {
        path:"posts/:postId",
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetail,
      },
      {
        path: "*",
        element: <h3>Not Found!</h3>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
