import React from "react";

import mealsImages from '../../assets/meals.jpeg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImages} alt='table full of deliciouse food!'/>
            </div>
        </React.Fragment>
    )
};

export default Header