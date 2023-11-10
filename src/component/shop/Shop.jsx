import { Paper } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import "./Shop.scss";

import React, { useState } from "react";
import SearchBar from "./search/SearchBar";
import SearchResult from "./search/SearchResult";
import Filter from "./filter/Filter";
import { useNavigate } from "react-router-dom";



const Shop = () => {
    const [result, setResult] = useState("");
    const [filterValue, setFilterValue] = useState("");
    const [filterType, setFilterType] = useState("");

    const navigate = useNavigate();

    return(
        <div className="shop-container">
            <Paper className="row shop-main">
                <div className="col-3 shop-sidebar">
                    <SearchBar setData={setResult} filterValue={filterValue} filterType={filterType}/>
                    <div className="filter-sidebar">
                        <Filter setFilterValue={setFilterValue} setFilterType={setFilterType}/>
                        <ArrowBackIcon className="home-btn" onClick={() => navigate("/")}/>
                    </div>
                </div>
                <div className="col-9 shop-body">
                <SearchResult result={result}/>
                </div>
            </Paper>
        </div>
    )
}

export default Shop;