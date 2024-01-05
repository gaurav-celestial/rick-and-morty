import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./components/HomePage";
import Error from "./components/Error";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="characters" />,
    errorElement: <Error />,
  },
  { path: "characters", element: <HomePage variant="character" /> },
  { path: "locations", element: <HomePage variant="location" /> },
  { path: "episodes", element: <HomePage variant="episode" /> },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
