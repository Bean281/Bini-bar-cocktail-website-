import axios from "axios";

const getDetailCocktail = async (cocktailID) => {
    return await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailID}`);
}

export {getDetailCocktail};