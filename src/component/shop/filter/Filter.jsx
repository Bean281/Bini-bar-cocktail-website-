import React, { useEffect, useState } from "react";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import {
  listAlcoholic,
  listCategories,
  listGlasses,
  listIngredients,
} from "../../../service/listService";

import "./Filter.scss";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

// function getStyles(name, itemGlass, theme) {
//   return {
//     fontWeight:
//     itemGlass.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

const Filter = (props) => {
  const theme = useTheme();
  const [itemGlass, setItemGlass] = React.useState([]);
  const [itemCategory, setItemCategory] = React.useState([]);
  const [itemAlcoholic, setItemAlcoholic] = React.useState([]);
  const [itemIngredient, setItemIngredient] = React.useState([]);

  const [glasses, setGlasses] = useState({});
  const [categories, setCategories] = useState({});
  const [alcoholics, setAlcoholics] = useState({});
  const [ingredients, setIngredients] = useState({});

  // if (itemGlass) {
  //   props.setFilterValue(itemGlass);
  // } else if (itemAlcoholic) {
  //   props.setFilterValue(itemAlcoholic);
  // } else if (itemCategory) {
  //   props.setFilterValue(itemCategory);
  // } else if (itemIngredient) {
  //   props.setFilterValue(itemIngredient);
  // }
  

  // const handleChangeGlasses = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setItemGlass(
  //     // On autofill we get a stringified value.
  //     typeof value === "string" ? value.split(",") : value
  //   )
  //   props.setFilterValue(itemGlass);

  // }

  const handleChangeGlasses = (event) => {
    const {
      target: { value },
    } = event;
  
    const updatedItemGlass =
      typeof value === "string" ? value.split(",") : value;
  
    setItemGlass(updatedItemGlass);
  
    props.setFilterValue(updatedItemGlass);
    props.setFilterType("g");
  };

  const handleChangeCategory = (event) => {
    const {
      target: { value },
    } = event;

    const updatedItemCategory = 
      typeof value === "string" ? value.split(",") : value;
    setItemCategory(updatedItemCategory)
    props.setFilterValue(updatedItemCategory);
    props.setFilterType("c");
  };

  const handleChangeIngredient = (event) => {
    const {
      target: { value },
    } = event;
    const updatedIngredient = typeof value === "string" ? value.split(",") : value;
    setItemIngredient(updatedIngredient);
    props.setFilterValue(updatedIngredient);
    props.setFilterType("i");
  };

  const handleChangeAlcoholic = (event) => {
    const {
      target: { value },
    } = event;
    const updatedItemAlcoholic = typeof value === "string" ? value.split(",") : value;
    setItemAlcoholic(updatedItemAlcoholic);
    props.setFilterValue(updatedItemAlcoholic);
    props.setFilterType("a");
  };

  const fetchGlassesList = async () => {
    let res = null;
    res = await listGlasses();
    setGlasses(res.data.drinks);
  };

  const fetchCategoriesList = async () => {
    let res = null;
    res = await listCategories();
    setCategories(res.data.drinks);
  };

  const fetchAlcoholicsList = async () => {
    let res = null;
    res = await listAlcoholic();
    setAlcoholics(res.data.drinks);
  };

  const fetchIngredientsList = async () => {
    let res = null;
    res = await listIngredients();
    setIngredients(res.data.drinks);
  };

  useEffect(() => {
    fetchGlassesList();
    fetchCategoriesList();
    fetchAlcoholicsList();
    fetchIngredientsList();
  }, []);

  return (
    <div>
      Filter by:
      <div className="filter-box">
        <p className="filter-title">Glass:</p>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-chip-label">Glass</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={itemGlass}
            onChange={handleChangeGlasses}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {glasses &&
              Array.isArray(glasses) &&
              glasses.map((name) => (
                <MenuItem
                  key={name.strGlass}
                  value={name.strGlass}
                  // style={getStyles(name, itemGlass, theme)}
                >
                  {name.strGlass}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </div>
      <div className="filter-box">
        <p className="filter-title">Category:</p>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-chip-label">Category</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={itemCategory}
            onChange={handleChangeCategory}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {categories &&
              Array.isArray(categories) &&
              categories.map((name) => (
                <MenuItem
                  key={name.strCategory}
                  value={name.strCategory}
                  // style={getStyles(name, itemCategory, theme)}
                >
                  {name.strCategory}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </div>
      <div className="filter-box">
        <p className="filter-title">Ingredient:</p>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-chip-label">Ingredient</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={itemIngredient}
            onChange={handleChangeIngredient}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {ingredients &&
              Array.isArray(ingredients) &&
              ingredients.map((name) => (
                <MenuItem
                  key={name.strIngredient1}
                  value={name.strIngredient1}
                  // style={getStyles(name, itemAlcoholic, theme)}
                >
                  {name.strIngredient1}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </div>
      <div className="filter-box">
        <p className="filter-title">Alcoholic:</p>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-chip-label">Alcoholic</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={itemAlcoholic}
            onChange={handleChangeAlcoholic}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {alcoholics &&
              Array.isArray(alcoholics) &&
              alcoholics.map((name) => (
                <MenuItem
                  key={name.strAlcoholic}
                  value={name.strAlcoholic}
                  // style={getStyles(name, setItemIngredient, theme)}
                >
                  {name.strAlcoholic}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default Filter;
