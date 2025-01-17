import { api } from "~/lib/http/api";
import type { Route } from "./+types/home";
import type { Character } from "~/models/Characters";
import { CharactersPage } from "~/characters/characters";

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const q = encodeURIComponent(url.searchParams.get("q") || "");
  const page = url.searchParams.get("page");

  const params = new URLSearchParams({
    search: q,
    ...(page ? { page } : {}),
  });

  const characters = await api<Character>(`people?${params}`);

  return { characters };
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Star Wars characters" },
    { name: "description", content: "Welcome to Star Wars characters page" },
  ];
}

export default function Characters() {
  return <CharactersPage />;
}
