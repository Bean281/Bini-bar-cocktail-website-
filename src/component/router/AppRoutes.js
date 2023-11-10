import Cart from "../cart/Cart";
import CocktailDetail from "../detail/CocktailDetail";
import Home from "../home/Home";
import Shop from "../shop/Shop";




const AppRoutes = [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/shop",
        element: <Shop/>
    },
    {
        path: "/detail",
        element: <CocktailDetail/>
    },
    {
        path: "/cart",
        element: <Cart/>
    }
]

export default AppRoutes;