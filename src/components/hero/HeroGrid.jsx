import "./hero.css";
import { HeroCard } from "./HeroCard";
import { motion } from "framer-motion";

export const HeroGrid = ({ heroes }) => {
  return (
    <motion.div
      layout
      className="grid-heroes"
    >
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </motion.div>
  );
};
