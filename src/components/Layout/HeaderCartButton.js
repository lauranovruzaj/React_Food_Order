import React from "react";
import CartIcon from "../Cart/CartIcon";

import classes from './HeaderCartButton.module.css'

import {  useSelector } from "react-redux";

const HeaderCartButton = (props) => {

    const items = useSelector((state) => state.cart.items);

    const numberOfCartItem = items.reduce((curNumb, item) => {
        return curNumb + item.amount;
    }, 0);

    return (<button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItem}</span>
    </button>)
}

export default HeaderCartButton;