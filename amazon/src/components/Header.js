import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
function Header() {
    return (
        <nav className="header">
            {/* logo on the left */}
            <Link to="/">
                <img className="header__logo" 
                src="https://1079life.com/wp-content/uploads/2018/12/amazon_PNG11.png" 
                alt="amazon"
                />
            </Link>

            {/* search bar */}
            <div className="header__search">
                <input type="text" className="header__searchInput"/> 
                <SearchIcon className="header__searchIcon" />
            </div>


            {/* 3 links */}
            <div className="header__nav">
                {/* 1st Link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello Pranay</span>
                        <span className="header__optionLineTwo" >Sign In</span>
                    </div>
                </Link>
                {/* 2nd Link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                {/* 3rd Link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span  className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                {/* 4 th Link */}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        {/* shopping basket icon */}
                        <ShoppingBasketIcon />
                        {/* Number of items in the basket */}
                        <span className="header__optionLineTwo header__basketCount">0</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
