import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Promociones } from "./pages/Promociones";
import { Sucursales } from "./pages/Sucursales";
import { Yaya } from "./pages/Yaya";
import { Facturacion } from "./pages/Facturacion";
import { Servicios } from "./pages/Servicios";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "promociones", Component: Promociones },
      { path: "promociones/:category", Component: Promociones },
      { path: "sucursales", Component: Sucursales },
      { path: "sucursales/:city", Component: Sucursales },
      { path: "yaya", Component: Yaya },
      { path: "facturacion", Component: Facturacion },
      { path: "servicios", Component: Servicios },
      { path: "servicios/:category", Component: Servicios },
      { path: "*", Component: Home },
    ],
  },
]);