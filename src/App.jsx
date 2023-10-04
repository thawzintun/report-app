import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import { action as formAction } from "./components/ReportForm";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        action: formAction,
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
