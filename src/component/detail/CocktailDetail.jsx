import React, { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./CocktailDetail.scss";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  faBottleDroplet,
  faLeaf,
  faLemon,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDetailCocktail } from "../../service/detailService";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { toast } from "react-toastify";

const CocktailDetail = () => {
  let location = useLocation();

  const [detail, setDetail] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const fetchDetailDataCocktail = async () => {
    try {
      let res = null;
      res = await getDetailCocktail(location.state.item.idDrink);
      setDetail(res.data.drinks);
    } catch (error) {}
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(
      {...item, quantity: 1}
    ));
  }

  useEffect(() => {
    fetchDetailDataCocktail();
  })

  return (
    <>
    {detail && detail.map((item, index) => {
      return (
        <div className="detail-container">
      <div className="row detail-main">
        <div className="col-4 img-box">
          <img
            src={item.strDrinkThumb}
            alt=""
          />

          <p>
            "{item.strInstructions.slice(0,150)}..."
            <br/>
            <br/>
            <ArrowBackIcon className="home-btn" onClick={() => navigate("/shop")}/>
          </p>
          
        </div>

        <div className="col-8 info-box">
          <div className="row info-background">
            <div className="col-5 info-descrip">
              <h1 className="detail-strDrink">{item.strDrink}</h1>
              <h2 className="detail-strIBA">{item.strIBA}</h2>
              <div>----</div>
              <div className="category category-a">
                <p className="category-name">Category</p>
                <p className="detail-category strCategory">{item.strCategory}</p>
              </div>
              <div className="category category-type">
                <p className="category-name">Type</p>
                <p className="detail-category strAlcoholic">{item.strAlcoholic}</p>
              </div>
              <button onClick={() => handleAddToCart(item)}>
                <FavoriteIcon /> Add to cart
              </button>
            </div>
            <div className="col-7 info-ingredient">
              <div className="ingredient-box">
                <div className="box-icon">
                  <FontAwesomeIcon
                    className="ingre-icon"
                    icon={faBottleDroplet}
                  />
                </div>
                <div className="ingredient-info">
                  <h2 className="ingredient-name">{item.strIngredient1}</h2>
                  <p className="ingredient-measure">{item.strMeasure1}</p>
                </div>
              </div>

              <div className="ingredient-box">
                <div className="box-icon">
                  <FontAwesomeIcon className="ingre-icon" icon={faLeaf} />
                </div>
                <div className="ingredient-info">
                  <h2 className="ingredient-name">{item.strIngredient2}</h2>
                  <p className="ingredient-measure">{item.strMeasure2}</p>
                </div>
              </div>

              <div className="ingredient-box">
                <div className="box-icon">
                  <FontAwesomeIcon className="ingre-icon" icon={faLemon} />
                </div>

                <div className="ingredient-info">
                  <h2 className="ingredient-name">{item.strIngredient3}</h2>
                  <p className="ingredient-measure">{item.strMeasure3}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      )
    })}
    </>
  );
};

export default CocktailDetail;
