import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroesById } from "../../selectors/getHeroById";

import { motion } from "framer-motion";
import { imagesHeroPath } from "../../helpers/imageHero";


export const HeroScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const hero = useMemo(
    () => getHeroesById(id),

    [id]
  );

  if (!hero) {
    return <Navigate to="/" />;
  }

  const handleReturn = () => {
    navigate(-1);
  };

  const { alter_ego, superhero, characters, first_appearance, publisher } =
    hero;

  // const imagaPath = `/assets/${id}.jpg`;
  const imagaPath = `./${id}.jpg`;

  return (
    <motion.div
      layout
      animate={{ x: 0 }}
      initial={{ x: 100 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className="hero-screen"
    >
      <div className="hero-screen__card">
        <img
          className="card__img"
          src={imagesHeroPath(imagaPath)}
          alt={superhero}
        />
      </div>

      <div className="hero-screen__info">
        <p className="hero-screen__alter">{superhero}</p>

        <div className="hero-screen__detail">
          <h1>{alter_ego}</h1>
          <p className="label">
            First Appearence: <span className="value">{first_appearance}</span>
          </p>
          <p className="label">
            Publisher: <span className="value">{publisher}</span>
          </p>

          <p className="label">
            Characters:
            <span className="value"> {characters}</span>
          </p>
        </div>

        <p className="back" onClick={handleReturn}>
          BACK
        </p>
      </div>
    </motion.div>
  );
};
