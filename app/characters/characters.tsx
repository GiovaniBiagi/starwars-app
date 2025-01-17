import _ from "lodash";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLoaderData, useNavigate, useSearchParams } from "react-router";
import { CharacterCard } from "~/components/character-card/character-card";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "~/components/ui/pagination";
import { cn } from "~/lib/utils";
import type { Character } from "~/models/Characters";

type CharactersProps = {
  characters: Character;
};

export const CharactersPage = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const navigate = useNavigate();
  const { characters } = useLoaderData<CharactersProps>();

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
  const params = new URLSearchParams(searchParam);
  const currentPage = Number(params.get("page") || "1");

  const handlePreviousPage = () => {
    const previousPage = String(currentPage - 1);
    params.set("page", previousPage);

    setSearchParam(params);
    navigate({ search: params.toString() });
  };

  const handleNextPage = () => {
    const nextPage = String(currentPage + 1);
    params.set("page", nextPage);

    setSearchParam(params);
    navigate({ search: params.toString() });
  };

  const handleNavigateToPage = (page: number) => {
    params.set("page", String(page));

    setSearchParam(params);
    navigate({ search: params.toString() });
  };

  const totalPages = () => {
    return Math.ceil(characters.count / 10);
  };

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
        {characters.results.map((character) => (
          <li key={character.name}>
            <CharacterCard character={character} />
          </li>
        ))}
      </ul>
      <Pagination className="my-4">
        <PaginationContent>
          <PaginationItem>
            <Button
              variant="ghost"
              onClick={handlePreviousPage}
              disabled={!characters.previous}
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
          </PaginationItem>
          {Array.from({
            length: totalPages(),
          }).map((_, index) => (
            <PaginationItem>
              <Button
                variant="ghost"
                onClick={() => handleNavigateToPage(index + 1)}
                className={cn({
                  "bg-accent text-accent-foreground": currentPage === index + 1,
                })}
              >
                {index + 1}
              </Button>
            </PaginationItem>
          ))}
          <PaginationItem>
            <Button
              variant="ghost"
              onClick={handleNextPage}
              disabled={!characters.next}
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
};
