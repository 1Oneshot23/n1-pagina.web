import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
                index("routes/HomePage.tsx"),
                route("products", "routes/ProductsPage.tsx"),
                route("about", "routes/AboutPage.tsx"),
] satisfies RouteConfig;
