import _ from "lodash";
import { useNavigate } from "react-router";
import { useLoaderData, useSearchParams } from "react-router";
import { FilmCard } from "~/components/film-card/film-card";
import { Input } from "~/components/ui/input";
import type { FilmResult } from "~/models/Films";

type FilmsProps = {
  films: FilmResult[];
};

export const FilmsPage = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const navigate = useNavigate();
  const { films } = useLoaderData<FilmsProps>();

  const handleInputChange = _.debounce(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      const params = new URLSearchParams();
      params.set("q", value);

      if (value) {
        setSearchParam(params);
      } else {
        params.delete("q");
      }

      navigate({ search: params.toString() });
    },
    300
  );

  return (
    <section className="p-4 mt-16">
      <Input
        type="search"
        placeholder="Search"
        className="mb-4"
        onChange={handleInputChange}
        defaultValue={searchParam.get("q")?.toString()}
      />
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {films
          .sort((a, b) => a.episode_id - b.episode_id)
          .map((film) => (
            <li key={film.episode_id}>
              <FilmCard film={film} />
            </li>
          ))}
      </ul>
    </section>
  );
};
