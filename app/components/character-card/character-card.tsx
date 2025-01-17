import type { CharacterResult } from "~/models/Characters";

type CharacterCardProps = {
  character: CharacterResult;
};

export const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <article className="border border-white/20 rounded-lg pt-6 pb-8 px-12">
      <h2 className="font-semibold text-2xl">{character.name}</h2>
      <p className="text-white text-xl font-semibold mt-6">Details</p>
      <hr className="my-2" />
      <div className="grid grid-cols-2 gap-2">
        <div>
          <span className="text-sm text-white/20">Gender</span>
          <p className="text-white text-base">{character.gender}</p>
        </div>
        <div>
          <span className="text-sm text-white/20">Skin Color</span>
          <p className="text-white text-base">{character.skin_color}</p>
        </div>
        <div>
          <span className="text-sm text-white/20">Hair Color</span>
          <p className="text-white text-base">{character.hair_color}</p>
        </div>
        <div>
          <span className="text-sm text-white/20">Mass</span>
          <p className="text-white text-base">{character.mass}</p>
        </div>
        <div>
          <span className="text-sm text-white/20">Height</span>
          <p className="text-white text-base">{character.height}</p>
        </div>
        <div>
          <span className="text-sm text-white/20">Birth Year</span>
          <p className="text-white text-base">{character.birth_year}</p>
        </div>
      </div>
      <p className="text-white text-xl font-semibold mt-6">Additional Info</p>
      <hr className="my-2" />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <span className="text-sm text-white/20">Films</span>
          <p className="text-white text-base">{character.films.length}</p>
        </div>
        <div>
          <span className="text-sm text-white/20">Species</span>
          <p className="text-white text-base">{character.species.length}</p>
        </div>
        <div>
          <span className="text-sm text-white/20">Vehicles</span>
          <p className="text-white text-base">{character.vehicles.length}</p>
        </div>
        <div>
          <span className="text-sm text-white/20">Starships</span>
          <p className="text-white text-base">{character.starships.length}</p>
        </div>
      </div>
    </article>
  );
};
