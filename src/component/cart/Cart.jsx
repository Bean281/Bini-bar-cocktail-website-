import React, { useState } from "react";
import "./Cart.scss";
import {
    Button,
    ButtonGroup,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity, removeItem } from "../../redux/features/cart/cartSlice";

const Cart = () => {

  const [quantity, setQuantity] = useState([]);

  const cartItems = useSelector((state) => state.cart.cart);
  console.log("cart new", cartItems);

  const dispatch = useDispatch();
  const handleAdd = (item) => {
    dispatch(increaseItemQuantity(item));
  }

  const handleDes = (item) => {
    dispatch(decreaseItemQuantity(item));
  }
  

  return (
    <div className="cart-container">
      <Paper className="cart-main">
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Drink</TableCell>
                <TableCell align="center">Category</TableCell>
                <TableCell align="center">Glass</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItems.map ((item, index) => {
                const itemQuantity = quantity[index] || 1;
                return (
                  <TableRow
                key={item.idDrink}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell className="cell-name">
                  <img
                    src={item.strDrinkThumb}
                    alt=""
                  />
                  {item.strDrink}
                </TableCell>
                <TableCell align="center">{item.strCategory}</TableCell>
                <TableCell align="center">{item.strGlass}</TableCell>
                <TableCell align="center">
                  <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                  >
                    <Button className="btn-des" onClick={() => {handleDes(item)}}>-</Button>
                    {/* <Button className="btn-box">{item.quantity}</Button> */}
                    <input className="btn-input" type="text" value={item.quantity} />
                    <Button className="btn-incs" onClick={() => {handleAdd(item)}}>+</Button>
                  </ButtonGroup>
                </TableCell>
                <TableCell align="center">
                  <DeleteIcon onClick={() => {dispatch(removeItem(item))}} />
                </TableCell>
              </TableRow>
                )
              })}
              
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default Cart;
