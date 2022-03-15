import React, { useMemo } from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import "./hero.css";
import { motion, AnimatePresence } from "framer-motion";
import { HeroGrid } from "./HeroGrid";

export const HeroList = ({ publisher }) => {
  console.log(publisher);
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
      <h1 className="hero__title">Hero List</h1>
      <AnimatePresence>
        <HeroGrid heroes={heroes} />
      </AnimatePresence>
    </motion.div>
  );
};
