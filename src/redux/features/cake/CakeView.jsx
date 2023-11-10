import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ordered, restocked } from './cakeSlice';

const CakeView = () => {

    const numOfCake = useSelector((state) => state.cake.numofCakes)
    const dispatch = useDispatch();

  return (
    <div>
        <h2>Number of cakes - {numOfCake}</h2>
        <button onClick={() => dispatch(ordered())}>Order cake</button>
        <button onClick={() => dispatch(restocked(3))}>Restock cakes</button>
    </div>
  )
}

export default CakeView;