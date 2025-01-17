import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("films", "routes/films.tsx"),
  route("characters", "routes/characters.tsx"),
] satisfies RouteConfig;
