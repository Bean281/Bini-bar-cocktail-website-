import axios from "axios";

const searchCocktailByName = async (searchvalue) => {
    return await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchvalue}`);
}

const searchCocktailByIngredient = async (searchValue) => {
    return await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchValue}`);
}

export {searchCocktailByName, searchCocktailByIngredient};