import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { imagesHeroPath } from "../../helpers/imageHero";


export const HeroCard = ({ id, superhero, alter_ego }) => {
  // const imagaPath = `/assets/${id}.jpg`;
  const imagaPath = `./${id}.jpg`;

  return (
    <Link to={`/hero/${id}`}>
      <motion.div
        layout
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        className="card__hero"
      >
        <img
          className="card__img"
          src={imagesHeroPath(imagaPath)}
          alt={superhero}
        />
        <div className="card__hero-wrapper">
          <div className="card__hero-name">{alter_ego}</div>
        </div>

        <p className="card__hero-alter">{superhero}</p>
      </motion.div>
    </Link>
  );
};
