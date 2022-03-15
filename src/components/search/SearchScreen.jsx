import { useMemo } from "react";

import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroGrid } from "../hero/HeroGrid";

import { getHeroesFilter } from "../../selectors/getHeroFilter";

import { motion } from "framer-motion";
import queryString from "query-string";
import "./search.css";

export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const [state, handleInputChange] = useForm({
    searchText: q,
  });


  console.log(q);

  const { searchText } = state;

  const heroes = useMemo(() => getHeroesFilter(searchText), [searchText]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          type="text"
          autoComplete="of"
          placeholder="Search your hero... dc or marvel... alter ego name... kal-el...  Tony Stark...  Bruce Wayne..."
          className="search-input"
          name="searchText"
          value={searchText}
        />
      </form>

      {heroes.length ? (
        <HeroGrid heroes={heroes} />
      ) : (
        <motion.p animate={{ x: 100 }} className="no-found heroes">
          {" "}
          No found
        </motion.p>
      )}
    </>
  );
};
