import { heroes } from "../data/heroes";

export const getHeroesFilter = (superhero) => {
  superhero = superhero.toLocaleLowerCase();

  console.log("llamado")

  return superhero
    ? heroes.filter(
        (hero) =>
          hero.superhero.toLocaleLowerCase().indexOf(superhero) !== -1 ||
          hero.alter_ego.toLocaleLowerCase().indexOf(superhero) !== -1 ||
          hero.characters.toLocaleLowerCase().indexOf(superhero) !== -1 ||
          hero.publisher.toLocaleLowerCase().indexOf(superhero) !== -1
      )
    : heroes;
};
