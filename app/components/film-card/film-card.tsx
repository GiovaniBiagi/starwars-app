import type { FilmResult } from "~/models/Films";

type FilmCardProps = {
  film: FilmResult;
};

export const FilmCard = ({ film }: FilmCardProps) => (
  <article className="p-6 border border-white/20 rounded-lg relative h-full">
    <p className="lg:text-[140px] text-[200px] text-white/10 absolute lg:right-8 bottom-4 right-4 pointer-events-none font-bold">
      {film.episode_id}
    </p>
    <h2 className="text-white text-xl font-bold">{film.title}</h2>
    <p className="text-white/60 line-clamp-[7] mt-4">{film.opening_crawl}</p>
    <div className="flex justify-between mt-4">
      <p>Director: {film.director}</p>
      <p>{new Date(film.release_date).toDateString()}</p>
    </div>
  </article>
);
