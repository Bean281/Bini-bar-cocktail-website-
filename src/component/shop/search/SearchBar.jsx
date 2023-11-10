import React, { useEffect, useState } from "react";
import "./SearchBar.scss";
import SearchIcon from "@mui/icons-material/Search";
import {
  searchCocktailByIngredient,
  searchCocktailByName,
} from "../../../service/searchService";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { filterCocktail, filterCocktailByAlcoholic, filterCocktailByCategory, filterCocktailByGlass, filterCocktailByIngredient } from "../../../service/filterService";

const SearchBar = (props) => {
  const [input, setInput] = useState("");
  const [option, setOption] = React.useState("name");

  const handleChangeOption = (event) => {
    setOption(event.target.value);
  };

  console.log("filter value", props.filterValue);

  const fetchInfoSearchByName = async (value) => {
    try {
      let res = null;

      res = await searchCocktailByName(value);
      props.setData(res.data.drinks);
    } catch (error) {
      console.error("An error", error);
    }
  };

  const fetchInfoSearchByIngredient = async (value) => {
    try {
      let res = null;
      res = await searchCocktailByIngredient(value);
      props.setData(res.data.drinks);
    } catch (error) {}
  };


  const fetchInfoFilter = async (filterType, filterValue) => {
    try {
      let res = null;
      res = await filterCocktail(filterType, filterValue);
      props.setData(res.data.drinks);
    } catch (error) {
      
    }
  }

  const handleSearch = () => {
    if (option === "name") {
      fetchInfoSearchByName(input);
    } else if (option === "ingredient") {
      fetchInfoSearchByIngredient(input);
    }
  };

  useEffect(() => {
    fetchInfoFilter(props.filterType, props.filterValue);
  }, [props.filterValue]);

  return (
    <>
      <div className="search-bar-container">
        <input
          type="text"
          value={input}
          placeholder="Type to search..."
          onChange={(e) => setInput(e.target.value)}
        />
        <SearchIcon className="search-icon" onClick={handleSearch} />
      </div>
      <div className="search-bar-option">
        <FormControl>
          <div>Search by:</div>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={option}
            onChange={handleChangeOption}
          >
            <FormControlLabel value="name" control={<Radio />} label="Name" />
            <FormControlLabel
              className="button"
              value="ingredient"
              control={<Radio />}
              label="Ingredient"
            />
          </RadioGroup>
        </FormControl>
      </div>
    </>
  );
};

export default SearchBar;
