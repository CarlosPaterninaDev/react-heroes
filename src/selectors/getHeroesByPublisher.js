import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  console.log(publisher)
  const validPublisher = ["DC Comics", "Marvel Comics", ""];

  if (!validPublisher.includes(publisher)) {
    throw new Error("No valid publisher");
  }



  return heroes.filter((hero) => hero.publisher === publisher);
};
