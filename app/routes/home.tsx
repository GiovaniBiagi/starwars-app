import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Star Wars Research App" },
    { name: "description", content: "Welcome to Star Wars Wolrd!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
