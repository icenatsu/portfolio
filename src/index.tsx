import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import "../src/sass/index.scss";
import ThemeContextProvider from './ThemeContext/ThemeContext'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(

  // <React.StrictMode>
  <ThemeContextProvider>
    <RouterProvider router={router} />
  </ThemeContextProvider>
  // </React.StrictMode>
);
