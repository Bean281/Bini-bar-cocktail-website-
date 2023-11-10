import axios from "axios";

const filterCocktail = async (filterType, filterValue) => {
    return await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?${filterType}=${filterValue}`)
}

export {filterCocktail};