// import React, { useState } from "react";
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import "./SearchResult.scss";

// const SearchResult = (props) => {
//   const [favor, setFavor] = useState(false);

//   console.log(props.result);
//   const handleSetFavour = () => {
//       setFavor(!favor);
//   }
  

//   return (
//     <div className="abc">
//       {props.result ? (
//         props.result.map((item, id) => (
          
//             <div className="card-box">
//               <div className="card-container">
//                 <div className="card-image">
//                   <img src={item.strDrinkThumb} alt={item.strDrink} />
//                 </div>
//                 <div className="card-info">
//                   {item.strDrink}
//                   {item.idDrink}
//                   <FavoriteIcon onClick={handleSetFavour} data-id={item.idDrink} className={`heart-icon-${favor ? "on" : "off"}`}/>
//                   </div>
                

//               </div>
//             </div>
          
//         ))
//       ) : (
//         <div></div>
//       )}
//     </div>
//   );
// };

// export default SearchResult;


// import React, { useEffect, useState } from "react";
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import "./SearchResult.scss";

// const SearchResult = (props) => {
//   const [favoriteState, setFavoriteState] = useState({});

//   const handleSetFavour = (idDrink) => {  
//     // Create a copy of the favoriteState object
//     console.log("abc", favoriteState);
//     const newFavoriteState = { ...favoriteState };
//     // Toggle the favorite state for the clicked item using its idDrink
//     newFavoriteState[idDrink] = !newFavoriteState[idDrink];
//     console.log(newFavoriteState[idDrink]);
//     // Update the state with the new object
//     setFavoriteState(newFavoriteState);
//   }

//   // useEffect(() => {
//   //   localStorage.setItem('favList', JSON.stringify(favoriteState));
//   // }, [favoriteState]);

//   // useEffect(() => {
//   //   const items = JSON.parse(localStorage.getItem('favList'));
//   //   if (items) {
//   //     setFavoriteState(items);
//   //   }
//   // },[]);

//     // Use useEffect to save favoriteState to localStorage when it changes
//     useEffect(() => {
//       localStorage.setItem('favList', JSON.stringify(favoriteState));
//     }, [favoriteState]);
  
//     // Use another useEffect to load data from localStorage when the component mounts
//     useEffect(() => {
//       const storedData = localStorage.getItem('favList');
//       if (storedData) {
//         setFavoriteState(JSON.parse(storedData));
//       }
//     }, []);

//   return (
//     <div className="abc">
//       {props.result ? (
//         props.result.map((item) => (
//           <div className="card-box" key={item.idDrink}>
//             <div className="card-container">
//               <div className="card-image">
//                 <img src={item.strDrinkThumb} alt={item.strDrink} />
//               </div>
//               <div className="card-info">
//                 {item.strDrink}
//                 {item.idDrink}
//                 <FavoriteIcon
//                   onClick={() => handleSetFavour(item.idDrink)}
                  
//                   className={`heart-icon-${favoriteState[item.idDrink] ? "on" : "off"}`}
//                 />
//               </div>
//             </div>
//           </div>
//         ))
//       ) : (
//         <div></div>
//       )}
//     </div>
//   );
// };

// export default SearchResult;


import React, { useEffect, useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./SearchResult.scss";
import { useNavigate } from "react-router-dom";

const SearchResult = (props) => {
  const [favoriteState, setFavoriteState] = useState({});

  const handleSetFavour = (idDrink) => {
    const newFavoriteState = { ...favoriteState };
    newFavoriteState[idDrink] = !newFavoriteState[idDrink];
    setFavoriteState(newFavoriteState);
    localStorage.setItem('favList', JSON.stringify(newFavoriteState));
  }

 console.log("result", props.result);
    
 const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem('favList');
    if (storedData) {
      setFavoriteState(JSON.parse(storedData));
    }
  }, []);

  return (
    <div className="abc">
      {props.result ? (
        props.result.map((item) => (
          <div className="card-box" key={item.idDrink}>
            <div className="card-container" >
              <div className="card-image" onClick={() => navigate("/detail", { state: {item} })}>
                <img src={item.strDrinkThumb} alt={item.strDrink} />
              </div>
              <div className="card-info">
                {item.strDrink}
                <FavoriteIcon
                  onClick={() => handleSetFavour(item.idDrink)}
                  className={`heart-icon-${favoriteState[item.idDrink] ? "on" : "off"}`}
                />
              </div>
            </div>
          </div>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default SearchResult;
