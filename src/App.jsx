import "./App.css";
import ToDo from "./components/ToDo";
import Notes from "./components/Notes";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <ToDo />
        </>
      ),
    },
    {
      path: "/notes",
      element: (
        <>
          <Navbar />
          <Notes />
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
