import axios from "axios";

const listCategories = async () => {
    return await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`);
}

const listGlasses = async () => {
    return await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list`);
}

const listIngredients = async () => {
    return await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`);
}

const listAlcoholic = async () => {
    return await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list`);
}

export {listAlcoholic, listCategories, listGlasses, listIngredients};