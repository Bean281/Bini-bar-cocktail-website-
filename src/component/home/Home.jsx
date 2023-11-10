import React from "react";
import "./Home.scss";
import { Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CakeView from "../../redux/features/cake/CakeView";
import IcecreamView from "../../redux/features/icecream/IcecreamView";
import UserView from "../../redux/features/user/UserView";

const Home = () => {
    
    const navigate = useNavigate();



    return(
        <div className="home-container">
            <Paper className="home-main">
                <div className="home-header">
                    <h1 className="home-logo">BeanNguyen.</h1>
                    <div className="home-nav">
                        <p>Home</p>
                        <p onClick={() => navigate("/shop")}>Shop</p>
                        <p>Explore</p>
                        <p onClick={() => navigate("/cart")}>My Cart</p>
                    </div>
                </div>
                <div className="home-body">
                    <div className="body-info">
                    <h2 className="slogan">Bring the bar</h2>
                    <h2><b>Home.</b></h2>
                    <p>Delivering all the complexity and craftsmanship you would find at your favourite bar. Made with highest quality ingredients, natural flavours and sugar.</p>
                    <div className="home-button-disco">Discover Now</div>
                    </div>
                    <div className="home-image">
                        <img src="" alt="" />
                    </div>
                    
                </div>

               
            </Paper>
        </div>
    )
}

export default Home;