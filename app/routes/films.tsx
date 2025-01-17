import { api } from "~/lib/http/api";
import type { Route } from "./+types/home";
import type { Film } from "~/models/Films";
import { FilmsPage } from "~/films/films";

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const q = encodeURIComponent(url.searchParams.get("q") || "");

  const films = await api<Film>(q ? `films?search=${q}` : "films");

  return { films: films.results };
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Star Wars films" },
    { name: "description", content: "Welcome to Star Wars films page" },
  ];
}

export default function Films() {
  return <FilmsPage />;
}
