import React from "react";

export default function CreateBrowserRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Haberler />,
      children: [
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
          loader: ({ request }) =>
            fetch("/api/dashboard.json", {
              signal: request.signal,
            }),
        },
        {
          element: <AuthLayout />,
          children: [
            {
              path: "login",
              element: <Login />,
              loader: redirectIfUser,
            },
            {
              path: "logout",
              action: logoutUser,
            },
          ],
        },
      ],
    },
  ]);

  return {router};
}
