import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { FootwearPage } from "./pages/FootwearPage";
import { ProductPage } from "./pages/ProductPage";
import { OemPage } from "./pages/OemPage";
import { DefencePage } from "./pages/DefencePage";
import { PlantPage } from "./pages/PlantPage";
import { AboutPage } from "./pages/AboutPage";
import { StandardsPage } from "./pages/StandardsPage";
import { ContactPage } from "./pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "range", element: <FootwearPage /> },
      { path: "range/:id", element: <ProductPage /> },
      { path: "footwear", element: <Navigate to="/range" replace /> },
      { path: "footwear/:id", element: <ProductPage /> },
      { path: "oem", element: <OemPage /> },
      { path: "defence", element: <DefencePage /> },
      { path: "plant", element: <PlantPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "standards", element: <StandardsPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
